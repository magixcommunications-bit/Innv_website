import Banner from './banner'
import { AboutSapphire } from './aboutSapphire-2'
import { Feature } from './feature'
import { TechnicalSpecifications } from './techicalSpecifications'
import { SchematicS2 } from './schematic'
import './index.css'
import { InformedUsSapphire } from './InformedUsSapphire204'
import Subfooter from 'organisms/subFooter'
import { ComplianceChart } from './complianceChart'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function Sapphire204() {
  useFetchMail()
  useGSAP('.s2pro4mm-master')

  return (
    <main className="s2pro4mm-master">
      <Banner />
      <AboutSapphire />
      <Feature />
      <TechnicalSpecifications />
      <SchematicS2 />
      <ComplianceChart />
      <InformedUsSapphire />
      <Subfooter />
    </main>
  )
}
