import './index.css'
import QASPump from 'assets/diamondBack360/accessories/OAS Pump.webp'
import ViperSlideLubricant from 'assets/diamondBack360/accessories/ViperSlide Lubricant.webp'
import Viperwire from 'assets/diamondBack360/accessories/ViperWire Advance.webp'
import CapacityCarousel, { CarouselData } from 'organisms/carousel'

const data: CarouselData[] = [
  {
    title: 'OAS pump',
    tab: 'OAS pump',
    logo: QASPump,
    heading: 'OAS pump',
    desc: 'The OAS pump mounts directly onto an I.V. Pole and provides power and the pumping mechanism for the Diamondback 360 Orbital Atherectomy Systems.',
    subHeading: '',
    features: [],
  },
  {
    title: 'ViperSlide lubricant',
    tab: 'ViperSlide lubricant',
    logo: ViperSlideLubricant,
    heading: 'ViperSlide lubricant',
    desc: 'ViperSlide is an exclusive lubricant for use with CSI’s Orbital Atherectomy Systems. Viperslide increases the lubricity, therefore reducing friction between the device shaft and the ViperWire advance guide wire.',
    subHeading: '',
    features: [],
  },
  {
    title:
      'ViperWire advance & ViperWire Aavance with Flex Tip Peripheral Guide Wires',
    tab: 'ViperWire advance',
    logo: Viperwire,
    heading:
      'ViperWire advance & ViperWire Aavance with Flex Tip Peripheral Guide Wires',
    desc: 'ViperWire advance and ViperWire advance with Flex Tip Coronary Guide Wires are designed specifically for the Diamondback 360 Coronary Orbital Atherectomy Systems to facilitate proper device placement with the artery to enable orbital gain during treatment.',
    subHeading: '',
    features: [],
  },
]

export function Accessories() {
  return (
    <CapacityCarousel
      title="Accessories"
      carouselList={data}
      // isFeatureCard
      // showAccessoryBtn
    />
  )
}
