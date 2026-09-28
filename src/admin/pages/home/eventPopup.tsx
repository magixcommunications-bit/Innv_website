import React, { useCallback, useState, useEffect, SetStateAction } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema, urlSchema } from 'utils/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAdmin, modalInitialState, ModalState } from 'store/store'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker } from 'molecules/inputs'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'
import { homeRequestURLs } from 'utils/constants'
import ConfirmModal from 'layouts/confirmModal'
import { HomeDataType, EventPopupType } from 'utils/homeTypes'

const EventPopup = () => {
  const { homeData, setHomeData, setIsLoading, showToast } = useAdmin()
  const [modal, setModal] = useState<ModalState>(modalInitialState)
  const [cardAction, setCardAction] = useState<string | null>(null)

  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(homeRequestURLs.EVENTPOPUP + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Event banner deleted successfully',
      })
      setHomeData((prev) => ({ ...prev, EVENTPOPUP: res?.data || [] }))
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (modal.isConfirmed) {
      deleteHandler(homeData.EVENTPOPUP[0]._id)
    }
  }, [modal])

  return (
    <section>
      <SectionTitleWithBtn
        btnText={
          homeData.EVENTPOPUP.length === 0 ? 'Add new event banner' : undefined
        }
        title="Event Banner"
        callback={
          homeData.EVENTPOPUP.length === 0
            ? () => setCardAction('add')
            : undefined
        }
      />
      <div>
        {homeData.EVENTPOPUP.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          homeData.EVENTPOPUP.map((item) => (
            <div
              className="flex flex-col justify-between gap-3 max-w-[560px] border border-gray border-opacity-40 
            rounded-md p-4 xl:p-5 2xl:p-6"
            >
              <div className="min-h-[400px]">
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.alt}
                />
              </div>
              <div className="flex gap-3">
                <FilledBtn
                  onClick={() => setCardAction('edit')}
                  buttonType="edit"
                  color="orange"
                  size="base"
                  text="Edit"
                  type="button"
                  extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100"
                />
                <FilledBtn
                  onClick={() =>
                    setModal({
                      ...modalInitialState,
                      isOpen: true,
                      message:
                        'Are you sure you want to delete this event banner?',
                    })
                  }
                  buttonType="delete"
                  color="orange"
                  size="base"
                  text="Delete"
                  type="button"
                  extraClasses="!bg-opacity-80 !bg-red-600 hover:!bg-opacity-100"
                />
              </div>
            </div>
          ))
        )}
      </div>
      <ConfirmModal modal={modal} setModal={setModal} />
      {cardAction && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setHomeData}
          cardList={homeData.EVENTPOPUP}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}
export default EventPopup

type CardProps = {
  setCardAction: React.Dispatch<SetStateAction<string | null>>
  cardAction: string | null
  setCardsList: React.Dispatch<React.SetStateAction<HomeDataType>>
  cardList: EventPopupType[]
}

const cardDataSchema = z.object({
  alt: generalSchema('Alternative text is required'),
  image: fileSchema,
})

const cardDefaultValues: EventPopupType = {
  _id: '',
  alt: '',
  image: '',
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater = ({
  cardAction,
  setCardAction,
  setCardsList,
  cardList,
}: CardProps) => {
  const { setIsLoading, showToast } = useAdmin()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<CardDataFormValues>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: cardAction === 'add' ? cardDefaultValues : cardList[0],
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    if (!data.image || data.image?.length === 0) {
      setError('image', {
        type: 'manual',
        message: 'Image is required',
      })
      return
    }
    const formData = new FormData()

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
      if (cardAction === 'add') {
        const res = await axios.post(homeRequestURLs.EVENTPOPUP, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Event banner added successfully',
        })
        setCardsList((prev) => ({ ...prev, EVENTPOPUP: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction === 'edit') {
        const _id = cardList[0]._id
        const res = await axios.put(homeRequestURLs.EVENTPOPUP + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Event banner updated successfully',
        })
        setCardsList((prev) => ({ ...prev, EVENTPOPUP: res?.data || [] }))
      }
      setCardAction(null)
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
              onClick={() => setCardAction(null)}
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
            <ImagePicker
              label="Event Banner image"
              errors={errors.image}
              register={register}
              registerer="image"
              watcher={watch('image')}
              accept=".png, .jpg, .jpeg"
              tooltip="Extensions: .png/.jpg/.jpeg <br/>
              Expected image ratio: 1131:1600 <br/> 
              Sample dimension: 1131x1600
            "
            />
            <TextInput
              label="Image alternate text"
              errors={errors.alt}
              placeholder="Enter alternate text"
              register={register}
              registerer="alt"
              tooltip="Used for SEO purpose"
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
