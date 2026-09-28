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

export default function InformedUs315() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about our{' '}
          <br className="min-[500px]:block hidden" />{' '}
          <span className="text-[#F69A4D]">Sapphire NC24</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/SapphireNC24 Brochure.pdf"
      fileName="Sapphire NC24 brochures"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
