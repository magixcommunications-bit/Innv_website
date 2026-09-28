import React, { SetStateAction, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAdmin } from 'store/store'
import { FilledBtn } from 'atoms/buttons'
import {
  TextInput,
  ImagePicker,
  VideoPicker,
  MessageInput,
} from 'molecules/inputs'
import { defaultCardAction, homeRequestURLs } from 'utils/constants'
import Tooltip from 'atoms/tooltip'
import { HomeDataType, ProductTab } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Products = () => {
  const [cardAction, setCardAction] = useState(defaultCardAction)
  const { homeData, setHomeData } = useAdmin()

  return (
    <section>
      <SectionTitleWithBtn title="Section 2 (Products)" />

      <div className="relative">
        {homeData.SECTION_2.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className=" flex flex-col lg:flex-row gap-6">
            {homeData.SECTION_2.map((elem, index) => {
              const key = `${index}`
              const { _id, title } = elem
              return (
                <React.Fragment key={key}>
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
                    text={'Edit ' + title}
                    type="button"
                    extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100 !w-60 lg:!w-fit"
                  />
                </React.Fragment>
              )
            })}
          </div>
        )}
      </div>

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setHomeData}
          cardList={homeData.SECTION_2}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Products

//! To add or update card
const cardDataSchema = z.object({
  tab: fileSchema,
  variantTitle: generalSchema('Variant title required'),
  target: generalSchema('Target required'),
  title: generalSchema('Title required'),
  subTitle: generalSchema('Subtitle required'),
  cover: fileSchema,
  points: generalSchema('Description points required'),
  video: fileSchema,
  removeVideo: z.boolean(),
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: ProductTab[]
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setCardsList,
  cardList,
  cardAction,
}) => {
  const { setIsLoading, showToast } = useAdmin()

  const filteredProductList = {
    ...cardList[cardAction.editableContentIndex],
    points: cardList[cardAction.editableContentIndex].points,
  }

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<CardDataFormValues>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: filteredProductList,
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    if (!data.video || data.video?.length === 0) {
      if (!data.cover || data.cover?.length === 0) {
        setError('cover', {
          type: 'manual',
          message: 'Tab image required',
        })
        return
      }
    }

    const finalProductList = {
      tab: data.tab,
      variantTitle: data.variantTitle,
      target: data.target,
      title: data.title,
      subTitle: data.subTitle,
      cover: data.cover,
      points: data.points,
      video: data.removeVideo ? '' : data.video,
    }
    // console.log(finalProductList)

    const _id = cardAction._id
    const formData = new FormData()
    formData.append('_id', _id)

    Object.keys(finalProductList).forEach((key) => {
      const value: any = (finalProductList as any)[key]

      if (typeof value === 'string') {
        formData.append(key, value)
      } else if (value instanceof FileList) {
        const file = value[0]
        formData.append(key, file)
      }
    })

    // console.log(formData.get('cover'))

    try {
      setIsLoading(true)

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(homeRequestURLs.SECTION_2 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Details updated successfully',
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
                label="Title"
                errors={errors.title}
                placeholder="Enter title"
                register={register}
                registerer="title"
                tooltip="Title is required"
              />
              <TextInput
                label="Sub title"
                errors={errors.subTitle}
                placeholder="Enter sub-title"
                register={register}
                registerer="subTitle"
                tooltip="Sub title is required"
              />
              <MessageInput
                label="Description points"
                errors={errors.points}
                placeholder="Enter description points"
                register={register}
                registerer="points"
                tooltip="Use dot(.) to get separated points in output. <br/>Sentence should contain max 5 words."
              />
              <TextInput
                label="Target link"
                errors={errors.target}
                placeholder="Enter target link"
                register={register}
                registerer="target"
                tooltip="Target is required"
              />
              <ImagePicker
                label="Tab image"
                errors={errors.tab}
                register={register}
                registerer="tab"
                watcher={watch('tab')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 1:1.66 <br/> 
                  Sample dimension: 100x60
                "
              />
              <ImagePicker
                label="Product cover image"
                errors={errors.cover}
                register={register}
                registerer="cover"
                watcher={watch('cover')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 1:1.33 <br/> 
                  Sample dimension: 586x446
                "
              />
              <VideoPicker
                label="Video"
                errors={errors.video}
                register={register}
                registerer="video"
                watcher={watch('video')}
                accept=".mp4, .webm, .avi"
                tooltip="Extensions: .mp4/.webm/.avi <br/> 
                  Expected video ratio: 1:1.766 <br/> 
                  Sample dimension: 1920/1080 <br/>
                  Cover will be ignored if video is selected.
                "
              />

              <div className="select-none ml-1 -mt-3 flex">
                <input
                  type="checkbox"
                  id="checkboxField"
                  {...register('removeVideo')}
                />
                <label
                  htmlFor="checkboxField"
                  className="ml-2 text-base flex justify-between w-full"
                >
                  Remove video{' '}
                  <Tooltip text="Selecting this will remove <br/> the video on form submission" />
                </label>
              </div>

              <TextInput
                label="Variant title"
                errors={errors.variantTitle}
                placeholder="Enter variant title"
                register={register}
                registerer="variantTitle"
                tooltip="Variant title is required"
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
