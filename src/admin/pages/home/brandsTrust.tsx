import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker } from 'molecules/inputs'
import { defaultCardAction, homeRequestURLs } from 'utils/constants'
import { ClienteleLogosType, HomeDataType } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const BrandsTrust = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, homeData, setHomeData } = useAdmin()

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(homeRequestURLs.SECTION_10 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Award deleted successfully',
      })
      setHomeData((prev) => ({ ...prev, SECTION_10: res?.data || [] }))
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
      setCardAction(defaultCardAction)
      setModal(modalInitialState)
    }
  }, [])

  useEffect(() => {
    if (!modal.isConfirmed) return

    if (cardAction.isDelete) {
      deleteHandler(cardAction._id)
    }
  }, [modal.isConfirmed, cardAction.isDelete, cardAction._id])

  return (
    <section>
      <SectionTitleWithBtn
        title="Section 10 (Brands trust)"
        btnText="Add new brand"
        callback={() =>
          setCardAction({
            ...defaultCardAction,
            _id: `${Math.random()}${new Date().getTime()}`,
            isAdd: true,
          })
        }
      />

      <div className="relative ">
        {homeData.SECTION_10.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10">
            {homeData.SECTION_10.map((elem, index) => {
              const key = `${index}`
              const { logo, alt, _id } = elem
              return (
                <div
                  key={key}
                  className="flex flex-col justify-between gap-3 border border-gray border-opacity-40 rounded-md p-4 xl:p-5 2xl:p-6 !pt-0"
                >
                  <img
                    src={logo as string}
                    alt={alt}
                    className="max-h-24 w-fit h-auto my-auto lg:max-h-28 2xl:max-h-32 py-4 xl:py-5 2xl:py-6  "
                  />
                  <div className="flex gap-3">
                    <FilledBtn
                      onClick={() => {
                        setCardAction({
                          ...defaultCardAction,
                          _id,
                          isEdit: true,
                          editableContentIndex: index,
                        })
                      }}
                      buttonType="edit"
                      color="orange"
                      size="base"
                      text=""
                      type="button"
                      extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100"
                    />
                    <FilledBtn
                      onClick={() => {
                        setCardAction({
                          ...defaultCardAction,
                          _id,
                          isDelete: true,
                        })

                        setModal({
                          isConfirmed: false,
                          isOpen: true,
                          message:
                            'Are you sure you want to delete this award?',
                        })
                      }}
                      buttonType="delete"
                      color="orange"
                      size="base"
                      text=""
                      type="button"
                      extraClasses="!bg-opacity-80 !bg-red-600 hover:!bg-opacity-100"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setHomeData}
          cardList={homeData.SECTION_10}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default BrandsTrust

//! To add or update card
const cardDataSchema = z.object({
  alt: z.string().optional(),
  logo: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: ClienteleLogosType[]
}

const cardDefaultValues: ClienteleLogosType = {
  _id: '',
  logo: '',
  alt: '',
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setCardsList,
  cardList,
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
    defaultValues: cardAction.isAdd
      ? cardDefaultValues
      : cardList[cardAction.editableContentIndex],
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    if (!data.logo || data.logo?.length === 0) {
      setError('logo', {
        type: 'manual',
        message: 'Award image required',
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
      // If adding a new card
      if (cardAction.isAdd) {
        const res = await axios.post(homeRequestURLs.SECTION_10 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_10: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(homeRequestURLs.SECTION_10 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_10: res?.data || [] }))
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
                label="Award Image"
                errors={errors.logo}
                register={register}
                registerer="logo"
                watcher={watch('logo')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/> 
                  Expected image ratio: 1:1.43 <br/> 
                  Sample dimension: 257x180
                "
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
