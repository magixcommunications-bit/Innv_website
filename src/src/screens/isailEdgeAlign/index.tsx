import useGSAP from 'hooks/useGSAP'
import InformedUs from 'organisms/informedUs'
import SubFooter from 'organisms/subFooter'
import IsailEdgeAlignBanner from './IsailEdgeAlignBanner'
import DifferentiationStrategy from './DifferentiationStrategy'
import AlignWithConfidence from './AlignWithConfidence'
import ProductsInfo from './ProductsInfo'

export default function index() {
  useGSAP('.isailedgealign-master')
  return (
    <main className="isailedgealign-master">
      <IsailEdgeAlignBanner />
      <DifferentiationStrategy />
      <AlignWithConfidence />
      <ProductsInfo />
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
              iSail Edge Align
              <sup className="text-[12px] sm:text-sm font-regular align-super">
                TM{' '}
              </sup>
            </span>
            ?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/isail-Edge-Align.pdf"
        fileName="isail Edge Align"
        productTarget="/products/isailedgealign/"
      />
      <SubFooter />
    </main>
  )
}
