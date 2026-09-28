import React from 'react'
// import MainProductImg from 'assets/vivoHeart/MainProductImg.png'
import MainProductImg from 'assets/vivoHeart/ProductImage.png'
// import MainProductImg1 from 'assets/vivoHeart/MainProductImg1.png'
// import VivoHeartLogo from 'assets/vivoHeart/Logo.png'
import VivoHeartLogo from 'assets/vivoHeart/VivoHeartLogo.svg'

const VivoHeartBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat min-h-[600px] md:max-h-full h-[auto]  lg:max-h-[700px] xl:max-h-[800px] 2xl:max-h-[100vh] sm:h-screen flex justify-center items-center">
      {/* <div className="absolute inset-0 bg-[url('assets/vivoHeart/BannerBG.jpg')] bg-center bg-cover bg-no-repeat "></div>
      <div className="relative w-full mx-auto max-w-[1200px] flex flex-col-reverse h-full">
        <div className="relative flex items-center justify-center ">
          <div className="w-full h-full max-w-[1000px]">
            <img
              src={MainProductImg}
              alt="Main Product Image"
              className="object-contain w-full h-full text-appear-anim"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[200px] element-appear-anim">
          <div className="w-full h-full max-w-[400px] max-h-[120px]">
            <img
              src={VivoHeartLogo}
              alt="Vivo Heart Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#fff]">
            Innvolution IVUS System
          </h3>
        </div>
      </div> */}
      {/* <div className="absolute inset-0 bg-[url('assets/vivoHeart/BannerBG.jpg')] bg-center bg-cover bg-no-repeat "></div>
      <div className="relative w-full mx-auto max-w-[1200px] flex flex-row-reverse h-auto">
        <div className="relative flex items-center justify-center w-[50%] h-full">
          <div className="w-full h-full max-w-[1000px]">
            <img
              src={MainProductImg1}
              alt="Main Product Image"
              className="object-contain w-full h-full text-appear-anim"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-[50%] element-appear-anim">
          <div className="w-full h-full max-w-[400px] max-h-[120px]">
            <img
              src={VivoHeartLogo}
              alt="Vivo Heart Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#fff]">
            Innvolution IVUS System
          </h3>
        </div>
      </div> */}
      <div className="absolute inset-0 bg-[url('assets/vivoHeart/BannerBG.jpg')] bg-center bg-cover bg-no-repeat "></div>
      <div className="relative flex flex-col items-center w-full h-[75vh] sm:h-full sm:flex-col lg:flex-row-reverse">
        <div className=" w-full pb-[20px] px-4 sm:py-8 lg:w-[45%]  md:mt-[160px] lg:mt-20  sm:mt-[0px] md:w-1/2 md:pl-8 lg:px-12 md:py-0">
          <div className="flex mt-[80px] lg:mr-[40px] sm:mt-[80px] md:mt-0 flex-col items-center justify-center gap-4 xl:mr-44 element-appear-anim md:flex-col xl:flex-col lg:justify-start">
            <div className="flex relative max-w-[200px] sm:max-w-[280px] md:max-w-[100%] lg:max-w-[300px] xl:max-w-[400px] w-full items-center justify-start ">
              <img
                src={VivoHeartLogo}
                className="object-contain w-full h-full "
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-[30px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] font-medium text-[#fff]">
                Intravascular Ultrasound Imaging System
              </h3>
            </div>
          </div>
        </div>

        <div className="z-10 flex items-center justify-center w-full h-full lg:w-[55%] xl:w-[58%] lg:justify-end">
          <div className="w-full h-full relative max-w-[400px] sm:max-w-[500px]  lg:max-w-[100%]  2xl:max-w-[100%] flex items-end justify-end pb-0 sm:pb-0">
            <img
              src={MainProductImg}
              alt="l"
              className="object-cover block md:w-[750px] relative md:top-0 md:relative text-appear-anim sm:object-cover md:object-cover lg:object-cover xl:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VivoHeartBanner
