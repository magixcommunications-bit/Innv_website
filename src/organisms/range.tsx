import React from 'react'

const Range = ({
  title,
  desc,
  rangeDeskImage,
  rangeMobImage,
  isDesc,
}: {
  title: string
  desc?: string
  rangeDeskImage: string
  rangeMobImage: string
  isDesc: boolean
}) => {
  return (
    <section
      className="blade-bottom-padding-lg blade-top-padding-lg flex flex-col items-center"
      style={{
        background:
          'linear-gradient(180deg, #10171D 0%, #272E38 100%), #F1F5F6',
      }}
    >
      <h3 className="gsap-opacity-trans-appear font-medium text-center text-white leading-tight md:-mt-2 2xl:-mt-3 px-3">
        {title}
      </h3>
      {isDesc ? (
        <h6 className="gsap-opacity-trans-appear text-white font-regular opacity-90 max-w-lg text-center mt-7 xl:mt-9 w-container-sm">
          {desc}
        </h6>
      ) : (
        ''
      )}

      <img
        src={rangeDeskImage}
        alt="Different Balloon sizes"
        className="gsap-opacity-trans-appear hidden md:block mx-auto blade-top-margin w-container xl:max-w-3xl xsl:max-w-4xl 2xl:max-w-6xl"
      />
      <img
        src={rangeMobImage}
        alt="Different Balloon sizes"
        className="gsap-opacity-trans-appear md:hidden  mx-auto blade-top-margin px-3"
      />
    </section>
  )
}

export default Range
