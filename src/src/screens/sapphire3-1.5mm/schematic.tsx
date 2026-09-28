import React from 'react'
import schematicDesk from 'assets/sapphire3-1.5mm/schematic/schematic-desk.svg'
import schematicMob from 'assets/sapphire3-1.5mm/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const SchematicS3 = () => {
  return (
    <Schematic
      bgClass=""
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
      bgGrad="linear-gradient(0deg, #E3F0E6 0%, #E3F0E6 100%), linear-gradient(180deg, rgba(240, 244, 245, 0.00) 0%, #F0F4F5 47.01%, rgba(240, 244, 245, 0.00) 100%)"
    />
  )
}

export default SchematicS3
