import { useAdmin } from 'store/store'
import { A11y, Autoplay, FreeMode, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Clientele() {
  const { homeData } = useAdmin()

  const list = [...homeData.SECTION_10, ...homeData.SECTION_10]

  return (
    <>
      {homeData.SECTION_10.length === 0 ? null : (
        <>
          <section className="font-regular">
            <section className="grid grid-cols-1 gap-y-0 xl:grid-cols-11 divide-x-1 divide-solid divide-gray border-b-1 border-t-1 border-solid border-gray pb-0 xl:pb-0 2xl:pb-0">
              <div className="col-start-1 grid col-end-2 xl:col-end-4">
                <div className=" px-3 md:mx-auto md:w-11/12 xl:w-10/12 2xl:w-9/12  flex items-center  xl:ml-auto blade-top-padding-sm blade-bottom-padding-sm">
                  <h3 className="text-center font-medium mx-auto text-black whitespace-nowrap">
                    Brands trust us
                  </h3>
                </div>
              </div>

              <div className=" col-start-1 xl:col-start-4 col-end-12 overflow-hidden flex items-center">
                <div className="w-full carousel-swiper sm:py-2">
                  <Swiper
                    modules={[Autoplay, Navigation, A11y, FreeMode]}
                    slidesPerView={list.length === 0 ? 1 : 'auto'}
                    spaceBetween={30}
                    breakpoints={{
                      768: {
                        spaceBetween: 40,
                      },
                      1024: {
                        spaceBetween: 50,
                      },
                      1536: {
                        spaceBetween: 80,
                      },
                    }}
                    loop
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    lazy
                    speed={4000}
                    freeMode
                    className=""
                    preventInteractionOnTransition
                  >
                    {list.map((item, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="grid place-content-center !w-fit select-none"
                        >
                          <img
                            // loading="lazy"
                            key={index}
                            src={item.logo as string}
                            alt={item.alt}
                            className="w-auto h-auto object-contain object-center max-h-28 md:max-h-32 2xl:max-h-36  m-auto"
                          />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  )
}
