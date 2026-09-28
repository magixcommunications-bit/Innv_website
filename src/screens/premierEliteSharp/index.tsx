import Banner from './banner'
import SalientFeatures from './salientFeatrues'
import FeatureGridElite from './featureGrid'
import DesignFeatures from './designFeatures'
import UserExperience from './userExperience'

import './premierElite.css'
import AwardsRecognition from 'organisms/awardsRecognition'

import InformedUsElite from './informedUs'
import SubFooter from 'organisms/subFooter'
import Gallery from './enhancements'
import CapacityCarouselElite from './carousel'
import useFetchElite from 'hooks/useFetchElite'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import CarouselEliteSharp from './carouselEliteSharp'
import { ProductSpecifications } from 'molecules/productSpecifications'
import eliteSharp from 'assets/cathLabsLandingPage/productSpecifications/elite-sharp.png'

export default function PremierElite() {
  useFetchElite()
  useFetchMail()
  useGSAP('.premier-master')

  return (
    <main className="premier-master premier-elite-wrapper font-wor">
      <Banner />
      <AwardsRecognition />
      <CarouselEliteSharp />
      <SalientFeatures />
      <FeatureGridElite />
      <CapacityCarouselElite />
      <DesignFeatures />
      <UserExperience />
      <ProductSpecifications data={productSpecificationsEliteSharp} />
      <Gallery />
      <InformedUsElite />
      <SubFooter />
    </main>
  )
}

const productSpecificationsEliteSharp = {
  title: 'Clinical Images',
  desc: 'Premier Elite Sharp allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: eliteSharp,
}
