import React from 'react'
import schematicDesk from 'assets/sapphire-nc-24/schematic/schematic-desk.webp'
import schematicMob from 'assets/sapphire-nc-24/schematic/schematic-mob.webp'
import Schematic from 'organisms/schematic'

const SchematicNC24 = () => {
  return (
    <Schematic
      bgClass=""
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
      bgGrad="linear-gradient(0deg, #E3F0E6 0%, #E3F0E6 100%), linear-gradient(180deg, rgba(240, 244, 245, 0.00) 0%, #F0F4F5 47.01%, rgba(240, 244, 245, 0.00) 100%)"
      extraDeskImgClasses="mt-4  xl:mt-8 2xl:mt-10"
    />
  )
}

export default SchematicNC24
