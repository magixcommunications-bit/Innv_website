import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker } from 'molecules/inputs'
import { cathLabRequestURLs, defaultCardAction } from 'utils/constants'
import { CathLabsDataType, CertificateData } from 'utils/cathLabsTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Certificate = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, cathLabsData, setCathLabsData } = useAdmin()

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(cathLabRequestURLs.SECTION_6 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setCathLabsData((prev) => ({ ...prev, SECTION_6: res?.data || [] }))
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
        title="Section 6 (Certificate)"
        btnText="Add new certificate"
        callback={() =>
          setCardAction({
            ...defaultCardAction,
            _id: `${Math.random()}${new Date().getTime()}`,
            isAdd: true,
          })
        }
      />

      <div className="relative ">
        {cathLabsData.SECTION_6.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 hidden xl:flex-nowrap flex-wrap gap-8 xl:justify-between justify-center ">
            {cathLabsData.SECTION_6.map((item, ind) => {
              const { _id } = item
              return (
                <div
                  key={`${ind}-certificates`}
                  className="relative lg:blade-bottom-padding-lg "
                >
                  <div className="absolute h-full w-1 lg:block hidden">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 2 645"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        opacity="0.2"
                        x1="0.605469"
                        y1="2.18557e-08"
                        x2="0.605439"
                        y2="690"
                        stroke="url(#paint0_linear_1099_11752)"
                        strokeDasharray="10 10"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1099_11752"
                          x1="-0.892091"
                          y1="4.38347e-09"
                          x2="-0.892099"
                          y2="683.128"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop />
                          <stop offset="1" stopOpacity="0.76" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <img
                    className="h-full w-full object-contain object-top lg:pl-8 pl-0 "
                    src={item.imgSrc as string}
                    alt={item.alt}
                  />
                  <div className="flex gap-3 lg:pl-8 pl-0 ">
                    <FilledBtn
                      onClick={() => {
                        setCardAction({
                          ...defaultCardAction,
                          _id,
                          isEdit: true,
                          editableContentIndex: ind,
                        })
                      }}
                      buttonType="edit"
                      color="orange"
                      size="base"
                      text="Edit"
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
                          message: 'Are you sure you want to delete this card?',
                        })
                      }}
                      buttonType="delete"
                      color="orange"
                      size="base"
                      text="Delete"
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

      {/* <VideoModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        videoSrc={testimonials[videoIndex ?? 0]?.videoFile as string}
      /> */}
      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setCathLabsData}
          cardList={cathLabsData.SECTION_6}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Certificate

//! To add or update card
const cardDataSchema = z.object({
  alt: generalSchema('Alternate text required'),
  imgSrc: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<CathLabsDataType>>
  cardList: CertificateData[]
}

const cardDefaultValues: CertificateData = {
  _id: '',
  alt: '',
  imgSrc: '',
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
    if (!data.imgSrc || data.imgSrc?.length === 0) {
      setError('imgSrc', {
        type: 'manual',
        message: 'Certificate image required',
      })
      return
    }
    // if (!data.videoFile || data.videoFile?.length === 0) {
    //   setError('videoFile', {
    //     type: 'manual',
    //     message: 'Video file required',
    //   })
    //   return
    // }

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
        const res = await axios.post(
          cathLabRequestURLs.SECTION_6 + _id,
          formData,
        )
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Certificate added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_6: res?.data || [] }))
        // console.log(res.data)
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(
          cathLabRequestURLs.SECTION_6 + _id,
          formData,
        )
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_6: res?.data || [] }))
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
              <TextInput
                label="Alternate text"
                errors={errors.alt}
                placeholder="Enter alternative text"
                register={register}
                registerer="alt"
                tooltip={'This will be used for SEO'}
              />
              <ImagePicker
                label="Cover Image"
                errors={errors.imgSrc}
                register={register}
                registerer="imgSrc"
                watcher={watch('imgSrc')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/> 
                  Expected image ratio: 1:1.766 <br/> 
                  Sample dimension: 530x300
                "
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
