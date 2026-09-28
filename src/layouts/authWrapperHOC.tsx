import React, { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAdmin } from 'store/store'
import Spinner from 'organisms/spinner'

import axios from 'utils/axios'
import { ToastData } from 'layouts/adminLayout'

const errorMsg: ToastData = {
  status: 'error',
  message: 'Please signin to access the resource',
}

const AuthWrapperHOC: React.FC<{
  children: ReactNode
  ignoreSigninCheck?: boolean
}> = ({ children, ignoreSigninCheck }) => {
  const { state, addAdmin, setIsLoading, showToast, setIsAuthChecked } =
    useAdmin()
  const navigate = useNavigate()
  const location = useLocation()

  // Code for auto login
  useEffect(() => {
    // To clear the toast
    showToast({
      status: 'none',
      message: '',
    })

    // If resource is accessible
    if (ignoreSigninCheck) return

    // If user is already signedin
    if (state.isAuthenticated) return

    // If user is not signedin and we already checked for it's auth status
    if (state.isAuthChecked && !state.isAuthenticated) {
      // showToast(errorMsg)
      navigate('/admin/signin')
      return
    }

    // If user is not authenticated and we didn't checked it's auth status yet
    const autoSignInHandler = async () => {
      setIsAuthChecked(true)
      setIsLoading(true)
      try {
        const { data } = await axios.post('/current')
        if (data.admin) {
          const pName = location.pathname
          if (pName === '/admin' || pName.includes('signin')) {
            navigate('/admin/admins-list')
          }
          addAdmin(data.admin)
        } else {
          throw new Error('Token expired! Signin again.')
        }
      } catch (error) {
        setIsLoading(false)
        showToast(errorMsg)
        navigate('/admin/signin')
      } finally {
        setIsLoading(false)
      }
    }

    autoSignInHandler()
  }, [state.isAuthenticated, ignoreSigninCheck])

  return (
    <section className="w-full h-full px-10 pt-6 pb-16 font-regular">
      {state.isLoading && <Spinner />}
      {children}
    </section>
  )
}

export default AuthWrapperHOC
