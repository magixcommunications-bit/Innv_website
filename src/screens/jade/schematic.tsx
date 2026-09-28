import React from 'react'
import schematicDesk from 'assets/jade/schematic/schematic-desk.png'
import schematicMob from 'assets/jade/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const SchematicJade = () => {
  return (
    <Schematic
      bgClass=""
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
    />
  )
}

export default SchematicJade
