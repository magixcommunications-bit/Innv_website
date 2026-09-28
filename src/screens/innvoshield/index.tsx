import useGSAP from 'hooks/useGSAP'
import InnvoShieldBanner from './InnvoShieldBanner'
import InnvoShieldSection2 from './InnvoShieldSection2'
// import InnvoShieldSection3 from './InnvoShieldSection3'
// import InnvoShieldSection4 from './InnvoShieldSection4'
import InnvoShieldSection5 from './InnvoShieldSection5'
import InnvoShieldSection6 from './InnvoShieldSection6'
// import InnvoShieldSection7 from './InnvoShieldSection7'
import InformedUs from 'organisms/informedUs'
import SubFooter from 'organisms/subFooter'
import './InnvoShiledStyles.css'
import AppronGrid from './AppronGrid'
import CoreMeterialThinkness from './CoreMeterialThinkness'
import CaringForProtection from './CaringForProtection'
import QualityDisposal from './QualityDisposal'
import IndustryCertifications from './IndustryCertifications'

function index() {
  useGSAP('.innvoshield-master')
  return (
    <main className="innvoshield-master">
      <InnvoShieldBanner />
      <InnvoShieldSection2 />
      {/* <InnvoShieldSection3 /> */}
      {/* <InnvoShieldSection4 /> */}
      <CoreMeterialThinkness />
      <AppronGrid />
      <InnvoShieldSection5 />
      <InnvoShieldSection6 />
      <CaringForProtection />
      <QualityDisposal />
      <IndustryCertifications />
      {/* <InnvoShieldSection7 /> */}
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
              InnvoShield<sup>®</sup>
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/InnvoShield-Brochures.pdf"
        fileName="InnvoShield"
        productTarget="/products/innvoshield/"
      />
      <SubFooter />
    </main>
  )
}

export default index
