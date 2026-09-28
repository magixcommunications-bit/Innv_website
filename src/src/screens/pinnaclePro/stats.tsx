import React from 'react'

import Stats from 'organisms/stats'
import image1 from 'assets/pinnaclePro/stats/01.jpg'
import image2 from 'assets/pinnaclePro/stats/02.jpg'
import image3 from 'assets/pinnaclePro/stats/03.jpg'
import { StatsListType } from 'utils/agileTypes'

const dataPoints: StatsListType[] = [
  {
    _id: '1',
    alt: '',
    stat: '43" 4K UHD ceiling suspended monitor',
    desc: '',
    coverImage: image1,
  },
  {
    _id: '2',
    alt: '',
    stat: 'Multiple image acquisition modes:',
    desc: 'Pulsed Fluoroscopy, Cine, DSA, Roadmap, Low Dose Fluoroscopy',
    coverImage: image2,
  },
  {
    _id: '3',
    alt: '',
    stat: 'Intuitive remote-based user interface',
    desc: '',
    coverImage: image3,
  },
]

export default function StatsPro() {
  return (
    <Stats
      title="User experience"
      subTitle="Simplicity meets innovation"
      bgGrad="linear-gradient(180deg, #10171D 0%, #272E38 100%)"
      bgClasses="bg-[url('assets/bg-overlay/ellipse-bg.webp')] "
      isCenterAligned={true}
      toShowButton={false}
      statsList={dataPoints}
    />
  )
}
