import React from 'react'
import InformedUs, { FeatureCardsList } from 'organisms/informedUs'

const actionCardsList = {
  showReadMore: true,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList: FeatureCardsList[] = [
  // { //PS
  //   title: 'Gantry',
  //   desc: 'C Arm Speed : Upto 25 Degree/Sec <br/> ISO Center Height : 1065 <br/> Min SID : 960<br/> Max SID: 1260 <br/> SID Travel : 300 <br/> Max Free Space : 940 <br/> L Movement : "+/-" 120 degrees, three side of table <br/> Home Position of L arm is Head End<br/> Speed : Upto 15 Degree/Sec <br/> 2 Way Anti-collision : Detector and C - Arm',
  // },
  // { //PS
  //   title: 'Table',
  //   desc: 'Carbon Fiber Table Top Memory foam mattress  <br /> Max. patient weight: 200 Kg + 50 kg CPR  <br /> Min height: 780mm  <br /> Vertical stroke: 300 mm  <br /> Longitudinal stroke: 1350mm  <br /> Table lateral stroke: 300 mm  <br /> Table pivot Movement : +/- 90 Deg',
  // },
  {
    title: 'Gantry',
    desc: 'C-Arm Speed: Upto 25 Degree/Sec <br /> ISO Center Height: 1110 mm <br /> Min SID: 960 mm <br /> Max SID: 1260 mm <br /> SID Travel: 300 mm <br /> Min Free Space: 625mm <br /> Max Free Space: 925 mm <br /> L Movement: "+/-" 120 degrees, three sides of the table <br /> Home Position of L-Arm: Head End <br /> Speed: Upto 15 Degree/Sec <br /> 2 Way Anti-collision: Detector side and L-Arm Side',
  },
  {
    title: 'Table',
    desc: "Carbon Fiber table top <br /> Memory foam mattress <br /> Max. patient weight: 200 Kg + 50 kg CPR <br /> Min height: 780mm <br /> Vertical stroke: 300 mm <br /> Longitudinal stroke: 1300mm <br /> Table lateral stroke: 300 mm <br /> Table pivot Movement: '+/-' 90 Deg",
  },
  {
    title: 'Display monitor',
    desc: '55 Inch Commercial Grade Display Live Monitor. <br /> Two 43 Inch 4K Professional grade reference monitors in console room.',
  },
  {
    title: 'Detector',
    desc: 'Flat Panel 12" diagonal <br /> Pixel Size: 154µm <br /> Image Matrix: 1344x1344 <br /> 16-bit Dynamic range <br /> DQE - 77%',
  },
  {
    title: 'Tube',
    desc: '1.5 MHU | Oil Cooled with external Heat Exchanger with flow and thermal safety switch.',
  },
  {
    title: 'Generator',
    desc: '65 KW High frequency X-Ray generator | 40-125 KV',
  },
]

export default function InformedUsSelect() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about our <br className="md:block hidden" />{' '}
          <span className="text-orange">Cath Labs</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-4"
      bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
      fileLink="/brochures/premier-select.pdf"
      fileName="Premier Select new brochure"
      productTarget="/products/cath-labs"
    />
  )
}
