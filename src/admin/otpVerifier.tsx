import React from 'react'

import logo from 'assets/globals/logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import axios from 'utils/axios'
import { useAdmin } from 'store/store'
import PasswordInput from 'molecules/inputs/passwordInput'
import { passwordSchema, testPasswordSchema } from 'utils/zod'
import { useNavigate, useParams } from 'react-router-dom'

// Schema for form validaton using zod
const setPassSchema = z.object({
  otp: testPasswordSchema,
  password: passwordSchema,
})

type SetPassValues = z.infer<typeof setPassSchema>

const OTPVerifier = () => {
  const { setIsLoading, showToast } = useAdmin()
  const { _id } = useParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetPassValues>({
    resolver: zodResolver(setPassSchema),
  })

  const setPassHandler: SubmitHandler<SetPassValues> = async (data) => {
    // console.log(data)

    try {
      setIsLoading(true)
      await axios.post('/forgot-otp/' + _id, data)

      showToast({
        status: 'success',
        message: 'Password changed successfully',
      })

      navigate('/admin/signin')
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
    <AuthWrapperHOC ignoreSigninCheck>
      <section className="h-full w-full grid place-content-center">
        <img
          src={logo}
          alt="Innvolution logo"
          className="h-20 w-fit mb-20 mx-auto"
        />
        <form
          method="post"
          onSubmit={handleSubmit(setPassHandler)}
          className="form flex flex-col gap-4"
        >
          <PasswordInput
            label="OTP"
            placeholder="Enter otp"
            register={register}
            errors={errors.otp}
            registerer="otp"
          />
          <PasswordInput
            label="New password"
            placeholder="Enter your new password"
            register={register}
            errors={errors.password}
            registerer="password"
          />
          <button type="submit" className="bg-black button-submit font-medium">
            Submit
          </button>
        </form>
      </section>
    </AuthWrapperHOC>
  )
}

export default OTPVerifier
