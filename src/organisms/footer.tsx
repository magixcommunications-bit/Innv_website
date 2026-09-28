import React, { ReactNode } from 'react'
import { TextAnchor } from 'atoms/links'
import logoSVG from 'assets/globals/logo_svg.svg'
import { Disclosure, Transition } from '@headlessui/react'
import CathLabRoutes from 'molecules/cathLabRoutes'
import StentRoutes from 'molecules/stentRoutes'
import BalloonRoutes from 'molecules/balloonRoutes'
import OtherRoutes from 'molecules/otherRoutes'
import SocialProfile from 'molecules/socialProfile'
import ScrollToTopBtn from 'molecules/ScrollToTopBtn'
import NumenRoutes from 'molecules/numenRoutes'
import CardiacRoutes from 'molecules/cardiacRoutes'
import VivoHeartsRoutes from 'molecules/vivoHeartRoutes'
import InnvoShieldRoutes from 'molecules/InnvoShieldRoutes'
import ClearpacRoutes from 'molecules/clearpacRoutes'
import IsailedgealignRoutes from 'molecules/IsailedgealignRoutes'

export default function Footer({
  toggle,
}: {
  toggle: React.DispatchWithoutAction
}) {
  return (
    <footer>
      <section className="font-regular">
        <section className="flex flex-col grid-cols-1 border-solid lg:grid xsl:gap-y-10 md:grid-cols-12 lg:divide-x-1 divide-solid divide-gray border-t-1 border-gray ">
          {/* Addess section (left in desk) */}
          <section className="w-11/12 col-start-1 col-end-2 mx-auto md:col-end-4 lg:col-start-1 lg:col-end-4 lg:px-8 blade-top-padding lg:blade-top-padding-sm lg:w-full lg:mx-0 xsl:px-10 xsl:col-start-2 xsl:col-end-5 xsl:pl-0">
            <div className="grid min-[500px]:grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-1 lg:gap-y-10 2xl:w-10/12">
              <div>
                <Contact
                  title="Contact"
                  text="+91 9035754634"
                  linkTo="tel:+91 9035754634"
                />
              </div>
              <div>
                <Contact
                  title="E-mail"
                  text="info@innvolution.com"
                  linkTo="mailto:info@innvolution.com"
                />
              </div>
              <div className="min-[500px]:col-span-2 lg:col-span-1">
                <Title title="Address" />

                <ul className="max-w-md font-regular">
                  <li className="text-sm lg:text-base">
                    Plot No. 143-A1, Bommasandra Industrial Area, Hebbagodi
                    Village, Attibele Hobli, Anekal Taluk, Bangalore - 560099,
                    Karnataka, INDIA
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Company, resources and products section */}
          <section className="grid w-11/12 pt-6 mx-auto h-min lg:blade-top-padding-sm blade-bottom-padding md:blade-bottom-padding-sm gap-y-6 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 xsl:col-start-5 xsl:col-end-12 xsl:pr-0 lg:col-start-4 lg:col-end-13 lg:gap-x-16 lg:gap-y-10 lg:px-8 xsl:px-10 2xl:px-20 lg:w-full">
            {/* Company part */}
            <div className="sm:col-span-3 ">
              <Title title="Company" />

              <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                <TextAnchor
                  className="hover:text-orange"
                  href="/who-we-are"
                  text="Who we are"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/innovation"
                  text="Innovation "
                />
                {/* <TextAnchor
                  className="hover:text-orange"
                  href="/services-and-support"
                  text="Services & Support"
                /> */}
                <TextAnchor
                  className="hover:text-orange"
                  href="/clinical-gallery"
                  text="Clinical Gallery"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/contact-us"
                  text="Contact Us"
                />
              </div>
            </div>
            {/* Resource part */}
            <div className="sm:col-span-3">
              <Title title="Resources" />

              <div className="flex flex-col gap-y-2 md:grid md:grid-cols-2 gap-x-6">
                <TextAnchor
                  className="hover:text-orange"
                  href="/awards-and-recognitions"
                  text="Awards & recognitions"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/investors"
                  text="Investors"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/resources"
                  text="News & articles"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/careers"
                  text="Careers"
                />
                <TextAnchor
                  className="hover:text-orange"
                  href="/services-and-support"
                  text="Services & Support"
                />
              </div>
            </div>
            {/* Product part - For phhone */}
            <div className="sm:col-span-6">
              <Title title="Products" />

              <div className="flex flex-col items-start sm:grid sm:grid-cols-2 sm:gap-x-10 gap-y-2 md:hidden ">
                <MobDropdownNav
                  title="Cath Labs family"
                  options={
                    <CathLabRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="Stents family"
                  options={
                    <StentRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="Balloon Catheters family"
                  options={
                    <BalloonRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="Neurovascular Accessories"
                  options={
                    <NumenRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="Cardiac Accessories"
                  options={
                    <CardiacRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="Intravascular Accessories"
                  options={
                    <VivoHeartsRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title=" Radiation Protection Solution"
                  options={
                    <InnvoShieldRoutes
                      onClose={toggle}
                      isColumnView
                      hideTitle
                    />
                  }
                />
                <MobDropdownNav
                  title="Clear pac"
                  options={
                    <ClearpacRoutes onClose={toggle} isColumnView hideTitle />
                  }
                />
                <MobDropdownNav
                  title="iSail Edge Align"
                  options={
                    <IsailedgealignRoutes
                      onClose={toggle}
                      isColumnView
                      hideTitle
                    />
                  }
                />
                <div className="flex flex-col self-stretch">
                  <div className="sm:hidden">
                    <OtherRoutes onClose={toggle} hideTitle />
                  </div>
                  <div className="hidden sm:block">
                    <OtherRoutes onClose={toggle} isColumnView hideTitle />
                  </div>
                </div>
              </div>

              {/* For desktop */}
              <div className="hidden md:flex md:justify-between gap-x-10 xl:gap-x-[20px] 2xl:gap-x-[16px]">
                <div>
                  <CathLabRoutes onClose={toggle} />
                </div>
                <div>
                  <StentRoutes onClose={toggle} />
                </div>
                <div>
                  <BalloonRoutes onClose={toggle} />
                </div>
                <div>
                  <NumenRoutes onClose={toggle} />
                  <CardiacRoutes onClose={toggle} />
                </div>
                <div>
                  <VivoHeartsRoutes onClose={toggle} />
                  <InnvoShieldRoutes onClose={toggle} />
                  <ClearpacRoutes onClose={toggle} />
                  <IsailedgealignRoutes onClose={close} />
                  <OtherRoutes onClose={toggle} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* Social links section */}
      <section className="flex flex-col-reverse grid-cols-1 border-solid gap-y-6 blade-top-padding blade-bottom-padding sm:py-0 sm:grid sm:grid-cols-2 lg:grid-cols-12 md:divide-x-1 divide-solid divide-gray border-t-1 border-gray">
        <img
          src={logoSVG}
          alt="Innvolutions's logo"
          className="h-16 col-start-1 mx-auto xsl:h-20 md:col-start-1 lg:col-end-4 sm:blade-top-margin sm:blade-bottom-margin lg:blade-top-margin-sm lg:blade-bottom-margin-sm xsl:col-start-1 xsl:col-end-5"
        />
        <article className="flex flex-col items-center justify-center w-11/12 mx-auto lg:px-8 xsl:px-10 2xl:px-20 lg:w-full lg:flex-row lg:justify-between gap-y-2 lg:col-start-4 lg:col-end-13 xsl:col-start-5 xsl:col-end-13">
          <SocialProfile classes="gap-x-5 " />
          <div className="">
            <TextAnchor
              className="hover:text-orange"
              text="Privacy policy"
              href="/privacy-policy"
            />{' '}
            /{' '}
            <TextAnchor
              className="hover:text-orange"
              text="Terms & conditions"
              href="/terms-and-conditions"
            />
          </div>
          <div className="text-black text-opacity-80 font-regular text-[14px] lg:text-sm mr-[7%]">
            Copyright © {new Date().getFullYear().toString()} Innvolution
          </div>
        </article>
      </section>
      <ScrollToTopBtn />
    </footer>
  )
}

function Title({ title }: { title: string }) {
  return (
    <span className="block w-full pb-2 mb-2 text-base font-medium uppercase border-solid border-b-1 border-gray text-orange md:text-lg">
      {title}
    </span>
  )
}

function Contact({
  title,
  text,
  linkTo,
}: {
  title: string
  text: string
  linkTo: string
}) {
  return (
    <>
      <Title title={title} />
      <div className="font-regular ">
        <a
          className="text-sm transition-colors outline-none lg:text-base focus-visible:text-orange hover:text-orange hover:underline focus-visible:underline underline-offset-4"
          href={linkTo}
        >
          {text}
        </a>
      </div>
    </>
  )
}

function MobDropdownNav({
  title,
  options,
}: {
  title: string
  options: JSX.Element
}) {
  return (
    <div className="flex flex-col self-stretch">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between pr-2 text-sm font-medium text-left text-black transition-colors duration-300 ease-in-out outline-none lg:text-base hover:underline whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 focus-visible:text-opacity-100 hover:text-opacity-100">
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className={`mt-1 ${
                  open ? 'rotate-180' : ''
                } transition-all duration-300 ease-in-out w-3 h-3 md:h-4 md:w-4`}
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
              <Disclosure.Panel static className="pt-2 pb-4">
                {options}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
