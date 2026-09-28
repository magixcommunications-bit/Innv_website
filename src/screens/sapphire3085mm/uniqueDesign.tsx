import React from 'react'

import designDesk from 'assets/sapphire3085mm/uniqueDesign/uniqueDesign.png'
import designMob from 'assets/sapphire3085mm/uniqueDesign/uniqueDesignMob.png'

const UniqueDesign = () => {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg bg-[url(assets/sapphire3085mm/uniqueDesign/bg.png)] bg-cover">
      <h3 className="gsap-opacity-trans-appear text-center font-medium blade-bottom-margin">
        Unique Design Features <br className="sm:hidden" /> (Ø0.85 – 1.25 mm)
      </h3>
      <img
        src={designDesk}
        alt="Unique Design Features image"
        className="gsap-opacity-trans-appear hidden sm:block mx-auto px-3"
      />
      <img
        src={designMob}
        alt="Unique Design Features image"
        className="gsap-opacity-trans-appear sm:hidden mx-auto px-3"
      />
    </section>
    // diamondback-insignia-changes
  )
}

export default UniqueDesign
