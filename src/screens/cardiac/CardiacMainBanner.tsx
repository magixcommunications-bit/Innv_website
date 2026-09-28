import React from 'react'
import BannerMainImg from 'assets/cardiac/Banner/BannerMainImg.png'
import BannerLogo from 'assets/cardiac/Banner/BannerLogo.png'
const CardiacMainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat min-h-[600px] md:max-h-[755px] h-[auto]  lg:max-h-[100%] xl:max-h-[800px] 2xl:max-h-[100vh] sm:h-screen bg-gradient-to-b from-amber-200 to-white">
      <div className="absolute inset-0 bg-[url('assets/cardiac/BannerBG3.png')] bg-center bg-cover bg-no-repeat opacity-80 "></div>
      <div className="relative flex flex-col items-center justify-around w-full h-[75vh] sm:h-full md:h-full lg:h-screen xl:h-full">
        <div className="flex flex-col items-center  w-full h-[800px] relative z-10">
          <div className="flex items-center h-[700px] justify-center w-full text-appear-anim">
            <div className="w-full h-full max-w-[600px] max-h-[600px]">
              <img
                src={BannerMainImg}
                className="object-contain w-full h-full drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center justify-center h-[150px] w-full text-appear-anim">
            <div className="w-[400px] h-full">
              <img
                src={BannerLogo}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardiacMainBanner
