import Banner from './Banner'
import Nc24graph from './nc24graph'
import Tolerance from './tolerance'
import Range from './range'
import SpecificationsNC24 from './specifications'
import SchematicNC24 from './schematic'
import Complience from './compliance'
import InformedUs315 from './informedUs'
import SubFooter from 'organisms/subFooter'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const index = () => {
  useFetchMail()
  useGSAP('.nc24-master')

  return (
    <main className="nc24-master">
      <Banner />
      <Nc24graph />
      <Tolerance />
      <Range />
      <SpecificationsNC24 />
      <SchematicNC24 />
      <Complience />
      <InformedUs315 />
      <SubFooter />
    </main>
  )
}

export default index
