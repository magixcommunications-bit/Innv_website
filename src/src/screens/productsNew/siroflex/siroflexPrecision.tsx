import React from 'react'
import img from 'assets/productsNew/eternia/eternia-top-perspective.png'

export default function SiroflexPrecision() {
  return (
    <section className="bg-[#fff]  blade-top-padding-lg blade-bottom-padding-lg">
      <div className="w-container flex md:flex-row flex-col md:gap-10 justify-center">
        <div className="flex-1 max-w-3xl relative">
          <div className="bg-orange bg-opacity-20 blur-3xl absolute inset-0 rounded-full" />

          <div className="w-10/12 mx-auto relative">
            <img
              src={img}
              alt="stents top perspective"
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="flex-1 max-w-xl font-regular blade-top-padding ">
          <h3 className="font-medium ">
            With Technology Translating to Effective Clinical Outcomes
          </h3>
          <div className="mt-8">
            <div className="flex gap-5 items-start mt-5">
              <svg
                className="w-5 h-5 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8448 3.43961C15.8448 1.70276 14.4368 0.294769 12.7 0.294769C10.9631 0.294769 9.55514 1.70276 9.55514 3.4396V5.07816C9.55514 7.71674 7.41615 9.85573 4.77757 9.85573H3.14484C1.40799 9.85573 0 11.2637 0 13.0006C0 14.7374 1.40799 16.1454 3.14484 16.1454H4.77757C7.41615 16.1454 9.55514 18.2844 9.55514 20.923V22.5604C9.55514 24.2973 10.9631 25.7052 12.7 25.7052C14.4368 25.7052 15.8448 24.2973 15.8448 22.5604V20.9253C15.8448 18.2854 17.9849 16.1454 20.6247 16.1454H22.2656C24.0025 16.1454 25.4105 14.7374 25.4105 13.0006C25.4105 11.2637 24.0025 9.85573 22.2656 9.85573H20.6253C17.9851 9.85573 15.8448 7.71544 15.8448 5.07525V3.43961Z"
                  fill="#F69A4D"
                />
              </svg>
              <h5 className="text-orange flex gap-3 leading-tight font-medium">
                High radial strength of 1.50 N/mm
              </h5>
            </div>
            <li className="list-disc ml-10 mt-2">
              Siroflex is collapse resistant
            </li>
          </div>
          <div className="mt-8">
            <div className="flex gap-5 items-start mt-5">
              <svg
                className="w-5 h-5 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8448 3.43961C15.8448 1.70276 14.4368 0.294769 12.7 0.294769C10.9631 0.294769 9.55514 1.70276 9.55514 3.4396V5.07816C9.55514 7.71674 7.41615 9.85573 4.77757 9.85573H3.14484C1.40799 9.85573 0 11.2637 0 13.0006C0 14.7374 1.40799 16.1454 3.14484 16.1454H4.77757C7.41615 16.1454 9.55514 18.2844 9.55514 20.923V22.5604C9.55514 24.2973 10.9631 25.7052 12.7 25.7052C14.4368 25.7052 15.8448 24.2973 15.8448 22.5604V20.9253C15.8448 18.2854 17.9849 16.1454 20.6247 16.1454H22.2656C24.0025 16.1454 25.4105 14.7374 25.4105 13.0006C25.4105 11.2637 24.0025 9.85573 22.2656 9.85573H20.6253C17.9851 9.85573 15.8448 7.71544 15.8448 5.07525V3.43961Z"
                  fill="#F69A4D"
                />
              </svg>
              <h5 className="text-orange flex gap-3 leading-tight font-medium">
                Proprietary Sirolimus + biodegradable <br /> polymer mix
              </h5>
            </div>
            <li className="list-disc ml-10 mt-2">
              Single layer ultra-thin coating
            </li>
            <li className="list-disc ml-10 mt-2">
              Decreases tissue-polymer contact
            </li>
            <li className="list-disc ml-10 mt-2">
              Reduces late-stent thrombosis{' '}
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}
