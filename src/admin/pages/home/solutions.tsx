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
import { defaultCardAction, homeRequestURLs } from 'utils/constants'

import { FeaturesType, HomeDataType } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Solutions = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, setHomeData, homeData } = useAdmin()

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(homeRequestURLs.SECTION_7 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setHomeData((prev) => ({ ...prev, SECTION_7: res?.data || [] }))
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
        title="Section 7 (Cardiovascular Solutions)"
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
        {homeData.SECTION_7.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10">
            {homeData.SECTION_7.map((elem, index) => {
              const key = `${index}`
              const { _id, desc, imgSrc, title } = elem
              return (
                <div
                  key={key}
                  className="flex flex-col justify-between gap-3 border border-gray border-opacity-40 rounded-md p-4 xl:p-5 2xl:p-6"
                >
                  <FeatureCard
                    key={index}
                    imgSrc={imgSrc as string}
                    title={title}
                    desc={desc}
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

      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setHomeData}
          cardList={homeData.SECTION_7}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Solutions

//! To add or update card
const cardDataSchema = z.object({
  title: generalSchema('Stat required'),
  desc: z.string().optional(),
  alt: generalSchema('Alternate text required'),
  imgSrc: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: FeaturesType[]
}

const cardDefaultValues: FeaturesType = {
  _id: '',
  desc: '',
  title: '',
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
        const res = await axios.post(homeRequestURLs.SECTION_7 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_7: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(homeRequestURLs.SECTION_7 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_7: res?.data || [] }))
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
                label="Statistics"
                errors={errors.title}
                placeholder="Enter statistics"
                register={register}
                registerer="title"
                tooltip="Stat is required"
              />
              <TextInput
                label="Description"
                errors={errors.desc}
                placeholder="Enter description"
                register={register}
                registerer="desc"
                tooltip={"Use '<br />' to get a line change"
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')}
              />
              <ImagePicker
                label="Card image"
                errors={errors.imgSrc}
                register={register}
                registerer="imgSrc"
                watcher={watch('imgSrc')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 1:1.73 <br/> 
                  Sample dimension: 586x340
                "
              />
              <TextInput
                label="Alt attribute"
                errors={errors.alt}
                placeholder="Enter image alt"
                register={register}
                registerer="alt"
                tooltip="This will be used for image SEO"
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
      className="feature-card-wrpper border-solid border-opacity-20"
    >
      <div className="">
        <img
          className="w-full h-full rounded-lg"
          src={imgSrc}
          alt={title + ' ' + desc}
        />
        <h4 className=" font-medium pt-5 leading-tight">{title}</h4>
        <h6 className="block leading-tight font-regular mb-5 text-opacity-60 text-black">
          {desc}
        </h6>
      </div>
    </article>
  )
}
