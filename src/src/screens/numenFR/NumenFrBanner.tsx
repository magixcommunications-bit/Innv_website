import React from 'react'
import NumenFRbg from 'assets/numen/NumenFR.png'
import NumenFrLogo from 'assets/numen/NumenFRLogo.png'

const NumenFrBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat min-h-[600px] md:max-h-[755px] h-[auto]  lg:max-h-[100%] xl:max-h-[800px] 2xl:max-h-[100vh] sm:h-screen">
      <div className="absolute inset-0 bg-[url('assets/numen/NumenFR_BG.png')] bg-center bg-cover bg-no-repeat opacity-30"></div>
      <div className="relative flex flex-col items-center justify-around w-full h-[75vh] sm:h-full md:h-full lg:h-screen xl:h-full">
        <div className="sm:max-w-[100%] sm:max-h-[300px] max-w-[100%] max-h-[300px] w-full h-full mt-[87px] md:max-w-full md:max-h-[300px] text-appear-anim lg:max-w-full lg:max-h-[300px] xl:max-w-[600px] xl:max-h-[500px] ">
          <img
            src={NumenFRbg}
            className="object-contain w-full h-full"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center h-auto text-appear-anim">
          <div className="w-full h-full mb-10 sm:max-w-[400px] sm:max-h-full  lg:w-full lg:h-full max-w-[300px] max-h-[100px] md:max-w-[400px] md:max-h-[150px] lg:max-w-[480px] lg:max-h-[200px] xl:max-w-[400px] xl:max-h-[200px]">
            <img
              src={NumenFrLogo}
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumenFrBanner
