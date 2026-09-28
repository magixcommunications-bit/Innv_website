import desktopImage from 'assets/sapphire-2-1.0mm/tip-entry-profile/desk.svg'
import mobileImage from 'assets/sapphire-2-1.0mm/tip-entry-profile/mobile-view.png'

export function TipEntryProfile() {
  return (
    <div className="blade-top-padding flex flex-col items-center px-4 blade-bottom-padding-lg tip-entry-profile-wrapper">
      <h3 className="gsap-opacity-trans-appear text-center text-white font-medium">
        Tip entry profile
      </h3>
      <p
        className="gsap-opacity-trans-appear mt-6 font-light tracking-wide leading-8 text-center max-w-[520px] text-lg lg:text-xl 
      opacity-80 text-white"
      >
        The single material tip enables the lowest entry profile for excellent
        crossability in very tight lesions
      </p>
      <div className="gsap-scale mt-12 lg:mt-24 ">
        <img
          className="lg:hidden"
          src={mobileImage}
          alt="tip entry profile view"
        />
        <img
          className="hidden lg:block w-container-lg mx-auto"
          src={desktopImage}
          alt="tip entry profile view"
        />
      </div>
    </div>
  )
}
