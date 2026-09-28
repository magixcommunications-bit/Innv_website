import React from 'react'
import Specifications, { SpecificationData } from 'organisms/specifications'

const data: SpecificationData = {
  th: ['REFERENCE NUMBER', 'Teleport', '', 'Teleport Control'],
  bg: 'bg-[url(assets/bg-overlay/pink-ellipse-bg.webp)]',
  tableWidth: 'max-w-full',
  columnWidthStructure: [
    'w-1/4 lg:w-1/4',
    'w-1/4 lg:w-1/4',
    'w-1/4 lg:w-1/4',
    'w-1/4 lg:w-1/4',
  ],
  tb: [
    [
      'Catheter Working Length',
      '135 cm (antegrade)',
      '',
      '150 cm (retrograde)',
    ],
    ['Radiopaque Tip Length and Material', '', '6 mm, Tungsten and Pebax', ''],
    [
      'Catheter Exterior Coating',
      '',
      'Hydrophilic (60 cm of distal catheter including tip)',
      '',
    ],
    ['Catheter Inner Lumen Surface', '', 'PTFE Liner', ''],
    ['Catheter Inner Lumen ID', '0.0170”', '', '0.0175”'],
    ['Tip Inner Lumen ID', '', '0.0157”', ''],
    ['Tip Entry Profile', '', '0.0190”', ''],
    ['Catheter Inner Body Construction', '', 'Braiding and coil', ''],
    ['Catheter Outer Jacket', '', 'Nylon (proximal) and Pebax (distal)', ''],
    ['Pebax (gradual flexibility towards the distal)', '31 cm', '', '32.5 cm'],
    ['Proximal Shaft OD', '2.6F', '', '2.7F'],
    ['Distal Shaft OD', '2.0F', '', '2.1F'],
    ['Guiding Catheter Compatibility', '', '5F', ''],
  ],
}

const NCSpecifications = () => {
  return (
    <Specifications
      title="Technical specifications"
      specifications={data}
      extraWidth="min-w-[40rem]"
      showHeading={true}
      headingClass="text-black font-bold px-4 lg:px-6 py-2 bg-lightorange first:font-medium"
    />
  )
}

export default NCSpecifications
