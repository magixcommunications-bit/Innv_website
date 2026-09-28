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
import PasswordInput from 'molecules/inputs/passwordInput'
import { emailSchema, passwordSchema } from 'utils/zod'

// Schema for form validaton using zod
const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

type SignInFormValues = z.infer<typeof signInSchema>

const AdminSignIn = () => {
  const { setIsLoading, addAdmin, showToast } = useAdmin()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const signInHandler: SubmitHandler<SignInFormValues> = async (data) => {
    // console.log(data)

    try {
      setIsLoading(true)
      await axios.post('/signin', data)
      const adminDetails = await axios.post('/current')
      // console.log(adminDetails)

      if (!adminDetails?.data?.admin) {
        throw new Error('Something went wrong')
      }

      addAdmin(adminDetails.data.admin)
      showToast({
        status: 'success',
        message: 'Sign In successful',
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
          onSubmit={handleSubmit(signInHandler)}
          className="form flex flex-col gap-4"
        >
          <EmailInput
            label="Email"
            errors={errors}
            placeholder="Enter your Email"
            register={register}
          />
          <PasswordInput
            label="Password"
            registerer="password"
            errors={errors.password}
            placeholder="Enter your Password"
            register={register}
          />

          <div className="text-orange ">
            <Link to={'/admin/forgot'} className="font-medium outline-orange">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="bg-black button-submit font-medium">
            Sign In
          </button>
        </form>
      </section>
    </AuthWrapperHOC>
  )
}

export default AdminSignIn
