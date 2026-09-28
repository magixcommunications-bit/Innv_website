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
import { Banner as BannerType, HomeDataType } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Banner = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { homeData, setHomeData } = useAdmin()
  const { showToast, setIsLoading } = useAdmin()

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(homeRequestURLs.BANNER + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setHomeData((prev) => ({ ...prev, BANNER: res?.data || [] }))
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
        title="Banner"
        btnText="Add new banner"
        callback={() =>
          setCardAction({
            ...defaultCardAction,
            _id: `${Math.random()}${new Date().getTime()}`,
            isAdd: true,
          })
        }
      />

      <div className="relative ">
        {homeData.BANNER.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10">
            {homeData.BANNER.map((elem, index) => {
              const key = `${index}`
              const { _id } = elem
              return (
                <div
                  key={key}
                  className="flex flex-col justify-between gap-3 border border-gray border-opacity-40 
                  rounded-md p-4 xl:p-5 2xl:p-6"
                >
                  <BannerCard data={elem} />
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
          cardList={homeData.BANNER}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Banner

//! To add or update card
const bannerSchema = z.object({
  heading: generalSchema('Heading is required'),
  link: generalSchema('Navigation link is required'),
  statusBarText: generalSchema('Status bar text is required'),
  backgroundImageDesktop: fileSchema,
  backgroundImageMobile: fileSchema,
  logoImage: fileSchema,
  productImage: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: BannerType[]
}

const cardDefaultValues: BannerType = {
  _id: '',
  heading: '',
  statusBarText: '',
  link: '',
  backgroundImageDesktop: '',
  backgroundImageMobile: '',
  logoImage: '',
  productImage: '',
}

type BannerFormValues = z.infer<typeof bannerSchema>

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
  } = useForm<BannerFormValues>({
    resolver: zodResolver(bannerSchema),
    defaultValues: cardAction.isAdd
      ? cardDefaultValues
      : cardList[cardAction.editableContentIndex],
  })

  const submitHandler: SubmitHandler<BannerFormValues> = async (data) => {
    if (
      !data.backgroundImageDesktop ||
      data.backgroundImageDesktop.length === 0
    ) {
      setError('backgroundImageDesktop', {
        type: 'manual',
        message: 'Background image for desktop is required',
      })
      return
    }

    if (
      !data.backgroundImageMobile ||
      data.backgroundImageMobile.length === 0
    ) {
      setError('backgroundImageMobile', {
        type: 'manual',
        message: 'Background image for mobile is required',
      })
      return
    }

    const _id = cardAction._id
    const formData = new FormData()
    formData.append('_id', _id)

    Object.keys(data).forEach((key) => {
      const value: any = (data as any)[key]

      if (typeof value === 'string' && value.length !== 0) {
        formData.append(key, value)
      } else if (value instanceof FileList && value.length !== 0) {
        const file = value[0]
        formData.append(key, file)
      }
    })

    try {
      setIsLoading(true)
      // If adding a new card
      if (cardAction.isAdd) {
        const res = await axios.post(homeRequestURLs.BANNER, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, BANNER: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(homeRequestURLs.BANNER + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, BANNER: res?.data || [] }))
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
      <div
        className="fixed top-0 left-0 z-50 flex bg-black bg-opacity-50 backdrop-blur-md justify-center 
      items-center w-full h-full max-h-full overflow-y-auto overflow-x-hidden"
      >
        <div className="relative w-full max-w-fit h-auto rounded-lg overflow-hidden ">
          <div className="relative rounded-lg shadow bg-white max-h-[80vh] overflow-y-auto overflow-x-hidden">
            <div className="flex justify-end px-2 py-2 bg-white sticky top-0 z-[999]">
              <button
                type="button"
                aria-label="close modal"
                className=" bg-black hover:bg-opacity-10 bg-opacity-0 rounded-lg text-sm w-8 h-8 inline-flex 
                justify-center items-center"
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
              className="form pt-0 flex flex-col gap-4"
            >
              <TextInput
                label="Heading"
                errors={errors.heading}
                placeholder="Enter heading"
                register={register}
                registerer="heading"
                tooltip="Heading is required"
              />
              <TextInput
                label="Status Bar Text"
                errors={errors.statusBarText}
                placeholder="Enter status bar text"
                register={register}
                registerer="statusBarText"
                tooltip={'Status bar text is required'}
              />
              <TextInput
                label="Navigation Link"
                errors={errors.link}
                placeholder="Enter navigation link"
                register={register}
                registerer="link"
                tooltip={'Navigation link is required'}
              />
              <ImagePicker
                label="Background Image (Desktop)"
                errors={errors.backgroundImageDesktop}
                register={register}
                registerer="backgroundImageDesktop"
                watcher={watch('backgroundImageDesktop')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp"
              />
              <ImagePicker
                label="Background Image (Mobile)"
                errors={errors.backgroundImageMobile}
                register={register}
                registerer="backgroundImageMobile"
                watcher={watch('backgroundImageMobile')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp"
              />
              <ImagePicker
                label="Product Image"
                errors={errors.productImage}
                register={register}
                registerer="productImage"
                watcher={watch('productImage')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp"
              />
              <ImagePicker
                label="Logo image"
                errors={errors.logoImage}
                register={register}
                registerer="logoImage"
                watcher={watch('logoImage')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp"
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

function BannerCard({ data }: { data: BannerType }) {
  const {
    backgroundImageDesktop,
    logoImage,
    heading,
    link,
    statusBarText,
    productImage,
  } = data
  return (
    <article className="h-full border-gray border-opacity-30 rounded-md">
      <div className="rounded-md overflow-hidden relative z-10">
        <img
          src={backgroundImageDesktop as string}
          className="h-full w-full object-cover object-top"
          alt="background cover for desktop"
          aria-hidden
        />
      </div>
      <div className="flex gap-x-6 mt-6">
        {logoImage.length !== 0 ? (
          <div className="border border-gray border-opacity-40 rounded-md p-4 xl:p-5 2xl:p-10 !pt-0">
            <img
              src={logoImage as string}
              alt="logo"
              className="max-h-24 w-fit h-auto my-auto lg:max-h-28 2xl:max-h-52 py-4 xl:py-5 2xl:py-8"
            />
          </div>
        ) : null}

        {productImage.length !== 0 ? (
          <div
            className="border border-gray border-opacity-40 rounded-md 
                 p-4 xl:p-5 2xl:p-10 !pt-0"
          >
            <img
              src={productImage as string}
              alt="product"
              className="max-h-24 w-fit h-auto my-auto lg:max-h-28 2xl:max-h-52 py-4 xl:py-5 2xl:py-8"
            />
          </div>
        ) : null}
      </div>

      <div className="p-2 md:p-3 z-10 !pl-0 mt-4">
        <h6 className="font-normal tracking-wide leading-tight">{heading}</h6>
        <div className="mt-6">
          <h6 className="text-lg">
            <b>Status Bar Text:</b> {statusBarText}
          </h6>
          <h6 className="mt-1 text-lg">
            <b>Navigation Link:</b> {link}
          </h6>
        </div>
      </div>
    </article>
  )
}
