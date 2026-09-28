import React, { SetStateAction, useState } from 'react'

import axios from 'utils/axios'
import { z } from 'zod'
import { emailSchema, telephoneSchema } from 'utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAdmin } from 'store/store'
import { FilledBtn } from 'atoms/buttons'
import { TextInput } from 'molecules/inputs'
import { defaultCardAction, homeRequestURLs } from 'utils/constants'
import { ContactsType, HomeDataType } from 'utils/homeTypes'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const ContactUs = () => {
  const [cardAction, setCardAction] = useState(defaultCardAction)
  const { homeData, setHomeData } = useAdmin()

  return (
    <section>
      <SectionTitleWithBtn title="Section 11 (Contact us)" />

      <div className="relative ">
        <div className="-mt-2">
          <div>
            <h6>
              <b>Support mail:</b> {homeData.SECTION_11?.supportMail}
            </h6>
            <h6>
              <b>Sales contact:</b> {homeData.SECTION_11?.salesContact}
            </h6>
            <h6>
              <b>Service contact:</b> {homeData.SECTION_11?.serviceContact}
            </h6>
          </div>
          <FilledBtn
            onClick={() => {
              setCardAction({
                ...defaultCardAction,
                _id: homeData.SECTION_11?._id,
                isEdit: true,
              })
            }}
            buttonType="edit"
            color="orange"
            size="base"
            text="Edit contacts details"
            type="button"
            extraClasses="!bg-opacity-80 !bg-blue hover:!bg-opacity-100 mt-6"
          />
        </div>
      </div>

      {(cardAction.isEdit || cardAction.isAdd) && (
        <CardUpdater
          cardAction={cardAction}
          setContactDetails={setHomeData}
          contactDetails={homeData.SECTION_11}
          setCardAction={setCardAction}
        />
      )}
    </section>
  )
}

export default ContactUs

//! To add or update card
const cardDataSchema = z.object({
  supportMail: emailSchema,
  salesContact: telephoneSchema,
  serviceContact: telephoneSchema,
})

type CardData = {
  setCardAction: React.Dispatch<SetStateAction<typeof defaultCardAction>>
  cardAction: typeof defaultCardAction
  setContactDetails: React.Dispatch<React.SetStateAction<HomeDataType>>
  contactDetails: ContactsType
}

type CardDataFormValues = z.infer<typeof cardDataSchema>

const CardUpdater: React.FC<CardData> = ({
  setCardAction,
  setContactDetails,
  contactDetails,
  cardAction,
}) => {
  const { setIsLoading, showToast } = useAdmin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardDataFormValues>({
    resolver: zodResolver(cardDataSchema),
    defaultValues: contactDetails,
  })

  const submitHandler: SubmitHandler<CardDataFormValues> = async (data) => {
    // const _id = cardAction._id
    const _id = '6629ee62b36ef562121ac6a4'
    const formData = {
      ...data,
      _id,
    }

    try {
      setIsLoading(true)

      // Editing the existing details
      const res = await axios.put(homeRequestURLs.SECTION_11 + _id, formData)
      if (!res?.data) {
        throw new Error('Something went wrong')
      }
      showToast({
        status: 'success',
        message: 'Card updated successfully',
      })
      setContactDetails((prev) => ({ ...prev, SECTION_11: res?.data || {} }))
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
                className="inline-flex items-center justify-center w-8 h-8 text-sm bg-black bg-opacity-0 rounded-lg  hover:bg-opacity-10"
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
                label="Email"
                errors={errors.supportMail}
                placeholder="Enter support mail"
                register={register}
                registerer="supportMail"
                tooltip="Support mail required"
              />
              <TextInput
                label="Sales contact"
                errors={errors.salesContact}
                placeholder="Enter sales contact"
                register={register}
                registerer="salesContact"
                tooltip="Sales contact required"
              />
              <TextInput
                label="Service contact"
                errors={errors.serviceContact}
                placeholder="Enter service contact"
                register={register}
                registerer="serviceContact"
                tooltip="Service contact required"
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
