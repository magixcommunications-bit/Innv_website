import React from 'react'
import benefitDesk from 'assets/scoreflex/benefits/benefitsDesk.webp'
import benefitMob from 'assets/scoreflex/benefits/benefitsMob.svg'

const Benefits = ({ title, bgGrad }: { title: string; bgGrad: string }) => {
  return (
    <section
      className="blade-top-padding-lg blade-bottom-padding-lg font-regular "
      style={{
        background: bgGrad ? bgGrad : 'none',
      }}
    >
      <section className="w-container lg:w-container-lg ">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          {title}
        </h3>

        <h6 className="gsap-opacity-trans-appear text-center pt-2 2xl:pt-5 px-3 max-w-md mx-auto sm:max-w-xl 2xl:max-w-3xl text-darkgray">
          <strong>Continuous hub-to-tip</strong> metallic construction for
          enhanced pushability, with a combination of{' '}
          <TextGrad text="hydrophilic" gradientColor="orange" /> and{' '}
          <TextGrad text="hydrophobic" gradientColor="blue" /> coatings to
          minimize friction.
        </h6>

        <section className="blade-top-margin 2xl:blade-top-margin-lg max-w-md mx-auto sm:max-w-xl md:max-w-none lg:mx-0 lg:grid lg:grid-cols-[1.35fr_0.65fr] lg:gap-x-12 xl:gap-x-16 2xl:grid-cols-[1.4fr_0.6fr]">
          <img
            src={benefitDesk}
            alt="Hydrophobic and Hydroplilic coatings on the Catheter"
            className="gsap-opacity-trans-appear hidden sm:block w-fit self-center"
          />
          <img
            src={benefitMob}
            loading="lazy"
            alt="Hydrophobic and Hydroplilic coatings on the Catheter"
            className="gsap-opacity-trans-appear sm:hidden "
          />

          <article className="text-center lg:text-left sm:max-w-md md:max-w-lg sm:mx-auto pt-4 sm:pt-6 lg:pt-0 lg:max-w-none">
            <h5 className="gsap-opacity-trans-appear font-medium pt-6 lg:pt-0">
              <TextGrad text="IMPROVES TRACKABILITY" gradientColor="blue" />
            </h5>
            <h6 className="gsap-opacity-trans-appear text-darkgray text-opacity-80">
              <strong>Invio hydrophobic</strong> coating is a water-repelling,
              slippery coating that reduces guidewire friction
            </h6>

            <h5 className="gsap-opacity-trans-appear font-medium pt-6">
              <TextGrad text="IMPROVES CROSSABILITY" gradientColor="orange" />
            </h5>
            <h6 className="gsap-opacity-trans-appear text-darkgray text-opacity-80">
              <strong>Hydro-X hydrophilic</strong> coating is a water-absorbing,
              very slippery coating that reduces friction during lesion crossing
            </h6>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Benefits

export function TextGrad({
  text,
  gradientColor,
}: {
  text: string
  gradientColor: string
}) {
  return (
    <strong
      className="inline-block text-transparent bg-clip-text "
      style={{
        backgroundImage:
          gradientColor === 'orange'
            ? 'linear-gradient(258deg, rgba(246, 154, 77, 0.90) -8.52%, rgba(255, 116, 0, 0.90) 80.84%)'
            : 'linear-gradient(136deg, #0F73BA 33.82%, #0036D6 135.84%)',
      }}
    >
      {text}
    </strong>
  )
}
