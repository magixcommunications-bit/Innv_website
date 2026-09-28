import React from 'react'
import Banner from './pageBanner'
import { Mission } from './mission'
import { Vision } from './vision'
import { YearsCarousal } from './yearCarousal'
import { YearsCarousalMobile } from './yearCarouselMobile'
import { Leaders } from './leaders'
import Team from './team'
import FoundersVision from './foundersVision'
import './index.css'
import Awards from 'organisms/awards_grid'
import Address from 'organisms/address'

import SubFooter from 'organisms/subFooter'
import useGSAP from 'hooks/useGSAP'
import useFetchAbout from 'hooks/useFetchAbout'
import useFetchContact from 'hooks/useFetchContact'
import useFetchMail from 'hooks/useFetchMail'
import Carousal from './carousal'
import LeadershipTeam from './leadershipTeam'

export default function PageAbout() {
  useGSAP('.whoWeAre-master')
  useFetchAbout()
  useFetchContact()
  useFetchMail()

  return (
    <main className="whoWeAre-master">
      <div className="about-page-wrapper">
        <Banner />
        <Mission />
        {/* <Vision /> */}
        <YearsCarousal />
        <YearsCarousalMobile />
        <Leaders />
        <FoundersVision />
        <LeadershipTeam />
        <Awards bgClass="home-awards-grid" />
        <Carousal />
        <Address
          // alt={aboutData.SECTION_8.alt}
          // image={aboutData.SECTION_8.imageSrc}
          isImageStreched={false}
          bgClasses="bg[url(assets/about/address-bg.png)]"
        />
        <Team />
        <SubFooter />
      </div>
    </main>
  )
}
