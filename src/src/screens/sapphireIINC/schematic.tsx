import React from 'react'
import schematicDesk from 'assets/sapphireIINC/schematic/schematic-desk.svg'
import schematicMob from 'assets/sapphireIINC/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const IINCSchematic = () => {
  return (
    <Schematic
      bgClass=""
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
      bgGrad="linear-gradient(175deg, #E6F2E8 9.74%, #D0F2D3 104.54%)"
    />
  )
}

export default IINCSchematic
