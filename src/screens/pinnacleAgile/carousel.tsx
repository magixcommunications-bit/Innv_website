import React from 'react'

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
          Integrated QCA Software that helps to measure the coronary vessels accurately to make procedural planning and assessment easier.
        </div>
      </>
    ),
  },
  {
    title: 'Ultra HD display',
    tab: 'Ultra HD display',
    logo: image4,
    features: [],
    heading: 'Clarity that sets new industry standards',
    desc: 'Pre-loaded with in-house-developed DSA and Roadmap software for a better field of view. You get a larger 9-inch detector panel for a better field of view, a 55-inch monitor to play up to 4 reference loops, and variable frame rates (as low as 3 fps) to perform long DSA procedures.',
  },
]

export default function CapacityCarouselAgile() {
  return (
    <CapacityCarousel
      title="Precise cardiology visualization"
      subTitle="Meets every physician’s highest standards"
      carouselList={data}
    />
  )
}
