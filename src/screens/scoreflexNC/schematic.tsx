import React from 'react'
import schematicDesk from 'assets/scoreflexNC/schematic/schematic-desk.svg'
import schematicMob from 'assets/scoreflexNC/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const NCSchematic = () => {
  return (
    <Schematic
      bgClass="bg-[#F2EBF4]"
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
    />
  )
}

export default NCSchematic
