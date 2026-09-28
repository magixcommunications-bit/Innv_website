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
    desc: 'Floor Mount <br /> ISO Centric <br /> Left Side Mounted <br /> Orbital Speed: upto 25 Deg/Sec <br /> Angulation Speed: 25 Deg/Sec <br /> Angular Stroke: 45 deg. to 45 deg <br /> Orbital Stroke: 90 to 45 deg <br /> C-arm Depth: 728mm (28.66 inch) <br /> Variable Sid: 960 to 1160 mm',
  },
  {
    title: 'Table',
    desc: 'Carbon fiber table top <br /> Memory foam mattress <br /> Max. patient weight 200 kg <br /> Min height:780mm <br /> Vertical stroke: 350 mm <br /> Longitudinal stroke: 1000 mm + 350 mm additional <br /> Table lateral stroke: 300 mm <br /> Table pivot rotation – 16 degrees to the right (towards c-arm) and 90 degrees to the left (away from the c-arm)',
  },
  {
    title: 'UI Modules',
    desc: '5 Joysticks > C- Arm rotation <br />  Table Up/Down movement <br /> Detector Up/Down <br />  Collimator and 9 Keys > Pivot Rotation Lock/unlock <br /> Table Cross Travel lock <br /> Motion Disable switch <br /> X-ray Disable <br /> Error Reset <br /> Mag +/- <br /> UI Position <br /> Emergency Switch',
  },
  {
    title: 'Monitor',
    desc: '55” 4K UHD Commercial Grade Live Display Monitor <br /> 3840x2160 display matrix <br /> Ceiling suspended',
  },
  {
    title: 'Tube',
    desc: '1.5 MHU | Oil Cooled with external heat exchanger with flow and thermal safety switch',
  },
  {
    title: 'Generator 65 KW',
    desc: 'High Frequency <br /> 40-125kV <br /> 20-630 mA <br /> Low Ripple <br /> Small Footprint',
  },
  {
    title: 'Other specifications',
    desc: '21cm * 21cm Flat Panel Detector <br /> 16 bit Dynamic Range <br /> Real time Image Acquisition <br /> Selectable Frame Rates <br /> High Resolution - 1344 * 1344 - increases the richness and depth of the image <br /> 77% DQE - Superior Image Quality and Lower Radiation Dose <br /> DICOM Compliant',
  },
]

export default function InformedUsAgile() {
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
      fileLink="/brochures/pinnacle-agile-new.pdf"
      fileName="Pinnacle Agile"
      productTarget="/products/cath-labs"
    />
  )
}
