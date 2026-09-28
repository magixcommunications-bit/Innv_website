import Banner from './Banner'
import Pointers from './pointers'
import AwardsRecognition from 'organisms/awardsRecognition'
import StatsPinnacle from './stats'
import TableFeaturesPinnacle from './tableFeatures'
import BannerMobile from './BannerMobile'

import InformedUsPinnacle from './informedUs'
import CapacityCarouselPinnacle from './carousel'
import SubFooter from 'organisms/subFooter'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import { ProductSpecifications } from 'molecules/productSpecifications'
import pinnacle from 'assets/cathLabsLandingPage/productSpecifications/Pinnacle.png'

const index = () => {
  useFetchMail()
  useGSAP('.pinnacle-master')

  return (
    <main className="pinnacle-master">
      <div className="md:block hidden">
        <Banner />
      </div>
      <div className="md:hidden block">
        <BannerMobile />
      </div>
      <AwardsRecognition />
      <Pointers />
      <StatsPinnacle />
      <CapacityCarouselPinnacle />
      {/* <Versatility /> */}
      <ProductSpecifications data={productSpecificationsPinnacle} />
      <TableFeaturesPinnacle />
      <InformedUsPinnacle />
      <SubFooter />
    </main>
  )
}

const productSpecificationsPinnacle = {
  title: 'Clinical Images',
  desc: 'Pinnacle allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: pinnacle,
}

export default index
