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
    title: '',
    desc: '21cm * 21cm Flat Panel Detector <br /> 16 bit Dynamic Range <br /> Real time Image Acquisition <br /> Selectable Frame Rates <br /> High Resolution - 1344 * 1344 - increases the richness and depth of the image <br /> 77% DQE - Superior Image Quality and Lower Radiation Dose <br /> DICOM Compliant',
  },
  // {
  //   title: 'Table',
  //   desc: 'Carbon fiber table top <br /> Memory foam mattress <br /> Max. patient weight 200 kg <br /> Min height:780mm <br /> Vertical stroke: 350 mm <br /> Longitudinal stroke: 1000 mm + 350 mm additional <br /> Table lateral stroke: 300 mm <br /> Table pivot rotation – 16 degrees to the right ( towards c-arm) and 90 degrees away from the c-arm',
  // },
  // {
  //   title: 'UI Modules',
  //   desc: '5 Joysticks > C- Arm rotation <br />  Table Up/Down movement <br /> Detector Up/Down <br />  Collimator and 9 Keys > Pivot Rotation Lock/unlock <br /> Table Cross Travel lock <br /> Motion Disable switch <br /> X-ray Disable <br /> Error Reset <br /> Mag +/- <br /> UI Position <br /> Emergency Switch',
  // },
  // {
  //   title: 'Monitor',
  //   desc: 'Commercial with Medical Grade 55” 4K UHD <br /> 3840x2160 display matrix <br /> Ceiling suspended',
  // },
  // {
  //   title: 'Tube',
  //   desc: '3 MHU Grid Controlled Liquid Metal Bearing Tube.',
  // },
  // {
  //   title: 'Generator 65 KW',
  //   desc: 'High Frequency <br /> 40-125kV <br /> 20-630 mA <br /> Low Ripple <br /> Small Footprint',
  // },
]

export default function InformedUsPinnacle() {
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
      fileLink="/brochures/Pinnacle-2.pdf"
      fileName="Pinnacle brochure"
      productTarget="/products/cath-labs"
    />
  )
}
