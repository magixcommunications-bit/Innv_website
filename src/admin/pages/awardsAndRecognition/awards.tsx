import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import TextInput from 'molecules/inputs/textInput'
import ImagePicker from 'molecules/inputs/imagePicker'
import { awardRequestURLs, defaultCardAction } from 'utils/constants'
import { MessageInput } from 'molecules/inputs'
import { AwardsDataType, AwardsPageLogosType } from 'utils/awardTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Awards = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, awardsData, setAwardsData } = useAdmin()

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(awardRequestURLs.SECTION_2 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Award deleted successfully',
      })
      setAwardsData((prev) => ({ ...prev, SECTION_2: res?.data || [] }))
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
        title="Awards section"
        btnText="Add new award"
        callback={() =>
          setCardAction({
            ...defaultCardAction,
            _id: `${Math.random()}${new Date().getTime()}`,
            isAdd: true,
          })
        }
      />

      <div className="relative ">
        {awardsData.SECTION_2.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 ">
            {awardsData.SECTION_2.map((elem, index) => {
              const { logo, _id, desc, title } = elem
              return (
                <div
                  key={index}
                  className="w-full h-full flx lg:pt-12 xl:py-6 items-center justify-center blade-top-margin lg:mt-0 "
                >
                  <div
                    className={`group relative border border-solid rounded-md overflow-hidden border-black border-opacity-30 ${
                      index === 0 ? 'div2' : ''
                    } h-[350px] lg:h-80 xl:h-[22rem] 2xl:h-[25rem] pl-5 w-[90%] py-10 bg-[url(assets/bg-overlay/orange_gradient_bg.webp)] bg-cover bg-center flex flex-col items-start justify-between`}
                  >
                    <img
                      className={`group-hover:opacity-0 transition-opacity duration-700 h-auto max-w-[9rem] md:max-w-[11rem] 2xl:max-w-[14rem] max-h-24 w-auto `}
                      // className={`group-hover:opacity-0 transition-opacity duration-700 max-h-16 xl:max-h-16 2xl:max-h-20 w-fit h-auto lg:max-h-24 `}
                      src={logo as string}
                      alt={title}
                    />
                    <h6 className="font-medium max-w-[270px] xl:max-w-xs group-hover:opacity-0 transition-opacity duration-700 2xl:text-2xl">
                      {title}
                    </h6>

                    <div className="absolute">
                      <h5 className="group-hover:opacity-100 font-medium text-[#0e6cbe] max-w-[300px] 2xl:max-w-sm blade-bottom-margin-sm xl:mb-5 opacity-0 transition-opacity duration-700">
                        {title}
                      </h5>
                      <p className="group-hover:opacity-100 font-regular opacity-0 transition-opacity duration-700 max-w-[300px] lg:max-w-sm xl:max-w-xs 2xl:max-w-md 2xl:text-xl">
                        {desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-[#C9CBCF]">
                      <svg
                        className="transform group-hover:-rotate-45 transition-transform duration-700"
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                      >
                        <path
                          d="M28.7112 16.5757H19.7303V7.59485H16.7367V16.5757H7.75586V19.5693H16.7367V28.5502H19.7303V19.5693H28.7112V16.5757Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5">
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
                          message:
                            'Are you sure you want to delete this award?',
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

      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setAwardsData}
          cardList={awardsData.SECTION_2}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Awards

//! To add or update card
const cardDataSchema = z.object({
  // alt: z.string().optional(),
  logo: fileSchema,
  title: generalSchema('Award name required'),
  desc: generalSchema('Description required'),
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<AwardsDataType>>
  cardList: AwardsPageLogosType[]
}

const cardDefaultValues: AwardsPageLogosType = {
  _id: '',
  logo: '',
  title: '',
  desc: '',
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
    const awards: AwardsPageLogosType = {
      ...(data as AwardsPageLogosType),
      _id: cardAction._id,
    }
    const formData = new FormData()

    Object.keys(awards).forEach((key) => {
      // Type assertion to treat 'awards' as an object with a string index signature returning 'any'
      const value: any = (awards as any)[key]

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
          awardRequestURLs.SECTION_2 + cardAction._id,
          formData,
        )
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_2: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(
          awardRequestURLs.SECTION_2 + cardAction._id,
          formData,
        )
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_2: res?.data || [] }))
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
                label="Award name"
                errors={errors.title}
                placeholder="Enter award name"
                register={register}
                registerer="title"
                tooltip="Name should not be more than 9 words"
              />
              <MessageInput
                label="Description"
                errors={errors.desc}
                placeholder="Enter description"
                register={register}
                registerer="desc"
                tooltip="Description should not be more than 45 words"
              />
              <ImagePicker
                label="Award Image"
                errors={errors.logo}
                register={register}
                registerer="logo"
                watcher={watch('logo')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp
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
