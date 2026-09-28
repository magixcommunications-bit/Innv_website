import React from 'react'
import NumenBgImg from 'assets/numen/NUMEN.png'
import NumenLogo from 'assets/numen/NUMEN_LOGO.png'

export default function NumenBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat min-h-[600px] md:max-h-[755px] h-[auto]  lg:max-h-[100%] xl:max-h-[800px] 2xl:max-h-[100vh] sm:h-screen">
      <div className="absolute inset-0 bg-[url('assets/numen/NUMEN_BG.jpg')] bg-center bg-cover bg-no-repeat opacity-20"></div>
      <div className="relative flex flex-col-reverse items-center w-full h-[75vh] sm:h-full sm:flex-col-reverse text-appear-anim md:flex-row">
        <div className="z-[500] w-full pb-[20px] px-4 sm:py-8 lg:w-[50%]  md:mt-[80px]  sm:mt-[0px] md:w-1/2 md:pl-8 lg:px-12 md:py-0">
          <div className="flex flex-col-reverse items-center justify-center gap-4 md:flex-col xl:flex-row lg:justify-end">
            <div className="flex relative max-w-[275px] sm:max-w-[340px] md:max-w-[100%] lg:max-w-[400px] w-full items-center justify-center">
              <img
                src={NumenLogo}
                className="object-contain w-full h-full "
                alt=""
              />
            </div>
            <div className="text-appear-anim-delayed hidden w-full max-w-[180px] h-[2px] md:w-[3px] md:h-[100px] rounded-full xl:h-[138px] 2xl:h-[140px] bg-gradient-to-b from-transparent via-black to-transparent lg:hidden xl:block"></div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-[#000] lg:text-center text-[40px] sm:text-4xl md:text-[52px] lg:text-[60px] leading-tight ">
                Redefining
              </h3>
              <h3 className="font-normal text-[#006838] lg:text-center text-3xl sm:text-[40px] md:text-[4xl] lg:text-[50px] leading-tight">
                Versatility
              </h3>
            </div>
          </div>
        </div>

        <div className="z-10 flex items-center justify-center w-full h-full lg:w-[50%] xl:w-[58%] md:justify-end">
          <div className="w-full md:mt-[170px] h-full relative sm:max-w-full md:max-w-[100%] lg:max-w-[100%]  2xl:max-w-[100%] md:pb-[30px] pb-0 sm:pb-0">
            <img
              src={NumenBgImg}
              alt="Numen Coil"
              className="object-cover w-full h-full absolute top-[50px] sm:absolute sm:top-[75px] md:top-0 md:relative text-appear-anim sm:object-cover md:object-cover lg:object-cover xl:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
