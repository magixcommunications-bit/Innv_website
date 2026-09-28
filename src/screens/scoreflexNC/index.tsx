import ComplianceChart from './complianceChart'
import NCSchematic from './schematic'
import NCSpecifications from './ncSpecifications'
import Animation from './animation'
import ApplicationsFlex from './applications'
import Banner from './banner'
import ConstructionNC from './construction'
import Benefits from './benefits'
import Angioplasty from './angioplasty'
import InformedUsNC from './informedUs'
import SubFooter from 'organisms/subFooter'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const ScoreflexNC = () => {
  useFetchMail()
  useGSAP('.nc-master')

  return (
    <section className="nc-master scoreflex-nc">
      <Banner />
      <Angioplasty />
      <ConstructionNC />
      <Benefits />
      <ApplicationsFlex />
      <Animation />
      <NCSpecifications />
      <NCSchematic />
      <ComplianceChart />
      <InformedUsNC />
      <SubFooter />
    </section>
  )
}

export default ScoreflexNC
