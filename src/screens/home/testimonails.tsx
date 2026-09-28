import React, { useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { useAdmin } from 'store/store'

export default function Testimonails() {
  const [isOpen, setIsOpen] = useState(false)
  const [videoIndex, setVideoIndex] = useState<number | undefined>(undefined)
  const { homeData } = useAdmin()

  const handleModalReveal = (index: number) => {
    setVideoIndex(index)
    setIsOpen(true)
  }

  useEffect(() => {
    console.log(homeData.SECTION_8)
  }, [homeData])

  return (
    <>
      {homeData.SECTION_8.length === 0 ? null : (
        <>
          <section className="blade-top-padding-lg blade-bottom-padding-lg ">
            <section className="w-[93%] mx-auto border-1 border-solid border-gray rounded-md">
              <div className="py-5 lg:py-10 text-center bg-[url('assets/home/testimonails/mesh2.svg')] bg-contain bg-center grid place-content-center place-items-center">
                <h3 className="gsap-opacity-trans-appear text-orange font-medium">
                  Experts recommend us
                </h3>
              </div>
              <div className="border-t-1 border-solid border-gray relative experts-bg">
                <div className="gap-y-5 md:gap-4 mx-auto w-container-lg  gap-4 xl:gap-5 2xl:gap-10 blade-top-padding-lg pb-2 md:pb-6 xl:pb-11">
                  <Swiper
                    slidesPerView={1}
                    centeredSlides
                    // loop
                    pagination={{}}
                    breakpoints={{
                      640: {
                        slidesPerView: 1.5,
                        spaceBetween: 60,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                      1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                      1175: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                      1536: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                    }}
                    // autoplay={{
                    //   delay: 2000,
                    // }}
                    navigation={{
                      prevEl: '.testimonial-swiper-prev',
                      nextEl: '.testimonial-swiper-next',
                    }}
                    speed={1000}
                    modules={[Pagination, Autoplay, Navigation, A11y]}
                    spaceBetween={10}
                    className="cursor-grab pb-4 md:pb-0"
                  >
                    {homeData.SECTION_8.map((elem, index) => {
                      console.log(elem)
                      const key = `${index}`
                      const { coverImage, title, degree, place, desig } = elem
                      return (
                        <SwiperSlide
                          key={index}
                          style={{ height: 'auto' }}
                          className="blade-bottom-padding md:pb-0 h-full"
                        >
                          <Card
                            key={key}
                            coverImage={coverImage as string}
                            index={index}
                            title={title}
                            degree={degree}
                            place={place}
                            desig={desig}
                            toggleModal={handleModalReveal}
                          />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                  {/* Carousel buttons */}
                  <div className="hidden md:flex justify-center px-6 pt3">
                    <div className="flex  pt-5 xl:pt-10 gap-3">
                      <CarouselBtn
                        activeIndex={-1}
                        color="orange"
                        onClick={() => {}}
                        index={0}
                        text="Move to previous slide"
                        size="base"
                        type="button"
                        extraClasses={
                          'testimonial-swiper-prev !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white !rounded-xl disabled:!opacity-30'
                        }
                      />
                      <CarouselBtn
                        activeIndex={-1}
                        color="orange"
                        onClick={() => {}}
                        index={100}
                        text="Move to next slide"
                        size="base"
                        type="button"
                        isRotated
                        extraClasses={
                          'testimonial-swiper-next !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white !rounded-xl disabled:!opacity-30'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <VideoModal
              isOpen={isOpen}
              closeModal={() => setIsOpen(false)}
              videoSrc={
                homeData.SECTION_8[videoIndex ?? 0]?.videoFile as string
              }
            />
          </section>
        </>
      )}
    </>
  )
}

export function Card({
  title,
  degree,
  place,
  desig,
  index,
  coverImage,
  toggleModal,
}: {
  degree: string
  place: string
  desig: string
  coverImage: string
  index: number
  toggleModal: (update: number) => void
  title: string
}) {
  return (
    <article className="gsap-opacity border-1 h-full bg-white border-solid rounded-md border-orange overflow-hidden border-opacity-60">
      <div className="relative   h-52 2xl:h-60">
        <div className="absolute inset-0 grid place-content-end p-4">
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
        </div>

        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-[2px] pt-6 pb-4 px-3">
        <span className="  text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] font-medium pb-1">
          {title}
        </span>

        {degree && (
          <span className="font-medium font-regular leading-snug text-sm md:text-sm lg:text-base ">
            {degree}
          </span>
        )}
        {desig && (
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
        )}
      </div>
    </article>
  )
}

interface VideoModalProps {
  isOpen: boolean
  closeModal: () => void
  videoSrc: string
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  closeModal,
  videoSrc,
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
                <div className="flex-1 overflow-hidden rounded-md">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={videoSrc}
                    autoPlay
                    loop
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
