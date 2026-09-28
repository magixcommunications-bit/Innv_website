import React from 'react'
import surgery_image from 'assets/innvolution/surgery.webp'

const Solutions = () => {
  return (
    <div className="w-container flex flex-shrink-0 flex-col md:grid md:grid-cols-2 xl:grid-cols-[auto_auto] lg:justify-between blade-top-padding blade-bottom-padding-lg">
      <div>
        <h3
          style={{
            backgroundImage:
              'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
          }}
          className="gsap-opacity-trans-appear font-medium bg-clip-text text-transparent"
        >
          Pioneering solutions for <br /> real-world challenges
        </h3>
        <h6 className="gsap-opacity-trans-appear font-regular max-w-sm pr-10 lg:pr-0 lg:max-w-[350px] xl:max-w-[410px] 2xl:max-w-[550px] appear-anim-gsap mt-5 text-[#4D4D4D]">
          The cardiovascular industry is at a crossroads, facing a myriad of
          complex, and pressing challenges, whether it’s the increasing burden
          of cardiovascular disease or invasive procedures. These challenges
          inspire us at Innvolution to innovate to improve cardiovascular
          diagnostic accuracy, speed, and comfort while balancing cost and
          quality.
        </h6>
      </div>
      <div className="gsap-scale">
        <img
          className="flex-shrink-0 w-full max-w-md mt-8 md:mt-16 lg:mt-20 2xl:mt-[7.5rem] xl:w-full xl:pl-20 md:max-w-none "
          src={surgery_image}
          alt="Group of doctors doing surgery"
        />
      </div>
    </div>
  )
}

export default Solutions
