import SalientFeatures from './salientFeatures'
import StentClarity from './stentClarity'
import Exceptional from './exceptional'
import Enhanced from './enhanced'
import Banner from './select-banner'
import './style.css'
import AwardsRecognition from 'organisms/awardsRecognition'
import InformedUsSelect from './informedUs'
import SubFooter from 'organisms/subFooter'
import Gallery from './enhancements'

import FeatureGridSelect from './featureGrid'
import useFetchSelect from 'hooks/useFetchSelect'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

import premierSelect from 'assets/cathLabsLandingPage/productSpecifications/Premier Select.png'
import { ProductSpecifications } from 'molecules/productSpecifications'

const index = () => {
  useFetchSelect()
  useFetchMail()
  useGSAP('.select-master')

  return (
    <main className="select-master">
      <Banner />
      <AwardsRecognition />
      <SalientFeatures />
      <div className="premier-elite-wrapper">
        <FeatureGridSelect />
      </div>
      <StentClarity />
      <Enhanced />
      <Exceptional />
      <ProductSpecifications data={productSpecificationsPremierSelect} />
      <Gallery />
      <InformedUsSelect />
      <SubFooter />
    </main>
  )
}

const productSpecificationsPremierSelect = {
  title: 'Clinical Images',
  desc: 'Premier Select allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: premierSelect,
}

export default index
