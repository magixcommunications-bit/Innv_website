import React from 'react'
import schematicDesk from 'assets/scoreflex/schematic/schematic-desk.svg'
import schematicMob from 'assets/scoreflex/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const SchematicFlex = () => {
  return (
    <Schematic
      bgClass="bg-[#B391C3] bg-opacity-[0.22]"
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
    />
  )
}

export default SchematicFlex
