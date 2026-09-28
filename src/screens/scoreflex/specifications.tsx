import React from 'react'
import Specifications, { SpecificationData } from 'organisms/specifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/scoreflex/specifications/bg.jpg)] bg-cover',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-1/2', 'w-2/3 lg:w-1/2 '],
  tb: [
    ['Proximal shaft diameter', '2.3F'],
    ['Distal shaft diameter', '2.9F'],
    ['Leading tip length', '11 mm'],
    ['Balloon material', 'Nylon'],
    ['Balloon folds', '3'],
    ['Compliance', 'Semi-compliant'],
    ['Crossing profile (Ø3.0 mm)', '0.032”'],
    ['Marker bands', '2'],
    ['Scoring elements', '0.011” integral wire; 0.014” conventional guidewire'],
    [
      'Coating',
      'Hydrophilic (tip & distal shaft), Hydrophobic (guidewire lumen & balloon)',
    ],
    ['Nominal pressure', '6 atm'],
    ['Rated burst pressure', '16 atm'],
    ['Guidewire compatibility', '0.014”'],
    ['Guiding catheter compatibility	', '5F'],
  ],
}

const SpecificationsFlex = () => {
  return (
    <Specifications title="Technical specifications" specifications={data} />
  )
}

export default SpecificationsFlex
