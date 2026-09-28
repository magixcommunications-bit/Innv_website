import { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import graph from 'assets/productsNew/insignia/features/graph.jpg'
import stentApposition from 'assets/productsNew/insignia/features/stent APPOSITION.jpg'
import './index.css'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

export const features: any = [
  {
    id: 1,
    title: 'Drug release kinetics ',
    des: `Programmed controlled release kinetics & release pattern: The initial burst release of Sirolimus on day 1 with 20% of the loading dose inhibits the smooth-muscle cell proliferation and the rest of the Sirolimus further released from the stent inhibits both proliferation and migration of the SMC (90% of drug releases in 6 weeks).
  `,
    image: graph,
  },
  {
    id: 2,
    title: 'Stent apposition',
    des: `Excellent stent apposition as evidenced in OCT, with a score of less than 20 microns.`,
    image: stentApposition,
  },
]

export function FeatureCarousal() {
  const [activeIndex, setActiveIndex] = useState(0)

  const imgRef = useRef<any>()
  const textRef = useRef<any>()

  return (
    <section className="blade-top-padding blade-bottom-padding features-carousal-wrapper">
      <div className="gsap-opacity-trans-appear grid grid-cols-9 w-container-lg 2xl:w-container features-wrapper">
        <div className="col-start-1 relative col-end-5">
          <div
            className="bg-lightorange h-[480px] rounded-tl-[6px] rounded-bl-[6px] lg:h-[500px] xl:h-[560px] 2xl:h-full self-stretch px-3 md:px-6 xl:px-10 2xl:px-12
            grid gap-6 py-10 xl:py-16 2xl:py-24"
          >
            <SwitchTransition>
              <CSSTransition
                key={activeIndex}
                nodeRef={textRef}
                timeout={500}
                classNames="features"
              >
                <div ref={textRef}>
                  <h3 className="font-medium  ">
                    {features[activeIndex].title}
                  </h3>
                  <h6 className="font-regular  mt-6  text-opacity-100  max-w-md">
                    {features[activeIndex].des}
                  </h6>
                </div>
              </CSSTransition>
            </SwitchTransition>
            <div className="flex absolute bottom-10 left-3 md:left-6 xl:left-10 2xl:left-12  items-center pt-5  gap-4 xl:gap-6  2xl:gap-8">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={() =>
                  activeIndex > 0 && setActiveIndex((prev) => prev - 1)
                }
                index={0}
                text="Move to previous slide"
                size="base"
                type="button"
                extraClasses={
                  extraClasses + ' enhancements-swiper-prev !border-1 !p-4'
                }
              />
              <div className="flex h-fit gap-1 items-center">
                <span className=" font-medium  text-xl">
                  0{activeIndex + 1}
                </span>
                <span className=" font-medium  text-xl ">&ndash;</span>
                <span className=" font-medium text-xl">02</span>
              </div>
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={() =>
                  activeIndex < 1 && setActiveIndex((prev) => prev + 1)
                }
                index={1}
                text="Move to next slide"
                size="base"
                type="button"
                isRotated
                extraClasses={
                  extraClasses + ' enhancements-swiper-next !border-1 !p-4'
                }
              />
            </div>
          </div>
        </div>
        <div className="rounded-tr-[6px] rounded-br-[6px] bg-white self-stretch col-start-5 col-end-10 h-full">
          <SwitchTransition>
            <CSSTransition
              key={activeIndex}
              nodeRef={imgRef}
              timeout={500}
              classNames="feature-img"
            >
              <div ref={imgRef} className={`self-stretch h-full`}>
                <img
                  className={`w-full h-full rounded-r-md object-contain ${
                    activeIndex === 0 ? 'object-contain' : 'object-cover'
                  }`}
                  src={features[activeIndex].image}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  )
}
