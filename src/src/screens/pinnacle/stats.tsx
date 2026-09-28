import React from 'react'

import Stats from 'organisms/stats'
import image1 from 'assets/pinnacle/stats/01.jpg'
import image2 from 'assets/pinnacle/stats/02.jpg'
import image3 from 'assets/pinnacle/stats/03.jpg'
import image4 from 'assets/pinnacle/stats/04.jpg'
import { StatsListType } from 'utils/agileTypes'

const dataPoints: StatsListType[] = [
  {
    _id: '1',
    alt: '',
    stat: 'Smallest footprint',
    desc: 'Now you can take visuals from deeper angles at greater ease with the up and down movement of the flat panel detector.',
    coverImage: image1,
  },
  {
    _id: '2',
    alt: '',
    stat: 'Tab-based interface',
    desc: 'A proprietary tablet-based touch-screen interface to efficiently control patient information.',
    coverImage: image2,
  },
  {
    _id: '3',
    alt: '',
    stat: 'Responsive table control',
    desc: 'Always be in control with our responsive Table Side User Interface.',
    coverImage: image3,
  },
  {
    _id: '4',
    alt: '',
    stat: 'High definition detector',
    desc: 'Pinnacle is the only Cath lab in its segment that comes with a high-definition detector panel of 1344x1344 pixels.',
    coverImage: image4,
  },
]

export default function StatsPinnacle() {
  return (
    <Stats
      title="User experience"
      subTitle="Designed for convenience"
      bgGrad="linear-gradient(180deg, #10171D 0%, #272E38 100%)"
      bgClasses="bg-[url('assets/bg-overlay/ellipse-bg.webp')] "
      isCenterAligned={false}
      toShowButton={true}
      statsList={dataPoints}
    />
  )
}
