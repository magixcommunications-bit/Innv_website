import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput } from 'molecules/inputs'
import { defaultCardAction, newsRequestURLs } from 'utils/constants'
import ImagePicker from 'molecules/inputs/imagePicker'
import { NewsCard } from 'organisms/news'
import { NewsDataType, IBlog } from 'utils/newsTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const News = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, newsData, setNewsData } = useAdmin()
  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(newsRequestURLs.SECTION_2 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setNewsData((prev) => ({ ...prev, SECTION_2: res?.data || [] }))
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
        title="Section 2 (News & Insights)"
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
        {newsData.SECTION_2.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid gap-4 mx-auto xl:grid-cols-2 2xl:grid-cols-3 gap-y-5 md:gap-4 xl:gap-5 2xl:gap-10">
            {newsData.SECTION_2.map((elem, index) => {
              const key = `${index}`
              const { _id } = elem
              return (
                <div
                  key={key}
                  className="flex flex-col justify-between gap-3 p-4 border rounded-md border-gray border-opacity-40 xl:p-5 2xl:p-6"
                >
                  <NewsCard data={elem} isBlog={false} extraClasses="!mx-0" />
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

      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setNewsData}
          cardList={newsData.SECTION_2}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default News

//! To add or update card
const cardDataSchema = z.object({
  title: generalSchema('Title required'),
  tag: generalSchema('Tag required'),
  target: generalSchema('Blog link required'),
  cover: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<NewsDataType>>
  cardList: IBlog[]
}

const cardDefaultValues: IBlog = {
  _id: '',
  title: '',
  tag: '',
  target: '',
  cover: '',
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
    if (!data.cover || data.cover?.length === 0) {
      setError('cover', {
        type: 'manual',
        message: 'Card image required',
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
        const res = await axios.post(newsRequestURLs.SECTION_2 + _id, formData)
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
        const res = await axios.put(newsRequestURLs.SECTION_2 + _id, formData)
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
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full max-h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 backdrop-blur-md">
        <div className="relative w-full h-auto overflow-hidden rounded-lg max-w-fit ">
          <div className="relative rounded-lg shadow bg-white max-h-[80vh] overflow-y-auto overflow-x-hidden">
            <div className="flex justify-end px-2 py-2 bg-white sticky top-0 z-[999]">
              <button
                type="button"
                aria-label="close modal"
                className="inline-flex items-center justify-center w-8 h-8 text-sm bg-black bg-opacity-0 rounded-lg hover:bg-opacity-10"
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
              className="flex flex-col gap-4 pt-0 form "
            >
              <TextInput
                label="Title"
                errors={errors.title}
                placeholder="Enter title"
                register={register}
                registerer="title"
                tooltip={"Use '<br />' to get a line change"
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')}
              />
              <TextInput
                label="Tag"
                errors={errors.tag}
                placeholder="Enter tag"
                register={register}
                registerer="tag"
                tooltip="Tag is required"
              />
              <TextInput
                label="Link"
                errors={errors.target}
                placeholder="Enter blog link"
                register={register}
                registerer="target"
                tooltip="Blog link required"
              />
              <ImagePicker
                label="Card image"
                errors={errors.cover}
                register={register}
                registerer="cover"
                watcher={watch('cover')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 1:1.73 <br/> 
                  Sample dimension: 586x340
                "
              />

              <button
                type="submit"
                className="mt-6 mb-2 font-medium bg-black button-submit"
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

// !Card component
export function FeatureCard({
  title,
  imgSrc,
  desc,
}: {
  title: string
  desc: string
  imgSrc: string
}) {
  return (
    <article
      key={title}
      className="border-solid feature-card-wrpper border-opacity-20 "
    >
      <div className="">
        <img
          className="w-full h-full rounded-lg"
          src={imgSrc}
          alt={title + ' ' + desc}
        />
        <h4 className="py-5 leading-tight font-regular">
          {title} <span className="inline leading-tight">{desc}</span>
        </h4>
      </div>
    </article>
  )
}
