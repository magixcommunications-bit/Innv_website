import './index.css'
import Solutions from './solutions'
import Innovating from './innovating'
import Carousel from './carousel'
import Subfooter from './subfooter'

import { ResourceBanner } from 'organisms/resourceBanner'
import useGSAP from 'hooks/useGSAP'

const index = () => {
  useGSAP('.innovation-master')

  return (
    <main className="innovation-master">
      <ResourceBanner
        bgClasses="bg-[url(assets/innvolution/banner-mobile.webp)] max-md:bg-center md:bg-[url(assets/innvolution/banner.webp)]"
        title="Evolution through Innovation"
        subTitle="Towards a more accessible and sustainable future in cardiovascular care"
        subTitleClasses="max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-xl "
      />
      <Solutions />
      <Innovating />
      <div className="innovation-wrapper">
        <Carousel />
      </div>
      <Subfooter />
    </main>
  )
}

export default index
