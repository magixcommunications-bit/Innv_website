import React, { SetStateAction, useCallback, useEffect, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { generalSchema, urlSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { modalInitialState, useAdmin } from 'store/store'
import ConfirmModal from 'layouts/confirmModal'
import { FilledBtn } from 'atoms/buttons'
import { TextInput, MessageInput } from 'molecules/inputs'
import { defaultCardAction } from 'utils/constants'
import { AddressCard } from 'organisms/address'
import { AddressDetails } from 'utils/contactTypes'

interface AddressProps {
  editTitle: string
  requestURL: string
  addressDetails: AddressDetails[]
}

const Address: React.FC<AddressProps> = ({
  addressDetails,
  editTitle,
  requestURL,
}) => {
  const [modal, setModal] = useState(modalInitialState)
  const [cardAction, setCardAction] = useState(defaultCardAction)

  const [address, setAddress] = useState<AddressDetails[]>(addressDetails)
  const { showToast, setIsLoading } = useAdmin()

  useEffect(() => {
    setAddress(addressDetails)
  }, [addressDetails])

  // To delete card
  const deleteHandler = useCallback(async (_id: string) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(requestURL + _id)
      if (!res) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Address deleted successfully',
      })
      setAddress((cards) => {
        return cards.filter((card) => card._id !== _id)
      })
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
      <div className="relative">
        <h5 className="text-orange font-medium pb-6">{editTitle}</h5>
        <FilledBtn
          buttonType="edit"
          color="orange"
          size="large"
          text="Add new address"
          type="button"
          extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100 mb-6"
          onClick={() =>
            setCardAction({
              ...defaultCardAction,
              _id: `${Math.random()}${new Date().getTime()}`,
              isAdd: true,
            })
          }
        />
        <div className="grid xl:grid-cols-2 2xl:grid-cols-3 min-[1600px]grid-cols-4 gap-y-5 md:gap-4 mx-auto gap-4 xl:gap-5 2xl:gap-10 ">
          {address.map((elem, index) => {
            const key = `${index}`
            const { _id } = elem
            return (
              <div
                key={key}
                className="flex flex-col justify-between gap-3 border border-gray border-opacity-40 rounded-md p-4 xl:p-5 2xl:p-6"
              >
                <AddressCard
                  key={index}
                  heading={elem.heading}
                  para={elem.para}
                  target={elem.target}
                />
                <div className="flex gap-3 pt-4">
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
                          'Are you sure you want to delete this address?',
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
      </div>

      <ConfirmModal modal={modal} setModal={setModal} />

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setCardsList={setAddress}
          cardList={address}
          setCardAction={setCardAction}
          requestURL={requestURL}
        />
      )}
    </section>
  )
}

export default Address

//! To add or update card
const cardDataSchema = z.object({
  heading: generalSchema('Main address required'),
  para: z.string().optional(),
  target: urlSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setCardsList: React.Dispatch<React.SetStateAction<AddressDetails[]>>
  cardList: AddressDetails[]
  requestURL: string
}

const cardDefaultValues: AddressDetails = {
  _id: '',
  heading: '',
  para: '',
  target: '',
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setCardsList,
  cardList,
  cardAction,
  requestURL,
}) => {
  const { setIsLoading, showToast } = useAdmin()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CardDataFormValues>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: cardAction.isAdd
      ? cardDefaultValues
      : cardList[cardAction.editableContentIndex],
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    const _id = cardAction._id
    const formData = {
      ...data,
      _id,
    }

    try {
      setIsLoading(true)
      // If adding a new card
      if (cardAction.isAdd) {
        const res = await axios.post(requestURL + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Address added successfully',
        })
        setCardsList(res.data)
      }

      // If editing the existing card
      if (cardAction.isEdit) {
        const res = await axios.put(requestURL + _id, formData)
        if (!res?.data) {
          throw new Error('Something went wrong')
        }
        showToast({
          status: 'success',
          message: 'Address updated successfully',
        })
        setCardsList(res.data)
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
                label="Main address"
                errors={errors.heading}
                placeholder="Enter main adress"
                register={register}
                registerer="heading"
                tooltip="Main address is required"
              />
              <MessageInput
                label="Details"
                errors={errors.para}
                placeholder="Enter detailed address"
                register={register}
                registerer="para"
                tooltip="Address details"
              />
              <TextInput
                label="Map link"
                errors={errors.target}
                placeholder="Enter location url"
                register={register}
                registerer="target"
                tooltip="Map link required"
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
