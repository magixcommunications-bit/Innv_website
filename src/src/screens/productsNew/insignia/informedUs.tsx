import React from 'react'
import InformedUs from 'organisms/informedUs'
import stents from 'assets/globals/stents.svg'

export default function InformedUsInsignia() {
  return (
    <>
      <InformedUs
        featureCardsList={[]}
        columnClasses="xl:grid-cols-3 xl:max-w-7xl"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: true,
        }}
        title={
          <>
            Want to get informed about{' '}
            <br className=" hidden min-[360px]:block" />
            our <span className="text-orange">Insignia</span>?
          </>
        }
        bgGrad="linear-gradient(180deg, #10171D 0%, #272E38 100%)"
        fileLink="/brochures/Insignia-Brochure.pdf"
        fileName="Insignia-Brochure"
        productTarget="/products/stents"
        productsIcon={stents}
      />
    </>
  )
}
