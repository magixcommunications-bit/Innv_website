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
        <br className="hidden min-[400px]:block md:hidden" />
        across the target lesion.
      </>
    ),
    text: 'Advance standard guidewire across the target lesion.',
  },
  {
    image: blade2,
    textJSX: (
      <>
        <strong className="text-orange">Advance</strong> Scoreflex over the
        guidewire <br className="hidden min-[400px]:block md:hidden" /> and
        cross the target lesion.
      </>
    ),
    text: 'Advance Scoreflex over the guidewire and cross the target lesion.',
  },
  {
    image: blade3,
    textJSX: (
      <>
        <strong className="text-orange">Inflate</strong> the Scoreflex balloon{' '}
        in a <br className="hidden min-[400px]:block md:hidden" /> stepwise
        fashion.
      </>
    ),
    text: 'Inflate the Scoreflex balloon in a stepwise fashion.',
  },
  {
    image: blade4,
    textJSX: (
      <>
        <strong className="text-orange">Withdraw</strong> the deflated Scoreflex
        once the <br className="hidden min-[400px]:block md:hidden" /> desired
        result is achieved.
      </>
    ),
    text: 'Withdraw the deflated Scoreflex once the desired result is achieved.',
  },
]

const AngioplastyFlex = () => {
  return (
    <Angioplasty
      title={
        <>
          Focused force angioplasty for safe <br className="sm:block hidden" />{' '}
          and controlled dilatation
        </>
      }
      subTitle="Scoreflex is a focused force dilatation balloon with a dual-wire system which creates a focal stress pattern to facilitate safe and controlled plaque modification at lower resolution pressure."
      bgClasses="bg-[url(assets/scoreflex/angioplasty/bg.jpg)] bg-cover bg-center"
      angioplastyData={data}
    />
  )
}

export default AngioplastyFlex
