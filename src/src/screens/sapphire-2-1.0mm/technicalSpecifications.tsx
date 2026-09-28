import Specifications, {
  SpecificationData,
} from 'organisms/sapphireSpecifications'

const data: SpecificationData = {
  th: ['Specifications', 'Description'],
  bg: 'bg-[url(assets/bg-overlay/green-ellipse-bg.webp)] bg-cover bg-[#F0F4F5]',
  tableWidth: 'max-w-7xl',
  columnWidthStructure: ['w-1/3 lg:w-[18%]', 'w-2/3 lg:w-1/2'],
  tb: [
    ['Catheter type', 'Rapid exchange'],
    ['Proximal shaft diameter', '2.0F'],
    [
      'Distal shaft diameter',
      '2.36F (Ø1.75 mm – 2.0 mm); 2.55F (Ø2.25 mm – 3.5 mm); 2.6F (Ø3.75 mm – 5.0 mm)',
    ],
    ['Catheter working length', '140 cm'],
    [
      'Leading tip length',
      '1.5 mm (Ø1.75 mm); 2.0 mm (Ø2.0 mm – 3.0 mm); 2.5 mm (Ø3.25 mm – 5.0mm)',
    ],
    ['Balloon material', 'Nylon'],
    ['Balloon folds', '3 (Ø1.75 mm – 3.0 mm); 5 (Ø3.25 mm – 5. 0 mm)'],
    ['Compliance', 'Controlled-compliant'],
    ['Crossing profile', '0.0336” (Ø3.0 mm)'],
    ['Marker bands', '2'],
    [
      'Coating',
      'Hydrophilic (distal tip to guidewire exit port), Hydrophobic (guidewire lumen)',
    ],
    ['Nominal pressure', '12 atm'],
    [
      'Rated burst pressure',
      '20 atm (Ø1.75 mm – 4.0 mm); 18 atm (Ø4.5 mm – 5.0 mm)',
    ],
    [
      'Guiding catheter compatibility',
      '5F (1.75 mm – 4.0 mm), 6F (4.5 mm – 5.0 mm)',
    ],
  ],
}

export function TechnicalSpecifications() {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      bgGrad="linear-gradient(180deg, rgba(16,23,29,1) 0%, rgba(16,23,29,1) 30%, rgba(17,48,83,0.35) 48%, rgba(17,48,83,0.35) 52%, rgba(39,46,56,1) 70%, rgba(39,46,56,1) 100%)"
      titleColor="text-black"
    />
  )
}
