import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import { Card, VideoModal } from 'screens/home/testimonails'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker, VideoPicker } from 'molecules/inputs'
import { defaultCardAction, homeRequestURLs } from 'utils/constants'
import MessageInput from 'molecules/inputs/messageInput'
import { HomeDataType, TestimonialData } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [videoIndex, setVideoIndex] = useState<number | undefined>(undefined)
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, homeData, setHomeData } = useAdmin()

  // To show video modal
  const handleModalReveal = useCallback((index: number) => {
    setVideoIndex(index)
    setIsOpen(true)
  }, [])

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(homeRequestURLs.SECTION_8 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setHomeData((prev) => ({ ...prev, SECTION_8: res?.data || [] }))
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
        title="Section 8 (Testimonials)"
        btnText="Add new card"
        callback={() =>
          setCardAction({
            ...defaultCardAction,
            _id: `${Math.random()}${new Date().getTime()}`,
            isAdd: true,
          })
        }
      />

      <div className="relative ">
        {homeData.SECTION_8.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10">
            {homeData.SECTION_8.map((elem, index) => {
              const key = `${index}`
              const { coverImage, title, degree, place, desig, _id } = elem
              return (
                <div key={key} className="flex flex-col gap-3 justify-between ">
                  <Card
                    coverImage={coverImage as string}
                    index={index}
                    title={title}
                    degree={degree}
                    place={place}
                    desig={desig}
                    toggleModal={handleModalReveal}
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

      <VideoModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        videoSrc={homeData.SECTION_8[videoIndex ?? 0]?.videoFile as string}
      />
      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setHomeData}
          cardList={homeData.SECTION_8}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Testimonials

//! To add or update card
const cardDataSchema = z.object({
  title: generalSchema('Name required'),
  degree: z.string().optional(),
  place: z.string().optional(),
  desig: z.string().optional(),
  coverImage: fileSchema,
  videoFile: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: TestimonialData[]
}

const cardDefaultValues: TestimonialData = {
  _id: '',
  title: '',
  place: '',
  desig: '',
  degree: '',
  coverImage: '',
  videoFile: '',
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
    if (!data.coverImage || data.coverImage?.length === 0) {
      setError('coverImage', {
        type: 'manual',
        message: 'Poster image required',
      })
      return
    }
    if (!data.videoFile || data.videoFile?.length === 0) {
      setError('videoFile', {
        type: 'manual',
        message: 'Video file required',
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
        const res = await axios.post(homeRequestURLs.SECTION_8 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_8: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(homeRequestURLs.SECTION_8 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_8: res?.data || [] }))
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
              label="Name"
              errors={errors.title}
              placeholder="Enter name"
              register={register}
              registerer="title"
              tooltip="Name required"
            />
            <TextInput
              label="Degree"
              errors={errors.degree}
              placeholder="Enter degree"
              register={register}
              registerer="degree"
              tooltip={"Use '<br />' to get a line change"
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}
            />
            <TextInput
              label="Designation"
              errors={errors.desig}
              placeholder="Enter designation"
              register={register}
              registerer="desig"
              tooltip={"Use '<br />' to get a line change"
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}
            />
            <MessageInput
              label="Place"
              errors={errors.place}
              placeholder="Enter place"
              register={register}
              registerer="place"
              tooltip={"Use '<br />' to get a line change"
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}
            />
            <ImagePicker
              label="Cover Image"
              errors={errors.coverImage}
              register={register}
              registerer="coverImage"
              watcher={watch('coverImage')}
              accept=".svg, .png, .jpg, .jpeg, .webp"
              tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/> 
                  Expected image ratio: 1:1.766 <br/> 
                  Sample dimension: 530x300
                "
            />
            <VideoPicker
              label="Video"
              errors={errors.videoFile}
              register={register}
              registerer="videoFile"
              watcher={watch('videoFile')}
              accept=".mp4, .webm, .avi"
              tooltip="Extensions: .mp4/.webm/.avi <br/> 
                  Expected video ratio: 1:1.766 <br/> 
                  Sample dimension: 1920/1080
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
  )
}
