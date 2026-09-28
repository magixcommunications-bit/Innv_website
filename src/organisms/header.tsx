import React, { useReducer, useRef, useEffect } from 'react'
import logo from 'assets/globals/logo_svg.svg'
import { useNavigate, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextNavAnchor } from 'atoms/links'
import MobileNavModal from './mobileNav'
import logoMobile from 'assets/globals/logo_mobile.svg'
import { Popover, Transition as PopTransition } from '@headlessui/react'

import './header.css'
import CathLabRoutes from 'molecules/cathLabRoutes'
import StentRoutes from 'molecules/stentRoutes'
import BalloonRoutes from 'molecules/balloonRoutes'
import ResourceRoutes from 'molecules/resourceRoutes'
import OtherRoutes from 'molecules/otherRoutes'
import NumenRoutes from 'molecules/numenRoutes'
import CardiacRoutes from 'molecules/cardiacRoutes'
import VivoHeartsRoutes from 'molecules/vivoHeartRoutes'
import InnvoShieldRoutes from 'molecules/InnvoShieldRoutes'
import ClearpacRoutes from 'molecules/clearpacRoutes'
import IsailedgealignRoutes from 'molecules/IsailedgealignRoutes'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const [mobileNav, toggleMobileNav] = useReducer((s) => !s, false)
  const headerWrapperRef = useRef(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const servicesBtn = useRef<HTMLButtonElement>(null)
  const productsBtn = useRef<HTMLButtonElement>(null)
  const techBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileNav])

  useEffect(() => {
    const showAnim = gsap
      .from(headerWrapperRef?.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1)
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }
      },
    })
  }, [])

  const popNavigation = (
    target: string,
    popId: 'tech' | 'products' | 'services',
  ) => {
    switch (popId) {
      case 'tech': {
        navigate('/coming-soon')
        close()
        // navigate(`/tech/${target}`)
        // close()
        return techBtn.current?.click()
      }
      case 'products': {
        navigate('/coming-soon')
        close()
        // navigate(`/products/${target}`)
        // close()
        return productsBtn.current?.click()
      }
      case 'services': {
        navigate('/coming-soon')
        close()
        // navigate(`/resources/${target}`)
        // close()
        return servicesBtn.current?.click()
      }
      default:
    }
  }
  return (
    <>
      <div
        className={`fixed max-w-md w-full top-0 right-0 h-screen bottom-0 tranition-all duration-300 ease-in-out bg-opacity-50 xl:hidden block z-[9999] ${
          mobileNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto z-[9999]">
          <MobileNavModal toggle={toggleMobileNav} />
        </div>
      </div>

      <header
        ref={headerWrapperRef}
        className="fixed top-0 left-0 right-0 z-50 pt-0 bg-white lg:bg-transparent xl:pt-3 mob-header-shadow"
      >
        <nav className="top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-5 py-0 bg-white realtive flex-nowrap 2xl:gap-6 xl:bg-transparent md:py-3 md:pl-5 w-container-full xl:w-container-lg 2xl:w-container">
          <div className="relative flex items-center self-stretch flex-1 min-h-full py-3 bg-white rounded-md 2xl:py-5 header-shadow">
            <div className="grid px-1 pl-2 flex-0 xl:pl-4 place-content-start md:place-content-center basis-44 2xl:basis-48">
              <Link to="/">
                <img
                  src={logo}
                  className="hidden object-contain object-center w-auto h-10 md:block xl:h-12"
                  alt="Logo of Innvolution"
                />
                <img
                  src={logoMobile}
                  className="block object-contain object-center w-auto h-10 pl-1 md:hidden xl:h-12"
                  alt="Logo of Innvolution"
                />
              </Link>
            </div>
            <div className="items-center justify-end flex-1 hidden gap-5 pr-10 lg:pr-4 xl:pr-10 xl:gap-10 xl:flex">
              <TextNavAnchor
                size="base"
                className="xl:!text-lg hover:text-orange"
                href="/who-we-are"
                text="Who we are"
              />

              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      onClick={() => {
                        document.addEventListener('scroll', () => close(), {
                          once: true,
                        })
                      }}
                      className="flex items-center gap-1 text-base text-black transition-colors ease-in-out outline-none hover:text-orange lg:text-lg hover:underline font-regular whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 focus-visible:text-opacity-100 hover:text-opacity-100"
                    >
                      Products
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className={` ${
                          open ? 'rotate-180' : ''
                        } transition-all ease-in-out w-4 h-4`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Popover.Button>

                    <PopTransition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                      className="absolute top-[6rem] xl:top-[5rem] 2xl:top-[6.5rem] lg:left[7vw] xl:left[24.5vw] xxl:left[32.5%] 2xl:left[41.5%] -translate-x-1/2 left-1/2 w-full header-shadow rounded-md"
                    >
                      <Popover.Panel className=" max-xl:w-[88.5vw] origin-left p-5 rounded-md flex bg-white ">
                        <div className="basis-[24%] grow-0 shrink p-2 flex flex-col gap-1">
                          <CathLabRoutes onClose={close} />
                        </div>
                        <div className="basis-[24%] grow-0 shrink  flex flex-col  p-2 gap-1">
                          <StentRoutes onClose={close} />
                        </div>
                        <div className="xl:basis-[35%] 2xl:basis-[28%] grow-0 shrink  flex flex-col  p-2 gap-1">
                          <BalloonRoutes onClose={close} />
                        </div>
                        <div className="xl:basis-[35%] 2xl:basis-[28%] grow-0 shrink  flex flex-col  p-2 gap-1">
                          <NumenRoutes onClose={close} />
                          <CardiacRoutes onClose={close} />
                        </div>
                        <div className="xl:basis-[35%] 2xl:basis-[28%] grow-0 shrink  flex flex-col  p-2 gap-1">
                          <VivoHeartsRoutes onClose={close} />
                          <InnvoShieldRoutes onClose={close} />
                          <ClearpacRoutes onClose={close} />
                          <IsailedgealignRoutes onClose={close} />
                          <OtherRoutes onClose={close} />
                        </div>
                        {/* <div className="xl:basis-[24%] grow shrink flex flex-col gap-1 items-start justify-start pt-2"></div> */}
                      </Popover.Panel>
                    </PopTransition>
                  </>
                )}
              </Popover>

              {/* <TextNavAnchor
                size="base"
                className="xl:!text-lg hover:text-orange"
                href="/services-and-support"
                text="Services & support "
              /> */}
              <TextNavAnchor
                size="base"
                className="xl:!text-lg hover:text-orange"
                href="/clinical-gallery"
                text="Clinical gallery "
              />
              <TextNavAnchor
                size="base"
                className="xl:!text-lg hover:text-orange"
                href="/innovation"
                text="Innovation"
              />

              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      onClick={() => {
                        document.addEventListener('scroll', () => close(), {
                          once: true,
                        })
                      }}
                      className="relative flex items-center gap-1 text-base text-black transition-colors duration-300 ease-in-out outline-none hover:text-orange lg:text-lg hover:underline font-regular whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 focus-visible:text-opacity-100 hover:text-opacity-100"
                    >
                      Resources
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className={` ${
                          open ? 'rotate-180' : ''
                        } transition-all duration-300 ease-in-out w-4 h-4`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Popover.Button>

                    <PopTransition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                      className="absolute top-[6rem] xl:top-[5rem] 2xl:top-[6.5rem] -translate-x-[49%] xl:-translate-x-[55%] w-60 xl:w-80 header-shadow"
                    >
                      <Popover.Panel className="flex p-3 bg-white rounded-md ">
                        <div className="p-2">
                          <div className="flex flex-col items-start">
                            <ResourceRoutes onClose={close} />
                          </div>
                        </div>
                      </Popover.Panel>
                    </PopTransition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <div className="self-stretch hidden min-h-full rounded-md flex-0 md:block md:basis-44 2xl:basis-48 header-shadow">
            <Link
              to="/contact-us"
              className="flex items-center justify-center h-full gap-3 px-3 py-3 text-lg tracking-wide text-black transition-all duration-300 ease-in-out bg-white border-2 border-transparent rounded-md font-regular stroke-orange hover:stroke-white hover:fill-white fill-orange outline-orange hover:border-white hover:text-white lg:py-5 hover:bg-orange "
            >
              Contact us
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
            </Link>
          </div>
          <div className="block pr-1 xl:hidden md:mr-8">
            <button
              onClick={toggleMobileNav}
              className="p-3 bg-white rounded-full outline-none bg-opacity-40 header-shadow stroke-blue"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="inherit"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
