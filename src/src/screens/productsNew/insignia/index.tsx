import { StentSpecifications } from './stentSpecification'
import { ComplianceChart } from './complianceChart'
import { CapacityCarousel } from './capacityCarousal'
import { FeatureCarousal } from './featureCarousal'
import { FeatureCarousalMobile } from './featureCarousalMobile'
import InformedUsInsignia from './informedUs'
import './index.css'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import bannerImage from 'assets/productsNew/insignia/insignia-banner.png'
import bgImage from 'assets/productsNew/insignia/insignia-bg.jpg'
import logo from 'assets/productsNew/insignia/insignia-logo.png'
import Banner from '../_similarSection/banner'

export default function Insignia() {
  useFetchMail()
  useGSAP('.insignia-master')

  return (
    <main className="insignia-master insignia-page-wrapper">
      <Banner
        bannerImage={bannerImage}
        bannerClassName="xxl:pb-32 pb-10 min-h-[130px] xl:w-6/12"
        titleClassName="2xl:mb-16 xl:mb-10 w-full"
        bgImage={bgImage}
        productLogo={logo}
      />
      <div className="md:block hidden">
        <FeatureCarousal />
      </div>
      <div className="md:hidden">
        <FeatureCarousalMobile />
      </div>
      {/* <SirolimusDrug /> */}
      <CapacityCarousel />
      <StentSpecifications />
      <ComplianceChart />
      <InformedUsInsignia />
    </main>
  )
}
