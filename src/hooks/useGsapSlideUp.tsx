import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

const useGsapSlideUp = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className)

      if (elems.length === 0) {
        return
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 4,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 3,
          },
        })
      })
    })

    return () => {
      ctx.revert()
    }
  })
}

export default useGsapSlideUp
