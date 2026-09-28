import React from 'react'
import rangeDesk from 'assets/sapphireIINC/range/range-desktop.svg'
import rangeMob from 'assets/sapphireIINC/range/range-mob.svg'
import Range from 'organisms/range'

const RangeIINC = () => {
  return (
    <Range
      title="Broad range of sizes"
      desc=""
      isDesc={false}
      rangeMobImage={rangeMob}
      rangeDeskImage={rangeDesk}
    />
  )
}

export default RangeIINC
