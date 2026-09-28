import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'
import BannerBG1 from 'assets/cardiac/BannerBG1.jpg'
import AccessLOGO from 'assets/cardiac/Access/AccessLOGO.png'
import ConnectLOGO from 'assets/cardiac/Connect/ConnectLOGO.png'
import FlateLOGO from 'assets/cardiac/Flate/FlateLOGO.png'
import ManLOGO from 'assets/cardiac/Man/ManLOGO.png'
import RacLOGO from 'assets/cardiac/Rac/RacLOGO.png'
import SheathLOGO from 'assets/cardiac/Sheath/SheathLOGO.png'
import ConnectImg1 from 'assets/cardiac/Connect/Connect1.png'
import ConnectImg2 from 'assets/cardiac/Connect/Connect2.png'
import FlateImg from 'assets/cardiac/Flate/Flate1.png'
import RacImg from 'assets/cardiac/Rac/Rac1.png'
import AccessImg1 from 'assets/cardiac/Access/Access1.png'
import AccessImg2 from 'assets/cardiac/Access/Access2.png'
import ManImg from 'assets/cardiac/Man/Man1.png'
import SheathImg1 from 'assets/cardiac/Sheath/Sheath1.png'
import SheathImg2 from 'assets/cardiac/Sheath/Sheath2.png'
import BannerLogo from 'assets/cardiac/Banner/BannerLogo.png'

const CardiacBanner = () => {
  const sectionRef = useRef<any>(null)

  const bannerInfo = [
    {
      backgroundImageDesktop: BannerBG1,
      Img1: ConnectImg1,
      Img2: ConnectImg2,
      categoryLogo: ConnectLOGO,
    },
    {
      backgroundImageDesktop: BannerBG1,
      Img1: FlateImg,
      categoryLogo: FlateLOGO,
    },
    {
      backgroundImageDesktop: BannerBG1,
      Img1: RacImg,
      categoryLogo: RacLOGO,
    },
    {
      backgroundImageDesktop: BannerBG1,
      Img1: AccessImg1,
      Img2: AccessImg2,
      categoryLogo: AccessLOGO,
    },
    {
      backgroundImageDesktop: BannerBG1,
      Img1: ManImg,
      categoryLogo: ManLOGO,
    },
    {
      backgroundImageDesktop: BannerBG1,
      Img1: SheathImg1,
      Img2: SheathImg2,
      categoryLogo: SheathLOGO,
    },
  ]

  return (
    <>
      <section
        ref={sectionRef}
        className="relative !overflow-hidden cardiac-banner-main min-h-[600px] md:max-h-[755px] h-[655px]  lg:max-h-[100%] 2xl:max-h-[100vh] sm:h-screen"
      >
        <div className="absolute top-[80px] sm:top-[110px] md:top-[140px] xl:top-[110px] 2xl:top-[140px] z-20 transform -translate-x-1/2 left-1/2">
          <img
            src={BannerLogo}
            className="w-full sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] 2xl:max-w-[450px]"
            alt=""
          />
        </div>
        {/* <div className="absolute inset-0 bg-cover bg-center sm:bg-[0px_-100px] md:bg-[60%_0%] lg:bg-center bg-no-repeat opacity-40 z-0">
          <img src={BannerBG1} className="w-full h-full" alt="" />
        </div> */}
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-40"
          style={{ backgroundImage: `url(${BannerBG1})` }}
        ></div>
        {bannerInfo.length === 0 ? null : (
          <>
            <Swiper
              className="relative h-full select-none cardiacpage-banner-pagination font-regular cursor-grab mt-14 sm:mt-0 lg:mt-0 2xl:mt-[60px]"
              navigation={{
                prevEl: '.banner-swiper-prev',
                nextEl: '.banner-swiper-next',
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              loop
              preventInteractionOnTransition
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              initialSlide={1}
              speed={1000}
              modules={[Pagination, Navigation, Autoplay, A11y]}
            >
              {bannerInfo.map((banner, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`relative overflow-hidden flex flex-col justify-center md:justify-center h-[500px] sm:h-[500px] md:h-[600px]  lg:h-[700px] xl:h-auto mt-[100px] sm:mt-[250px] md:mt-[200px] lg:mt-[200px]`}
                  >
                    <div className="relative z-10 flex flex-col items-center w-full">
                      {banner.Img1 && banner.Img2 ? (
                        <div className="grid w-full h-full sm:h-auto md:h-[300px] lg:h-[400px] xl:h-[500px] grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-3 sm:gap-0 md:gap-3 gsap-opacity-trans-appear">
                          <div className="flex items-center justify-center flex-1 md:justify-end">
                            <div className="w-full h-full max-w-[200px] max-h-[190px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[350px] lg:max-h-[350px] xl:max-w-[400px] xl:max-h-[400px]">
                              <img
                                src={banner.Img1}
                                className="object-contain w-full h-full"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-center flex-1 md:justify-start">
                            <div className="w-full h-full max-w-[200px] max-h-[190px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[350px] lg:max-h-[350px] xl:max-w-[400px] xl:max-h-[400px]">
                              <img
                                src={banner.Img2}
                                className="object-contain w-full h-full"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      ) : banner.Img1 && !banner.Img2 ? (
                        <div className="flex items-center justify-center w-full sm:h-[300px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                          <div className="w-full h-full max-w-[200px] max-h-[200px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[350px] lg:max-h-[350px] xl:max-w-[400px] xl:max-h-[400px] gsap-opacity-trans-appear">
                            <img
                              src={banner.Img1}
                              className="object-contain w-full h-full"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        ''
                      )}

                      <div className="flex items-center justify-center h-[100px] sm:h-[150px] w-full">
                        <div className="w-[150px] sm:w-[300px] h-[100px]">
                          <img
                            src={banner.categoryLogo}
                            className="object-contain w-full h-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Carousel buttons */}
            <div className="flex items-center justify-between w-full h-full md:flex lg:flex d">
              <CarouselBtn
                activeIndex={0}
                color="black"
                onClick={() => {}}
                index={5}
                text="Move to previous slide"
                size="base"
                type="button"
                extraClasses={
                  extraClasses +
                  'banner-swiper-prev absolute z-10 inset-0 top-1/2 h-fit w-fit left-0 translate-x-[60%] xsl:translate-x-[100%] 2xl:translate-x-[200%] !border-1'
                }
              />
              <CarouselBtn
                activeIndex={0}
                color="black"
                onClick={() => {}}
                index={5}
                text="Move to next slide"
                size="base"
                type="button"
                isRotated
                extraClasses={
                  extraClasses +
                  'banner-swiper-next absolute z-10 inset-0 top-1/2 h-fit w-fit left-[100%] -translate-x-[160%] xsl:-translate-x-[200%] 2xl:-translate-x-[300%] !border-1'
                }
              />
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default CardiacBanner
