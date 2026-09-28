const Schematic = ({
  title,
  schematicMob,
  schematicDesk,
  bgClass,
  bgGrad,
  extraDeskImgClasses,
}: {
  title: string
  schematicMob: string
  schematicDesk: string
  bgClass: string
  bgGrad?: string
  extraDeskImgClasses?: string
}) => {
  return (
    <section
      className={`blade-bottom-padding-lg blade-top-padding-lg ${bgClass}`}
      style={{
        backgroundImage: bgGrad ? bgGrad : 'none',
      }}
    >
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">{title}</h2> */}
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        {title}
      </h3>

      <img
        src={schematicDesk}
        alt="Cross secion view of Schematic showing different parts"
        className={`gsap-opacity-trans-appear hidden sm:block mx-auto blade-top-margin px-3 md:w-container ${extraDeskImgClasses}`}
      />
      <img
        src={schematicMob}
        alt="Cross secion view of Schematic showing different parts"
        className="gsap-opacity-trans-appear sm:hidden  mx-auto blade-top-margin px-3"
      />
    </section>
  )
}

export default Schematic
