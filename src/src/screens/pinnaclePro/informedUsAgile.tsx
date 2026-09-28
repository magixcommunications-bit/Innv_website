import React from 'react'
import InformedUs, { FeatureCardsList } from 'organisms/informedUs'

const actionCardsList = {
  showReadMore: true,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList: FeatureCardsList[] = [
  {
    title: 'Gantry',
    desc: 'Floor mount <br /> ISO Centric <br /> Left side mounted <br /> Orbital Speed: Upto 25 deg/sec <br /> Angulation Speed: Upto 25 deg./sec <br /> Angular Stroke: -45 deg. to +45 deg <br /> Orbital Stroke: +90 to -45 deg <br /> deg., C arm Depth - 85.3 cm <br /> Fixed SID: 108 cm',
  },
  {
    title: 'Detector',
    desc: 'Flat Panel 12" diagonal <br /> 20 cmx 20 cm <br /> Pixel Size 200μm <br /> Image Matrix ·1024 x 1024 <br /> 16-bit Dynamic range <br /> DQE - 75%',
  },
  {
    title: 'Monitor',
    desc: '43" 4K UHD <br />  3840x2160 Display matrix <br /> ceiling suspended',
  },
  {
    title: 'Monitor Ceiling Suspension (MCS)',
    desc: 'MCS can be positioned on three sides of the patient <br />  Manual Monitor Height Adjustment',
  },
  {
    title: 'Image Acquisition System',
    desc: 'Fluoroscopy <br /> Roadmap <br />Cine <br /> DSA <br /> Low Dose Fluoroscopy mode <br /> Fluoro Save Option <br /> All the modes are configurable to 3,6,9,12,15,25 frame/sec frame rate <br /> Image Storage - 150000 + images',
  },
  {
    title: 'External System Integration',
    desc: 'Heamo Monitor Integration',
  },
]

export default function InformedUsPro() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about our <br className="md:block hidden" /> Cath
          Labs?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-4"
      bgGrad="linear-gradient(180deg, #451C07 0%, #763F1A 100%)"
      fileLink="/brochures/pinnacle-pro-new.pdf"
      fileName="Pinnacle Pro brochure"
      productTarget="/products/cath-labs"
    />
  )
}
