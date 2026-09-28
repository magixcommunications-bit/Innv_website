import React from 'react'
import CallIcon from 'assets/contact/call-icon.svg'
import EmailIcon from 'assets/contact/email-icon.svg'
import AddressIcon from 'assets/contact/AdderessIcon.svg'
import { useAdmin } from 'store/store'

const ContactDetails = () => {
  const { homeData } = useAdmin()

  return (
    <div className="lg:w-[40%] self-stretch lg:border-r-2 font-regular border-opacity-25 border-white bg-lightorange blade-bottom-padding-lg blade-top-padding-lg 2xl:blade-top-padding-lg md:blade-top-padding md:px-4  ">
      <div className="flex flex-col justify-around w-11/12 max-w-4xl px-3 md:-mt-2 2xl:mt-0 lg:sticky lg:top-20 gap-x-10 2xl:w-10/12 lg:max-w-xl md:pl-5 lg gap-y-6 :flex-row lg:flex-col lg:justify-center lg:mx-auto">
        <div className="flex gap-x-4 lg:mt-4">
          <span className="w-[3.5rem]">
            <img src={CallIcon} alt="call icon" aria-hidden />
          </span>
          <div className="w-full ">
            <h4 className="font-medium ">Call us</h4>

            <div className="w-[60px] mt-2 border-b-1 border-white border-opacity-60" />

            <div className="flex flex-col lg:flex-col gap-x-20 sm:flex-row ">
              <div>
                <h6 className="mt-5 text-sm font-medium text-black text-opacity-60 md:text-base lg:text-lg">
                  Sales
                </h6>
                <a
                  href={`tel:${homeData.SECTION_11?.salesContact}`}
                  className="text-base outline-none font-regular lg:text-xl focus-visible:underline underline-offset-4"
                >
                  {homeData.SECTION_11?.salesContact}
                </a>
              </div>

              <div>
                <h6 className="mt-3 text-sm font-medium text-black text-opacity-60 sm:mt-5 md:text-base lg:text-lg">
                  Service
                </h6>
                <a
                  href={`tel:${homeData.SECTION_11?.serviceContact}`}
                  className="text-base outline-none font-regular lg:text-xl focus-visible:underline underline-offset-4"
                >
                  {homeData.SECTION_11?.serviceContact}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 gap-x-4 md:mt-0 lg:mt-12">
          <span className="w-12">
            <img src={EmailIcon} alt="email icon" />
          </span>

          <div>
            <h4 className="font-medium ">Send a query anytime</h4>

            <div className="w-[60px] mt-2 border-b-1 border-white border-opacity-60" />
            <a
              href={`mailto:${homeData.SECTION_11?.supportMail}`}
              className="block mt-3 text-base outline-none font-regular md:mt-5 lg:text-xl focus-visible:underline underline-offset-4"
            >
              {homeData.SECTION_11?.supportMail}
            </a>
          </div>
        </div>
        <div className="flex mt-6 gap-x-4 md:mt-0 lg:mt-12">
          <span className="min-w-[48px]">
            <img src={AddressIcon} alt="address icon" />
          </span>

          <div>
            <h4 className="font-medium ">
              Complaint / Adverse Event Reporting
            </h4>

            <div className="w-[60px] mt-2 border-b-1 border-white border-opacity-60" />
            <div className="block mt-3 outline-none font-regular md:mt-5 focus-visible:underline underline-offset-4">
              <p className="text-base whitespace-pre lg:text-xl display-linebreak">
                Plot No. 105, Solataire Industrial Park,
                <span className="block">
                  Village Dehmikalan, Ajmer Road, Jaipur,
                </span>
                Rajasthan - 303007, India
              </p>
              <div className="mt-1">
                <span className="block text-sm sm:text-base lg:text-xl">
                  Customer Support Email : c.s@innvolution.com
                </span>
                <span className="block text-sm sm:text-base lg:text-xl">
                  Customer Support Mobile : <span>+91 9509347095</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
