import Banner from './banner'

import AwardsRecognition from 'organisms/awardsRecognition'
import Pointers from './pointers'
import SubFooter from 'organisms/subFooter'
import './index.css'
import TableFeaturesAgile from './tableFeatures'
import UserExperience from './userExperience'
import InformedUsAgile from './informedUsAgile'
import CapacityCarouselAgile from './carousel'
import StatsAgile from './stats'
import Versatility from './versitality'
import useFetchAgile from 'hooks/useFetchAgile'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import { ProductSpecifications } from 'molecules/productSpecifications'
import pinnacleAgileImage from 'assets/cathLabsLandingPage/productSpecifications/Pinnacle Agile.png'

const pinnacleAgile = () => {
  useFetchAgile()
  useFetchMail()
  useGSAP('.agile-master')

  return (
    <main className="agile-master">
      <Banner />
      <AwardsRecognition />
      <Pointers />
      <Versatility />
      <StatsAgile />
      <CapacityCarouselAgile />
      <UserExperience />
      <ProductSpecifications data={productSpecificationsPinnacleAgile} />
      <TableFeaturesAgile />
      <InformedUsAgile />
      <SubFooter />
    </main>
  )
}

const productSpecificationsPinnacleAgile = {
  title: 'Clinical Images',
  desc: 'Pinnacle Agile allows you to perform a wide variety of <span class="font-semibold">Cardiac, Peripheral Vascular, Neuro Vascular </span> Diagnostic and Interventional Procedures with ease.',
  image: pinnacleAgileImage,
}

export default pinnacleAgile
