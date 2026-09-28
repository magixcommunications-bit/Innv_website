import React from 'react'
import VersatilityBox from './VersatilityBox'
import NumenShapeBox from './NumenShapeBox'
import ConformabilityBox from './ConformabilityBox'
import NumenSoftnessBox from './NumenSoftnessBox'

const SecondSection = () => {
  return (
    <div className="h-[auto] flex flex-col items-center bg-[#f1f5f6] justify-center">
      <div className=" relative w-[100%]">
        <div className="bg-[url(assets/numen/ShapeBG.png)] bg-center bg-no-repeat bg-cover opacity-40 absolute inset-0"></div>
        <VersatilityBox />
        <NumenShapeBox />
      </div>
      <div className="bg-[#dff2fd] w-full">
        <ConformabilityBox />
        <NumenSoftnessBox />
      </div>
    </div>
  )
}

export default SecondSection
