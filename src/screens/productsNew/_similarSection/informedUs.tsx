import React from 'react'
import InformedUs, { FeatureCardsList } from 'organisms/informedUs'
import stents from 'assets/globals/stents.svg'

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

export default function InformedUsEternia() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed <br className="min-[320px]:block hidden" /> about
          our <span className="text-orange">Eternia</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/Eternia.pdf"
      fileName="Eternia brochure"
      productTarget="/products/stents/"
      productsIcon={stents}
    />
  )
}
