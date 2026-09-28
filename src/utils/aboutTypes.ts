// Section 5 (Leaders)
import Image1 from 'assets/about/leaders/img-01.jpg'
import Image2 from 'assets/about/leaders/img-02.jpeg'
import Image3 from 'assets/about/leaders/img-03.jpeg'
import Image4 from 'assets/about/leaders/img-04.jpeg'

// Section 6 (Vision)
import founderImageMobile from 'assets/about/founderVision/founder_portrait.jpg'
import deskImg from 'assets/about/founderVision/message-bg.jpg'

// Section 8 (Address)
// import office from 'assets/about/map/ind-map.jpg'

// Section 5 (Leaders)
export type LeadersList = {
  _id: string
  name: string
  role: string
  description: string
  image: string
  profileURL: string
}

// Section 6 (Vision)
export type VisionsType = {
  _id: string
  deskImage: string
  mobImage: string
  quote: string
  quoter: string
  alt: string
}

// Section 8 (Address)
export type AddressImageType = {
  _id: string
  imageSrc: string
  alt: string
}

export const leadersList: LeadersList[] = [
  {
    _id: '1',
    name: 'Gaurav Agarwal',
    role: 'Managing Director',
    description:
      'B-tech in Biomedical Engineering, MBA from the Indian Institute of Management, with nearly 25 years of experience in the medical device industry.',
    image: Image1,
    profileURL: 'https://www.linkedin.com/in/gauravagarwal9274/',
  },
  {
    _id: '2',
    name: 'Ashvini Suthar',
    role: 'Co-Founder and Director',
    description:
      'Over 25 years of experience in the medical device and healthcare industry in India. Seasoned Management Professional with an unmatched understanding of the Indian cardiovascular device market.',
    image: Image2,
    profileURL: 'https://www.linkedin.com/in/ashvini-suthar-57b502/',
  },
  {
    _id: '3',
    name: 'Atul Sharma',
    role: 'Co-Founder',
    description:
      'A pharmacy graduate who also studied executive management at IIM Kolkata and holds 25 years of total experience in the Indian healthcare market.',
    image: Image3,
    profileURL: 'https://www.linkedin.com/in/atul-sharma-2a68621a/',
  },
  {
    profileURL: 'https://www.linkedin.com/in/sachin-garg-00414162/',
    _id: '4',
    name: 'Sachin Garg',
    role: 'Co-Founder',
    description:
      'A pharmacy graduate who holds a PGDBA from Symbiosis University, Pune. Over 20 years of strong experience in the cardiovascular device industry.',
    image: Image4,
  },
]

export const defaultVisions: VisionsType = {
  _id: '2348234092347234',
  deskImage: deskImg,
  mobImage: founderImageMobile,
  quote:
    'At Innvolution, we are on a quest to improve quality of life and  save lives by democratizing Cardiac care. As we expand our footprint globally, we will continue to focus on making Cardiovascular care more Accessible, Safer, and Efficacious. We intend to participate in the entire continuum of a patient with heart disease.- Prevention Diagnosis, Therapy, and After Care.',
  quoter: 'Gaurav Agarwal',
  alt: 'Portrait of founder of Innvolution imaging, Gaurav Agarwal',
}

// const addressImageDefault: AddressImageType = {
//   _id: '456454364356',
//   imageSrc: office,
//   alt: 'Innvolution offices in India',
// }

// Complete who we are datatype
export type AboutDataType = {
  SECTION_5: LeadersList[]
  SECTION_6: VisionsType
  // SECTION_8: AddressImageType
}

// export const initAboutData: AboutDataType = {
//   SECTION_5: leadersList,
//   SECTION_6: defaultVisions,
//   // SECTION_8: addressImageDefault,
// }

export const initAboutData: AboutDataType = {
  SECTION_5: [],
  SECTION_6: {} as VisionsType,
  // SECTION_8: addressImageDefault,
}
