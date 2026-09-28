import React, { SetStateAction, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAdmin } from 'store/store'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker } from 'molecules/inputs'
import { defaultCardAction } from 'utils/constants'

import { ContactDataType } from 'utils/contactTypes'
import { AddressImageType } from 'utils/aboutTypes'

const AddressImage = ({
  editTitle,
  requestURL,
}: {
  editTitle: string
  requestURL: string
}) => {
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { contactData, setContactData } = useAdmin()

  return (
    <section>
      <div className="relative ">
        <h5 className="text-orange font-medium pb-6">{editTitle}</h5>
        <div>
          <img
            src={contactData.SECTION_3_Image.imageSrc}
            alt={contactData.SECTION_3_Image.alt}
            className="max-h-40 w-fit pt-4 h-full"
          />
          <div className="flex gap-3 pt-3">
            <FilledBtn
              onClick={() => {
                setCardAction({
                  ...defaultCardAction,
                  _id: contactData.SECTION_3_Image._id,
                  isEdit: true,
                  editableContentIndex: 0,
                })
              }}
              buttonType="edit"
              color="orange"
              size="base"
              text=""
              type="button"
              extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100"
            />
          </div>
        </div>
      </div>

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setContactData}
          cardList={contactData.SECTION_3_Image}
          setCardAction={setCardAction}
          requestURL={requestURL}
        />
      )}
    </section>
  )
}

export default AddressImage

//! To add or update card
const cardDataSchema = z.object({
  alt: z.string().optional(),
  imageSrc: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<ContactDataType>>
  cardList: AddressImageType
  requestURL: string
}

const cardDefaultValues: AddressImageType = {
  _id: '',
  imageSrc: '',
  alt: '',
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setCardsList,
  cardList,
  cardAction,
  requestURL,
}) => {
  const { setIsLoading, showToast } = useAdmin()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<CardDataFormValues>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: cardAction.isAdd ? cardDefaultValues : cardList,
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    if (!data.imageSrc || data.imageSrc?.length === 0) {
      setError('imageSrc', {
        type: 'manual',
        message: 'Image required',
      })
      return
    }

    const _id = cardAction._id
    const formData = new FormData()
    formData.append('_id', _id)

    Object.keys(data).forEach((key) => {
      const value: any = (data as any)[key]

      if (typeof value === 'string') {
        formData.append(key, value)
      } else if (value instanceof FileList) {
        const file = value[0]
        formData.append(key, file)
      }
    })

    try {
      setIsLoading(true)

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(requestURL + _id, formData)
        if (!res?.data[0]) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Image updated successfully',
        })

        setCardsList((prev) => ({
          ...prev,
          SECTION_3_Image: res?.data[0] || {},
        }))
      }
      setCardAction(defaultCardAction)
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex bg-black bg-opacity-50 backdrop-blur-md justify-center items-center w-full h-full max-h-full overflow-y-auto overflow-x-hidden">
        <div className="relative w-full max-w-fit h-auto rounded-lg overflow-hidden ">
          <div className="relative rounded-lg shadow bg-white max-h-[80vh] overflow-y-auto overflow-x-hidden">
            <div className="flex justify-end px-2 py-2 bg-white sticky top-0 z-[999]">
              <button
                type="button"
                aria-label="close modal"
                className=" bg-black hover:bg-opacity-10 bg-opacity-0 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                onClick={() => setCardAction(defaultCardAction)}
              >
                <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <form
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit(submitHandler)}
              className="form pt-0 flex flex-col gap-4 "
            >
              <ImagePicker
                label="Address image"
                errors={errors.imageSrc}
                register={register}
                registerer="imageSrc"
                watcher={watch('imageSrc')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp"
              />
              <TextInput
                label="Alt attribute"
                errors={errors.alt}
                placeholder="Enter alt"
                register={register}
                registerer="alt"
                tooltip="This will be used <br/> for SEO purposes"
              />
              <button
                type="submit"
                className="bg-black button-submit font-medium mt-6 mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
