import React from 'react'
import Specifications, { SpecificationData } from 'organisms/specifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/scoreflexNC/specifications/bg.svg)] bg-cover bg-center ',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-1/2', 'w-2/3 lg:w-1/2 '],
  tb: [
    ['Proximal Shaft Diameter', '2.1F'],
    ['Distal Shaft Diameter', '2.7F'],
    ['Leading Tip Length', '11 mm'],
    ['Balloon Material', 'Nylon'],
    ['Balloon Folds', '3'],
    ['Compliance', 'Non-compliant'],
    ['Crossing Profile (Ø3.0 mm)', '0.0343”'],
    ['Marker Bands', '2'],
    ['Scoring Elements', '0.011” integral wire; 0.014” conventional guidewire'],
    [
      'Coating',
      'Hydrophilic (tip & distal shaft), Hydrophobic (guidewire lumen & balloon)',
    ],
    ['Nominal Pressure', '12 atm'],
    ['Rated Burst Pressure', '20 atm'],
    ['Guidewire Compatibility', '0.014”'],
    ['Guiding Catheter Compatibility', '5F (Ø1.75 mm – 3.5 mm), 6F (Ø4.0 mm)'],
  ],
}

const NCSpecifications = () => {
  return (
    <Specifications title="Technical specifications" specifications={data} />
  )
}

export default NCSpecifications
