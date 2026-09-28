import React from 'react'
import pinnacle_table from 'assets/pinnacle/pinnacle-table.png'
import TableFeatures from 'organisms/tableFeatures'

const featuresList = [
  <>Carbon fiber table top</>,
  <>
    {' '}
    Maximum patient weight: <span className="font-medium">200 Kg</span>
  </>,
  <>
    Minimum table height: <span className="font-medium">800mm</span>
  </>,
  <>Memory foam mattress for added comfort</>,
]

const TableFeaturesPinnacle = () => {
  return (
    <TableFeatures
      title="Comfort & safety first"
      subTitle="Patient-centric table design"
      image={pinnacle_table}
      featuresList={featuresList}
    />
  )
}

export default TableFeaturesPinnacle
