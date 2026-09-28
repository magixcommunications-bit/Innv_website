import { Formik } from 'formik'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import { MasterBtn } from 'atoms/buttons'
import axios from 'axios'

interface FormFields {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  message: string
  place: string
}

export default function Form() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const initialFormState: FormFields = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    message: '',
    place: '',
  }

  const submitHandler = async (values: any, { resetForm }: any) => {
    setLoading(true)
    try {
      const response = await axios.post(
        'https://formcarry.com/s/j72y4WTKBQN',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      //  const response = await axios.post('https://formcarry.com/s/j72y4WTKBQN', {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(values),
      //   })

      if (response.status === 200) {
        toast.success('Form Submitted Successfully')
        resetForm()
      } else {
        toast.warn('Something went wrong, Please try later!')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const validator = (values: FormFields) => {
    const errors: any = {}
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (String(values.phoneNumber).toString().length !== 10) {
      errors.phoneNumber = 'Enter valid phone number (10 digit)'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Please enter your phone number'
    }
    if (!values.firstName) {
      errors.firstName = 'Please enter your first name'
    }
    if (!values.lastName) {
      errors.lastName = 'Please enter your last name'
    }
    if (!values.place) {
      errors.place = 'Please enter your place'
    }
    if (String(values.message).toString().length <= 10) {
      errors.message = 'Describe your query'
    }
    if (!values.message) {
      errors.message = 'Please enter message'
    }

    return errors
  }

  return (
    <>
      <ToastContainer />
      <section className="w-full bg-[#F1F5F6] lg:w-[60%] md:px-4 blade-top-padding md:blade-top-padding-s blade-bottom-padding-lg md:blade-bottom-padding-s 2xl:blade-top-padding-lg 2xl:blade-bottom-padding-lg ">
        <section className="   max-w-[840px] mx-auto px-3 md:px-0 md:w-11/12 ">
          <div className="">
            <h3 className="mb-2 font-medium leading-tight text-black">
              How can we help you?
            </h3>
          </div>
          <Formik
            initialValues={initialFormState}
            validate={(values) => validator(values)}
            onSubmit={(values, actions) => submitHandler(values, actions)}
            validateOnChange={false}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-10 md:w-11/1 lg:w-full lg:mt-16 md:px-"
              >
                <div className="grid w-full md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-12">
                  <label
                    className="flex flex-col gap-1 text-base font-light text-black md:text-lg lg:text-xl "
                    htmlFor="candidateFirstName"
                  >
                    First name *
                    <input
                      className={`${
                        errors.firstName
                          ? 'border-b-2 border-[#f12626]'
                          : '  border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                  tracking-wide transition-all duration-300 outline-none focus:outline-none focus:border-b-2 
                  focus:border-opacity-100 border-b-2`}
                      id="candidateFirstName"
                      size={1}
                      name="firstName"
                      type="text"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.firstName}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 text-base font-light text-black md:text-lg lg:text-xl "
                    htmlFor="candidateLastName"
                  >
                    Last name *
                    <input
                      className={`${
                        errors.lastName
                          ? 'border-b-2 border-[#f12626]'
                          : '  border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                  tracking-wide transition-all outline-none duration-300 focus:outline-none focus:border-b-2 
                  focus:border-opacity-100  border-b-2`}
                      id="candidateLastName"
                      size={1}
                      name="lastName"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.lastName}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl "
                    htmlFor="candidateEmail"
                  >
                    E-mail *
                    <input
                      className={`${
                        errors.email
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100  border-b-2`}
                      size={1}
                      name="email"
                      id="candidateEmail"
                      type="email"
                      inputMode="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <small className="text-[#dd4b41] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.email}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl "
                    htmlFor="candidatephoneNumber"
                  >
                    Contact number *
                    <input
                      className={`${
                        errors.phoneNumber
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100 border-b-2`}
                      size={1}
                      inputMode="tel"
                      name="phoneNumber"
                      id="candidatephoneNumber"
                      type="number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.phoneNumber}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl"
                    htmlFor="candidatePlace"
                  >
                    Place *
                    <input
                      className={`${
                        errors.place
                          ? 'border-b-2 border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                  tracking-wide transition-all duration-300 outline-none focus:outline-none focus:border-b-2 
                  focus:border-opacity-100 border-b-2`}
                      id="candidatePlace"
                      size={1}
                      name="place"
                      type="text"
                      value={values.place}
                      onChange={handleChange}
                    />
                    {errors.place && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.place}
                      </small>
                    )}
                  </label>
                </div>

                <div className="mt-8 md:mt-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl "
                    htmlFor="candidateMessage"
                  >
                    Message *
                    <textarea
                      className="px-3 py-3 mt-1 text-lg font-normal tracking-wide bg-transparent border-2 border-black border-solid md:px-4 font-regular focus:outline-none focus:border-opacity-100 rounded-xl border-opacity-30"
                      cols={7}
                      rows={5}
                      name="message"
                      id="candidateMessage"
                      aria-label="Message"
                      value={values.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.message}
                      </small>
                    )}
                  </label>
                </div>
                <div className="flex mt-8 lg:mt-12">
                  <MasterBtn
                    aria-label="Submit the query form"
                    isDisabled={isLoading}
                    type="submit"
                    color="orange"
                    text="Submit"
                    size="base"
                    onClick={() => {
                      // navigate('/careers')
                    }}
                  />
                </div>
              </form>
            )}
          </Formik>
        </section>
      </section>
    </>
  )
}
