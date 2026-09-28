import { Formik } from 'formik'
import React, { useState, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MasterBtn } from 'atoms/buttons'
import emailjs from '@emailjs/browser'

interface FormFields {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  message: string
}

export default function GetInTouchForm({ title }: { title: string }) {
  const [isLoading, setLoading] = useState<boolean>(false)
  const initialFormState: FormFields = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    message: '',
  }

  const submitHandler = (values: any, { resetForm }: any) => {
    setLoading(true)

    emailjs
      .send('service_7wj5b3c', 'template_no532si', values, 'TiGiAxmIN4dxJe1xn')
      .then(
        (result: any) => {
          toast.success('Form Submitted Successfully')
        },
        (error: any) => {
          toast.warn('Something went wrong, Please try later!')
        },
      )
      .finally(() => {
        resetForm()
        setLoading(false)
      })
  }
  const validator = (values: FormFields) => {
    const errors: any = {}
    if (!values.email) {
      errors.email = 'Email Is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address'
    }

    if (
      String(values.phoneNumber).toString().length < 10 &&
      String(values.phoneNumber).toString().length > 15
    ) {
      errors.phoneNumber = 'Enter Valid Phone Number With Country Code'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Please Enter Your Phone Number'
    }
    if (!values.firstName) {
      errors.firstName = 'Please Enter Your First Name'
    }
    if (!values.lastName) {
      errors.lastName = 'Please Enter Your Last Name'
    }
    return errors
  }

  return (
    <>
      <ToastContainer />
      <section className="w-full bg-[#F1F5F6] lg:w-[59.5%] md:px-4 blade-top-padding md:blade-top-padding-sm blade-bottom-padding-lg md:blade-bottom-padding-sm 2xl:blade-top-padding-lg 2xl:blade-bottom-padding-lg ">
        <section className="max-w-[840px] mx-auto px-3 md:w-11/12 ">
          <div className="">
            <h2 className="mb-2 leading-tight text-2xl md:text-[36px] xl:text-4xl 2xl:text-5xl text-black font-medium">
              {title}
            </h2>
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
                className="md:w-11/12 lg:w-full mt-10 lg:mt-16 md:px-3"
              >
                <div className="grid w-full md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-12">
                  <label
                    className="flex relative flex-col text-black gap-1 text-base md:text-lg lg:text-xl font-regular capitalize"
                    htmlFor="candidateFirstName"
                  >
                    First Name*
                    <input
                      className={`${
                        errors.firstName
                          ? 'border-b-2 border-[#f12626]'
                          : '  border-black border-opacity-40'
                      } bg-transparent px-3 text-lg font-regular font-normal  
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
                      <small className="text-[#f12626] text-sm absolute top-full pt-1 tracking-wider font-regular flex flex-nowrap items-center gap-1">
                        {errors.firstName}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex relative flex-col text-black gap-1 text-base md:text-lg lg:text-xl font-regular capitalize"
                    htmlFor="candidateLastName"
                  >
                    Last Name*
                    <input
                      className={`${
                        errors.lastName
                          ? 'border-b-2 border-[#f12626]'
                          : '  border-black border-opacity-40'
                      } bg-transparent px-3 text-lg font-regular font-normal  
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
                      <small className="text-[#f12626] text-sm absolute top-full pt-1 tracking-wider font-regular flex flex-nowrap items-center gap-1">
                        {errors.lastName}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mt-4 gap-y-4 gap-x-12">
                  <label
                    className="flex relative text-black flex-col gap-1 mt-4 md:mt-7 text-base md:text-lg lg:text-xl font-regular 
                  capitalize"
                    htmlFor="candidateEmail"
                  >
                    E-Mail ID*
                    <input
                      className={`${
                        errors.email
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent px-3 text-lg font-regular font-normal  
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
                      <small className="text-[#dd4b41] text-sm absolute top-full pt-1 tracking-wider font-regular flex flex-nowrap items-center gap-1">
                        {errors.email}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex relative text-black flex-col gap-1 mt-4 md:mt-7 text-base md:text-lg lg:text-xl 
                  font-regular capitalize"
                    htmlFor="candidatephoneNumber"
                  >
                    Contact Number*
                    <input
                      className={`${
                        errors.phoneNumber
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent px-3 text-lg font-regular font-normal  
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
                      <small className="text-[#f12626] text-sm absolute top-full pt-1 tracking-wider font-regular flex flex-nowrap items-center gap-1">
                        {errors.phoneNumber}
                      </small>
                    )}
                  </label>
                </div>

                <div className="mt-8 md:mt-12">
                  <label
                    className="flex relative text-black flex-col gap-1 mt-4 md:mt-7 text-base md:text-lg lg:text-xl font-regular 
                  capitalize"
                    htmlFor="candidateMessage"
                  >
                    Message
                    <textarea
                      className="bg-transparent py-3 px-3 md:px-4 text-lg font-regular font-normal tracking-wide mt-1  
                    border-solid border-2 focus:outline-none focus:border-opacity-100 rounded-xl border-black 
                    border-opacity-30"
                      cols={7}
                      rows={5}
                      name="message"
                      id="candidateMessage"
                      aria-label="Message"
                      value={values.message}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="mt-8 lg:mt-12 flex">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={` disabled:opacity-60 disabled:cursor-not-allowed rounded-md border-2 border-lightgray font-regular font-medium tracking-wider stroke-orange hover:stroke-white 
      focus-visible:stroke-white focus:outline-none focus-visible:text-white hover:fill-white focus-visible:fill-white
      active:outline-none fill-orange  bg-white border-solid hover:text-white outline-none px-5 py-3 flex items-center gap-3 hover:bg-orange 
      focus-visible:bg-orange  hover:border-orange 
      focus-visible:border-orange transition-colors duration-300 ease-in-out text-base`}
                  >
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="inherit"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </section>
      </section>
    </>
  )
}
