import ratedPressure from 'assets/jade/ratedPressure/pressure.svg'

const RatedPressure = () => {
  return (
    <section className=" blade-top-padding blade-bottom-padding xl:blade-bottom-padding-sm">
      <div className="w-container pt-1 sm:pt-3 md:pt-5 lg:pt-">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Rated burst pressure
        </h3>

        <h6 className="gsap-opacity-trans-appear font-regular text-[#4D4D4D] md:hidden text-center pt-4 mx-auto xl:pt-6 max-w-sm sm:max-w-md">
          JADE has the highest rated burst pressure amongst competitor products
          of the same class.
        </h6>
        <h5 className="gsap-opacity-trans-appear font-regular text-[#4D4D4D] hidden md:block text-center pt-4 mx-auto xl:pt-6 md:max-w-lg lg:max-w-none">
          JADE has the highest rated burst pressure amongst competitor products
          of the same class.
        </h5>

        <h4 className="gsap-opacity-trans-appear font-medium hidden lg:block text-center pt-4 xl:pt-6">
          Rated burst pressure* comparison
        </h4>
        <h5 className="gsap-opacity-trans-appear font-medium lg:hidden text-center pt-4 xl:pt-6">
          Rated burst pressure* comparison
        </h5>

        <h6 className="gsap-opacity-trans-appear font-regular opacity-60 md:hidden text-center pt-4 mx-auto xl:pt-6">
          measured in ATM
        </h6>
        <h5 className="gsap-opacity-trans-appear font-regular opacity-60 hidden md:block text-center pt-4 mx-auto xl:pt-6">
          measured in ATM
        </h5>

        <img
          src={ratedPressure}
          alt="Rated burst pressure graph"
          className="gsap-opacity-trans-appear blade-top-margin px-3 h-full w-full xl:max-w-4xl mx-auto xsl:max-w-5xl 2xl:max-w-7xl"
        />
      </div>
    </section>
  )
}

export default RatedPressure
