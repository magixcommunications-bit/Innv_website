import './salientFeatures.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

export type PointersList = {
  title: string
  icon: string
}

export default function SalientFeatures({
  title,
  subTitle,
  pointersList,
  gridSize,
}: {
  title: string
  subTitle?: string
  pointersList: PointersList[]
  gridSize: 'sm' | 'lg'
}) {
  return (
    <section className="pt-7 blade-bottom-padding-sm salient-pointers-wrapper">
      <section className="blade-top-padding-sm blade-bottom-padding-sm">
        <h3 className="gsap-opacity-trans-appear font-medium text-center px-5 leading-tight ">
          {title}
        </h3>

        {subTitle && (
          <h5 className="gsap-opacity-trans-appear text-center font-regular text-black px-6 leading-snug text-opacity-60 mt-2">
            {subTitle}
          </h5>
        )}

        <section
          className={`hidden md:grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-4 lg:grid-cols-3 lg:gap-x-8 2xl:gap-y-8 2xl:gap-x-12 w-container-lg 2xl:w-container blade-top-padding-sm ${
            gridSize === 'sm' ? '!max-w-6xl' : 'min-[1280px]:grid-cols-4'
          }`}
        >
          {pointersList.map((elem, index) => {
            return (
              <FeatureCard title={elem.title} icon={elem.icon} key={index} />
            )
          })}
        </section>

        <section className="md:hidden blade-top-padding features-mobile-wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: true,
              },
            }}
            autoplay={{
              delay: 2000,
            }}
            loop
            pagination={{
              bulletActiveClass: '!bg-orange !opacity-100',
            }}
            speed={1000}
            modules={[Pagination, Autoplay, Navigation]}
            className="px-3 pb-10 cursor-pointer min-h-full h-full relative"
          >
            {pointersList.map((elem, index) => {
              return (
                <SwiperSlide key={index} className=" h-auto self-stretch fle">
                  <FeatureCard title={elem.title} icon={elem.icon} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
      </section>
    </section>
  )
}

function FeatureCard({ title, icon }: { title: string; icon: string }) {
  return (
    <article
      className="gsap-opacity-trans-appear bg-white self-stretch  h-full select-none grid place-content-start gap-10 xl:gap-14 
    2xl:gap-16 rounded-[6px] shadow-pointers-card border border-solid border-[#FFE4CE] p-4 md:p-6 xl:p-8"
    >
      <div className="grid place-content-start place-items-start">
        <img
          src={icon}
          alt={title}
          className="w-auto h-12 md:h-16 2xl:h-20 object-contain object-center"
        />
      </div>
      <h6 className="font-regular leading-snug max-w-[250px] md:max-w-xs">
        {title}
      </h6>
    </article>
  )
}
