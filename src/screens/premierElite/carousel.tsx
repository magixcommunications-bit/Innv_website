import React from 'react'

import CapacityCarousel, { CarouselData } from 'organisms/carousel'

import aspire from 'assets/finalElite/capacityCarousel/ASPIRE.png'
import liquidmetal from 'assets/finalElite/capacityCarousel/liquidmetal.png'
import generator from 'assets/finalElite/capacityCarousel/x-ray genrator.png'

const data: CarouselData[] = [
  {
    tag: 'ASPIRE™',
    title: 'ASPIRE™',
    tab: 'ASPIRE',
    logo: aspire,
    heading: 'Save time with high-resolution images',
    desc: 'ASPIRE™ algorithms bring forth the highest-resolution images. These algorithms show all the details clearly, which helps doctors make accurate decisions.',
    subHeading: '',
    features: [],
  },
  {
    title: 'Liquid Metal Bearing Tube',
    tab: 'Liquid Metal Bearing Tube',
    logo: liquidmetal,
    heading: '3 MHU Grid Controlled Liquid Metal Bearing Tube',
    desc: '',
    subHeading: 'Carry out lengthy procedures with low radiation exposure',
    features: [
      'A virtually silent tube engineered for continuous operations for long hours',
      'Grid-controlled pulsed fluoroscopy for sharper images with lower radiation',
      'Fast X-ray cut-off to significantly reduce the dosage for the patient and the operator',
      'Real-time, high-resolution image generation of the vasculature',
    ],
  },
  {
    title: 'X-ray Generator',
    tab: 'X-ray Generator',
    logo: generator,
    heading: '100 KW High Frequency X-ray Generator',
    desc: '',
    subHeading: 'Radiation safety with better visualization',
    features: [
      'Higher switching frequency improves image quality while reducing the X-ray dosage',
      'Accurate visualization of moving anatomy and obese patients',
      'High-level pulsed fluoroscopy and cineradiography',
    ],
  },
]

export default function CapacityCarouselElite() {
  return (
    <CapacityCarousel
      title="Accessory catalog"
      carouselList={data}
      isFeatureCard
      // showAccessoryBtn
    />
  )
}
