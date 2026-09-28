import React, { MouseEventHandler } from 'react'
import { TextNavAnchor } from 'atoms/links'
import logoMobile from 'assets/globals/logo_svg.svg'
import { Disclosure, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import ResourceRoutes from 'molecules/resourceRoutes'
import BalloonRoutes from 'molecules/balloonRoutes'
import StentRoutes from 'molecules/stentRoutes'
import CathLabRoutes from 'molecules/cathLabRoutes'
import OtherRoutes from 'molecules/otherRoutes'
import SocialProfile from 'molecules/socialProfile'
import NumenRoutes from 'molecules/numenRoutes'
import CardiacRoutes from 'molecules/cardiacRoutes'
import VivoHeartsRoutes from 'molecules/vivoHeartRoutes'
import InnvoShieldRoutes from 'molecules/InnvoShieldRoutes'
import ClearpacRoutes from 'molecules/clearpacRoutes'
import IsailedgealignRoutes from 'molecules/IsailedgealignRoutes'

export default function MobileNavModal({
  toggle,
}: {
  toggle: React.DispatchWithoutAction
}) {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col min-h-screen bg-white">
      <div className="flex justify-between gap-3 px-3 py-5 flex-0">
        <div>
          <img
            src={logoMobile}
            className="object-contain object-center w-auto h-12"
            alt="Logo of Innvolution"
          />
        </div>

        <button
          onClick={toggle}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex flex-col justify-between flex-1 h-full">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <ul className="flex flex-col gap-3 px-3 pt-8" onKeyDown={toggle}>
            <li onClick={toggle}>
              <TextNavAnchor
                size="large"
                href="/who-we-are"
                text="Who we are"
              />
            </li>

            <Disclosure>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between gap-1 pr-2 text-base text-left text-black transition-colors duration-300 ease-in-out outline-none hover:underline font-regular whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 focus-visible:text-opacity-100 hover:text-opacity-100">
                    Products
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
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform  opacity-0 "
                  >
                    <Disclosure.Panel
                      static
                      className="px-1 py-2 bg-lightgray bg-opacity-30"
                      // className="grid grid-cols-2 px-1 py-2 bg-lightgray bg-opacity-30 gap-y-5"
                    >
                      <div className="gap-1 p-2 pt-3 basis-60 grow-0 shrink">
                        <CathLabRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-2 pt-3 basis-60 grow-0 row-span- shrink">
                        <StentRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <BalloonRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <NumenRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <CardiacRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <VivoHeartsRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <InnvoShieldRoutes
                          onClose={toggle}
                          onCloseMob={close}
                          isColumnView
                        />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <ClearpacRoutes onClose={close} />
                      </div>
                      <div className="flex flex-col flex-shrink-0 col-span-2 gap-1 p-2 pt-3 basis-full grow0">
                        <IsailedgealignRoutes onClose={close} />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-0 p-2 pt-3 basis-60 grow-0 shrink">
                        <OtherRoutes onClose={toggle} onCloseMob={close} />
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <span onClick={toggle}>
              <TextNavAnchor
                size="large"
                href="/services-and-support"
                text="Services & support"
              />
            </span>
            <span onClick={toggle}>
              <TextNavAnchor
                size="large"
                href="/contact-us"
                text="Contact us"
              />
            </span>
            <span onClick={toggle}>
              <TextNavAnchor
                size="large"
                href="/innovation"
                text="Innovation"
              />
            </span>
            {/* <li onClick={toggle}>
              <TextNavAnchor size="large" href="resources" text="Resources" />
            </li> */}
            <Disclosure>
              {({ open, close }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between gap-1 pr-2 text-base text-left text-black transition-colors duration-300 ease-in-out outline-none hover:underline font-regular whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 focus-visible:text-opacity-100 hover:text-opacity-100">
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
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform  opacity-0 "
                  >
                    <Disclosure.Panel
                      static
                      className="grid px-1 py-2 bg-lightgray bg-opacity-30 grid-cols "
                    >
                      <div className="gap-1 p-2 basis-60 grow-0 shrink">
                        <div className="flex flex-col items-start gap-1">
                          <ResourceRoutes onClose={toggle} onCloseMob={close} />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </ul>
          <div className="pb-20">
            <SocialProfile classes="gap-x-5 items-center justify-center " />
          </div>
        </div>
      </div>
    </section>
  )
}
