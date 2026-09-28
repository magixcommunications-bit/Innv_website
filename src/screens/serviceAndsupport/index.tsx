import './index.css'
import Services from './services'
import SubFooter from 'organisms/subFooter'

import { ResourceBanner } from 'organisms/resourceBanner'
import useFetchMail from 'hooks/useFetchMail'
import useScrollToTop from 'hooks/useScrollToTop'

const ServiceAndSupport = () => {
  useFetchMail()
  useScrollToTop()

  return (
    <main>
      <ResourceBanner
        bgClasses="bg-[url(assets/serviceAndsupport/banner-mobile.webp)] max-md:bg-center md:bg-[url(assets/serviceAndsupport/banner-image.webp)]"
        title="Services & Support"
        subTitle="Your partner in achieving operational excellence in cardiology"
        subTitleClasses="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none "
      />
      <Services />
      <SubFooter />
    </main>
  )
}

export default ServiceAndSupport
