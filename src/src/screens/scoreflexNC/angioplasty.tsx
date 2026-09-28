import React from 'react'
import blade1 from 'assets/scoreflexNC/angioplasty/01.png'
import blade2 from 'assets/scoreflexNC/angioplasty/02.png'
import blade3 from 'assets/scoreflexNC/angioplasty/03.png'
import blade4 from 'assets/scoreflexNC/angioplasty/04.png'

import Angioplasty from 'organisms/angioplasty'

const data = [
  {
    image: blade1,
    textJSX: (
      <>
        <strong className="text-orange">Advance</strong> standard guidewire{' '}
        <br className="md:hidden" />
        across the target lesion.
      </>
    ),
    text: 'Advance standard guidewire across the target lesion.',
  },
  {
    image: blade2,
    textJSX: (
      <>
        <strong className="text-orange">Advance</strong> Scoreflex NC balloon{' '}
        <br className="md:hidden" />
        over the guidewire and cross <br className="md:hidden" /> the target
        lesion.
      </>
    ),
    text: 'Advance Scoreflex NC balloon over the guidewire and cross the target lesion.',
  },
  {
    image: blade3,
    textJSX: (
      <>
        <strong className="text-orange">Inflate</strong> the Scoreflex NC
        balloon <br className="md:hidden" /> in a stepwise fashion.
      </>
    ),
    text: 'Inflate the Scoreflex NC balloon in a stepwise fashion.',
  },
  {
    image: blade4,
    textJSX: (
      <>
        <strong className="text-orange">Withdraw</strong> the deflated{' '}
        <br className="md:hidden" /> Scoreflex NC balloon once the{' '}
        <br className="md:hidden" /> desired result is achieved.
      </>
    ),
    text: 'Withdraw the deflated Scoreflex NC balloon once the desired result is achieved.',
  },
]

const AngioplastyNC = () => {
  return (
    <Angioplasty
      title={
        <>
          Focused force angioplasty for safe <br className="sm:block hidden" />{' '}
          and controlled dilatation
        </>
      }
      subTitle="Scoreflex NC is a focused force dilatation balloon with a dual-wire
          system which creates a focal stress pattern to facilitate safe and
          controlled plaque modification at lower resolution pressure."
      bgClasses="text-white bg-gradient-to-b from-[#10171D] to-[#272E38]"
      angioplastyData={data}
    />
  )
}

export default AngioplastyNC
