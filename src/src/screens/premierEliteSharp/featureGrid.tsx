import React from 'react'

import carm from 'assets/finalElite/features/c_arm.mp4'
import larm from 'assets/finalElite/features/L_arm.mp4'
import detector_motion from 'assets/finalElite/features/detector_motion.mp4'
import table_height from 'assets/finalElite/features/table_height.mp4'
import table_swivel from 'assets/finalElite/features/table_sweep.mp4'
import table_sweep from 'assets/finalElite/features/table_swivel.mp4'

import FeatureGrid, { FeatureGridList } from 'organisms/featureGrid'

const featureGridList: FeatureGridList[] = [
  {
    title: 'Flexibility in motion',
    data: [
      {
        title: 'L-arm movement',
        subtitle: 'Implant Arrhythmia devices with confidence',
        description:
          'Best-in-class space optimization with +/- 120° gantry movement that enables all cardiovascular, neurovascular, and peripheral vascular interventions from complex angles.',
        videoCover: larm,
      },
      {
        title: 'C-arm movement',
        subtitle: 'Deeper angles ensure better access to the vasculature',
        description:
          'Angulations that help with better clinical decision-making: CRA/CAU: +/- 55 degrees, LAO/RAO: +/- 120 degrees.',
        videoCover: carm,
      },
      {
        title: 'Detector movement',
        subtitle:
          'Greater depth in detector movement enables deeper angulations',
        description:
          'Best-in-class free space in a floor-mounted lab with independent as well as synchronized detector movement via the L-Arm.',
        videoCover: detector_motion,
      },
    ],
  },
  {
    title: 'Flexibility in patient positioning',
    data: [
      {
        title: 'Table swivel',
        subtitle: 'Improved movement for better flexibility',
        description:
          'Table pivot movement of +/- 90 degrees provides greater flexibility to do Vascular Hybrid cases and greater access to the patient for resuscitation during emergencies.',
        videoCover: table_swivel,
      },
      {
        title: 'Table sweep',
        subtitle: 'Get full access to perform all procedures',
        description:
          'Head-to-toe coverage to perform Peripheral Vascular, Neurovascular, Cardiac, and lower extremity interventions seamlessly.',
        videoCover: table_sweep,
      },
      {
        title: 'Table height',
        subtitle: 'Easy to get on and off for patients',
        description:
          'The lower table height allows patients to sit up and dismount without the need for extra assistance, elevating ambulatory care to a whole new level.',
        videoCover: table_height,
      },
    ],
  },
]

export default function FeatureGridElite() {
  return <FeatureGrid list={featureGridList} />
}
