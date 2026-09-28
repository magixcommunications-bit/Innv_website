import React, { useLayoutEffect } from 'react'
// import Blogs from './blogs'
// import Award from './award'
// import Carousel from './carousel'

import SubFooter from 'organisms/subFooter'
import NewsResource from './news'
import { ResourceBanner } from 'organisms/resourceBanner'
import useFetchMail from 'hooks/useFetchMail'
import useScrollToTop from 'hooks/useScrollToTop'

const index = () => {
  useFetchMail()
  useScrollToTop()

  return (
    <main>
      <ResourceBanner
        bgClasses="bg-[url(assets/resources/desktop-banner.webp)]"
        title="News & articles"
        subTitle="Stay up to date with the latest in cardiovascular technology and healthcare."
        subTitleClasses="max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-lg 2xl:max-w-xl "
      />
      <NewsResource />
      {/* <Blogs /> */}
      {/* <Award /> */}
      {/* <Carousel /> */}
      <SubFooter />
    </main>
  )
}

export default index
