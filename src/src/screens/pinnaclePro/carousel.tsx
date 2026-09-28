import React from 'react'

import image1 from 'assets/pinnacleShared/icon.svg'
import image2 from 'assets/pinnacleShared/caraousel-pinnacle-pro-icon-2.svg'
import image3 from 'assets/pinnacleShared/caraousel-pinnacle-pro-icon-3.svg'
import CapacityCarousel, { CarouselData } from 'organisms/carousel'

const data: CarouselData[] = [
  {
    title: 'ASPIRE™',
    tab: 'ASPIRE™',
    logo: image1,
    features: [],
    mainHeading: 'ASPIRE™',
    heading: 'Image clarity with minimal radiation exposure',
    desc: 'A proprietary technology that utilizes Supercomputing Algorithms to produce sharp, virtually noise-free images at lower radiation doses.',
  },
  {
    title: 'X-ray generator',
    tab: 'X-ray generator',
    logo: image2,
    features: [],
    heading: '65kW high-frequency X-ray generator',
    desc: 'Precision in visualizing moving anatomy and obese patients.',
  },
  {
    title: 'X-ray tube',
    tab: 'X-ray tube',
    logo: image3,
    features: [],
    heading: '1.5 MHU X-ray tube',
    desc: 'Enhanced image quality with reduced X-ray dosage.',
  },
]

export default function CapacityCarouselPro() {
  return (
    <CapacityCarousel
      title="Precise cardiology visualization"
      subTitle="Meets every physician’s highest standards"
      carouselList={data}
    />
  )
}
