import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useGsapSlideFromLeft = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className)

      if (elems.length === 0) {
        return
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    return () => {
      ctx.revert()
    }
  }, [className])
}

export default useGsapSlideFromLeft
