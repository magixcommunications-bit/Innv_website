import React from 'react'

// import logo from 'assets/pinnacleShared/icon.svg'
import image1 from 'assets/finalElite/capacityCarousel/image-1.png'
import image2 from 'assets/finalElite/capacityCarousel/image-2.png'
import image3 from 'assets/finalElite/capacityCarousel/image-3.png'
import image4 from 'assets/finalElite/capacityCarousel/image-4.png'
import CapacityCarousel, { CarouselData } from 'organisms/carousel'

const data: CarouselData[] = [
  {
    title: 'Spotlight',
    tab: 'Spotlight',
    logo: image1,
    heading: 'Spotlight',
    desc: '',
    subHeading: 'See everything in a new light',
    features: [
      'Enhances the accuracy of puncturing techniques',
      'Provides superior visibility during the introduction of wires, balloons, and stents in lumens or over-the-wire procedures',
      'Highly adaptable for positioning, allowing placement as needed',
      'Offers dual-tone and brightness adjustments for customized lighting',
    ],
  },
  {
    title: 'Radial Support Arm Rest',
    tab: 'Radial Support Arm Rest',
    logo: image2,
    heading: 'Radial Support Arm Rest',
    desc: '',
    subHeading: 'Ensure complete control and safety',
    features: [
      'Constructed from lightweight, radiolucent carbon fiber for ease of use',
      'Facilitates radial punctures by positioning equipment away from the patient and table',
      'Minimizes the risk of contrast media spilling onto the table or patient',
      'Prioritizes patient comfort and provides ample space for consumables, such as wires, injections, tubing, and more',
    ],
  },
  {
    title: 'Separator',
    tab: 'Separator',
    logo: image3,
    heading: 'Separator',
    desc: '',
    subHeading: 'Organize your workflow',
    features: [
      'Maintains a clear distinction between sterile and non-sterile areas on tables',
      'Simplifies technician tasks by segregating sterile and non-sterile workspaces',
      'Offers flexible positioning to adapt to your workflow',
    ],
  },
  {
    title: 'QM55R Display Monitor',
    tab: 'QM55R Display Monitor',
    logo: image4,
    heading: 'QM55R Display Monitor',
    desc: '',
    subHeading: 'Gain a vision of clarity',
    features: [
      'Delivers lifelike images through ultra-high-definition resolution',
      'Ensures UHD-level picture quality even with lower resolution content, thanks to the Crystal Processor 4K, and advanced UHD upscaling technology',
      'The Dynamic Crystal Display widens the spectrum of colors to encompass up to one billion shades',
      'Its symmetrical, slim design simplifies installation and seamlessly complements any environment',
      'Operating securely and PC-free through Knox, with robust three-layer protection',
    ],
  },
]

export default function CapacityCarouselCath() {
  return (
    <CapacityCarousel
      title={
        <>   
          <span className="bg-blue-gradient bg-clip-text text-transparent">
            Accessory Catalog
          </span>
          <br /> Efficiency beyond Cath Labs
        </>
      }
      subTitle="At Innvolution, we are committed to helping you utilize the full
            potential of the latest cardiac care technology, not just with our
            Cath Labs but also with a wide range of supplemental accessories!"
      carouselList={data}
      isFeatureCard
      showAccessoryBtn
    />
  )
}
