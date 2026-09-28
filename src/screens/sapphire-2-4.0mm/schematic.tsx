import React from 'react'
import schematicDesk from 'assets/sapphire2-4.0mm/schematic/schematic-desk.svg'
import schematicMob from 'assets/sapphire2-4.0mm/schematic/schematic-mob.svg'
import Schematic from 'organisms/schematic'

export function SchematicS2() {
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
