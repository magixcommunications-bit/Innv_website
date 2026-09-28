import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from 'assets/globals/logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import axios from 'utils/axios'
import { useAdmin } from 'store/store'
import EmailInput from 'molecules/inputs/emailInput'
import { emailSchema } from 'utils/zod'

// Schema for form validaton using zod
const forgotPassSchema = z.object({
  email: emailSchema,
})

let _id: string = ''
type ForgotPassValues = z.infer<typeof forgotPassSchema>

const ForgotPassword = () => {
  const { setIsLoading, showToast } = useAdmin()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassValues>({
    resolver: zodResolver(forgotPassSchema),
  })

  const forgotPassHandler: SubmitHandler<ForgotPassValues> = async ({
    email,
  }) => {
    // console.log(data)
    try {
      setIsLoading(true)
      const mailObj = { email }
      const { data } = await axios.post('/forgot-password', mailObj)
      // console.log(data)
      _id = data.admin._id
      showToast({
        status: 'success',
        message: 'OTP sent to the registered mail',
      })
      navigate('/admin/otp-verification' + _id)
    } catch (error: any) {
      setIsLoading(false)
      showToast({
        status: 'error',
        message: error?.response?.data?.message || 'Something went wrong',
      })
    } finally {
      navigate('/admin/otp-verification/' + _id) // TODO: remove it later-just for testing now
      setIsLoading(false)
    }
  }

  return (
    <AuthWrapperHOC ignoreSigninCheck>
      <section className="h-full w-full grid place-content-center">
        <img
          src={logo}
          alt="Innvolution logo"
          className="h-20 w-fit mb-20 mx-auto"
        />
        <form
          method="post"
          onSubmit={handleSubmit(forgotPassHandler)}
          className="form flex flex-col gap-4"
        >
          {/* Email input box */}
          <EmailInput
            label="Email"
            errors={errors}
            placeholder="Enter your registered email"
            register={register}
          />

          <div className="text-orange ">
            <Link to={'/admin/signin'} className="font-medium outline-orange">
              Already have an account?
            </Link>
          </div>

          <button type="submit" className="bg-black button-submit font-medium">
            Submit
          </button>
        </form>
      </section>
    </AuthWrapperHOC>
  )
}

export default ForgotPassword
