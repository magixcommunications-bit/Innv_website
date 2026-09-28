import sirolimus from 'assets/insignia/sirolimus.webp'
import './index.css'

export function SirolimusDrug() {
  return (
    <section className="sirolimus-wrapper blade-top-padding blade-bottom-padding">
      <div className="w-container-lg xl:w-container-sm flex flex-col gap-y-4 gap-x-7 lg:gap-x-16 xl:gap-x-20 md:flex-row">
        <div className="flex-1 basis-20 xl:basis-48  grid place-content-center place-items-center img-wrapper">
          <img
            src={sirolimus}
            className="gsap-scale h-full object-contain w-full"
            alt="human hand holding a heart showing love and compassion"
          />
        </div>
        <div
          className="basis-10 xl:basis-2 grow shrink flex flex-col justify-center items-center md:items-start gap-3 blade-top-padding-sm 
        blade-bottom-padding-sm"
        >
          <h3
            style={{
              backgroundImage:
                'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
            }}
            className="gsap-opacity-trans-appear bg-clip-text text-black font-medium text-center md:text-left"
          >
            A <span className="text-orange">SIROLIMUS</span> drug{' '}
            <br className="hidden md:block" /> eluting stent system
          </h3>

          <h6 className="gsap-opacity-trans-appear  font-regular mt-1 lg:mt-4 text-sm md:text-base lg:text-lg 2xl:text-xl max-w-md md:max-w-[540px] pr-3 text-center md:text-left">
            INSIGNIA Sirolimus Eluting Stent System elutes Sirolimus from a
            biodegradable polymer matrix. The drug is coated on both abluminal
            and luminal surfaces of the stent and is released in a controlled
            manner. This gives the device superior safety and efficacy.
          </h6>
        </div>
      </div>
    </section>
  )
}
