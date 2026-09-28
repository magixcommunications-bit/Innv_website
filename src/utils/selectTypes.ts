// Section 8 (Enhancements)
import { EnhancementsType } from './eliteTypes'

import image1 from 'assets/finalElite/enhancements/c-01.jpg'
import image2 from 'assets/finalElite/enhancements/c-02.jpg'
import image3 from 'assets/finalElite/enhancements/c-03.jpg'
// import image4 from 'assets/finalElite/enhancements/c-04.jpg'
// import image5 from 'assets/finalElite/enhancements/c-05.jpg'
// import image6 from 'assets/finalElite/enhancements/c-07.jpg'

export const enhancementsSelect: EnhancementsType[] = [
  {
    _id: '1',
    coverImage: image1,
    title: 'Quantitative Coronary Angiography (QCA)​',
    desc: 'Integrated QCA Software for Coronary analysis.',
  },
  {
    _id: '2',
    coverImage: image2,
    title: 'vFFR: Virtual Fractional Flow Reserve',
    desc: 'A software-only solution that calculates the pressure drop in the coronary arteries.',
  },
  {
    _id: '3',
    coverImage: image3,
    title: 'IVUS & OCT Co-Registration',
    desc: 'Real-time co-registration of angiography with IVUS and OCT.',
  },
]

// Complete Premier Select datatype
export type SelectDataType = {
  SECTION_8: EnhancementsType[]
}

// export const initSelectData: SelectDataType = {
//   SECTION_8: enhancementsSelect,
// }

export const initSelectData: SelectDataType = {
  SECTION_8: [],
}
