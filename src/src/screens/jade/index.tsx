import Banner from './banner'
import OTW from './otw'
import Compliance from './compliance'
import RatedPressure from './ratedPressure'
import Coating from './coating'
import SpecificationsJade from './specifications'
import SchematicJade from './schematic'
import ComplianceChart from './complianceChart'
import SubFooter from 'organisms/subFooter'
import InformedUs from './informedUs'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const Jade = () => {
  useFetchMail()
  useGSAP('.jade-master')

  return (
    <main className="jade-master">
      <Banner />
      <OTW />
      <Compliance />
      <RatedPressure />
      <Coating />
      <SpecificationsJade />
      <SchematicJade />
      <ComplianceChart />
      <InformedUs />
      <SubFooter />
    </main>
  )
}

export default Jade
