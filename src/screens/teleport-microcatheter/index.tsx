import Features from './features'
import Specifications from './specifications'
import Banner from './Banner'
import SchematicTeleport from './schematic'

import SubFooter from 'organisms/subFooter'
import './index.css'
import useFetchMail from 'hooks/useFetchMail'
import useScrollToTop from 'hooks/useScrollToTop'
import InformedUs from 'organisms/informedUs'

const index = () => {
  useFetchMail()
  useScrollToTop()

  return (
    <main>
      <Banner />
      <Features />
      <Specifications />
      <SchematicTeleport />
      <InformedUs
        featureCardsList={[]}
        columnClasses=" md:max-w-xl lg:max-w-3xl 2xl:max-w-4xl"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: false,
        }}
        title={
          <span className="text-white">
            Want to get informed about <br className="md:block hidden" />
            <span className="text-orange font-bold">
              Teleport Microcatheter
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/Teleport Brochure.pdf"
        fileName="Teleport Brochure"
        productTarget="/products/stents/"
      />
      <SubFooter />
    </main>
  )
}

export default index
