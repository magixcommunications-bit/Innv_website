import useGSAP from 'hooks/useGSAP'
import React from 'react'
import NumenBanner from './NumenBanner'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import CatchTrialPoster from './CatchTrialPoster'
import ProductSpecTables from './ProductSpecTables'
import SubFooter from 'organisms/subFooter'
import InformedUs from 'organisms/informedUs'

const index = () => {
  useGSAP('.numen-master')
  return (
    <main className="numen-master">
      <NumenBanner />
      <SecondSection />
      <ThirdSection />
      <CatchTrialPoster />
      <ProductSpecTables />
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
              Numen Coil Embolization System
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/Numen.pdf"
        fileName="Numen"
        productTarget="/products/numen/"
      />
      <SubFooter />
    </main>
  )
}

export default index
