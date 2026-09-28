import React from 'react'
import InformedUs from 'organisms/informedUs'

export function InformedUsDiamondBack() {
  return (
    <>
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
            Want to get informed about <br className="md:block hidden" />
            <span className="text-orange font-bold">
              Diamondback 360 coronary orbital atherectomy
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/diamond-back.pdf"
        fileName="Diamond Back brochure"
        productTarget="/products/stents/"
      />
    </>
  )
}
