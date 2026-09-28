import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MasterBtn } from 'atoms/buttons'

export default function ClinicalCases() {
  const [isOpen, setIsOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)

  const [videoIndex, setVideoIndex] = useState<number | undefined>(undefined)

  const handleModalReveal = (index: number) => {
    setVideoIndex(index)
    setIsOpen(true)
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9)
  }

  return (
    <section
      // className="bg-radial-gradient"
      style={{
        background:
          'linear-gradient(to bottom,rgba(246, 154, 77, 0.1) 20%, rgba(246, 154, 77, 0.1) 50%, rgba(246, 154, 77, 0.8) 100%)',
      }}
    >
      <div className="blade-top-padding blade-bottom-padding w-container">
        {/* <h2 className="gsap-opacity-trans-appear font-medium text-center">
          Clinical Cases
        </h2> */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 blade-top-padding-sm">
          {clinicalCasesData.slice(0, visibleCount).map((elem, index) => {
            const key = `${index}`
            const { title, src } = elem
            return (
              <Card
                key={key}
                src={src}
                index={index}
                title={title}
                toggleModal={handleModalReveal}
              />
            )
          })}

          <VideoModal
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            src={clinicalCasesData[videoIndex ?? 0]?.src as string}
          />
        </div>

        <div
          className={`${
            visibleCount >= Object.keys(clinicalCasesData).length &&
            'opacity-50 pointer-events-none'
          } flex justify-center mt-10 `}
        >
          <MasterBtn
            type="button"
            isDisabled={visibleCount >= Object.keys(clinicalCasesData).length}
            color="orange"
            extraClasses="gsap-opacity-trans-appear"
            text="Load more"
            size="base"
            removeIcon
            onClick={() => {
              handleLoadMore()
            }}
          />
        </div>
      </div>
    </section>
  )
}

export function Card({
  title,
  index,
  coverImage,
  src,
  toggleModal,
}: {
  coverImage?: string
  index: number
  src: string
  toggleModal: (update: number) => void
  title: string
}) {
  return (
    <article className="hover:shadow-[0_0px_20px_15px_rgba(0,0,0,0.1)] hover:scale-[102%] transition-all duration-300 cursor-pointer gsap-opacity border-1 h-full bg-white border-solid rounded-md border-orange overflow-hidden border-opacity-60">
      <div className="relative h-52 2xl:h-60 bg-orange-gradient">
        <div
          className="absolute inset-0 grid place-content-end p-4"
          onClick={() => toggleModal(index)}
        >
          {/* 
          <button
            aria-hidden
            aria-label="Toggle video"
            type="button"
            onClick={() => toggleModal(index)}
            className="fill-black hover:fill-orange outline-offset-2 focus-visible:outline-orange outline-transparent outline-2  bg-white rounded-full focus-visible:fill-orange h-14 w-14 grid place-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 24"
              className="translate-x-[2px] transition-all duration-300 ease-in-out"
              fill="inherit"
            >
              <path
                d="M19.6982 11.9684L0.0207509 23.3292L0.0207519 0.607619L19.6982 11.9684Z"
                fill="inherit"
              />
            </svg>
          </button> 
          */}
        </div>
        <iframe
          src={`${src}?rel=0`}
          className="h-full w-full object-cover"
        ></iframe>

        {/* <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover object-top"
        /> */}
      </div>
      <div className="flex flex-col gap-[2px] pt-5 pb-4 px-4">
        <h5 className="capitalize pb-1">{title}</h5>
        {/* 
        {degree && (
          <span className="font-medium font-regular leading-snug text-sm md:text-sm lg:text-base ">
            {degree}
          </span>
        )} */}
        {/* {desig && (
          <span
            dangerouslySetInnerHTML={{ __html: desig }}
            className=" font-regular text-[#555] text-sm md:text-sm lg:text-base  pt-1  block max-w-[300px]"
          />
        )}

        {place && (
          <span
            dangerouslySetInnerHTML={{ __html: place }}
            className=" leading-tight  font-regular text-[#555]  lg:text-base text-sm md:text-sm "
          />
        )} */}
      </div>
    </article>
  )
}

interface VideoModalProps {
  isOpen: boolean
  closeModal: () => void
  src: string
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  closeModal,
  src,
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-4xl h-auto border-4 border-solid border-white my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              <div className="flex flex-col h-full overflow-hidden relative">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 p-3 bg-white rounded-full hover:bg-lightOrange focus-visible:bg-lightOrange"
                  aria-label="Close video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex-1 overflow-hidden rounded-md min-h-[450px]">
                  {/* <video
                    controls
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/watch?v=9hbSkDJKS2A"
                    autoPlay
                    loop
                  /> */}
                  <iframe
                    src={`${src}?autoplay=1&mute=1&rel=0`}
                    allow="accelerometer; autoplay;"
                    className="h-full w-full object-cover min-h-[450px]"
                  ></iframe>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

const clinicalCasesData = [
  {
    id: 1,
    title: 'ABDOMEN EMBOLIZATION',
    src: 'https://www.youtube.com/embed/9hbSkDJKS2A',
  },
  {
    id: 2,
    title: 'EP Study',
    src: 'https://www.youtube.com/embed/h3nh7CqXUpI',
  },
  {
    id: 3,
    title: 'PATIENT WEIGHT 118KG',
    src: 'https://www.youtube.com/embed/JWF5mXrbFsA',
  },
  {
    id: 4,
    title: 'PACEMAKER IMPLANTATION',
    src: 'https://www.youtube.com/embed/VI7N6oUXG8w',
  },
  {
    id: 5,
    title: 'Bifurcation Stent Cine',
    src: 'https://www.youtube.com/embed/zK2uUVGeoOs',
  },
  {
    id: 6,
    title: 'Peripheral Stenting',
    src: 'https://www.youtube.com/embed/Sq6AU9X6-8I',
  },
  {
    id: 7,
    title: 'ASD Closure',
    src: 'https://www.youtube.com/embed/bT45zduDSOw',
  },
  { id: 8, title: 'BMV', src: 'https://www.youtube.com/embed/ANuh01Rhn6s' },
  { id: 9, title: 'PDA', src: 'https://www.youtube.com/embed/0WHgq2BqRUI' },
  {
    id: 10,
    title: 'AP CAUDAL VIEW',
    src: 'https://www.youtube.com/embed/yluUDZ7NSEc',
  },
  {
    id: 11,
    title: 'AP CRANIAL VIEW',
    src: 'https://www.youtube.com/embed/9U9wiFxhYqY',
  },
  {
    id: 12,
    title: 'LAO CAUDAL',
    src: 'https://www.youtube.com/embed/BH9MhW7CaDU',
  },
  {
    id: 13,
    title: 'LAO CRANIAL',
    src: 'https://www.youtube.com/embed/Gc2uSJ08M74',
  },
  {
    id: 14,
    title: 'RAO CAUDAL',
    src: 'https://www.youtube.com/embed/jt3z7Ulh8Ko',
  },
  { id: 15, title: 'RCA', src: 'https://www.youtube.com/embed/qvjx350mHBc' },
  {
    id: 16,
    title: 'STENT DEPLOYMENT',
    src: 'https://www.youtube.com/embed/lOW-ov0mJfg',
  },
  {
    id: 17,
    title: 'Angiojet',
    src: 'https://www.youtube.com/embed/cBFGIUMbZEw',
  },
  {
    id: 18,
    title: 'Carotid Stenting',
    src: 'https://www.youtube.com/embed/NS_KgBRtWHo',
  },
  {
    id: 19,
    title: 'NEURO DSA',
    src: 'https://www.youtube.com/embed/qkvslhOBpaE',
  },
  {
    id: 20,
    title: 'RoadMap',
    src: 'https://www.youtube.com/embed/MoqYRKC1Gd4',
  },
  {
    id: 21,
    title: 'Brachial Artery',
    src: 'https://www.youtube.com/embed/IiafffIcPjk',
  },
  {
    id: 22,
    title: 'DSA peripheral',
    src: 'https://www.youtube.com/embed/CwyB9Afyh6s',
  },
  {
    id: 23,
    title: 'Right Renal',
    src: 'https://www.youtube.com/embed/7dK18n3GLgU',
  },
  {
    id: 24,
    title: 'PERIPHERAL ANGIO',
    src: 'https://www.youtube.com/embed/tL6WSU2jGuQ',
  },
  {
    id: 25,
    title: 'Final Femoral Artery',
    src: 'https://www.youtube.com/embed/GjMOFDKjB4Q',
  },
  {
    id: 26,
    title: 'ATRIAL SEPTAL DEFECT (ASD)',
    src: 'https://www.youtube.com/embed/fnQj_vTYbns',
  },
  {
    id: 27,
    title: 'Neuro Angiography Performed on Pinnacle Agile.',
    src: 'https://www.youtube.com/embed/9BMfcrlKo8c',
  },
  {
    id: 28,
    title: 'LAD treated using ROTA Technology on Pinnacle Agile Cath lab',
    src: 'https://www.youtube.com/embed/ko0QLZ47eWI',
  },
  {
    id: 29,
    title: 'Case on Premier Select Cath Lab',
    src: 'https://www.youtube.com/embed/TK0WfAyvagE',
  },
  {
    id: 30,
    title: 'Cases performed on Pinnacle Agile and Premier Select',
    src: 'https://www.youtube.com/embed/j_0mxSuIPvw',
  },
  {
    id: 31,
    title: 'ASD Device Closure on Premier Elite',
    src: 'https://www.youtube.com/embed/KdQT1H8H3Ho',
  },
  {
    id: 32,
    title: 'Dual Chamber PPI Performed on Premier Elite Cath Lab',
    src: 'https://www.youtube.com/embed/Isx3KMkrkTY',
  },
  {
    id: 33,
    title: 'BMV performed on our Premier Elite Cathlab',
    src: 'https://www.youtube.com/embed/wSW8SFuDrW4',
  },
  {
    id: 34,
    title:
      'Presenting a series of RAO Caudal Images captured on our Innvolution Cathlabs.',
    src: 'https://www.youtube.com/embed/jJfrWwobh-o',
  },
  {
    id: 35,
    title: 'Left Iliac Angioplasty Performed on our Cath Lab',
    src: 'https://www.youtube.com/embed/fiF2_8_6Czs',
  },
  {
    id: 36,
    title: 'Left Iliac Angioplasty performed on our Cath Lab',
    src: 'https://www.youtube.com/embed/2Q9woH1HdcQ',
  },
  {
    id: 37,
    title:
      'Presenting a series of RAO Cranial Images captured our Innvolution Cath labs.',
    src: 'https://www.youtube.com/embed/m3K6nzDsBjQ',
  },
  {
    id: 38,
    title: 'Atrial Septal Defect performed in our Cath Lab',
    src: 'https://www.youtube.com/embed/QQsGvYJNspM',
  },
  {
    id: 39,
    title:
      'Balloon Mitral Valvotomy Procedure Performed on Premier Elite Cath lab',
    src: 'https://www.youtube.com/embed/0eEEhtOe_5Q',
  },
  {
    id: 40,
    title:
      "Biliary Stenting procedure on Innvolution's Premier Elite Cath lab.",
    src: 'https://www.youtube.com/embed/pWiIq0g-dn4',
  },
  {
    id: 41,
    title:
      'Peripheral conducted on our newly installed International Cathlab in Iraq.',
    src: 'https://www.youtube.com/embed/mre4JUv_dEI',
  },
  {
    id: 42,
    title: 'Dual Chamber ICD Procedure on Premier Elite Cath Lab',
    src: 'https://www.youtube.com/embed/25W8YZneQFw',
  },
  {
    id: 43,
    title: 'Tavi case performed on our Premier Elite Cath Lab',
    src: 'https://www.youtube.com/embed/FPdChssIUp0',
  },
  {
    id: 44,
    title: 'AInsta QCA',
    src: 'https://www.youtube.com/embed/SX-o1VEC0lI',
  },
  {
    id: 45,
    title: 'DSA Series',
    src: 'https://www.youtube.com/embed/XsEyt5prPo8',
  },
  {
    id: 46,
    title: 'TMVR ON PREMIER ELITE',
    src: 'https://www.youtube.com/embed/5-ZEWxb72iA',
  },
  {
    id: 47,
    title: "Rotablator Technique on Innvolution's Premier Cath Lab",
    src: 'https://www.youtube.com/embed/H7j3VIP4D0o',
  },
  {
    id: 48,
    title: 'Pinnacle Pro Cath Lab Images',
    src: 'https://www.youtube.com/embed/LesB0Q01U1E',
  },
  {
    id: 49,
    title:
      'Case Study: PCI for LAD Occlusion in a 72-Year-Old Male performed in Innvolution Cathlab.',
    src: 'https://www.youtube.com/embed/OY0CCISTpl4',
  },
  {
    id: 52,
    title: 'Biliary Stenting Procedure On Premier Elite Cath Lab',
    src: 'https://www.youtube.com/embed/5uiS281ZnV4',
  },
  {
    id: 53,
    title:
      'A successful thrombus aspiration procedure was greatly facilitated by our Premier Elite Cath Lab.',
    src: 'https://www.youtube.com/embed/R1FqmQER9Hk',
  },
  {
    id: 54,
    title:
      'Non ST Elevation Myocardial Infarction performed on Innvolution Cath Lab',
    src: 'https://www.youtube.com/embed/8Iz12OS9S9I',
  },
  {
    id: 55,
    title: 'Double Vessel Disease LCX and RCA on Innvolution Cath Lab',
    src: 'https://www.youtube.com/embed/YGcy4wZv2uw',
  },
  {
    id: 56,
    title: 'Cerebral Aneurysm Coiling in Innvolution Cath Lab',
    src: 'https://www.youtube.com/embed/AlFeO4xj4Dg',
  },
  // {
  //   id: 57,
  //   title: 'Cerebral Endovascular Coiling',
  //   src: 'https://www.youtube.com/embed/w_HUSpwIdlU',
  // },
  {
    id: 58,
    title: 'Atrial Septal Defect performed in Premier Elite Cath Lab',
    src: 'https://www.youtube.com/embed/I1bBvTD4aRY',
  },
]
