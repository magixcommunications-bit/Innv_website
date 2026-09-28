import React from 'react'
import heart_image from 'assets/innvolution/innovation.webp'

const Innovating = () => {
  return (
    <section className="bg-[url(assets/innvolution/bg-overlay-background.webp)] bg-cover bg-center">
      <div className="w-container flex flex-shrink-0 flex-col-reverse md:grid md:grid-cols-2 xl:grid-cols-[auto_auto] lg:justify-between blade-top-padding blade-bottom-padding-lg">
        <div className="gsap-scale">
          <img
            className="flex-shrink-0 w-full max-w-md mt-8 md:mt-16 lg:mt-20 2xl:mt-[7.5rem] xl:w-full xl:pr-20 md:max-w-none "
            src={heart_image}
            alt="Group of doctors doing surgery"
          />
        </div>
        <div className="md:pl-10 lg:pl-16 xl:pl-0 ">
          <h3
            style={{
              backgroundImage:
                'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
            }}
            className="gsap-opacity-trans-appear font-medium appear-anim-gsap bg-clip-text text-transparent"
          >
            Innovating for the future <br /> of cardiology
          </h3>
          <h6 className="gsap-opacity-trans-appear font-regular max-w-sm  lg:max-w-[350px] xl:max-w-[410px] 2xl:max-w-[550px] appear-anim-gsap mt-5 text-[#4D4D4D]">
            We are in collaboration with leading academic institutions like IITs
            and IISC to leverage new-age technologies such as AI/ML, robotics,
            and AR/VR to achieve safer cardiovascular therapy, tech-driven
            precision, and improved user experience
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Innovating
