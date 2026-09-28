import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

const useGsapOpacityTransAppearTop = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className)

      if (elems.length === 0) {
        return
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          opacity: 0,
          y: -50, // Elements start 50px above their final position
          duration: 1,
          ease: 'ease',
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
  })
}

export default useGsapOpacityTransAppearTop
