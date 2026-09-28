import Banner from './banner'
import NCSpecifications from './ncSpecifications'
import Product from './product'
import ComplianceChart from './complianceChart'

import './index.css'
import RangeIINC from './range'
import IINCSchematic from './schematic'
import InformedUsIINC from './informedUs'
import SubFooter from 'organisms/subFooter'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const SapphireIINC = () => {
  useFetchMail()
  useGSAP('.iinc-master')

  return (
    <main className="iinc-master">
      <Banner />
      <Product />
      <RangeIINC />
      <NCSpecifications />
      <IINCSchematic />
      <ComplianceChart />
      <InformedUsIINC />
      <SubFooter />
    </main>
  )
}

export default SapphireIINC
