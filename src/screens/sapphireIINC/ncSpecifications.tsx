import React from 'react'
import { SpecificationData } from 'organisms/specifications'
import Specifications from 'organisms/sapphireSpecifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/dark-green-ellipse-bg.webp)]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 ', 'w-2/3'],
  tb: [
    ['Catheter Type', 'Rapid Exchange'],
    ['Proximal Shaft Diameter', '2.0F'],
    [
      'Distal Shaft Diameter',
      '2.36F (Ø1.75 mm – 2.0 mm); 2.55F (Ø2.25 mm – 3.5 mm); 2.6F (Ø3.75 mm – 5.0 mm)',
    ],
    ['Catheter Working Length', '140 cm'],
    [
      'Leading Tip Length',
      ' 1.5 mm (Ø1.75 mm); 2.0 mm (Ø2.0 mm – 3.0 mm); 2.5 mm (Ø3.25 mm – 5.0mm)',
    ],
    ['Balloon Material', 'Nylon'],
    ['Balloon Folds', '3 (Ø1.75 mm – 3.0 mm); 5 (Ø3.25 mm – 5. 0 mm)'],
    ['Compliance', 'Controlled-compliant'],
    ['Crossing Profile', '0.0336” (Ø3.0 mm)'],
    ['Marker Bands', '2'],
    [
      'Coating',
      'Hydrophilic (distal tip to guidewire exit port), Hydrophobic (guidewire lumen)',
    ],
    ['Nominal Pressure', '12 atm'],
    [
      'Rated Burst Pressure',
      '20 atm (Ø1.75 mm – 4.0 mm); 18 atm (Ø4.5 mm – 5.0 mm)',
    ],
    [
      'Guiding Catheter Compatibility',
      '5F (1.75 mm – 4.0 mm), 6F (4.5 mm – 5.0 mm)',
    ],
  ],
}

const NCSpecifications = () => {
  return (
    <Specifications specifications={data} title="Technical specifications" />
  )
}

export default NCSpecifications
