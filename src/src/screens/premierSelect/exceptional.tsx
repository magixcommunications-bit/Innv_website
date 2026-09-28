import React from 'react'
import './style.css'
import exceptional_screen_image from 'assets/premier_Select/exceptional-page-product.webp'

const Exceptional = () => {
  return (
    <div className="md:blade-top-padding-lg blade-top-padding blade-bottom-padding md:blade-bottom-padding-lg lg:min-h-[80vh] exceptional-page-gradient flex items-center justify-center gap-4">
      <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-4 place-content-start 2xl:gap-28">
        <div className="text-white flex flex-col items-start gap-5 lg:ml-20 2xl:ml-0">
          <h3 className="gsap-opacity-trans-appear font-normal font-regular text-center leading-snug md:text-left mx-auto md:mx-0 2xl:whitespace-nowrap">
            Exceptional user experience
          </h3>
          <p className="gsap-opacity-trans-appear text-sm w-[80%] md:text-lg xl:text-xl sm:max-w-xl lg:text-xl mx-auto md:mx-0 2xl:w-[27vmax] text-center font-regular leading-normal md:text-left">
            <span className="text-[#F78E28] font-normal font-regular leading-normal">
              Backlit joysticks
            </span>
            ,{' '}
            <span className="text-[#F78E28] font-normal font-regular leading-normal">
              buttons
            </span>
            , and{' '}
            <span className="text-[#F78E28] font-normal font-regular leading-normal">
              strategically placed keys
            </span>{' '}
            within Premier Select enhance the overall user experience for
            healthcare professionals during interventions.
          </p>
        </div>
        <img
          className="gsap-opacity-trans-appear h-[23vmax] md:h-[30vmax] mt-10 md:mt-0 lg:h-[23vmax] lg:mx-auto"
          src={exceptional_screen_image}
          alt="mockup showing different features of the premier select cath lab: Backlit joysticks, buttons, and strategically placed keys"
        />
      </div>
    </div>
  )
}

export default Exceptional
