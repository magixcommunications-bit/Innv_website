import React, { useLayoutEffect } from 'react'
import Banner from '../_similarSection/banner'
import { Specifications } from '../_similarSection/specifications'
import InformedUs from 'organisms/informedUs'
import StentSizes from '../_similarSection/stentSizes'
import Precision from './siroflexPrecision'
import Design from './siroflexDesign'
import Circulation from './siroflexCirculation'
import bannerImage from 'assets/productsNew/siroflex/siroflex-product.png'
import bgImage from 'assets/productsNew/siroflex/siroflex-banner-bg.jpg'
import siroflexLogo from 'assets/productsNew/siroflex/siroflex-logo.svg'
import productBg from 'assets/productsNew/siroflex/stent-sizes-bg.png'
import stentPageIcon from '../../../assets/globals/informedUsIcons/icon stent page.svg'

const actionCardsList = {
  showReadMore: false,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList = [
  {
    title: '',
    desc: '',
  },
]

const specRows = [
  { id: 1, columns: ['Design', 'Open Cell Design'] },
  { id: 2, columns: ['Stent Material', 'L605 Cobalt Chromium'] },
  {
    id: 3,
    columns: [
      'Stent Design',
      'Open Cell Design with Valley-to-Valley S Connectors (V2V S)',
    ],
  },
  {
    id: 4,
    columns: [
      'Stent Strut Width',
      'WavFlo Struts: 65  µm and Valley-to-Valley "S" Connectors: 55  µm',
    ],
  },
  { id: 5, columns: ['Guide Wire Compatibility (Max)', '0.014”(0.36 mm)'] },

  { id: 6, columns: ['Polymers', 'Bio-degradable Polymers'] },
  { id: 7, columns: ['Stent Strut thickness', '60  µm'] },
  { id: 8, columns: ['Guiding Catheter (Inner Diameter)', '5 Fr Compatible'] },
  { id: 9, columns: ['Crossing Profile', '1 mm (≤ 1 mm for 3.0 diameter)'] },
  { id: 10, columns: ['Radial Strength (Force/Axial)', '1.50 N/mm'] },
  { id: 11, columns: ['Foreshortening', 'Nearly Zero'] },
  { id: 12, columns: ['Flexibility', 'Excellent'] },
  { id: 13, columns: ['Drug', 'Sirolimus'] },
]
const expansionRows = [
  {
    id: 1,
    columns: [
      'Nominal Diameter (mm)',
      '2.00 - 2.25 - 2.50 - 2.75 - 3.00',
      '3.50 - 4.00 - 4.50',
    ],
  },
  { id: 2, columns: ['Number of Crowns', '6', '8'] },
  {
    id: 3,
    columns: ['Post-dilatation Limit (mm)', '4.00', '5.50'],
  },
]

export default function Siroflex() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        bannerClassName="md:w-10/12 w-full min-h-[130px]"
        bgImage={bgImage}
        productLogo={siroflexLogo}
        titleClassName="xl:pb-14 pb-5"
      />
      <Circulation />
      <Design />
      <Precision />
      <StentSizes
        logo={siroflexLogo}
        productImage={productBg}
        title="Navigate through complex lesions effortlessly with Siroflex. Offering a range of dimensions to accommodate your diverse patient requirements."
      />
      <Specifications specRows={specRows} expansionRows={expansionRows} />
      <InformedUs
        title={
          <>
            Want to get informed <br className="min-[320px]:block hidden" />{' '}
            about our <span className="text-orange">SIROFLEX</span>?
          </>
        }
        actionCardsList={actionCardsList}
        featureCardsList={featureCardsList}
        columnClasses="xl:grid-cols-3 xl:max-w-7xl"
        bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
        fileLink="/brochures/siroflex.pdf"
        fileName="Siroflex brochure"
        productTarget="/products/stents"
        productsIcon={stentPageIcon}
      />
    </div>
  )
}
