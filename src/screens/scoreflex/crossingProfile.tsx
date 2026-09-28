import React from 'react'
import crossingImg from 'assets/scoreflex/crossing/crossing.webp'
import crossingMob from 'assets/scoreflex/crossing/crossing-mob.webp'
import bg from 'assets/scoreflex/crossing/bg.svg'

const CrossingProfile = () => {
  return (
    <section
      className={` font-regular text-white`}
      style={{
        background: 'linear-gradient(180deg, #10171D 0%, #272E38 100%), #FFF',
      }}
    >
      <div className={`blade-top-padding-lg blade-bottom-padding-lg`}>
        <h3 className="gsap-opacity-trans-appear  font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Crossing profile
        </h3>

        <section className="relative blade-top-margin-lg px-3 md:flex md:items-center md:flex-row-reverse md:w-container-lg md:gap-x-12 xl:max-w-7xl 2xl:max-w-[1280px] md:justify-between">
          <img
            src={crossingImg}
            alt="Crossing profile comparisons between NSE Alpha, Scoreflex, AngioSculpt and Flextome"
            className="gsap-opacity-trans-appear sm:block hidden mx-auto z-10"
          />
          <img
            src={crossingMob}
            alt="Crossing profile comparisons between NSE Alpha, Scoreflex, AngioSculpt and Flextome"
            className="gsap-opacity-trans-appear sm:hidden mx-auto z-10 max-w-md w-full"
          />
          <h6 className="gsap-opacity-trans-appear text-center pt-6 sm:hidden">
            Crossing Profile* Comparison (3.0 mm)
          </h6>
          <img
            src={bg}
            aria-hidden
            alt="Background"
            className="absolute bottom-[40%] left-0 sm:-bottom-[70%] sm:-left-[20%] 2xl:-left-[10%]"
          />
        </section>
      </div>
    </section>
  )
}

export default CrossingProfile
