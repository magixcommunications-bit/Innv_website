import { Formik } from 'formik'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import { MasterBtn } from 'atoms/buttons'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

interface FormFields {
  email: string
  contactNumber: string
  name: string
  message: string
  location: string
}

export default function RequestdemoForm({
  setIsDemo,
}: {
  setIsDemo: Dispatch<SetStateAction<boolean>>
}) {
  const location = useLocation()
  const [formCarryLink, setFormCarryLink] = useState('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const initialFormState: FormFields = {
    email: '',
    contactNumber: '',
    name: '',
    message: '',
    location: '',
  }

  useEffect(() => {
    const links = location.pathname.split('/')[2]
    LinkAssignHandler(links)
  }, [location.pathname])

  const LinkAssignHandler = (path: string) => {
    let URL = ''

    switch (path) {
      case 'innvoshield':
        URL = 'https://formcarry.com/s/kEpfN4wxr8H'
        break
      case 'vivoheart':
        URL = 'https://formcarry.com/s/O7dKwhIxes2'
        break
      default:
        URL = ''
    }

    setFormCarryLink(URL)
  }

  const submitHandler = async (values: any, { resetForm }: any) => {
    setLoading(true)
    try {
      // const response = await axios.post(
      //   'https://formcarry.com/s/O7dKwhIxes2',
      //   values,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // )

      const response = await axios.post(formCarryLink, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        toast.success('Form Submitted Successfully')
        setIsDemo(false)
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
    if (String(values.contactNumber).toString().length !== 10) {
      errors.contactNumber = 'Enter valid contact number (10 digit)'
    }
    if (!values.contactNumber) {
      errors.contactNumber = 'Please enter your contact number'
    }
    if (!values.name) {
      errors.name = 'Please enter your name'
    }
    if (!values.location) {
      errors.location = 'Please enter your location'
    }
    // if (String(values.message).toString().length <= 10) {
    //   errors.message = 'Describe your query'
    // }
    // if (!values.message) {
    //   errors.message = 'Please enter message'
    // }

    return errors
  }

  return (
    <>
      <ToastContainer />
      <section className="w-full bg-[#F1F5F6] py-6">
        <section className="   max-w-[840px] mx-auto px-3 md:px-0 md:w-11/12 ">
          <div className="">
            <h3 className="mb-2 font-medium leading-tight text-black">
              Request a demo
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
                className="w-full mt-4 sm:mt-8"
              >
                <div className="grid w-full gap-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                  <label
                    className="flex flex-col gap-1 text-base font-light text-black md:text-lg lg:text-xl "
                    htmlFor="candidateName"
                  >
                    Name *
                    <input
                      className={`${
                        errors.name
                          ? 'border-b-2 border-[#f12626]'
                          : '  border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                  tracking-wide transition-all outline-none duration-300 focus:outline-none focus:border-b-2 
                  focus:border-opacity-100  border-b-2`}
                      id="candidateName"
                      size={1}
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.name}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full gap-6 mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
                        errors.contactNumber
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100 border-b-2`}
                      size={1}
                      inputMode="tel"
                      name="contactNumber"
                      id="candidatephoneNumber"
                      type="number"
                      value={values.contactNumber}
                      onChange={handleChange}
                    />
                    {errors.contactNumber && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.contactNumber}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full gap-6 mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl"
                    htmlFor="candidateLocation"
                  >
                    Location *
                    <input
                      className={`${
                        errors.location
                          ? 'border-b-2 border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                  tracking-wide transition-all duration-300 outline-none focus:outline-none focus:border-b-2 
                  focus:border-opacity-100 border-b-2`}
                      id="candidateLocation"
                      size={1}
                      name="location"
                      type="text"
                      value={values.location}
                      onChange={handleChange}
                    />
                    {errors.location && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.location}
                      </small>
                    )}
                  </label>
                </div>

                <div className="mt-8 md:mt-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base font-light text-black md:mt-7 md:text-lg lg:text-xl "
                    htmlFor="candidateMessage"
                  >
                    Message
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
                    {/* {errors.message && (
                      <small className="text-[#f12626] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.message}
                      </small>
                    )} */}
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
