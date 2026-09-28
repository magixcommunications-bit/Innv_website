import React from 'react'

import logo from 'assets/globals/logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import axios from 'utils/axios'
import { useAdmin } from 'store/store'
import PasswordInput from 'molecules/inputs/passwordInput'
import { passwordSchema } from 'utils/zod'
import { useNavigate } from 'react-router-dom'

// Schema for form validaton using zod
const resetPassSchema = z
  .object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'Old and new passwords are equal!',
    path: ['newPassword'], // error associated with
  })

type ResetPassValues = z.infer<typeof resetPassSchema>

const ResetPassword = () => {
  const { setIsLoading, showToast, state } = useAdmin()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassValues>({
    resolver: zodResolver(resetPassSchema),
  })

  const resetPassHandler: SubmitHandler<ResetPassValues> = async (data) => {
    // console.log(data)
    const _id = state.admin?._id
    try {
      setIsLoading(true)
      await axios.post('/reset-password/' + _id, data)
      showToast({
        status: 'success',
        message: 'Password changed successfully',
      })
      navigate('/admin/admins-list')
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
    <AuthWrapperHOC>
      <section className="h-full w-full grid place-content-center">
        <img
          src={logo}
          alt="Innvolution logo"
          className="h-20 w-fit mb-20 mx-auto"
        />
        <form
          method="post"
          onSubmit={handleSubmit(resetPassHandler)}
          className="form flex flex-col gap-4"
        >
          <PasswordInput
            label="Old password"
            placeholder="Enter your old password"
            register={register}
            errors={errors.oldPassword}
            registerer="oldPassword"
          />
          <PasswordInput
            label="New password"
            placeholder="Enter your new password"
            register={register}
            errors={errors.newPassword}
            registerer="newPassword"
          />
          <button type="submit" className="bg-black button-submit font-medium">
            Submit
          </button>
        </form>
      </section>
    </AuthWrapperHOC>
  )
}

export default ResetPassword
