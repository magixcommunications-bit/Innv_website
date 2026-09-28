import React from 'react'

// import logo from 'assets/pinnacleShared/icon.svg'
import image1 from 'assets/pinnacleShared/caraousel-icon-1.svg'
import image2 from 'assets/pinnacleShared/caraousel-icon-2.svg'
import image3 from 'assets/pinnacleShared/caraousel-icon-3.svg'
import image4 from 'assets/pinnacleShared/caraousel-icon-4.svg'
import CapacityCarousel, { CarouselData } from 'organisms/carousel'

const data: CarouselData[] = [
  {
    title: 'Cardiovascular Suite',
    tab: 'Cardiovascular Suite',
    logo: image1,
    features: [],
    heading: 'High-resolution detector for sharper images',
    desc: "Visualize distal and tortuous vessels with the world's first HD Flat Panel Detector for sharper images in the most distal anatomy.",
  },

  {
    title: 'ASPIRE™',
    tab: 'ASPIRE™',
    logo: image2,
    features: [],
    heading: 'Image clarity with minimal radiation exposure',
    desc: 'A proprietary technology that utilizes Supercomputing Algorithms to produce sharp, virtually noise-free images at lower radiation doses.',
  },
  {
    title: 'Stent Clarity® & QCA',
    tab: 'Stent Clarity® & QCA',
    logo: image3,
    features: [],
    heading: 'Transforming stent visualization',
    desc: (
      <>
        <div>
          High-resolution visualization of the entire stent with Stent Clarity
          <sup>®</sup>, reducing the need for an extensive cine loop to perform
          Software Stent Enhancement.
        </div>
        <div className="pt-3">
          Integrated QCA Software that helps to measure the heart's blood
          vessels accurately to make procedural planning and assessment easier.
        </div>
      </>
    ),
  },
  {
    title: 'Ultra HD display',
    tab: 'Ultra HD display',
    logo: image4,
    features: [],
    heading: 'Experience the best in industry',
    desc: '55" High resolution 4K Ultra HD monitor. All that you need to see on a single screen. Sharper image quality with a very high contrast ratio and brightness of the monitor.',
  },
]

export default function CapacityCarouselPinnacle() {
  return (
    <CapacityCarousel
      title="Precise cardiology visualization"
      subTitle="Meets every physician’s highest standards"
      carouselList={data}
    />
  )
}
