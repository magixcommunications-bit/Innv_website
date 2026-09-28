import Logo from 'assets/isailEdgeAlign/logo.png'
import MainImage from 'assets/isailEdgeAlign/MainProduct.png'
import bannerImg from 'assets/isailEdgeAlign/Banner.jpg'

export default function IsailEdgeAlignBanner() {
  return (
    <div
      className="relative w-full bg-center bg-no-repeat bg-cover sm:min-h-screen"
      style={{
        backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(20, 69, 135, 1) 0%,
        rgba(20, 69, 135, 0.95) 18%,
        rgba(20, 69, 135, 0.7) 42%,
        rgba(20, 69, 135, 0.4) 68%,
        rgba(20, 69, 135, 0.2) 85%,
        rgba(20, 69, 135, 0.12) 100%,
        rgba(20, 69, 135, 0.12) 100%
      ),
      url('${bannerImg}')
    `,
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="w-full text-center text-white pt-36 gsap-opacity-trans-appear-top">
          <h2 className="text-xl sm:text-[30px] lg:text-3xl xl:text-[40px] 2xl:text-4xl">
            Navigates Tortuous, Tightly Curved Anatomy with
          </h2>
          <h2 className="font-bold text-2xl sm:text-[32px]  lg:text-[40px] xl:text-4xl 2xl:text-5xl">
            Precision, Control, and Refined Finesse
          </h2>
        </div>
        {/* <div className="w-full max-w-lg mx-auto">
          <img src={Logo} alt="" className="object-contain w-full h-full" />
        </div> */}
        <div className="w-full max-w-lg mx-auto md:max-w-4xl">
          <img
            src={MainImage}
            alt=""
            className="object-contain w-full h-full gsap-opacity-trans-appear"
          />
        </div>
      </div>
    </div>
  )
}
