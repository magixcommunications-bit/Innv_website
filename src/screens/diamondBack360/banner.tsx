import product from 'assets/diamondBack360/banner/product.webp'
import './index.css'
import logo from 'assets/diamondBack360/banner/logo.svg'
import bannerBgImg from 'assets/diamondBack360/banner/banner-bg.png'

export function Banner() {
  return (
    <div
      className="h-[75vh] min-h-[600px] lg:max-h-[600px] xl:max-h-[950px] sm:h-[65vh] lg:h-[96vh] xl:h-screen diamond-back-banner bg-cover bg-center text-black 
        flex flex-col items-center overflow-hidden
        md:justify-center gap-7 xl:gap-[20px] 2xl:gap-[38px] relative bg-orange
      "
    >
      <div
        className="absolute left-0 right-0 mx-auto mt-32 md:top-0 md:bottom-0 md:my-auto 
          w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] 
          2xl:w-[600px] 2xl:h-[600px]
        "
      >
        <img
          src={bannerBgImg}
          aria-hidden
          alt="Background element"
          className="text-appear-anim w-full h-full object-cover"
        />
      </div>
      <div className="h-[280px] z-10 md:h-[300px] mt-36 sm:mt-32 md:mt-10 lg:h-[320px] w-[96%] md:w-[80%] xl:h-[380px] xl:w-[60%] 2xl:h-[660px]">
        <img
          className="text-appear-anim stent-image object-contain w-full h-full"
          src={product}
          alt="Diamond-back 360 product image"
        />
      </div>
      <div
        className="flex gap-y-4 flex-col md:flex-row absolute bottom-6 md:bottom-16  px-4 sm:px-12 
          left-0 right-0 mx-auto items-center justify-center gap-x-8 2xl:gap-x-12
        "
      >
        <span className="w-[240px] sm:w-[280px] md:w-[300px] lg:w-[300px] 2xl:w-[500px] h-auto">
          <img
            src={logo}
            alt="Diamondback 360 logo"
            className="text-appear-anim-delayed w-full h-full object-cover"
          />
        </span>
        <div className="text-appear-anim-delayed w-[260px] h-[1px] md:w-[2px] bg-opacity-80 md:h-[100px] xl:h-[80px] 2xl:h-[100px] bg-black" />
        <div className="max-w-[320px] 2xl:max-w-[500px] w-full">
          <p className="text-appear-anim-delayed font-regular leading-6 md:leading-8 text-center md:text-left max-w-[360px] text-lg md:text-xl 2xl:text-2xl">
            The <span className="font-bold">Smart Solution</span> for complex
            PCI Patients
          </p>
        </div>
      </div>
    </div>
  )
}
