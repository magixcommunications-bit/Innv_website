import React from 'react'
import Specifications, { SpecificationData } from 'organisms/specifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/blue-ellipse-bg.webp)] bg-cover bg-[#10171d]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-[7rem] lg:w-1/2', 'w-full lg:w-1/2 '],
  tb: [
    ['Catheter type', 'Rapid exchange'],
    ['Minimum sheath size', '4F (Ø 1.5 mm – 3.5 mm); 5F (Ø 4.0 mm – 6.0 mm)'],
    ['Guidewire compatibility', '0.014”'],
    ['Catheter working length', '150 cm'],
    [
      'Proximal shaft diameter',
      '2.8F (Ø 1.5 mm – 2.5 mm); 3.3F (Ø 3.0 mm – 3.5 mm); 4.0F (Ø 4.0 mm – 6.0 mm)',
    ],
    [
      'Distal shaft diameter',
      '3.3F (Ø 1.5 mm – 2.5 mm); 3.7F (Ø 3.0 mm – 3.5 mm); 4.2F (Ø 4.0 mm – 6.0 mm)',
    ],
    ['Balloon material', 'Nylon/Pebax'],
    ['Compliance', 'Controlled compliance'],
    [
      'Leading tip length',
      '3.0 mm (Ø 1.5 mm – 3.0 mm); 4.0 mm (Ø 3.5 mm – 4.5 mm); 5.0 mm (Ø 5.0 mm – 6.0 mm)',
    ],
    [
      'Marker bands',
      '2 marker bands (Ø 15 mm – 120 mm); 4 marker bands (Ø 180 mm & 240 mm)',
    ],
    [
      'Coating',
      'Hydrophilic (tip & distal shaft), Hydrophobic (guidewire lumen & balloon)',
    ],
    ['Crossing profile', '0.039” (∅3.0 mm)'],
    ['Nominal pressure', '12 atm'],
    [
      'Rated burst pressure',
      '22 atm (Ø 1.5 mm – 4.0 mm); 20 atm (Ø 4.5 mm – 5.0 mm); 18 atm (Ø 5.5 mm – 6.0 mm)',
    ],
  ],
}

const SpecificationsJade = () => {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      bgGrad="linear-gradient(180deg, rgba(16,23,29,1) 0%, rgba(16,23,29,1) 30%, rgba(17,48,83,0.35) 48%, rgba(17,48,83,0.35) 52%, rgba(39,46,56,1) 70%, rgba(39,46,56,1) 100%)"
      titleColor="text-white"
    />
  )
}

export default SpecificationsJade
