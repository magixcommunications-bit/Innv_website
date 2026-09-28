import React from 'react'
import coating from 'assets/jade/coating/coating.png'
import listIcon from 'assets/jade/coating/listIcon.svg'

const data = [
  <>
    <strong>Hydro-X hydrophilic</strong> <br className="hidden 2xl:block" />{' '}
    coating on distal shaft for added crossability
  </>,
  <>
    <strong>Hydro-X hydrophilic</strong> coating adds lubricity to reduce
    friction to enhance crossability
  </>,
  <>
    <strong>Invio hydrophobic</strong> coating is water-repellent and minimizes
    guidewire friction.
  </>,
]

const Coating = () => {
  return (
    <section className=" blade-top-padding-lg blade-bottom-padding-lg bg-[#F1F5F6]">
      <div className="w-container -mb-5 xl:-mb-3">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          Lubricious coating
        </h3>

        <img
          src={coating}
          alt="Lubricious coating"
          className="gsap-opacity-trans-appear mx-auto w-full px-3 blade-top-margin blade-bottom-margin md:blade-top-margin-sm md:blade-bottom-margin-sm max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
        />

        <div className="gsap-stagger-parent flex flex-col md:flex-row w-fit mx-auto max-w-7xl md:gap-x-10 md:justify-between">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="gsap-stagger flex font-regular py-2 max-w-sm xl:max-w-[20rem] 2xl:max-w-[23rem]"
              >
                <img
                  src={listIcon}
                  alt={'list' + (index + 1)}
                  className="h-16 md:h-20 2xl:h-24 "
                />
                <p className="-mt-1 ml-3 text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {item}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Coating
