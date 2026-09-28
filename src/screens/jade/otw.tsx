import otwDesk from 'assets/jade/otw/otw-desk.svg'

const OTW = () => {
  return (
    <section className={`blade-bottom-padding-lg blade-top-padding-lg `}>
      <div className="w-container">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Hybrid OTW/RX design
        </h3>

        <h5 className="gsap-opacity-trans-appear font-regular hidden md:block text-[#4D4D4D] text-center pt-4 max-w-2xl mx-auto 2xl:max-w-4xl xl:pt-8">
          JADE has a 60 cm lumen tracking section, making this a hybrid Rapid
          Exchange/Over-the-Wire construction. JADE’s extended Rx section allows
          better pushability than a traditional Rapid Exchange catheter.
        </h5>
        <h6 className="gsap-opacity-trans-appear font-regular md:hidden text-[#4D4D4D] text-center pt-4 max-w-xl mx-auto xl:max-w-2xl xl:pt-8">
          JADE has a 60 cm lumen tracking section, making this a hybrid Rapid
          Exchange/Over-the-Wire construction. JADE’s extended Rx section allows
          better pushability than a traditional Rapid Exchange catheter.
        </h6>

        <img
          src={otwDesk}
          alt="OTW"
          className="gsap-opacity-trans-appear hidde sm:block mx-auto blade-top-margin-lg px-3 md:w-container"
        />
        {/* <img
        src={otwMob}
        alt="OTW"
        className="sm:hidden  mx-auto blade-top-margin-lg px-3"
      /> */}
      </div>
    </section>
  )
}

export default OTW
