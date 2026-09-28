import React from 'react'
import useGSAP from 'hooks/useGSAP'
import VivoHeartBanner from './VivoHeartBanner'
import VivoHeartInfo from './VivoHeartInfo'
import VivoHeartThirdSection from './VivoHeartThirdSection'
import SubFooter from 'organisms/subFooter'
import InformedUs from 'organisms/informedUs'
import VivoHeartDetailImg from './VivoHeartDetailImg'
import IvusSystemFeatures from './IvusSystemFeatures'
import VideoSection from './VideoSection'

const index = () => {
  useGSAP('.vivo-master')
  return (
    <main className="vivo-master ">
      <VivoHeartBanner />
      <VivoHeartInfo />
      <VivoHeartDetailImg />
      <IvusSystemFeatures />
      <VivoHeartThirdSection />
      <VideoSection />
      <InformedUs
        featureCardsList={[]}
        columnClasses=" md:max-w-6xl md:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl xl:grid-cols-3"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: false,
          showReqDemo: true,
        }}
        title={
          <span className="text-white">
            Want to get informed about <br className="hidden md:block" />
            <span className="font-bold text-orange">
              VivoHeart<sup>®</sup>
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/VivoHeart.pdf"
        fileName="VivoHeart"
        productTarget="/products/vivoheart/"
      />
      <SubFooter />
    </main>
  )
}

export default index
