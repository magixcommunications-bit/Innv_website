import './index.css'

import Pointers from './pointers'
import Banner from './banner'
import InformedUsPro from './informedUsAgile'
import StatsPro from './stats'
import CapacityCarouselPro from './carousel'
import TableFeaturesPro from './tableFeatures'
import SubFooter from 'organisms/subFooter'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import { ProductSpecifications } from 'molecules/productSpecifications'
import pinnaclePro from 'assets/cathLabsLandingPage/productSpecifications/Pinnacle Pro.png'

export default function PinnacePro() {
  useFetchMail()
  useGSAP('.pro-master')

  return (
    <main className="pro-master pinnacle-pro-wrapper">
      <Banner />
      <Pointers />
      <StatsPro />
      <CapacityCarouselPro />
      <ProductSpecifications data={productSpecificationsPinnaclePro} />
      <TableFeaturesPro />
      <InformedUsPro />
      <SubFooter />
    </main>
  )
}

const productSpecificationsPinnaclePro = {
  title: 'Clinical Images',
  desc: 'Pinnacle Pro allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: pinnaclePro,
}
