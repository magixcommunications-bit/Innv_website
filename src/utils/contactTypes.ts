import { AddressImageType } from './aboutTypes'
import office from 'assets/contact/office.jpg'

// Section 3 (Address)
export type AddressDetails = {
  _id: string
  heading: string
  para: string
  target: string
}

const addressImageDefault: AddressImageType = {
  _id: '456454364356',
  imageSrc: office,
  alt: 'Innvolution offices in India',
}

export const manufacturingDetails: AddressDetails[] = [
  {
    _id: '1',
    heading: 'Registered Office | Cath Lab Manufacturing Unit',
    para: 'No. 121F, Bommasandra Industrial Area, Phase 1, Hosur Main Road, Electronic City, Bangalore, 560 099, Karnataka, India',
    target: 'https://maps.app.goo.gl/taTjBwBc8shHcG4H8',
  },
  {
    _id: '2',
    heading: 'Balloons & Catheters Manufacturing Unit ',
    para: '2nd Floor, Annexee to Diode Building, AMTZ Campus, Pragati Maidan, Nadupuru Village, Pedagantyada Mandal, Visakhapatnam, Andhra Pradesh - 530031, India',
    target: 'https://maps.app.goo.gl/AdcUmJ2L4v5b5fwP6',
  },
  {
    _id: '3',
    heading: 'Subsidiary office Innvolution Healthcare Global Pte Ltd​',
    para: 'Marina Bay Financial Centre Tower 1, Level 11, 8 Marina Boulevard, Singapore 018981',
    target: 'https://maps.app.goo.gl/yutTxkVBH4GBJNLF6',
  },
  {
    _id: '4',
    heading: 'Cath Lab Manufacturing Unit',
    para: 'Survey no. 480/2, Plot B2-134, AMTZ Campus, Nadupuru, Pedagantyada mandal, Visakhapatnam-530031, Andhra Pradesh, India',
    target: 'https://maps.app.goo.gl/yutTxkVBH4GBJNLF6',
  },
  // {
  //   _id: '4',
  //   heading: 'Stent Manufacturing Unit',
  //   para: 'Plot No. 105, Solataire Industrial Park, Village Dehmikalan, Ajmer Road, Jaipur, Rajasthan - 303007, India',
  //   target: '',
  // },
]

export const officesDetails: AddressDetails[] = [
  // {
  //   _id: '1',
  //   heading: 'Corporate Office  Innvolution Healthcare Pvt. Ltd',
  //   para: 'Office No 324, 3rd Floor Angel Mega Mall, Kaushambi Ghaziabad - U.P., India',
  //   target: 'https://maps.app.goo.gl/dvFP2ijnYi8YHVT38',
  // },
  {
    _id: '1',
    heading: 'Stent Manufacturing Unit',
    para: 'Plot No. 105, Solataire Industrial Park, Village Dehmikalan, Ajmer Road, Jaipur, Rajasthan - 303007, India',
    target: 'https://maps.app.goo.gl/PnYqs4dJWDYgm9YD7',
  },
  {
    _id: '2',
    heading: 'Branch Office  Innvolution Healthcare Pvt. Ltd',
    para: 'Advant Navis Business Park, Plot No. 7, Tower B, Noida-Greater Noida Expy, Sector 142, Noida, Uttar Pradesh - 201305, India',
    target: 'https://maps.app.goo.gl/37ZMHYyEyw4AasTo7',
  },
]

export const RDDetails: AddressDetails[] = [
  {
    _id: '1',
    heading:
      '403/1, Amar Tech Park, Patil Nagar, Balewadi, Pune - 41104, India',
    para: '',
    target: 'https://maps.app.goo.gl/PnYqs4dJWDYgm9YD7',
  },
]

// Complete who we are datatype
export type ContactDataType = {
  SECTION_3_muDetails: AddressDetails[]
  SECTION_3_oDetails: AddressDetails[]
  SECTION_3_rdDetails: AddressDetails[]
  SECTION_3_Image: AddressImageType
}

// export const initContactData: ContactDataType = {
//   SECTION_3_muDetails: manufacturingDetails,
//   SECTION_3_oDetails: officesDetails,
//   SECTION_3_rdDetails: RDDetails,
//   SECTION_3_Image: addressImageDefault,
// }

export const initContactData: ContactDataType = {
  SECTION_3_muDetails: [],
  SECTION_3_oDetails: [],
  SECTION_3_rdDetails: [],
  SECTION_3_Image: {} as AddressImageType,
}
