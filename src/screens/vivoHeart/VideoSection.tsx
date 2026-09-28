import React from 'react'
import StentedLoopIVUS from 'assets/vivoHeart/videos/StentedloopIVUS-fixed.mp4'
import FibrousLoopIVUS from 'assets/vivoHeart/videos/FibrousloopIVUS-fixed.mp4'
import CalcifiedLoopIVUS from 'assets/vivoHeart/videos/CalcifiedLoopIVUS.mp4'

const VideoSection = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover relative w-full px-4 py-8  md:py-12 bg-gradient-to-tr from-[#fdb270] to-[#FEC89A]">
      <div className="flex flex-col gap-8 lg:gap-10 w-container-lg xl:w-container-sm">
        <div className="flex flex-col items-center justify-center gap-3 basis-12 grow shrink">
          <h3 className="font-medium text-[#15306e] text-center text-3xl md:text-4xl lg:text-[48px] gsap-opacity-trans-appear2">
            Clinical Gallery
          </h3>
        </div>
        <div className="flex-1">
          <div className="grid h-full grid-cols-1 gap-10 lg:gap-10 xl:gap-20 lg:grid-cols-3">
            <div className="flex flex-col w-full h-full overflow-hidden rounded-md gsap-opacity-trans-appear ">
              <video
                className="object-cover w-full h-full"
                muted
                loop
                playsInline
                controls
                autoPlay
              >
                <source src={StentedLoopIVUS} type="video/mp4" />
              </video>
              <div className="flex items-center justify-center h-20 bg-white">
                <p className="text-2xl font-bold">Stented loop IVUS</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-hidden rounded-md gsap-opacity-trans-appear">
              <video
                className="object-cover w-full h-full"
                muted
                loop
                playsInline
                controls
                autoPlay
              >
                <source src={FibrousLoopIVUS} type="video/mp4" />
              </video>
              <div className="flex items-center justify-center h-20 bg-white">
                <p className="text-2xl font-bold">Fibrous loop IVUS</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-hidden rounded-md gsap-opacity-trans-appear">
              <video
                className="object-cover w-full h-full"
                muted
                loop
                playsInline
                controls
                autoPlay
              >
                <source src={CalcifiedLoopIVUS} type="video/mp4" />
              </video>
              <div className="flex items-center justify-center h-20 bg-white">
                <p className="text-2xl font-bold">Calcified loop IVUS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
