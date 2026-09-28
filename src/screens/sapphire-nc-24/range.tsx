import React from 'react'
import Range from 'organisms/range'
import rangeDesk from 'assets/sapphire-nc-24/range/range-desktop.png'
import rangeMob from 'assets/sapphire-nc-24/range/range-mobile.svg'

const NC24range = () => {
  return (
    <Range
      title="Broad range in Balloon Sizes and Lengths"
      desc="Diameter range from 1.5 to 5.0 mm with lengths up to 26 mm for broadened range of treatment."
      isDesc={true}
      rangeMobImage={rangeMob}
      rangeDeskImage={rangeDesk}
    />
  )
}

export default NC24range
