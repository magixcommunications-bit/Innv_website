import React from 'react'
import Specifications, {
  SpecificationData,
} from 'organisms/sapphireSpecifications'
// import vvdwehg from 'assets/sapphire3(1.5mm)/specifications/green-ellipse-bg.svg'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/green-ellipse-bg.webp)] bg-cover bg-[#F0F4F5]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-[18%]', 'w-2/3 lg:w-1/2'],
  tb: [
    ['Catheter type', 'Rapid exchange'],
    ['Proximal shaft', '1.9F (Ø 1.5 mm); 2.1F (Ø1.75 mm – 4.0 mm)'],
    ['Distal shaft', '2.36F – 2.7F (Ø1.5 mm – 4.0 mm)'],
    ['Catheter working length', '140 cm'],
    ['Tip length', '1.5 mm – 2.5 mm (Ø1.5 mm – 4.0 mm)'],
    ['Marker band(s)', '1 (Ø1.5 mm); 2 (Ø1.75 mm – 4.0 mm)'],
    ['Crossing profile', '0.0313” (Ø3.0 mm)'],
    [
      'Coating',
      'Hydrophilic (distal tip to guidewire exit port); Hydrophobic (guidewire lumen)',
    ],
    ['Nominal pressure (NOM)', '6 atm'],
    [
      'Rated burst pressure (RBP)',
      '16 atm (Ø1.5 mm); 14 atm (Ø1.75 mm – 4.0 mm)',
    ],
    ['Balloon material', 'Nylon (Ø1.5 mm); Pebax (Ø1.75 mm – 4.0 mm)'],
    ['Balloon folds', '3'],
    [
      'Balloon diameters (mm)',
      '1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 4.0',
    ],
    ['Balloon lengths (mm)', '10, 12, 15, 20, 30'],
    ['Guiding catheter compatibility', '5F'],
  ],
}

const SpecificationsS3 = () => {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      bgGrad="linear-gradient(180deg, rgba(16,23,29,1) 0%, rgba(16,23,29,1) 30%, rgba(17,48,83,0.35) 48%, rgba(17,48,83,0.35) 52%, rgba(39,46,56,1) 70%, rgba(39,46,56,1) 100%)"
      titleColor="text-black"
    />
  )
}

export default SpecificationsS3
