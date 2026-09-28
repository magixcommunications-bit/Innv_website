import React from 'react'
import schematicDesk from 'assets/sapphire3085mm/schematic/schematic-desk.svg'
import schematicMob from 'assets/sapphire3085mm/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const SchematicS3 = () => {
  return (
    <Schematic
      bgClass=""
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
      bgGrad="linear-gradient(0deg, #D5F1FE 0%, #D5F1FE 100%), linear-gradient(180deg, rgba(240, 244, 245, 0.00) 0%, #F0F4F5 47.01%, rgba(240, 244, 245, 0.00) 100%)"
    />
  )
}

export default SchematicS3
