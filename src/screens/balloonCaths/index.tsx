import React from 'react'
import Banner from './banner'
import CapacityCarousel from './capacityCarousel'
import DesignFeaures from './designFeaures'
import SubFooter from 'organisms/subFooter'

import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function BalloonCaths() {
  useFetchMail()
  useGSAP('.balloon-master')

  return (
    <div className="balloon-master balloon-caths-wrapper">
      <Banner />
      <CapacityCarousel />
      <DesignFeaures />
      <SubFooter />
    </div>
  )
}
