import React, { useEffect, useState } from 'react'
import logo from 'assets/globals/logo_svg.svg'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { modalInitialState, useAdmin } from 'store/store'
import axios from 'utils/axios'
import ConfirmModal from 'layouts/confirmModal'

const views = [
  // {
  //   option: 'Admins',
  //   to: '/admin/admins-list',
  // },
  // {
  //   option: 'Home',
  //   to: '/admin',
  // },
  // {
  //   option: 'Reset password',
  //   to: '/admin/reset-password',
  // },
  // {
  //   option: 'Forgot password',
  //   to: '/admin/forgot',
  // },
  {
    option: 'Home',
    to: '/admin/home',
  },
  {
    option: 'Who We Are',
    to: '/admin/who-we-are',
  },
  {
    option: 'Premier Elite',
    to: '/admin/premier-elite',
  },
  {
    option: 'Premier Select',
    to: '/admin/premier-select',
  },
  {
    option: 'Awards and Recognition',
    to: '/admin/awards-and-recognitions',
  },
  {
    option: 'Careers',
    to: '/admin/careers',
  },
  {
    option: 'Contact Us',
    to: '/admin/contact-us',
  },
  {
    option: 'Cath Labs Family',
    to: '/admin/cath-labs',
  },
  {
    option: 'Pinnacle Agile',
    to: '/admin/pinnacle-agile',
  },
  {
    option: 'News and Articles',
    to: '/admin/resources',
  },
  {
    option: 'Service and Support',
    to: '/admin/services-and-support',
  },
]

export type ToastData = {
  status: 'success' | 'error' | 'none'
  message: string
}

export default function AdminLayout() {
  const { state, removeAdmin, showToast, setIsLoading } = useAdmin()

  const [modal, setModal] = useState(modalInitialState)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const toastData = state.errors

    if (toastData?.status === 'success') {
      toast.success(toastData.message)
    }
    if (toastData?.status === 'error') {
      toast.error(toastData.message)
    }
  }, [state.errors])

  useEffect(() => {
    if (!modal.isConfirmed) return

    const signoutHandler = async () => {
      setIsLoading(true)
      try {
        await axios.get('/signout')
        removeAdmin()
        setModal(modalInitialState)
        showToast({ message: 'Logout successful', status: 'success' })
        navigate('/admin/signin')
      } catch (error: any) {
        showToast({
          status: 'error',
          message: error?.response?.data?.message || 'Something went wrong',
        })
      } finally {
        setIsLoading(false)
      }
    }

    signoutHandler()
  }, [modal.isConfirmed])

  return (
    <section className="flex font-regular">
      <ToastContainer />
      <ConfirmModal modal={modal} setModal={setModal} />

      {/* Left navigation */}
      {state.isAuthenticated ? (
        <aside
          className="border-r-1 border-gray border-opacity-50 w-fit sticky top-0 h-min xl:h-screen overflow-y-auto shrink-0"
          style={{
            overscrollBehavior: 'none',
          }}
        >
          <div className="px-8 sticky top-0 bg-white pt-8 pb-8 w-full">
            <a href="https://innvolution.com/" target="_blank">
              <img
                src={logo}
                alt="Innovolution logo"
                className="h-10 lg:h-16 w-auto "
                loading="eager"
              />
            </a>
          </div>

          <ul className="mt-1 px-4 2xl:px-8">
            {views.map((nav) => {
              return (
                <li key={nav.to}>
                  <NavLink
                    to={nav.to}
                    className={() =>
                      ' flex flex-nowrap items-center gap-2 text-base rounded-md font-regular tracking-wide pl-4 pr-8 2xl:pr-16 py-3.5 2xl:py-4 w-full transition-colors duration-200 ease-in-out cursor-pointer ' +
                      `${
                        location.pathname === nav.to
                          ? 'bg-lightorange text-black'
                          : 'bg-white text-black hover:bg-orange hover:bg-opacity-25'
                      }`
                    }
                  >
                    {nav.option}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div
            className="sticky bottom-0 mt-1 bg-white px-4 2xl:px-7 py-4 border-t-1 border-gray border-opacity-40
            flex flex-col gap-4
          "
          >
            <button
              aria-label="Sign out"
              type="button"
              onClick={() => navigate('/admin/admins-list')}
              className={`capitalize border-2 border-lightorange flex flex-nowrap justify-center items-center gap-2 text-base font-medium 
            px-3 py-3 w-full hover:bg-opacity-90 rounded-lg transition-colors duration-200 hover:bg-lightorange
            ease-in-out cursor-pointer tracking-wide ${
              location.pathname.includes('admins-list') && 'bg-lightorange'
            }
          `}
            >
              Admin panel
            </button>
            <button
              aria-label="Sign out"
              type="button"
              onClick={() =>
                setModal({
                  isConfirmed: false,
                  isOpen: true,
                  message: 'Are you sure you want to Logout?',
                })
              }
              className="capitalize bg-red-400 flex flex-nowrap justify-center items-center gap-2 text-base font-medium 
            px-3 py-3 w-full hover:bg-red-500 text-white rounded-lg transition-colors duration-200 
            ease-in-out cursor-pointer tracking-wide 
          "
            >
              Logout
            </button>
          </div>
        </aside>
      ) : null}

      {/* Main layout */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
    </section>
  )
}
