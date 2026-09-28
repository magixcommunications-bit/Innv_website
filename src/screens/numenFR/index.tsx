import React from 'react'
import useGSAP from 'hooks/useGSAP'
import NumenFrBanner from './NumenFrBanner'
import IndicatorModes from './IndicatorModes'
import NumenFrDesc from './NumenFrDesc'
import InformedUs from 'organisms/informedUs'
import SubFooter from 'organisms/subFooter'

const index = () => {
  useGSAP('.numenFR-master')
  return (
    <main className="numenFR-master">
      <NumenFrBanner />
      <NumenFrDesc />
      <IndicatorModes />
      <InformedUs
        featureCardsList={[]}
        columnClasses=" md:max-w-xl lg:max-w-3xl 2xl:max-w-4xl"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: false,
        }}
        title={
          <span className="text-white">
            Want to get informed about <br className="hidden md:block" />
            <span className="font-bold text-orange">
              NumenFR Detachment System
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/NumenFR.pdf"
        fileName="NumenFR"
        productTarget="/products/numen/numen-fr"
      />
      <SubFooter />
    </main>
  )
}

export default index
