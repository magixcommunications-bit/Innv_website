import StentsBanner from './stentsBanner'
import './style.css'
import StentSystem from './stentSystem'
import StentFootprint from './stentFootprint'
import StentsCapacityCarousel from './stentsCapacityCarousel'
import StentsDetailsCarousel from './stentDetailedcarousel'

import SubFooter from 'organisms/subFooter'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'
import SafetySummary from './safetySummary'

const index = () => {
  useFetchMail()
  useGSAP('.stent-master')

  return (
    <main className="stent-master">
      <StentsBanner />
      <StentSystem />
      <StentsCapacityCarousel />
      <StentsDetailsCarousel />
      <StentFootprint />
      <SafetySummary />
      <SubFooter />
    </main>
  )
}

export default index
