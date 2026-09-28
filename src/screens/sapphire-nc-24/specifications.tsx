import React from 'react'
import Specifications, {
  SpecificationData,
} from 'organisms/sapphireSpecifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/green-ellipse-bg.webp)] bg-cover bg-[#F0F4F5]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-[18%]', 'w-2/3 lg:w-1/2'],
  tb: [
    ['Catheter type	', 'Rapid exchange'],
    ['Proximal shaft', '2.1F'],
    ['Distal shaft', '2.36F – 2.7F (Ø1.5 mm – 5.0 mm)'],
    ['Catheter working length', '140 cm'],
    [
      'Tip length',
      '1.5 mm (Ø1.5 mm -1.75 mm); 2.0 mm (Ø2.0 mm – 3.0 mm); 2.5 mm (Ø3.25 mm – 5.0 mm)',
    ],
    ['Marker bands', '1 (Ø1.5 mm); 2 (Ø1.75 mm – 5.0 mm)'],
    ['Crossing profile (Ø3.0 mm)', '0.0345”'],
    [
      'Coating',
      'Hydrophilic (tip to guidewire exit port); Hydrophobic (guidewire lumen)',
    ],
    ['Nominal pressure (NOM)', '14 atm'],
    [
      'Rated burst pressure (RBP)',
      '24 atm (Ø1.5 mm – 3.5 mm); 22 atm (Ø3.75 mm – 4.0 mm); 20 atm (Ø4.5 mm – 5.0 mm)',
    ],
    ['Balloon material', 'Nylon and pebax (dual layer)'],
    ['Balloon folds', '3 (Ø1.5 mm – 4.0 mm); 5 (Ø4.5 mm – 5.0 mm)'],
    [
      'Balloon diameters (mm)',
      '1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 2.875, 3.0, 3.25, 3.5, 3.75, 4.0, 4.5, 5.0',
    ],
    ['Balloon lengths (mm)', '8, 10, 12, 15, 18, 22, 26'],
    [
      'Guiding catheter compatibility',
      '5F (Ø1.5 mm – 4.00 mm); 6F (Ø4.5 mm – 5.0 mm)',
    ],
  ],
}

const SpecificationsNC24 = () => {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      bgGrad="linear-gradient(180deg, rgba(16,23,29,1) 0%, rgba(16,23,29,1) 30%, rgba(17,48,83,0.35) 48%, rgba(17,48,83,0.35) 52%, rgba(39,46,56,1) 70%, rgba(39,46,56,1) 100%)"
      titleColor="text-black"
    />
  )
}

export default SpecificationsNC24
