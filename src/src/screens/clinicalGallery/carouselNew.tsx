import React, { useState } from 'react'
import './style.css'
import { Dialog, Transition } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import {carouselList} from "./static"

// const carouselList = [
//   {
//     tab: 'Tab 1',
//     data: [
//       {
//         content: 'Main Content 1',
//         videoLink: '/videos/video1.mp4',
//         desc: 'Video 1 description',
//       },
//     ],
//     subtab: [
//       {
//         title: 'Subtab 1',
//         data: [
//           {
//             content: 'Sub Content 1',
//             videoLink: '/videos/sub1.mp4',
//             desc: 'Sub Video 1 description',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     tab: 'Tab 2',
//     data: [
//       {
//         content: 'Main Content 2',
//         videoLink: '/videos/video2.mp4',
//         desc: 'Video 2 description',
//       },
//     ],
//   },
// ]

const CarasouelNew = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [subTabActiveIndex, setSubTabActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null,
  )

  const handleTabClick = (update: number) => {
    setActiveIndex(update)
    setSubTabActiveIndex(0)
    setSelectedVideoIndex(update)
  }

  const handleSubTabClick = (update: number) => {
    setSubTabActiveIndex(update)
    setSelectedVideoIndex(update)
  }

  const handleModalReveal = (index: number) => {
    setSelectedVideoIndex(index)
    setIsOpen(true)
  }

  const activeTab = carouselList[activeIndex]
  const activeData = activeTab.subtab?.length
    ? activeTab.subtab[subTabActiveIndex]?.data || []
    : activeTab.data || []

  return (
    <section className="blade-top-padding-lg blade-bottom-padding lg:blade-bottom-padding-lg lg:blade-top-padding">
      <div className="mx-auto w-fit mb-12">
        {/* Tabs Section */}
        <div className="lg:flex hidden gap-3">
          {carouselList.map((elem, index) => {
            const isActive = activeIndex === index
            return (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`border-2 px-3 py-2 rounded-md font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-orange border-orange bg-white'
                    : 'text-gray-700 border-transparent'
                }`}
              >
                {elem.tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Subtabs */}
      {activeTab?.subtab && (
        <div className="flex mt-4 gap-3">
          {activeTab.subtab.map((subElem, subIndex) => {
            const isActiveSubtab = subTabActiveIndex === subIndex
            return (
              <button
                key={subIndex}
                onClick={() => handleSubTabClick(subIndex)}
                className={`text-sm px-3 py-1 rounded-md font-medium transition-all ${
                  isActiveSubtab
                    ? 'text-orange border-orange bg-white'
                    : 'text-gray-700 border-transparent'
                }`}
              >
                {subElem.title}
              </button>
            )
          })}
        </div>
      )}

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {activeData.map((item, index) => (
          <Card
            key={index}
            title={item.content}
            coverImage="https://via.placeholder.com/400"
            index={index}
            toggleModal={handleModalReveal}
          />
        ))}
      </div>

      {/* Modal Section */}
      {selectedVideoIndex !== null && (
        <VideoModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          videoLink={activeData[0]?.videoLink || ''}
          title={activeData[0]?.content || ''}
          desc={activeData[0]?.desc || ''}
        />
      )}
    </section>
  )
}

export const Card = ({
  title,
  index,
  coverImage,
  toggleModal,
}: {
  coverImage: string
  index?: number
  toggleModal: (update: number) => void
  title: string
}) => (
  <div className="border border-gray-200 rounded-md p-4 shadow-sm">
    <img
      src={coverImage}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <button onClick={() => toggleModal(index ?? 0)} className="text-orange-500">
      Watch Video
    </button>
  </div>
)

interface VideoModalProps {
  isOpen: boolean
  closeModal: () => void
  videoLink: string
  title: string
  desc: string
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  closeModal,
  videoLink,
  title,
  desc,
}) => (
  <Transition appear show={isOpen} as={React.Fragment}>
    <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="bg-white rounded-md p-6 max-w-2xl w-full">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-black hover:text-orange-500"
          >
            ×
          </button>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mb-4">{desc}</p>
          <video controls src={videoLink} className="w-full rounded-md" />
        </div>
      </div>
    </Dialog>
  </Transition>
)

export default CarasouelNew
