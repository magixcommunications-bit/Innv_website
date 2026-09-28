import React, { Suspense, lazy } from 'react'
import './home.css'
import Banner from './banner'
import FeaturesHome from './features'
import Awards from 'organisms/awards_grid'
import Standards from './standards'
import Stats from './stats'
import Clientele from './clientele'
import Testimonails from './testimonails'
import MapMobile from './mapMobile'
import Products from './products'
// import SubFooter from 'organisms/subFooter'
import News from 'organisms/news'
const Map = lazy(() => import('./map'))

import useGSAP from 'hooks/useGSAP'
import useFetchHome from 'hooks/useFetchHome'
import SubFooter from 'organisms/subFooter'
import useFetchMail from 'hooks/useFetchMail'

export default function HomePage() {
  useGSAP('.home-master')
  useFetchHome()
  useFetchMail()

  return (
    <main className="home-master">
      <Banner />
      <Products />
      <Awards bgClass="home-awards-grid " />
      <Stats />
      <Standards />
      <div className="lg:block hidden">
        <Suspense fallback={<>Loading...</>}>
          {window.innerWidth >= 1024 && <Map />}
        </Suspense>
      </div>
      <div className="lg:hidden block">
        <MapMobile />
      </div>
      <FeaturesHome />
      <Testimonails />
      <News
        bgGrad="#E9E9E9"
        title="News & insights"
        desc="Stay informed with the latest cardiovascular advancements and industry insights."
        margin="pt-3"
        gridClasses="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 2xl:gap-16 min-[1800px]:gap-x-0 "
      />
      <Clientele />

      <SubFooter />
    </main>
  )
}
