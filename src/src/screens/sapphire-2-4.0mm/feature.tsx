import sapphire from 'assets/sapphire2-4.0mm/feature/sapphire.webp'
import PTech from 'assets/sapphire2-4.0mm/feature/P-tech.webp'

export function Feature() {
  return (
    <>
      <div className="blade-top-padding-lg px-4 blade-bottom-padding-lg feature-wrapper">
        <div
          className="blade-top-padding-sm blade-bottom-padding-sm flex flex-col md:flex-row justify-center items-center 
        gap-x-12 xl:gap-x-32 2xl:gap-x-40"
        >
          <div className="flex md:max-w-[320px] lg:max-w-md 2xl:max-w-[560px] flex-col items-center md:items-start">
            <h5
              className="gsap-opacity-trans-appear font-medium text-center md:text-left max-w-[400px] 2xl:max-w-[560px] text-[24px] lg:text-3xl 2xl:text-4xl 
            text-white"
            >
              Sub-zero tip technology for smooth lesion entry
            </h5>
            <div className="gsap-scale w-[280px] mt-12 md:hidden lg:w-[350px] xl:w-[540px]">
              <img
                src={sapphire}
                alt="Sapphire II Pro showing sub-zero tapered tip"
              />
            </div>
            <p
              className="gsap-opacity-trans-appear font-regular text-center md:text-left mt-12 md:mt-6 text-lg lg:text-xl text-opacity-70
             text-white"
            >
              The well balanced{' '}
              <span className="text-orange font-medium opacity-100">
                sub-zero tapered tip
              </span>{' '}
              has an <br className="hidden lg:block" /> ultra low profile and
              provides effortless entry <br className="hidden lg:block" />
              through the tightest lesions.
            </p>
          </div>

          <div className="gsap-scale w-[280px] hidden md:block lg:w-[350px] xl:w-[540px]">
            <img
              src={sapphire}
              alt="Sapphire II Pro showing sub-zero tapered tip"
            />
          </div>
        </div>
      </div>

      <div className="blade-bottom-padding-lg px-4 blade-top-padding-lg ptech-shaft-wrapper">
        <div
          className="blade-top-padding-sm blade-bottom-padding-sm flex flex-col md:flex-row justify-center 
          items-center gap-x-10 xl:gap-x-32 2xl:gap-x-28"
        >
          <div className="gsap-scale w-[280px] hidden md:block lg:w-[350px] xl:w-[440px] 2xl:w-[540px]">
            <img src={PTech} alt="P-TECH coating view" />
          </div>
          <div className="flex md:max-w-[400px] lg:max-w-xl 2xl:max-w-[700px] flex-col items-center md:items-start">
            <h5
              className="gsap-opacity-trans-appear font-medium text-center md:text-left max-w-[420px] md:max-w-3xl text-[24px] 
            lg:text-3xl 2xl:text-[42px]"
            >
              P-TECH shaft for optimal pushability & kink resistance
            </h5>
            <div className="gsap-scale w-[280px] mt-12 md:hidden lg:w-[350px] xl:w-[540px]">
              <img src={PTech} alt="P-TECH coating view" />
            </div>
            <p
              className="gsap-opacity-trans-appear font-medium text-center max-w-md md:text-left mt-12 md:mt-6 text-lg lg:text-xl text-opacity-70
             "
            >
              The <span className="text-orange">P-TECH</span> shaft is uniquely
              constructed with a small catheter profile that is kink resistant
              and facilitates excellent deliverability.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
