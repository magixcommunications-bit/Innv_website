// Section 5 (Stats Agile)
import image1 from 'assets/pinnacleAgile/stats/01.jpg'
import image2 from 'assets/pinnacleAgile/stats/02.jpg'
import image3 from 'assets/pinnacleAgile/stats/03.jpg'
import image4 from 'assets/pinnacleAgile/stats/04.jpg'
import image5 from 'assets/pinnacleAgile/stats/05.jpg'
import image6 from 'assets/pinnacleAgile/stats/06.jpg'

export type StatsListType = {
  _id: string
  stat: string
  desc: string
  alt: string
  coverImage: string | FileList
}

export const dataPoints: StatsListType[] = [
  {
    _id: '1',
    alt: 'Variable Source to Image Distance (VSID)',
    stat: 'Variable Source to Image Distance (VSID)',
    desc: 'Now you can take visuals from deeper angles at greater ease with the up and down movement of the flat panel detector.',
    coverImage: image1,
  },
  {
    _id: '2',
    alt: 'Movement flexibility for deeper angles',
    stat: 'Movement flexibility for deeper angles',
    desc: 'Easily achieve deeper angles with the vertical movement of the flat panel detector.',
    coverImage: image2,
  },
  {
    _id: '3',
    alt: 'Head-to-toe coverage even for the tallest patients',
    stat: 'Head-to-toe coverage even for the tallest patients',
    desc: 'Conduct Neurovascular and Tibial Interventions on the same table with class-leading table sweep length.',
    coverImage: image3,
  },
  {
    _id: '4',
    alt: 'Table swivel for ease of workflow',
    stat: 'Table swivel for ease of workflow',
    desc: 'Perform Trans-radial procedures and CPR without table obstruction.',
    coverImage: image4,
  },
  {
    _id: '5',
    alt: 'Lower table height for patient convenience',
    stat: 'Lower table height for patient convenience',
    desc: 'Class-leading minimal table height to facilitate ease of patient transfer.',
    coverImage: image5,
  },
  {
    _id: '6',
    alt: 'High definition detector',
    stat: 'High definition detector',
    desc: 'Pinnacle Agile is the only Cath lab in its segment that comes with a high-definition detector panel of 1344x1344 pixels.',
    coverImage: image6,
  },
]

// Complete Agile datatype
export type AgileDataType = {
  SECTION_5: StatsListType[]
}

// export const initAgileData: AgileDataType = {
//   SECTION_5: dataPoints,
// }

export const initAgileData: AgileDataType = {
  SECTION_5: [],
}
