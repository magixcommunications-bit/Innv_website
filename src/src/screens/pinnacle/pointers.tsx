import React from 'react'

import icon01 from 'assets/pinnacle/pointers/01.svg'
import icon02 from 'assets/pinnacle/pointers/02.svg'
import icon03 from 'assets/pinnacle/pointers/03.svg'
import icon04 from 'assets/pinnacle/pointers/04.svg'
import icon05 from 'assets/pinnacle/pointers/05.svg'
import icon06 from 'assets/pinnacle/pointers/06.svg'

import './index.css'
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
    title: 'Optimized for minimal radiation exposure',
  },
  {
    icon: icon05,
    title:
      'Preloaded with Cardiovascular Suite, Pulsed Fluoroscopy, DSA, and Roadmap capabilities',
  },
  {
    icon: icon06,
    title:
      'Advanced options like digital stent enhancement (Stent Clarity) and QCA',
  },
]

export default function Pointers() {
  return (
    <SalientFeatures
      title="Redefine adaptability in cardiovascular care"
      pointersList={solutionsList}
      gridSize="sm"
    />
  )
}
