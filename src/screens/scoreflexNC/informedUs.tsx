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

export default function InformedUsNC() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about <br className="min-[320px]:block hidden" />
          our <span className="text-orange">Scoreflex NC</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/Scoreflex-NC-Brochure.pdf"
      fileName="Scoreflex NC brochures"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
