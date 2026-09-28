import Banner from './banner'
import SpecificationsS3 from './specifications'
import ComplianceChart from './complianceChart'
import SchematicS3 from './schematic'

import InformedUs3085 from './informedUs'
import SubFooter from 'organisms/subFooter'
import UniqueDesign from './uniqueDesign'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const Sapphire3085mm = () => {
  useFetchMail()
  useGSAP('.s31-master ')

  return (
    <main className="s31-master sapphire-3-85">
      <Banner />
      <UniqueDesign />
      <SpecificationsS3 />
      <SchematicS3 />
      <ComplianceChart />
      <InformedUs3085 />
      <SubFooter />
    </main>
  )
}

export default Sapphire3085mm
