import React from 'react'
import video from 'assets/scoreflexNC/animation/animation.mp4'
import poster from 'assets/scoreflexNC/animation/poster.webp'

const Animation = () => {
  return (
    <section className="blade-top-padding text-white font-regular bg-gradient-to-b from-[#10171D] to-[#272E38]">
      <div className="blade-bottom-padding-lg bg-[url(assets/scoreflexNC/animation/bg.svg)] bg-cover bg-no-repeat bg-bottom ">
        {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">
          Scoreflex NC animation
        </h2> */}
        <h3 className="gsap-opacity-trans-appear font-medium hidden lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Scoreflex NC animation
        </h3>

        <h5 className="gsap-opacity-trans-appear text-center pt-2 2xl:pt-3 px-3 max-w-md mx-auto 2xl:max-w-xl">
          Watch the Scoreflex NC animation to learn how it works and the
          applications for use.
        </h5>

        <div className="blade-top-margin px-3">
          <video
            // playsInline
            // autoPlay
            // muted
            // loop
            controls
            className="gsap-opacity-trans-appear h-auto w-full max-w-md md:max-w-none md:w-9/12 xl:max-w-6xl object-center mx-auto border-4 border-white rounded-[10px]"
            poster={poster}
            aria-label="Scoreflex NC Animation"
          >
            <source src={video} />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Animation
