import React, { useEffect } from 'react'
import './style.css'
import stentsImage from 'assets/stents/landingPage/product-img.png'
import gsap from 'gsap'

const StentsBanner = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.title-1', {
        opacity: 0,
        y: 100,
        duration: 0.7,
        ease: 'sine.out',
      })
        .from('.title-2', {
          opacity: 0,
          y: 100,
          duration: 0.7,
          ease: 'sine.out',
          delay: -0.5,
        })
        .from('.stent-image', {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: 'sine.out',
          delay: -0.5,
        })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="h-[65vh] banner-image sm:h-[85vh] xl:h-screen bg-cover bg-center flex flex-col items-center justify-center gap-7 xl:gap-[20px] 2xl:gap-[38px] relative">
      <img
        className="xsl:hidden stent-image xxl:blade-top-margin"
        src={stentsImage}
        alt="stent product view"
      />
      <div className="absolute bottom-8 sm:bottom-16 xsl:bottom-20 xxl:bottom-28">
        <h1 className="title-1 w-[94vw] mt-4 text-2xl text-center font-medium md:text-3xl xl:mt-24 xl:text-3xl 2xl:text-4xl 2xl:mt-0">
          EVEROLIMUS & SIROLIMUS Coronary Stents
        </h1>
        <h6 className="title-2 text-[14px] text-center font-regular w-full md:text-lg xl:text-xl 2xl:text-2xl">
          Crafting your first choice for FLEXIBILITY and DELIVERABILITY
        </h6>
      </div>
    </div>
  )
}

export default StentsBanner
