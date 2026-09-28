// import item0 from 'assets/home/news/00.jpg'
// import item2 from 'assets/home/news/04.jpg'
import item1 from 'assets/home/news/03.jpg'
import item3 from 'assets/home/news/01.jpg'
import item4 from 'assets/home/news/02.jpg'
import item5 from 'assets/home/news/05.jpg'
import item6 from 'assets/home/news/06.jpg'
import item7 from 'assets/home/news/07.jpg'
import item8 from 'assets/home/news/08.jpg'
import item10 from 'assets/home/news/10.jpg'

// Section 2 data
export type IBlog = {
  _id: string
  title: string
  tag: string
  cover: string
  target: string
}

export const news: IBlog[] = [
  {
    _id: '1',
    title:
      'Gaurav Agarwal - Charting New Frontiers: The Pioneering Journey of a Healthcare Visionary',
    tag: 'Spotlight',
    cover: item6,
    target:
      'https://wcrcleaders.com/gaurav-agarwal-charting-new-frontiers-the-pioneering-journey-of-a-healthcare-visionary/',
  },
  {
    _id: '2',
    title:
      'Innvolution Healthcare receives the 2023 company of the year by Frost & Sullivan',
    tag: 'News',
    cover: item3,
    target:
      'https://www.frost.com/wp-content/uploads/2023/07/IHPL_Award-Writeup.pdf',
  },
  {
    _id: '3',
    title: 'Innvolution Group raises funds from OrbiMed to accelerate growth',
    tag: 'News',
    cover: item4,
    target:
      'https://www.expresshealthcare.in/news/innvolution-group-raises-funds-from-orbimed-to-accelerate-growth/438775/',
  },

  {
    _id: '4',
    title:
      'Pioneering cardiac care: Our founder’s vision for a better tomorrow',
    tag: 'Spotlight',
    cover: item1,
    target:
      'https://www.medicalbuyer.co.in/pioneering-cardiac-care-my-vision-revolutionizing-healthcare-for-a-better-tomorrow/',
  },

  {
    _id: '5',
    title:
      'Innvolution Imaging Technologies Pvt Ltd (IITPL): A Made in India Pinnacle for the Global MedTech',
    tag: 'News',
    cover: item5,
    target:
      'https://ciolookindia.com/innvolution-imaging-technologies-pvt-ltd-iitpl-a-made-in-india-pinnacle-for-the-global-medtech/',
  },

  {
    _id: '6',
    title: 'Innvolution Healthcare: Evolution through Innovation',
    tag: 'Spotlight',
    cover: item7,
    target:
      'https://startup.siliconindia.com/vendor/innvolution-healthcare-evolution-through-innovation-cid-1461.html',
  },
  {
    _id: '7',
    title:
      'By 2030, we plan to have a Cath lab in all the 720 districts of the country: Gaurav Agarwal, IITPL',
    tag: 'Spotlight',
    cover: item8,
    target:
      'https://health.economictimes.indiatimes.com/amp/news/medical-devices/by-2030-we-plan-to-have-a-cath-lab-in-all-the-720-districts-of-the-country-gaurav-agarwal-iitpl/87968105',
  },
  {
    _id: '8',
    title:
      'Pioneering Cardiac care – My Vision: Revolutionizing healthcare for a better tomorrow',
    tag: 'Spotlight',
    cover: item10,
    target:
      'https://www.medicalbuyer.co.in/pioneering-cardiac-care-my-vision-revolutionizing-healthcare-for-a-better-tomorrow/',
  },

  // {
  // _id: '9',
  //   title: 'Meet Mr. Gaurav Aggarwal, the driving force behind Innvolution',
  //   tag: 'Spotlight',
  //   cover: item2,
  //   target: 'https://voiceofhealthcare.org/idealleader.php?id=1450',
  // },
]

// Complete awards datatype
export type NewsDataType = {
  SECTION_2: IBlog[]
}

// export const initNewsData: NewsDataType = {
//   SECTION_2: news,
// }

export const initNewsData: NewsDataType = {
  SECTION_2: [],
}
