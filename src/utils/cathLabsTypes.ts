// Section 5 (Features Cath)
import { FeaturesType } from 'utils/homeTypes'
import Advancing_48hours from 'assets/home/feature_section/Advancing_48hours.jpg'
import Advancing_310 from 'assets/home/feature_section/Advancing_310.jpg'
import Advancing_89 from 'assets/home/feature_section/Advancing_89.jpg'
import prestigiousAwards from 'assets/home/feature_section/prestigiousAwards.jpg'

// Section 6 (Certificate)
import one from 'assets/cathLabsLandingPage/certificates/certificate-01.jpg'
import two from 'assets/cathLabsLandingPage/certificates/certificate-02.jpg'
import three from 'assets/cathLabsLandingPage/certificates/certificate-03.jpg'
import four from 'assets/cathLabsLandingPage/certificates/certificate-04.jpg'

export type CertificateData = {
  alt: string
  imgSrc: FileList | string
  _id: string
}

export const featuresData: FeaturesType[] = [
  {
    _id: '1',
    title: '400+',
    desc: 'Cath Labs sold',
    alt: 'Cath labs cross section view',
    imgSrc: Advancing_310,
  },
  {
    _id: '2',
    title: '17 most prestigious awards',
    desc: 'won for Cath Labs',
    alt: 'Surgeons performing surgery in an operating room.',
    imgSrc: prestigiousAwards,
  },
  {
    _id: '3',
    title: '89%',
    desc: 'of customer satisfaction across 350+ installations',
    alt: '',
    imgSrc: Advancing_89,
  },
  {
    _id: '4',
    title: 'Less than 48 hours',
    desc: ' of downtime at any installation since inception',
    alt: 'A scientist in a lab coat and gloves is operating a machine in a laboratory.',
    imgSrc: Advancing_48hours,
  },
]

export const defaultCertificateDataSec6: CertificateData[] = [
  {
    _id: '1',
    imgSrc: one,
    alt: 'Certificate 1',
  },
  {
    _id: '2',
    imgSrc: two,
    alt: 'Certificate 2',
  },
  {
    _id: '3',
    imgSrc: three,
    alt: 'Certificate 3',
  },
  {
    _id: '4',
    imgSrc: four,
    alt: 'Certificate 4',
  },
]

// Complete Cath labs datatype
export type CathLabsDataType = {
  SECTION_5: FeaturesType[]
  SECTION_6: CertificateData[]
}

// export const initCathLabsData: CathLabsDataType = {
//   SECTION_5: featuresData,
//   SECTION_6: defaultCertificateDataSec6,
// }

export const initCathLabsData: CathLabsDataType = {
  SECTION_5: [],
  SECTION_6: [],
}
