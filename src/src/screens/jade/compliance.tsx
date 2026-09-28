import compliance from 'assets/jade/compliance/compliance.svg'

const Compliance = () => {
  return (
    <section
      className=" blade-top-padding-lg pb-4 sm:pb-0"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 91, 69, 0.20) 0%, rgba(255, 150, 136, 0.08) 101.17%), #FFF',
      }}
    >
      <div className="w-container  xl:pt-3">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Balloon compliance
        </h3>

        <h6 className="gsap-opacity-trans-appear font-regular md:hidden text-center pt-4 mx-auto xl:pt-6 max-w-md">
          JADE is a non-compliant balloon for controlled opening of resistant
          lesions.
        </h6>
        <h5 className="gsap-opacity-trans-appear font-regular hidden md:block text-center pt-4 mx-auto xl:pt-6">
          JADE is a non-compliant balloon for controlled opening of resistant
          lesions.
        </h5>

        <h4 className="gsap-opacity-trans-appear font-medium hidden lg:block opacity-50 text-center pt-4 xl:pt-6">
          Compliance of 2.0 mm balloons
        </h4>
        <h5 className="gsap-opacity-trans-appear font-medium lg:hidden opacity-50 text-center pt-4 xl:pt-6">
          Compliance of 2.0 mm balloons
        </h5>

        <img
          src={compliance}
          alt="Balloon compliance chart of 2.00mm balloons"
          className="gsap-opacity-trans-appear blade-top-margin px-3 h-full w-full mx-auto xl:max-w-4xl xsl:max-w-5xl 2xl:max-w-7xl"
        />
      </div>
    </section>
  )
}

export default Compliance
