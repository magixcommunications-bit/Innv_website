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
        subtitle: 'Implant all Arrhythmia-related devices with ease',
        description:
          'Cutting-edge space efficiency achieved through a gantry movement range of +/- 120° that enables all cardiovascular, neurovascular, and peripheral vascular interventions from complex angles.',
        videoCover: larm,
      },
      {
        title: 'C-arm movement',
        subtitle:
          'Make confident decisions with better access to the vasculature',
        description:
          'Enhanced vasculature access through adjustable angulations: CRA/CAU at +/- 55 degrees and LAO/RAO at +/- 120 degrees.',
        videoCover: carm,
      },
      {
        title: 'Detector movement',
        subtitle: 'Deeper angles for an improved anatomical view of the heart',
        description:
          'Unparalleled free space within a floor-mounted lab, featuring both independent, and synchronized detector mobility controlled by the L-Arm.',
        videoCover: detector_motion,
      },
    ],
  },
  {
    title: 'Flexibility in patient positioning',
    data: [
      {
        title: 'Table swivel',
        subtitle: 'To offer flexible access',
        description:
          'Pivot the table up to +/- 90 degrees for better flexibility during Vascular Hybrid procedures and improved access to patients for emergency resuscitation.',
        videoCover: table_swivel,
      },
      {
        title: 'Table sweep',
        subtitle: 'Offers better procedural coverage',
        description:
          'Comprehensive head-to-toe coverage with table sweep for seamless performance of interventions in Peripheral Vascular, Neurovascular, Cardiac, and lower extremity procedures.',
        videoCover: table_sweep,
      },
      {
        title: 'Table height',
        subtitle: 'Adjustable for patient convenience',
        description:
          'Patients can easily sit up and dismount without requiring additional assistance, which significantly enhances the quality of ambulatory care.',
        videoCover: table_height,
      },
    ],
  },
]

export default function FeatureGridSelect() {
  return <FeatureGrid list={featureGridList} />
}
