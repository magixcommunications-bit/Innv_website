import useGSAP from 'hooks/useGSAP'
import InformedUs from 'organisms/informedUs'
import SubFooter from 'organisms/subFooter'
import ClearpacBanner from './ClearpacBanner'
import OptimizedDrugDose from './OptimizedDrugDose'
import ShellpacCoating from './ShellpacCoating'
import ShellpacCoatingPart2 from './ShellpacCoatingPart2'
import NavProTechnology from './NavProTechnology'
import ProductOverview from './ProductOverview'

export default function index() {
  useGSAP('.clearpac-master')
  return (
    <main className="clearpac-master">
      <ClearpacBanner />
      <OptimizedDrugDose />
      <ShellpacCoating />
      <ShellpacCoatingPart2 />
      <NavProTechnology />
      <ProductOverview />
      <InformedUs
        featureCardsList={[]}
        columnClasses=" md:max-w-6xl md:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl xl:grid-cols-3"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: false,
          showReqDemo: true,
        }}
        title={
          <span className="text-white">
            Want to get informed about <br className="hidden md:block" />
            <span className="font-bold text-orange">
              Clearpac<sup>®</sup>
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/Clearpac-Brochure.pdf"
        fileName="Clearpac-Brochure"
        productTarget="/products/clearpac/"
      />
      <SubFooter />
    </main>
  )
}
