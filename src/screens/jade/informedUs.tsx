import React from 'react'

import InformedUs, { FeatureCardsList } from 'organisms/informedUs'
import balloon from 'assets/globals/balloon.svg'

const actionCardsList = {
  showReadMore: false,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList: FeatureCardsList[] = [
  {
    title: '',
    desc: '21cm * 21cm Flat Panel Detector <br /> 16 bit Dynamic Range <br /> Real time Image Acquisition <br /> Selectable Frame Rates <br /> High Resolution - 1344 * 1344 - increases the richness and depth of the image <br /> 77% DQE - Superior Image Quality and Lower Radiation Dose <br /> DICOM Compliant',
  },
]

export default function InformedUsJade() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about <br className="min-[360px]:block hidden" />{' '}
          our <strong className="text-orange">Jade</strong>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/JADE.pdf"
      fileName="JADE Brochure"
      productTarget="/products/balloon-catheters"
      productsIcon={balloon}
    />
  )
}
