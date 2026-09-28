import React from 'react'
import schematicDesk from 'assets/teleportMicroCatheter/schematic/schematic-desk.svg'
import schematicMob from 'assets/teleportMicroCatheter/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

const SchematicTeleport = () => {
  return (
    <Schematic
      bgClass="bg-[#D4CFF5]"
      title="Schematic"
      schematicDesk={schematicDesk}
      schematicMob={schematicMob}
      // bgGrad="linear-gradient(175deg, #E6F2E8 9.74%, #D0F2D3 104.54%)"
    />
  )
}

export default SchematicTeleport
