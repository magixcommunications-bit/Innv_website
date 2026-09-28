import React from 'react'
import Specifications, { SpecificationData } from 'organisms/specifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/blue-ellipse-bg.webp)] bg-cover bg-[#10171d]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-1/2', 'w-2/3 lg:w-1/2 '],
  tb: [
    ['Catheter type', 'Rapid exchange'],
    ['Proximal shaft', '1.9F'],
    ['Distal shaft', '2.36F'],
    ['Catheter working length', '145 cm'],
    ['Tip length', '1.5 mm'],
    ['Marker band(s)', 'Single'],
    ['Crossing profile', '0.0208”'],
    [
      'Coating',
      'Hydrophilic (distal tip to guidewire exit port); Hydrophobic (guidewire lumen)',
    ],
    ['Nominal pressure (NOM)', '6 atm'],
    ['Rated burst pressure (RBP)', '16 atm'],
    ['Balloon material', 'Nylon'],
    ['Balloon folds', '2 (0.85 mm – 1.00 mm); 3 (1.25 mm)'],
    ['Balloon diameters (mm)', '0.85, 1.0, 1.25'],
    ['Balloon lengths (mm)', '5, 8, 10, 15'],
    ['Guiding catheter compatibility', '5F'],
  ],
}

const SpecificationsS3 = () => {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      bgGrad="linear-gradient(180deg, rgba(16,23,29,1) 0%, rgba(16,23,29,1) 30%, rgba(17,48,83,0.35) 48%, rgba(17,48,83,0.35) 52%, rgba(39,46,56,1) 70%, rgba(39,46,56,1) 100%)"
      titleColor="text-white"
    />
  )
}

export default SpecificationsS3
