import Banner from './banner'
import DesignFeatures from './designFeatures'
import SpecificationsS3 from './specifications'
import SchematicS3 from './schematic'
import ComplianceChart from './complianceChart'
import InformedUs315 from './informedUs'

import SubFooter from 'organisms/subFooter'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const index = () => {
  useFetchMail()
  useGSAP('.s34-master')

  return (
    <main className="s34-master">
      <Banner />
      <DesignFeatures />
      <SpecificationsS3 />
      <SchematicS3 />
      <ComplianceChart />
      <InformedUs315 />
      <SubFooter />
    </main>
  )
}

export default index
