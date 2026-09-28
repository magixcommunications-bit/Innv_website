import wrc from 'assets/globals/awards/wrc.png'
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
// import emergingAward from 'assets/globals/awards/emaerging-award.webp'

export type AwardsPageLogosType = {
  _id: string
  title: string
  logo: FileList | string
  desc: string
}

// Complete awards datatype
export type AwardsDataType = {
  SECTION_2: AwardsPageLogosType[]
}

export const awardsPageLogos: AwardsPageLogosType[] = [
  {
    _id: '14',
    title: 'Great place to work award',
    logo: greatPlaceToWork,
    desc: "Innvolution Earns Great Place to Work Certification! Innvolution's commitment to fostering a positive and inclusive workplace culture has been the driving force behind this well-deserved recognition. From the collaborative atmosphere to the unwavering support among colleagues, we've cultivated an environment where everyone's contributions are valued.",
  },
  {
    _id: '0',
    title: 'Frost & Sullivan Company of the Year 2023',
    logo: frostAndSullivan,
    desc: "Indian Interventional Imaging Company of the Year Award for Best Practices 2023 by Frost and Sullivan. Frost & Sullivan's Best Practices Company of the Year Award in interventional imaging is a mark of excellence, acknowledging innovative growth strategies and leadership within the industry.",
  },
  {
    _id: '00',
    title: 'Best Brands award 2023',
    logo: BestBrands2023,
    desc: 'Innvolution Earns Esteemed Best Brand 2023 Awards from Economic Times. We are delighted to share the exciting news that Innvolution has been conferred with the esteemed Best Brand 2023 awards by Economic Times. This distinguished honor was presented by Ad Guru, Mr. Bharat Dhabolkar, marking a significant milestone in our commitment to excellence and innovation.',
  },
  {
    _id: '1',
    title: 'Indian Medical Device Company of the Year Award 2020',
    logo: IndiaMedicalDevice2020,
    desc: 'The Indian Medical Device Company of the Year Award by the Department of Pharmaceuticals, Government of India, stands as the highest accolade attainable by a medical device company in the country. The award is presented to companies for their excellence in the field.',
  },
  {
    _id: '2',
    title: 'Red Dot Design Award',
    logo: ReddotDesign2018,
    desc: 'The Red Dot Award is considered the OSCARS for Industrial Design worldwide. It’s one of the best design awards globally and awarded to products with best-in-class industrial design concepts.',
  },
  {
    _id: '3',
    title: 'Good Design Award',
    logo: GoodDesign2019,
    desc: 'Acknowledged as a premier global design distinction, the Good Design Award carries significant prestige as a champion of design excellence globally. Conferred by the Japan Institute of Design Promotion, it stands as the comprehensive mechanism for evaluating and promoting design from all over the world.',
  },
  {
    _id: '4',
    title: 'The National Innovation Foundation (NIF) - India',
    logo: NationalInnovation,
    desc: "Presented by the President of India to a selected group of 15 outstanding companies spanning various industries, this award stands as India's foremost recognition for innovation. Endorsed by the Government of India, it signifies the pinnacle of achievement in fostering innovation and excellence.",
  },
  {
    _id: '13',
    title: 'World’s Best Emerging Brand 2023',
    logo: wrc,
    desc: 'We\'re proud to announce that Innvolution has been honored as the "World\'s Best Emerging Brand 2023" by WCRC, presented at the House of Lords, The Palace of Westminster. This prestigious recognition highlights our commitment to innovation and excellence in healthcare.',
  },
  {
    _id: '5',
    title: 'ICC R&D Company of the Year',
    logo: ICC,
    desc: 'The Indian Chamber of Commerce (ICC) is the most prominent and oldest chamber of commerce, and hence, plays a pivotal role in shaping the business landscape of India. The R&D Company of the Year Award by ICC recognizes the dedication of businesses to research and development.',
  },
  {
    _id: '6',
    title: 'Indian Design Mark',
    logo: IndiaDesignCouncil,
    desc: 'The India Design Council, in partnership with the Japan Institute of Design Promotion (JDP), has launched the India Design Mark, a designation analogous to the esteemed Good Design award. This collaboration underscores a commitment to promoting and recognizing exceptional design achievements in India.',
  },
  {
    _id: '7',
    title: '8th Design Excellence Award',
    logo: DesignExcellence2018,
    desc: 'The Confederation of Indian Industry (CII) awards companies for excellence in their respective industries. The award is presented in the areas of Business excellence, Low-cost automation, Leadership, Innovation & Entrepreneurship, Design, and many more. The 8th Design Excellence Award by CII celebrates the zenith of industrial design achievement in the country.',
  },
  {
    _id: '8',
    title: 'WBR Award',
    logo: WBRCorp,
    desc: 'WBR Corp, a reputable brand consulting organization, acknowledges the excelling companies in India and across Asia in 13 different categories. The WBR Award in the healthcare category recognized Innvolution for the creation of one of the most groundbreaking medical equipment in 2017.',
  },
  {
    _id: '9',
    title: 'MG Affordable Ventilator Challenge',
    logo: MG,
    desc: "Innvolution's Project Shwaas, a full ICU ventilator, achieved success in MG Motor's Affordable Ventilator Challenge, demonstrating our innovative spirit and successful collaboration with IIT Bombay (Betic) in developing this life-saving technology.",
  },
  {
    _id: '10',
    title: 'Silicon India 10 Best Medtech Startups - 2023',
    logo: SiliconIndiaMedtech,
    desc: "Silicon India's 10 Best Medtech Startups for 2023 highlights the notable contributions made to the healthcare and medical sector. This acknowledgement underscores the commitment to advancing medical technology and fostering a positive impact in the industry.",
  },
  {
    _id: '11',
    title: 'CII Industrial Innovation Award 2019',
    logo: IIA,
    desc: "The CII Industrial Innovation Award celebrates the top 25 outstanding innovators in the Indian industry, recognizing remarkable contributions and the global impact of innovations. It fosters a culture of creativity, elevating India's position on the global stage.",
  },
  {
    _id: '12',
    title: 'MT India 2023',
    logo: MTIndia2023,
    desc: "Conferred by India's largest healthcare Publication, this award aims to acknowledge and celebrate exceptional healthcare Companies who have demonstrated resilience in challenging economic circumstances, uplifting the collective spirit of the industry.",
  },

  // {
  //   _id: '15',
  //   title: "World's best emerging award 2023",
  //   logo: emergingAward,
  //   desc: "World's best emerging award 2023",
  // },
]

// export const initAwardData: AwardsDataType = {
//   SECTION_2: awardsPageLogos,
// }

export const initAwardData: AwardsDataType = {
  SECTION_2: [],
}
