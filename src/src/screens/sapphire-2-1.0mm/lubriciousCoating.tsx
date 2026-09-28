import LubriciousCoatingImage from 'assets/sapphire-2-1.0mm/lubricious-coating.png'
import { TextGrad } from 'organisms/benefits'

export function LubriciousCoating() {
  return (
    <section className="blade-top-padding blade-bottom-padding luricious-coating-wrapper ">
      <div className="w-container-lg ">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Lubricious coating
        </h3>

        <h6 className="gsap-opacity-trans-appear text-center pt-2 2xl:pt-5 px-3 max-w-lg mx-auto sm:max-w-none text-darkgray">
          Hydro-X Hydrophilic coating on distal shaft for added crossability
        </h6>

        <div
          className="flex gap-x-12 md:gap-x-16 xl:gap-x-20 2xl:gap-x-32 pt-10 lg:pt-20 2xl:pt-32
        flex-col-reverse md:flex-row items-center justify-center"
        >
          <div
            className="max-w-[420px] pt-4 lg:pt-0 md:max-w-[320px] xl:max-w-[440px] text-center md:text-left
        flex flex-col justify-center"
          >
            <h5 className="gsap-opacity-trans-appear font-medium pt-5 md:pt-0">
              <TextGrad text="IMPROVES TRACKABILITY" gradientColor="blue" />
            </h5>
            <h6 className="gsap-opacity-trans-appear text-darkgray text-opacity-80">
              <strong>Invio hydrophobic</strong> coating is a water-repelling,
              slippery coating that reduces guidewire friction
            </h6>

            <h5 className="gsap-opacity-trans-appear font-medium pt-8">
              <TextGrad text="IMPROVES CROSSABILITY" gradientColor="orange" />
            </h5>
            <h6 className="gsap-opacity-trans-appear text-darkgray text-opacity-80 pb-3 lg:pb-0">
              <strong>Hydro-X hydrophilic</strong> coating is a water-absorbing,
              very slippery coating that reduces friction during lesion crossing
            </h6>
          </div>

          <div className="w-[280px] sm:w-[320px] lg:w-[400px] xl:w-auto">
            <img
              className="gsap-scale "
              src={LubriciousCoatingImage}
              alt="Lubricious coating"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
