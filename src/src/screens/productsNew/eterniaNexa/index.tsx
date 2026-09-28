import React, { useLayoutEffect } from 'react'
import Banner from '../_similarSection/banner'
import { Specifications } from '../_similarSection/specifications'
import InformedUs from 'organisms/informedUs'
import StentSizes from '../_similarSection/stentSizes'
import Precision from './precision'
import Circulation from './circulations'
import bannerImage from 'assets/productsNew/eterniaNexa/eternia-nexa-bannerimage.png'
import bgImage from 'assets/productsNew/eterniaNexa/bg-image-banner.jpg'
import eterniaLogo from 'assets/productsNew/eterniaNexa/eternia-nexa-logo.svg'
import nexaProductImage from 'assets/productsNew/eterniaNexa/eternia-stentsizes.png'
import ElevateNexa from './elevate'
import { LogoNexa } from './logoNexa'
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
  { id: 13, columns: ['Drug', 'Everolimus'] },
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
export default function EterniaNexa() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        bannerClassName=" xxl:pb-80 xl:pb-70 md:pb-32 pb-20 min-h-[200px] w-full"
        titleClassName="2xl:pb-16 xl:pb-10"
        bgImage={bgImage}
        productLogo={eterniaLogo}
        title="Unblock with Confidence!"
        subtitle="Everolimus Eluting Coronary Stent System"
      />

      <Circulation />

      <ElevateNexa
        title={
          <h4 className="font-regular">
            <h3 className="font-medium text-orange inline">Elevate</h3> your
            practice with <LogoNexa classes="2xl:h-11 lg:h-12 h-8 md:-mt-2" />,
            now available in a multitude of dimensions to cater to your diverse
            unblocking needs. Experience a new realm of possibilities for
            superior patient care.
          </h4>
        }
        productImage={nexaProductImage}
      />
      <Specifications
        title="Stent Specifications"
        specRows={specRows}
        expansionRows={expansionRows}
      />
      <InformedUs
        title={
          <>
            Want to get informed <br className="min-[320px]:block hidden" />
            about our <span className="text-orange">Eternia Nexa</span>?
          </>
        }
        actionCardsList={actionCardsList}
        featureCardsList={featureCardsList}
        columnClasses="xl:grid-cols-3 xl:max-w-7xl"
        fileLink="/brochures/Eternia Nexa.pdf"
        fileName="Eternia Nexa brochure"
        productTarget="/products/stents"
        productsIcon={stentPageIcon}
      />
    </div>
  )
}
