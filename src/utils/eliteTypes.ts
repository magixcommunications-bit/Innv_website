// Section 6 (Design features)
import one from 'assets/finalElite/designFeatures/01.jpg'
import two from 'assets/finalElite/designFeatures/02.jpg'
import three from 'assets/finalElite/designFeatures/03.jpg'
import four from 'assets/finalElite/designFeatures/04.jpg'

// Section 8 (Enhancements)
import image1 from 'assets/finalElite/enhancements/c-01.jpg'
import image2 from 'assets/finalElite/enhancements/c-02.jpg'
import image3 from 'assets/finalElite/enhancements/c-03.jpg'
import image4 from 'assets/finalElite/enhancements/c-04.jpg'
import image5 from 'assets/finalElite/enhancements/c-05.jpg'
import image6 from 'assets/finalElite/enhancements/c-07.jpg'

// Section 6 (Design features)
export type DesignFeaturesType = {
  _id: string
  stat: string
  desc: string
  alt: string
  coverImage: string
}

// Section 8 (Enhancements)

export type EnhancementsType = {
  _id: string
  coverImage: string
  title: string
  desc: string
}

export const designFeaturesList: DesignFeaturesType[] = [
  {
    _id: '1',
    stat: 'Safer during extended interventions',
    desc: 'Ergonomic design and user-friendly controls make it an ideal choice for complex interventions that require prolonged periods of time.',
    alt: 'Safer during extended interventions',
    coverImage: one,
  },
  {
    _id: '2',
    stat: 'Safer for patient movements',
    desc: 'The advanced design makes it easier for patients to move, eliminating the need for stretchers.',
    alt: 'Safer for patient movements',
    coverImage: two,
  },
  {
    _id: '3',
    stat: 'Reduced physical strain on doctors',
    desc: 'Features such as adjustable operator workstations and user-friendly equipment positioning controls help to reduce the physical strain on healthcare professionals.',
    alt: 'Reduced physical strain on doctors',
    coverImage: three,
  },
  {
    _id: '4',
    stat: 'Anti-collision protection',
    desc: 'The anti-collision sensors are placed around the tube detector. These sensors create a safe environment for both patients and healthcare professionals.',
    alt: 'Anti-collision protection',
    coverImage: four,
  },
]

export const enhancementsElite: EnhancementsType[] = [
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
  {
    _id: '4',
    coverImage: image4,
    title: 'Ultrasound System Integration',
    desc: 'Integrate with the Ultrasound System.',
  },
  {
    _id: '5',
    coverImage: image4,
    title: 'LVA/RVA Analysis',
    desc: 'Patient’s left and right ventricular function analysis with the LVA and RVA workflow.',
  },
  {
    _id: '6',
    coverImage: image5,
    title: 'TAVI Planning',
    desc: 'Plan for transcatheter aortic valve implantation.',
  },
  {
    _id: '7',
    coverImage: image6,
    title: 'QVA: Quantitative Vascular Analysis',
    desc: 'Fast and intuitive peripheral vessel analysis, including the abdominal aorta, carotid, renal, iliac, and femoral arteries.',
  },
]

// Complete Premier Elite datatype
export type EliteDataType = {
  SECTION_6: DesignFeaturesType[]
  SECTION_8: EnhancementsType[]
}

// export const initEliteData: EliteDataType = {
//   SECTION_6: designFeaturesList,
//   SECTION_8: enhancementsElite,
// }

export const initEliteData: EliteDataType = {
  SECTION_6: [],
  SECTION_8: [],
}
