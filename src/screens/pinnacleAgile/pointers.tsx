import React from 'react'

import icon01 from 'assets/pinnacleAgile/salientFeatures/01.svg'
import icon02 from 'assets/pinnacleAgile/salientFeatures/02.svg'
import icon03 from 'assets/pinnacleAgile/salientFeatures/03.svg'
import icon04 from 'assets/pinnacleAgile/salientFeatures/04.svg'
import icon05 from 'assets/pinnacleAgile/salientFeatures/05.svg'
import icon06 from 'assets/pinnacleAgile/salientFeatures/06.svg'
import icon07 from 'assets/pinnacleAgile/salientFeatures/07.svg'
import icon08 from 'assets/pinnacleAgile/salientFeatures/08.svg'

import SalientFeatures, { PointersList } from 'organisms/salientFeatures'

const solutionsList: PointersList[] = [
  {
    icon: icon01,
    title: 'One of the most versatile Cath Labs in the market',
  },
  {
    icon: icon02,
    title: 'Equipped with a 55” monitor for better visualization',
  },
  {
    icon: icon03,
    title: 'Proprietary ASPIRE™ image processing for sharp clinical images',
  },
  {
    icon: icon04,
    title: 'vFFR – a less invasive angio-derived FFR calculation method',
  },
  {
    icon: icon05,
    title: 'Optimized for minimal radiation exposure',
  },
  {
    icon: icon06,
    title:
      'Preloaded with Cardiovascular Suite, Pulsed Fluoroscopy, DSA, and Roadmap capabilities',
  },
  {
    icon: icon07,
    title:
      'Advanced options like digital stent enhancement (Stent Clarity) and QCA',
  },
  {
    icon: icon08,
    title:
      'IV-Linq for real-time co-registration of IVUS/OCT data with angiography for a detailed view',
  },
]

export default function Pointers() {
  return (
    <SalientFeatures
      title="Harness versatility in cardiovascular care"
      subTitle=""
      pointersList={solutionsList}
      gridSize="lg"
    />
  )
}
