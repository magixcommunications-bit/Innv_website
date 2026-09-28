import React, { SetStateAction, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAdmin } from 'store/store'
import { FilledBtn } from 'atoms/buttons'
import { ImagePicker, MessageInput, TextInput } from 'molecules/inputs'
import { defaultCardAction, aboutRequestURLs } from 'utils/constants'
import { AboutDataType, VisionsType } from 'utils/aboutTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const ContactUs = () => {
  const [cardAction, setCardAction] = useState(defaultCardAction)
  const { aboutData, setAboutData } = useAdmin()

  return (
    <section>
      <SectionTitleWithBtn title="Section 6 (Vision)" />

      <div className="relative ">
        <div className="">
          <div className="flex flex-col gap-4">
            <h6>
              <b>Quote:</b> {aboutData.SECTION_6?.quote || "' '"}
            </h6>
            <h6>
              <b>Quoter: </b> {aboutData.SECTION_6?.quoter || "' '"}
            </h6>

            <div className="flex gap-8">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={aboutData.SECTION_6?.mobImage}
                  alt={aboutData.SECTION_6?.alt}
                  className="h-20 w-auto"
                />
                <p>Image for Mobile</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={aboutData.SECTION_6?.deskImage}
                  alt={aboutData.SECTION_6?.alt}
                  className="h-20 w-auto"
                />
                <p>Image for Tab and desktops</p>
              </div>
            </div>
            <h6>
              <b>Image alt: </b> {aboutData.SECTION_6?.alt || "' '"}
            </h6>
          </div>
          <FilledBtn
            onClick={() => {
              setCardAction({
                ...defaultCardAction,
                _id: aboutData.SECTION_6?._id,
                isEdit: true,
              })
            }}
            buttonType="edit"
            color="orange"
            size="base"
            text="Edit details"
            type="button"
            extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100 mt-8"
          />
        </div>
      </div>

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setVision={setAboutData}
          vision={aboutData.SECTION_6}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default ContactUs

//! To add or update card
const cardDataSchema = z.object({
  quote: generalSchema('Quote required'),
  quoter: generalSchema('Quoter required'),
  alt: generalSchema('Image alternate text required'),
  deskImage: fileSchema,
  mobImage: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setVision: React.Dispatch<React.SetStateAction<AboutDataType>>
  vision: VisionsType
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setVision,
  vision,
  cardAction,
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
    defaultValues: vision,
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    if (!data.mobImage || data.mobImage?.length === 0) {
      setError('mobImage', {
        type: 'manual',
        message: 'Mobile image required',
      })
      return
    }
    if (!data.deskImage || data.deskImage?.length === 0) {
      setError('deskImage', {
        type: 'manual',
        message: 'Tab/Desktop image required',
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

      // Editing the existing details
      const res = await axios.put(aboutRequestURLs.SECTION_6 + _id, formData)
      if (!res?.data) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card updated successfully',
      })
      setVision((prev) => ({ ...prev, SECTION_6: res?.data || {} }))

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
              <TextInput
                label="Quoter"
                errors={errors.quoter}
                placeholder="Enter quoter name"
                register={register}
                registerer="quoter"
                tooltip="Quoter name required"
              />
              <MessageInput
                label="Quote"
                errors={errors.quote}
                placeholder="Enter quote"
                register={register}
                registerer="quote"
                tooltip="Quote required"
              />
              <ImagePicker
                label="Mobile image"
                errors={errors.mobImage}
                register={register}
                registerer="mobImage"
                watcher={watch('mobImage')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 2.3:1 <br/> 
                  Sample dimension: 1920x840
                "
              />
              <ImagePicker
                label="Desktop image"
                errors={errors.deskImage}
                register={register}
                registerer="deskImage"
                watcher={watch('deskImage')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 2.3:1 <br/> 
                  Sample dimension: 1920x840
                "
              />
              <TextInput
                label="Image alt text"
                errors={errors.alt}
                placeholder="Enter image alt text"
                register={register}
                registerer="alt"
                tooltip="Image alternate text"
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
