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
import { ProductSpecifications } from 'molecules/productSpecifications'
import premierElite from 'assets/cathLabsLandingPage/productSpecifications/Premier Elite.png'

export default function PremierElite() {
  useFetchElite()
  useFetchMail()
  useGSAP('.premier-master')

  return (
    <main className="premier-master premier-elite-wrapper">
      <Banner />
      <AwardsRecognition />
      <SalientFeatures />
      <FeatureGridElite />
      <CapacityCarouselElite />
      <DesignFeatures />
      <UserExperience />
      <ProductSpecifications data={productSpecificationsPremierElite} />
      <Gallery />
      <InformedUsElite />
      <SubFooter />
    </main>
  )
}

const productSpecificationsPremierElite = {
  title: 'Clinical Images',
  desc: 'Premier Elite allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: premierElite,
}
