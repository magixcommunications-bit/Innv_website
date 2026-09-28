import { Banner } from './banner'
import { ClassicCrown } from './classicCrown'
import { Accessories } from './accessories'
import { CrownTechnicalSpecifications } from './crownTechnicalSpecifications'
import { MechanismOfAction } from './MechanismOfAction'
import './index.css'
import { InformedUsDiamondBack } from './informedUs'
import SubFooter from 'organisms/subFooter'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function DiamondBack360() {
  useFetchMail()
  useGSAP('.diamond-master')

  return (
    <main className="diamond-master diamondback-wrapper">
      <Banner />
      <ClassicCrown />
      <Accessories />
      <MechanismOfAction />
      <CrownTechnicalSpecifications />
      <InformedUsDiamondBack />
      <SubFooter />
    </main>
  )
}
