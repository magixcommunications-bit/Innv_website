import React from 'react'
import './styles.css'
import Banner from './banner'
import Certifications from './certifications'
import Family from './family'
import SubFooter from 'organisms/subFooter'
import FeaturesCath from './features'

import CapacityCarouselCath from './carousel'
import AwardsRecognition from 'organisms/awardsRecognition'
import useFetchCathLab from 'hooks/useFetchCathLab'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function CathLabsLandingPage() {
  useFetchCathLab()
  useFetchMail()

  useGSAP('.premier-master')

  return (
    <div className="premier-master premier-elite-wrapper">
      <Banner />
      <Family />
      <AwardsRecognition />
      <CapacityCarouselCath />
      <FeaturesCath />
      <Certifications />
      <SubFooter />
    </div>
  )
}
