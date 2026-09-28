import Banner from './banner'
import AngioplastyFlex from './angioplasty'
import ConstructionFlex from './construction'
import Benefits from './benefits'
import ApplicationsFlex from './applications'
import SpecificationsFlex from './specifications'
import ComplianceChart from './complianceChart'
import SubFooter from 'organisms/subFooter'
import InformedUsScore from './informedUs'
import CrossingProfile from './crossingProfile'
import SchematicFlex from './schematic'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const Scoreflex = () => {
  useFetchMail()
  useGSAP('.scoreflex-master ')

  return (
    <main className="scoreflex-master scoreflex ">
      <Banner />
      <AngioplastyFlex />
      <ConstructionFlex />
      <Benefits />
      <CrossingProfile />
      <ApplicationsFlex />
      <SpecificationsFlex />
      <SchematicFlex />
      <ComplianceChart />
      <InformedUsScore />
      <SubFooter />
    </main>
  )
}

export default Scoreflex
