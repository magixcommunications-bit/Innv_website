// Section 2
import cathlabVideo from 'assets/home/product_section/product.mp4'

import cathSmall from 'assets/home/product_section/tabs/Cathlab.png'
import ballonSmall from 'assets/home/product_section/tabs/balloon.png'
import stentSmall from 'assets/home/product_section/tabs/stents.png'

import cathLarge from 'assets/home/product_section/cath.png'
import stentLarge from 'assets/home/product_section/stent.png'
import ballonLarge from 'assets/home/product_section/balloon.png'

// Section 3
import BestBrands2023 from 'assets/globals/awards/bestbrands2023.webp'
import frostAndSullivan from 'assets/globals/awards/frost&sullivan.svg'
import IndiaMedicalDevice2020 from 'assets/globals/awards/indiamedicaldevice2020.svg'
import ReddotDesign2018 from 'assets/globals/awards/reddot.webp'
import GoodDesign2019 from 'assets/globals/awards/gooddesignaward2019.svg'
import NationalInnovation from 'assets/globals/awards/nationalinnovationaward.webp'
import ICC from 'assets/globals/awards/ICC.svg'
import IndiaDesignCouncil from 'assets/globals/awards/Indiadesigncouncil.svg'
import DesignExcellence2018 from 'assets/globals/awards/designexcellenceaward2018.webp'
import WBRCorp from 'assets/globals/awards/wbrcorp.webp'
import MG from 'assets/globals/awards/mgaffordableventilator.webp'
import SiliconIndiaMedtech from 'assets/globals/awards/SiliconIndia.webp'
import IIA from 'assets/globals/awards/IIA.webp'
import MTIndia2023 from 'assets/globals/awards/MTIndia2023.webp'
import greatPlaceToWork from 'assets/globals/awards/great-place-to-work.webp'
import emergingAward from 'assets/globals/awards/emaerging-award.webp'

// Section 4 (Acting with a purpose)
import Acting_cities from 'assets/home/stats/Acting_cities.jpg'
import Acting_cath_labs from 'assets/home/stats/Acting_cath_labs.jpg'
import Acting_districts from 'assets/home/stats/Acting_districts.jpg'
import Acting_vision from 'assets/home/stats/Acting_vision.jpg'
import Acting_lives_touched from 'assets/home/stats/Acting_lives_touched.jpg'

// Section 7 (Cardiovascular Solutions)
import Advancing_48hours from 'assets/home/feature_section/Advancing_48hours.jpg'
import Advancing_1400 from 'assets/home/feature_section/Advancing_1400.jpg'
import Advancing_310 from 'assets/home/feature_section/Advancing_310.jpg'
import Advancing_89 from 'assets/home/feature_section/Advancing_89.jpg'
import Advancing_100 from 'assets/home/feature_section/Advancing_100.jpg'

// Section 8 (Testimonials)
import image01 from 'assets/home/testimonails/testimonial-01.jpg'
import image02 from 'assets/home/testimonails/testimonial-02.jpg'
import image03 from 'assets/home/testimonails/testimonial-03.jpg'
import image04 from 'assets/home/testimonails/testimonial-04.webp'
import image05 from 'assets/home/testimonails/testimonial-05.webp'
import manjunath from 'assets/home/testimonails/manjunath.mp4'
import manglam from 'assets/home/testimonails/manglam_city.mp4'
import jeevanRekha from 'assets/home/testimonails/jeevan_rekha.mp4'
import txHospital from 'assets/home/testimonails/Tx-Hospital.mp4'
import asianVascular from 'assets/home/testimonails/Asian-Vascular.mp4'

// Section 10 (Brands trust)
import cert1 from 'assets/home/certs/c01.png'
import cert2 from 'assets/home/certs/c02.png'
import cert3 from 'assets/home/certs/c03.png'
import cert4 from 'assets/home/certs/c04.png'
import cert5 from 'assets/home/certs/c05.png'

// Section 2 (Products)
export type ProductTab = {
  _id: string
  tab: string
  variantTitle: string
  target: string
  title: string
  subTitle: string
  cover: string
  points: string
  video?: string
}

export type ProductLogos = {
  variantLogos: { logo: string; link: string }[]
  variantLogosMobile: { logo: string; link: string }[]
}

// Section 3 (Awards)
export type AwardsLogosType = {
  _id: string
  logo: FileList | string
  alt: string
}

// Section 4 (Acting with a purpose)
export type StatsListType = {
  _id: string
  stat: string
  desc: string
  alt: string
  coverImage: string | FileList
}

// Section 7 (Cardiovascular Solutions)
export type FeaturesType = {
  _id: string
  title: string
  desc: string
  alt: string
  imgSrc: string | FileList
}

// Section 8 (Testimonials)
export type TestimonialData = {
  _id: string
  title: string
  degree: string
  place: string
  desig: string
  coverImage: FileList | string
  videoFile: FileList | string
}

// Section 9 (News & Insights)
export type IBlog = {
  _id: string
  title: string
  tag: string
  cover: string
  target: string
}

// Section 10 (Brands trust)
export type ClienteleLogosType = {
  _id: string
  logo: FileList | string
  alt: string
}

// Section 11 (Contact us)
export type ContactsType = {
  _id: string
  supportMail: string
  salesContact: string
  serviceContact: string
}

export type EventPopupType = {
  _id: string
  image: string
  alt: string
}

export type Banner = {
  _id: string
  heading: string
  link: string
  statusBarText: string
  backgroundImageDesktop: string | FileList
  backgroundImageMobile: string | FileList
  logoImage: string | FileList
  productImage: string | FileList
}

export const productTabs: ProductTab[] = [
  {
    _id: '1',
    tab: cathSmall,
    variantTitle: 'Family of <b>Cath Labs</b>',
    target: '/products/cath-labs/',
    title: 'Cath Labs',
    subTitle: 'Engineered to elevate medical imaging.',
    cover: cathLarge,
    video: cathlabVideo,
    points:
      'Design and manufacturing excellence. Cutting-edge cardiology software. State-of-the-art X-Ray imaging',
  },
  {
    _id: '2',
    tab: stentSmall,
    variantTitle: 'Family of <b>Coronary Stents</b>',
    target: '/products/stents/',
    cover: stentLarge,
    title: 'Stents',
    subTitle: 'Engineered to deliver safety and efficacy.',
    points:
      'Superior technology. Deliverability redefined. Flexibility like never before',
  },
  {
    _id: '3',
    tab: ballonSmall,
    variantTitle: 'Family of <b>Balloon Catheters</b>',
    cover: ballonLarge,
    target: '/products/balloon-catheters/',
    title: 'Balloon Catheters',
    subTitle: 'Engineered to deliver precise navigation.',
    points:
      'Truly controlled compliance. Safety, accuracy, and minimal friction. Excellent deliverability',
  },
]

export const awardLogos: AwardsLogosType[] = [
  {
    _id: '0',
    logo: BestBrands2023,
    alt: 'Best Brands award 2023',
  },
  {
    _id: '1',
    logo: frostAndSullivan,
    alt: 'Frost & Sullivan - 2023 Best practices award',
  },
  {
    _id: '2',
    logo: IndiaMedicalDevice2020,
    alt: 'India medical device award 2020',
  },
  {
    _id: '3',
    logo: ReddotDesign2018,
    alt: 'Reddot design award 2018',
  },
  {
    _id: '4',
    logo: GoodDesign2019,
    alt: 'Good design award 2019',
  },
  {
    _id: '5',
    logo: NationalInnovation,
    alt: 'National Innovation Award',
  },
  {
    _id: '6',
    logo: ICC,
    alt: 'Indian chamber of commerce R&D company of the year',
  },
  {
    _id: '7',
    logo: IndiaDesignCouncil,
    alt: 'Good design by India Design Mark',
  },
  {
    _id: '8',
    logo: DesignExcellence2018,
    alt: '8th CII Design Excellence Award 2018 winner',
  },
  {
    _id: '9',
    logo: WBRCorp,
    alt: 'WBR Corp - The most creative medical equipment for the year 2017',
  },
  {
    _id: '10',
    logo: MG,
    alt: 'MG Affordable Ventilator Challenge award',
  },
  {
    _id: '11',
    logo: SiliconIndiaMedtech,
    alt: 'Listed under 10 Best MEDTECH startups 2023',
  },
  {
    _id: '12',
    logo: IIA,
    alt: 'Listed under Top 25 Innovative Companies',
  },
  {
    _id: '13',
    logo: MTIndia2023,
    alt: 'Most promising company of the year in Radiology & Imaging devices (Cathlabs)',
  },
  {
    _id: '14',
    logo: greatPlaceToWork,
    alt: 'Great place to work award',
  },
  {
    _id: '15',
    logo: emergingAward,
    alt: "World's best emerging award 2023",
  },
]

export const statsList: StatsListType[] = [
  {
    _id: '1',
    stat: '5,00,000+',
    desc: 'lives touched',
    alt: 'A team of surgeons performing a surgery in an operating room, focused and dedicated to saving lives.',
    coverImage: Acting_lives_touched,
  },
  {
    _id: '2',
    stat: '201 cities',
    desc: 'and 21 states reached in India',
    alt: 'States of India',
    coverImage: Acting_cities,
  },
  {
    _id: '3',
    stat: '600+ Cath Labs',
    desc: 'manufactured annually',
    alt: 'A medical room with a large Cath Lab machine.',
    coverImage: Acting_cath_labs,
  },
  {
    _id: '4',
    stat: '800+ districts',
    desc: 'to get Innvolution Cath Labs installed by 2030',
    alt: 'Cath Lab manufacturer - Innvolution infrastructure',
    coverImage: Acting_districts,
  },
  {
    _id: '5',
    stat: 'Advancing Aatmanirbhar ',
    desc: 'vision through MedTech innovation',
    alt: 'A man in a blue suit and gloves is operating a machine.',
    coverImage: Acting_vision,
  },
]

export const featuresList: FeaturesType[] = [
  {
    _id: '1',
    title: '400+',
    alt: 'Cath labs cross section view',
    desc: 'Cath Labs sold',
    imgSrc: Advancing_310,
  },
  {
    _id: '2',
    title: '1400+',
    alt: 'Surgeons performing surgery in an operating room.',
    desc: 'hospital partners',
    imgSrc: Advancing_1400,
  },
  {
    _id: '3',
    title: '100+',
    alt: 'World map with illuminated pins marking locations.',
    desc: 'distributor network',
    imgSrc: Advancing_100,
  },
  {
    _id: '4',
    title: '89%',
    alt: 'Office setting with two people shaking hands, signifying a successful deal.',
    desc: 'of customer satisfaction across 350+ installations',
    imgSrc: Advancing_89,
  },
  {
    _id: '5',
    title: 'Less than 48 hours',
    alt: 'A scientist in a lab coat and gloves is operating a machine in a laboratory.',
    desc: ' of downtime at any installation since inception',
    imgSrc: Advancing_48hours,
  },
]

export const testimonialsList: TestimonialData[] = [
  {
    _id: '0',
    coverImage: image01,
    title: 'Dr. Sanjeeb Roy',
    degree: 'M.D, D.M (Cardiology)',
    place: 'Mangalam Plus Medicity',
    desig: 'Chairman - Cardiac Science, <br /> Director & HOD - Cardiology',
    videoFile: manglam,
  },
  {
    _id: '1',
    coverImage: image02,
    title: 'Dr. CN Manjunath',
    degree: '',
    place:
      'Sri Jayadeva Institute of Cardiovascular  <br /> Sciences and Research',
    desig: 'Dean & Director',
    videoFile: manjunath,
  },
  {
    _id: '2',
    coverImage: image03,
    title: 'Dr. Ram Chitlangia',
    degree: 'M.D, D.M (Cardiology)',
    place: 'Jeevan Rekha Hospital',
    desig: 'Consultant Cardiologist',
    videoFile: jeevanRekha,
  },
  {
    _id: '3',
    coverImage: image04,
    title: 'Dr. K. Sarat Chandra',
    degree: 'M.B.B.S, M.D, D.M, F.A.C.C, F.E.S.C, F.C.S.I',
    place: 'TX Hospital',
    desig: 'Sr. Consultant Interventional Cardiologist',
    videoFile: txHospital,
  },
  {
    _id: '4',
    coverImage: image05,
    title: 'Dr. G.V. Praveen Kumar',
    degree: '',
    place: 'Asian Vascular Hospital (Hyderabad)',
    desig: 'Senior Cardiologist',
    videoFile: asianVascular,
  },
]

export const clienteleLogos: ClienteleLogosType[] = [
  {
    _id: '0',
    logo: cert1,
    alt: 'Apollo Hospitals',
  },
  {
    _id: '1',
    logo: cert2,
    alt: 'Columbia Asia Hospitals',
  },
  {
    _id: '2',
    logo: cert3,
    alt: 'Aster CMI Hospital',
  },
  {
    _id: '3',
    logo: cert4,
    alt: 'Fortis',
  },
  {
    _id: '4',
    logo: cert5,
    alt: 'Manipal Hospitals',
  },
]

export const contacts: ContactsType = {
  _id: '6629ee62b36ef562121ac6a4',
  supportMail: 'info@innvolution.com',
  salesContact: '+91 63648 82807',
  serviceContact: '+91 63648 82820',
}

// Complete home datatype
export type HomeDataType = {
  SECTION_2: ProductTab[]
  SECTION_3: AwardsLogosType[] // Not using right now
  SECTION_4: StatsListType[]
  SECTION_7: FeaturesType[]
  SECTION_8: TestimonialData[]
  // SECTION_9: IBlog[]
  SECTION_10: ClienteleLogosType[]
  SECTION_11: ContactsType
  EVENTPOPUP: EventPopupType[]
  BANNER: Banner[]
}

// export const initHomeData: HomeDataType = {
//   SECTION_2: productTabs,
//   SECTION_3: awardLogos, // Not using right now
//   SECTION_4: statsList,
//   SECTION_7: featuresList,
//   SECTION_8: testimonialsList,
//   // SECTION_9: [],
//   SECTION_10: clienteleLogos,
//   SECTION_11: contacts as ContactsType,
// }

export const initHomeData: HomeDataType = {
  SECTION_2: [],
  SECTION_3: [],
  SECTION_4: [],
  SECTION_7: [],
  SECTION_8: [],
  // SECTION_9: [],
  SECTION_10: [],
  SECTION_11: {} as ContactsType,
  EVENTPOPUP: [],
  BANNER: [],
}
