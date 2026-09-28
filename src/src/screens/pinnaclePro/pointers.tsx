import React from 'react'
import SalientFeatures from 'organisms/salientFeatures'

import icon01 from 'assets/pinnaclePro/pointers/01.svg'
import icon02 from 'assets/pinnaclePro/pointers/02.svg'
import icon03 from 'assets/pinnaclePro/pointers/03.svg'
import icon04 from 'assets/pinnaclePro/pointers/04.svg'
import icon05 from 'assets/pinnaclePro/pointers/05.svg'
import icon06 from 'assets/pinnaclePro/pointers/06.svg'
import icon07 from 'assets/pinnaclePro/pointers/07.svg'
import icon08 from 'assets/pinnaclePro/pointers/08.svg'

const data = [
  {
    title: 'Fully digital Cath Lab with 1K X 1K resolution',
    icon: icon01,
  },
  {
    title: 'Ultra high-definition ceiling-suspended 43” monitor',
    icon: icon02,
  },
  {
    title: '12" diagonal flat panel detector with 16-bit dynamic range',
    icon: icon03,
  },
  {
    title: 'Real time Image acquisition',
    icon: icon04,
  },
  {
    title: 'Smallest Footprint',
    icon: icon05,
  },
  {
    title: 'preloaded with Cardiovascular suite, DSA, and Roadmap capabilities',
    icon: icon06,
  },
  {
    title: '1024*1024 Image Resolution',
    icon: icon07,
  },
  {
    title: 'Proprietary ASPIRE™ image processing for sharper images',
    icon: icon08,
  },
]

export default function Pointers() {
  return (
    <SalientFeatures
      title="Cath Lab for advanced imaging"
      subTitle="Making cutting-edge cardiovascular care accessible everywhere"
      pointersList={data}
      gridSize="lg"
    />
  )
}
