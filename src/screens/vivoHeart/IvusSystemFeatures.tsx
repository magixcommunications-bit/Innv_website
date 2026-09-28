import React, { useEffect, useState } from 'react'
import CenterFrequencyImg from 'assets/vivoHeart/IVUS_System_Features/CenterFrequency.png'
import PullbackDistanceImg from 'assets/vivoHeart/IVUS_System_Features/PullbackDistance.png'
import PullbackSpeedImg from 'assets/vivoHeart/IVUS_System_Features/PullbackSpeed.png'
import FrameRateImg from 'assets/vivoHeart/IVUS_System_Features/FrameRate.png'
import ImageAnalysisImg from 'assets/vivoHeart/IVUS_System_Features/ImageAnalysis.png'
import CoRegistrationImg from 'assets/vivoHeart/IVUS_System_Features/Co-Registration.png'

const IvusSystemFeatures = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="bg-gradient-to-r from-[#a5dbff] to-[#ffe0c5] h-full">
      <div
        className={`relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12 ${
          width <= 350 && width >= 320 ? 'pb-20' : ''
        }`}
      >
        <div className="flex items-center justify-center mb-8">
          <h3 className="font-medium text-[#15306e] text-center text-3xl md:text-4xl lg:text-[48px] gsap-opacity-trans-appear2">
            IVUS System Features
          </h3>
        </div>
        <div
          className={`grid h-full grid-cols-1 md:grid-cols-1 md:gap-6 lg:gap-0 place-items-center place-content-center lg:grid-cols-3 `}
        >
          <div className="flex h-full">
            <div className="flex flex-col h-full">
              <div className="flex flex-col h-[30%] justify-end items-center text-center gsap-opacity-trans-appear-top">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#ffab35] to-[#d27800] bg-clip-text">
                  Center
                  <br />
                  Frequency
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  High-resolution imaging at 60/40 MHz
                </span>
              </div>
              <div className="h-[70%] gsap-slide-up">
                <img
                  className="block object-contain w-full h-full"
                  src={CenterFrequencyImg}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[70%] gsap-slide-down">
                <img
                  className="block object-contain w-full h-full"
                  src={PullbackDistanceImg}
                  alt=""
                />
              </div>
              <div className="flex flex-col h-[30%] items-center text-center gsap-opacity-trans-appear">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#f68e1e] via-[#f25e21] to-[#f04b22] bg-clip-text">
                  Pullback
                  <br />
                  Distance
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  Automatice pullback up to 150 mm
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="flex flex-col h-full gsap-opacity-trans-appear-top">
              <div className="flex flex-col h-[30%] justify-end items-center text-center">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#f05b91] to-[#e61751] bg-clip-text">
                  Pullback
                  <br />
                  Speed
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  Fastest pullback speed at 10mm/s
                </span>
              </div>
              <div className="h-[70%] gsap-slide-up">
                <img
                  className="block object-contain w-full h-full"
                  src={PullbackSpeedImg}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[70%] gsap-slide-down">
                <img
                  className="block object-contain w-full h-full"
                  src={FrameRateImg}
                  alt=""
                />
              </div>
              <div className="flex flex-col h-[30%] items-center text-center gsap-opacity-trans-appear">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#60d6ff] to-[#139bdb] bg-clip-text">
                  Frame
                  <br />
                  Rate
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  Highest frame rate of 100fps
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="flex flex-col h-full">
              <div className="flex flex-col h-[30%] justify-end items-center text-center gsap-opacity-trans-appear-top">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#3bbc9d] to-[#00b4a2] bg-clip-text">
                  Image
                  <br />
                  Analysis
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  InSmartVision<sup>TM</sup> platform for image analysis
                </span>
              </div>
              <div className="h-[70%] gsap-slide-up">
                <img
                  className="block object-contain w-full h-full"
                  src={ImageAnalysisImg}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="h-[70%] gsap-slide-down">
                <img
                  className="block object-contain w-full h-full"
                  src={CoRegistrationImg}
                  alt=""
                />
              </div>
              <div className="flex flex-col h-[30%] items-center text-center gsap-opacity-trans-appear">
                <p className="text-xl sm:text-2xl lg:text-xl leading-[1.2] mb-2 font-bold text-transparent bg-gradient-to-r from-[#8a83c6] to-[#6052b1] bg-clip-text">
                  IVUS-Angio
                  <br />
                  Co-registration
                </p>
                <span className="text-base text-black sm:text-lg font-regular">
                  EasyGo<sup>TM</sup> for IVUS Angio co-registration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IvusSystemFeatures
