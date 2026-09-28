import { Formik } from 'formik'
import React, { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import { useAdmin } from 'store/store'
import axios from 'axios'

interface FormFields {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  message: string
  position: string
  experience: string
  qualifications: string
  noticePeriod: number
  references: string
  resume: File | null
  coverLetter: File | null
}

export default function Form() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [positions, setPositions] = useState<string[]>([])
  const { careersData } = useAdmin()

  const [files, setFiles] = useState<{
    resume: File | null
    coverLetter: File | null
  }>({ resume: null, coverLetter: null })

  const resumeInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)

  const initialFormState: FormFields = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    position: '',
    experience: '',
    qualifications: '',
    noticePeriod: 0,
    references: '',
    resume: null,
    coverLetter: null,
    message: '',
  }

  // const careersData = {
  //   SECTION_4: [
  //     { position: 'Software Engineer', location: 'San Francisco', id: 1 },
  //     { position: 'Product Manager', location: 'New York', id: 2 },
  //     { position: 'Designer', location: 'Remote', id: 3 },
  //     { position: 'Data Scientist', location: 'Boston', id: 4 },
  //   ],
  // }

  useEffect(() => {
    setPositions([
      'Select',
      ...careersData.SECTION_4.map((item) => item.position),
      'Others',
    ])
    console.log(careersData, 'Career data')
  }, [careersData])

  const submitHandler = async (values: any, { resetForm }: any) => {
    setLoading(true)
    try {
      const formData = new FormData()

      for (const key in values) {
        if (key !== 'resume' && key !== 'coverLetter') {
          formData.append(key, values[key])
        }
      }

      if (files.resume) {
        formData.append('resume', files.resume)
      }
      if (files.coverLetter) {
        formData.append('coverLetter', files.coverLetter)
      }

      const response = await axios.post(
        'https://formcarry.com/s/h3a8Ghgtace',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      // const response = await axios.post(
      //   'https://formcarry.com/s/h3a8Ghgtace',
      //   values,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // )

      if (response.status === 200) {
        toast.success('Form Submitted Successfully')
        resetForm()
      } else {
        toast.warn('Something went wrong, Please try later!')
      }
    } catch (error: any) {
      console.error('Error:', error)
      toast.error(
        error?.response?.data?.message ||
          'An error occurred. Please try again later.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleResumeChange = (e: any) => {
    if (e.currentTarget?.files?.[0]) {
      setFiles({ ...files, resume: e.currentTarget.files[0] })
    }
  }

  const handleCoverChange = (e: any) => {
    if (e.currentTarget?.files?.[0]) {
      setFiles({ ...files, coverLetter: e.currentTarget.files[0] })
    }
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
      errors.phoneNumber = 'Please enter your phone number'
    }
    if (!values.firstName) {
      errors.firstName = 'Please enter your first name'
    }
    if (!values.lastName) {
      errors.lastName = 'Please enter your last name'
    }
    if (!values.position) {
      errors.position = 'Please enter your desired position'
    }
    if (!values.experience) {
      errors.experience = 'Please enter your experience'
    }
    if (!values.qualifications) {
      errors.qualifications = 'Please enter your qualifications'
    }
    if (!values.noticePeriod && values.noticePeriod !== 0) {
      errors.noticePeriod = 'Please enter your notice period (in days)'
    }
    if (
      typeof values.noticePeriod !== 'number' ||
      isNaN(+values.noticePeriod)
    ) {
      errors.noticePeriod = 'Please enter notice period in digits'
    }
    if (!values.resume) {
      errors.resume = 'Please upload your Resume'
    }
    // if (!values.coverLetter) {
    //   errors.resume = 'Please upload your Cover Letter'
    // }
    return errors
  }

  return (
    <>
      <ToastContainer />
      <section
        id="apply-job"
        className="w-full bg-[#F1F5F6] lg:w-[59.5%] md:px-4 blade-top-padding-lg blade-bottom-padding-lg"
      >
        <section className="   max-w-[840px] mx-auto px-3 md:w-11/12 ">
          <div className="">
            <h3 className="mb-2 font-medium leading-tight text-black">
              Get in touch!
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
                className="mt-10 md:w-11/12 lg:w-full lg:mt-16 md:px-3"
              >
                <div className="grid w-full md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-12">
                  <label
                    className="flex flex-col gap-1 text-base text-black capitalize md:text-lg lg:text-xl font-regular"
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
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.firstName}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 text-base text-black capitalize md:text-lg lg:text-xl font-regular"
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
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.lastName}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidatephoneNumber"
                  >
                    Phone *
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
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.phoneNumber}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidateEmail"
                  >
                    Email *
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
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidatePosition"
                  >
                    Position *
                    <select
                      className={`${
                        errors.position
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                        tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                        focus:border-opacity-100 border-b-2 cursor-pointer`}
                      name="position"
                      id="candidatePosition"
                      value={values.position}
                      onChange={handleChange}
                    >
                      {positions.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.position}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidateExperience"
                  >
                    Work experience *
                    <input
                      className={`${
                        errors.experience
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100  border-b-2`}
                      size={1}
                      name="experience"
                      id="candidateExperience"
                      type="text"
                      value={values.experience}
                      onChange={handleChange}
                    />
                    {errors.experience && (
                      <small className="text-[#dd4b41] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.experience}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidateQualifications"
                  >
                    Qualifications *
                    <input
                      className={`${
                        errors.qualifications
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100 border-b-2`}
                      size={1}
                      name="qualifications"
                      id="candidateQualifications"
                      type="text"
                      value={values.qualifications}
                      onChange={handleChange}
                    />
                    {errors.qualifications && (
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.qualifications}
                      </small>
                    )}
                  </label>
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black md:mt-7 md:text-lg lg:text-xl font-regular "
                    htmlFor="candidateNoticePeriod"
                  >
                    Notice period (in days) *
                    <input
                      className={`${
                        errors.noticePeriod
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100  border-b-2`}
                      size={1}
                      name="noticePeriod"
                      id="candidateNoticePeriod"
                      type="number"
                      inputMode="numeric"
                      value={values.noticePeriod}
                      onChange={handleChange}
                    />
                    {errors.noticePeriod && (
                      <small className="text-[#dd4b41] tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.noticePeriod}
                      </small>
                    )}
                  </label>
                </div>

                <div className="grid w-full mt-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
                    htmlFor="candidateReferences"
                  >
                    References
                    <input
                      className={`${
                        errors.references
                          ? 'border-[#f12626]'
                          : 'border-black border-opacity-40'
                      } bg-transparent text-lg font-regular font-normal  
                    tracking-wide outline-none transition-all duration-300 focus:outline-none focus:border-b-2 
                    focus:border-opacity-100 border-b-2`}
                      size={1}
                      name="references"
                      id="candidateReferences"
                      type="text"
                      value={values.references}
                      onChange={handleChange}
                    />
                    {/* {errors.references && (
                      <small className="text-[#f12626] text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                        {errors.references}
                      </small>
                    )} */}
                  </label>
                </div>

                <div
                  className={`mt-8 md:mt-12 lg:flex lg:items-center gap-x-8 ${
                    errors.resume && !files.resume
                      ? 'border-[#f12626]'
                      : 'border-black border-opacity-40'
                  } focus:border-b-2 border-b-2 pb-3 lg:pb-8`}
                >
                  <div
                    className="flex items-center justify-center cursor-pointer w-fit"
                    onClick={() => {
                      resumeInputRef.current?.click()
                    }}
                  >
                    <button
                      aria-label="Resume"
                      type="button"
                      className="flex items-center justify-center px-4 py-3 transition-colors duration-300 bg-white rounded-md outline-none w-44 gap-x-3 lg:py-3 lg:px-6 group hover:bg-orange hover:text-white focus-visible:bg-orange focus-visible:text-white"
                    >
                      <span className="text-sm font-medium tracking-wider font-regular lg:text-base">
                        Resume *
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="none"
                        className="w-5 h-5 transition-colors duration-300 group-hover:fill-white fill-orange group-focus-visible:fill-white"
                      >
                        <path
                          d="M11.2031 15.5265H13.2031V9.52649H16.2031L12.2031 4.52649L8.20312 9.52649H11.2031V15.5265Z"
                          fill="inherit"
                        />
                        <path
                          d="M20.2031 18.5265H4.20312V11.5265H2.20312V18.5265C2.20312 19.6295 3.10012 20.5265 4.20312 20.5265H20.2031C21.3061 20.5265 22.2031 19.6295 22.2031 18.5265V11.5265H20.2031V18.5265Z"
                          fill="inherit"
                        />
                      </svg>
                    </button>
                    <input
                      ref={resumeInputRef}
                      type="file"
                      name="resume"
                      id="resume"
                      className="hidden"
                      accept=".pdf, .docx, .doc, .odt"
                      // value={values.resume}
                      onChange={(
                        e: React.InputHTMLAttributes<HTMLInputElement>,
                      ) => {
                        handleResumeChange(e)
                        handleChange(e)
                      }}
                    />
                  </div>

                  <span>{files.resume?.name}</span>

                  {errors.resume && !files.resume && (
                    <small className="text-[#f12626] pt-3 lg:pt-0 text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                      {errors.resume}
                    </small>
                  )}
                </div>

                <div
                  className={`mt-8 md:mt-12 lg:flex lg:items-center gap-x-8 ${
                    errors.coverLetter && !files.coverLetter
                      ? 'border-[#f12626]'
                      : 'border-black border-opacity-40'
                  } focus:border-b-2 border-b-2 pb-3 lg:pb-8`}
                >
                  <div
                    className="flex items-center justify-center cursor-pointer w-fit"
                    onClick={() => {
                      coverInputRef.current?.click()
                    }}
                  >
                    <button
                      aria-label="Cover letter"
                      type="button"
                      className="flex items-center justify-center px-4 py-3 transition-colors duration-300 bg-white rounded-md outline-none w-44 gap-x-3 lg:py-3 lg:px-6 group hover:bg-orange hover:text-white focus-visible:bg-orange focus-visible:text-white"
                    >
                      <span className="text-sm font-medium tracking-wider font-regular lg:text-base">
                        Cover letter
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="none"
                        className="w-5 h-5 transition-colors duration-300 group-hover:fill-white fill-orange group-focus-visible:fill-white"
                      >
                        <path
                          d="M11.2031 15.5265H13.2031V9.52649H16.2031L12.2031 4.52649L8.20312 9.52649H11.2031V15.5265Z"
                          fill="inherit"
                        />
                        <path
                          d="M20.2031 18.5265H4.20312V11.5265H2.20312V18.5265C2.20312 19.6295 3.10012 20.5265 4.20312 20.5265H20.2031C21.3061 20.5265 22.2031 19.6295 22.2031 18.5265V11.5265H20.2031V18.5265Z"
                          fill="inherit"
                        />
                      </svg>
                    </button>
                    <input
                      ref={coverInputRef}
                      type="file"
                      name="coverLetter"
                      id="coverLetter"
                      className="hidden"
                      // value={values.coverLetter}
                      onChange={(
                        e: React.InputHTMLAttributes<HTMLInputElement>,
                      ) => {
                        handleCoverChange(e)
                        handleChange(e)
                      }}
                    />
                  </div>

                  <span>{files.coverLetter?.name}</span>

                  {/* {errors.coverLetter && !files.coverLetter && (
                    <small className="text-[#f12626] pt-3 lg:pt-0 text-base tracking-wider font-light flex flex-nowrap items-center gap-1">
                      {errors.coverLetter}
                    </small>
                  )} */}
                </div>

                <div className="mt-8 md:mt-12">
                  <label
                    className="flex flex-col gap-1 mt-4 text-base text-black capitalize md:mt-7 md:text-lg lg:text-xl font-regular"
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
                  </label>
                </div>

                <div className="flex mt-8 lg:mt-12 ">
                  <button
                    aria-label="Submit the query form"
                    disabled={isLoading}
                    type="submit"
                    className={`w-44 justify-center disabled:opacity-60 disabled:cursor-not-allowed font-regular font-medium tracking-wider stroke-orange hover:stroke-white 
      focus-visible:stroke-white focus:outline-none rounded-md focus-visible:text-white hover:fill-white focus-visible:fill-white
      active:outline-none fill-orange  bg-white border-solid hover:text-white outline-none px-8 py-3 flex items-center gap-3 hover:bg-orange 
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
