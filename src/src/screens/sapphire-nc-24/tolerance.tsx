import React from 'react'
import graphImage from 'assets/sapphire-nc-24/tolerance-graph.png'

const Tolerance = () => {
  return (
    <section className="bg-[url(assets/sapphireIINC/product/bg.png)] bg-top bg-cover">
      <div className="blade-top-padding-sm md:pt-0 blade-bottom-padding-lg flex flex-col lg:flex-row gap-20 xl:gap-32 w-container-sm md:w-container justify-between items-center">
        <div className="lg:max-w-xs xl:max-w-md flex xsl:max-w-sm flex-col items-center lg:block">
          <h3 className="gsap-opacity-trans-appear font-medium mb-8 text-center lg:text-left">
            High pressure tolerance
          </h3>
          <img
            className="gsap-opacity-trans-appear block lg:hidden w-full mb-10"
            src={graphImage}
            alt="Pressure tolerance graph"
          />
          <h6 className="gsap-opacity-trans-appear max-w-md lg:max-w-none font-regular mb-5 text-center lg:text-left">
            <strong>Rated Burst Pressure (atm)</strong> high pressure tolerance
            of 24 atm RBP up to 3.5 mm diameter without compromising
            crossability.
          </h6>
          <h6 className="gsap-opacity-trans-appear max-w-md lg:max-w-none font-regular text-center lg:text-left">
            Data on in-house bench test data on Ø 3.0 mm balloons.
          </h6>
        </div>
        <div className="gsap-opacity-trans-appear hidden lg:block">
          <img src={graphImage} alt="Pressure tolerance graph" />
        </div>
      </div>
    </section>
  )
}

export default Tolerance
