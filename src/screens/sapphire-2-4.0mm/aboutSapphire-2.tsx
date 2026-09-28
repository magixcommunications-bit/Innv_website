import img from 'assets/sapphire2-4.0mm/about/features.webp'

export function AboutSapphire() {
  return (
    <div className="blade-top-padding px-4 blade-bottom-padding-lg about-section">
      <h3 className="gsap-opacity-trans-appear font-medium 2xl:text-[34px] max-w-[720px] xl:max-w-[980px] mx-auto text-center">
        Sapphire II PRO is a{' '}
        <span className="text-orange">well-balanced balloon catheter</span>{' '}
        specifically engineered for crossing the most difficult lesions and
        tracking anatomy, tailored for every lesion size
      </h3>
      <div
        className="flex gap-x-12 lg:gap-x-32 2xl:gap-x-56 pt-12 md:pt-16 lg:pt-24 2xl:pt-32
        flex-col md:flex-row items-center justify-center"
      >
        <div className="gsap-scale w-[260px] md:w-[220px] lg:w-[320px] xl:w-auto">
          <img className="" src={img} alt="Balloon Catheter features" />
        </div>
        <div
          className="max-w-[420px] pt-12 md:pt-0 lg:max-w-[320px] xl:max-w-[440px] 2xl:max-w-[520px]
        flex flex-col justify-center"
        >
          <h4 className="gsap-opacity-trans-appear font-medium text-center md:text-left text-xl lg:text-[28px] 2xl:text-3xl">
            Cross with confidence every time
          </h4>
          <p className="gsap-opacity-trans-appear font-medium text-center md:text-left mt-4 md:mt-6 text-base lg:text-xl max-w-[512px]">
            The{' '}
            <span className="text-orange font-medium">Sapphire II PRO </span>
            is specifically engineered for crossing the most difficult lesions
            and tracking <br className="hidden 2xl:block" /> tortuous anatomy,
            tailored for every lesion size.
          </p>
        </div>
      </div>
    </div>
  )
}
