import Banner from './banner'
import { Carousal } from './carousal'
import { TipEntryProfile } from './tipEntryProfile'
import SubFooter from 'organisms/subFooter'
import { SchematicS2 } from './schematic'
import { TechnicalSpecifications } from './technicalSpecifications'
import { InformedUsSapphire } from './informedUsSapphire201'
import { LubriciousCoating } from './lubriciousCoating'
import { ComplianceChart } from './complianceChart'
import './index.css'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function Sapphire201() {
  useFetchMail()
  useGSAP('.s2pro-master')

  return (
    <main className="s2pro-master">
      <Banner />
      <Carousal />
      <TipEntryProfile />
      <LubriciousCoating />
      <TechnicalSpecifications />
      <SchematicS2 />
      <ComplianceChart />
      <InformedUsSapphire />
      <SubFooter />
    </main>
  )
}
