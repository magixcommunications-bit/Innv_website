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
    desc: '',
  },
]

export default function InformedUsScore() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed <br className="min-[320px]:block hidden" /> about
          our <span className="text-orange">Scoreflex</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/scoreflex.pdf"
      fileName="Scoreflex brochure"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
