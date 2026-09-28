import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { fileSchema, generalSchema, urlSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, ImagePicker, MessageInput } from 'molecules/inputs'
import { defaultCardAction, aboutRequestURLs } from 'utils/constants'
import { LeaderCard } from 'screens/about/leaders'
import { AboutDataType, LeadersList } from 'utils/aboutTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const Leaders = () => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const { showToast, setIsLoading, setAboutData, aboutData } = useAdmin()

  // Extra logics for handling card data
  const [activeIndex, updateIndex] = useState(10)
  const updateState = (update: number) => {
    if (update === activeIndex) updateIndex(100)
    else updateIndex(update)
  }

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(aboutRequestURLs.SECTION_5 + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card deleted successfully',
      })
      setAboutData((prev) => ({ ...prev, SECTION_5: res?.data || [] }))
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
        title="Section 5 (Leaders)"
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
        {aboutData.SECTION_5.length === 0 ? (
          <h6 className="-mt-2">
            Add new data. Section is hidden on the respective page!
          </h6>
        ) : (
          <div className="grid xl:grid-cols-3 min-[1600px]:grid-cols-4 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10">
            {aboutData.SECTION_5.map((elem, index) => {
              const key = `${index}`
              const { _id } = elem
              return (
                <div
                  key={key}
                  className="flex flex-col justify-between gap-3 border border-gray border-opacity-40 rounded-md p-4 xl:p-5 2xl:p-6"
                >
                  <LeaderCard
                    activeIndex={activeIndex}
                    index={index}
                    onClick={updateState}
                    data={elem}
                    key={key}
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
          setCardsList={setAboutData}
          cardList={aboutData.SECTION_5}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default Leaders

//! To add or update card
const cardDataSchema = z.object({
  name: generalSchema('Name required'),
  role: generalSchema('Role required'),
  description: generalSchema('Description required'),
  profileURL: urlSchema,
  image: fileSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<AboutDataType>>
  cardList: LeadersList[]
}

const cardDefaultValues: LeadersList = {
  _id: '',
  name: '',
  role: '',
  description: '',
  profileURL: '',
  image: '',
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
    if (!data.image || data.image?.length === 0) {
      setError('image', {
        type: 'manual',
        message: 'Image required',
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
        const res = await axios.post(aboutRequestURLs.SECTION_5 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card added successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_5: res?.data || [] }))
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(aboutRequestURLs.SECTION_5 + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Card updated successfully',
        })
        setCardsList((prev) => ({ ...prev, SECTION_5: res?.data || [] }))
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
                label="Name"
                errors={errors.name}
                placeholder="Enter name"
                register={register}
                registerer="name"
                tooltip="Name is required"
              />
              <ImagePicker
                label="Image"
                errors={errors.image}
                register={register}
                registerer="image"
                watcher={watch('image')}
                accept=".svg, .png, .jpg, .jpeg, .webp"
                tooltip="Extensions: .svg/.png/.jpg/.jpeg/.webp <br/>
                  Expected image ratio: 1:0.9 <br/> 
                  Sample dimension: 360x384
                "
              />
              <TextInput
                label="Role"
                errors={errors.role}
                placeholder="Enter role"
                register={register}
                registerer="role"
                tooltip="Role is required"
              />

              <MessageInput
                label="Description"
                errors={errors.description}
                placeholder="Enter description"
                register={register}
                registerer="description"
                tooltip={'Description is required'}
              />

              <TextInput
                label="Linkedin profile"
                errors={errors.profileURL}
                placeholder="Enter linkedin url"
                register={register}
                registerer="profileURL"
                tooltip="Linkedin profile required"
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
