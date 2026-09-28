import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

const useGsapOpacityTransAppear2 = (className: string) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const elems = document.querySelectorAll(className)

        if (elems.length === 0) {
          return
        }

        elems.forEach((elem) => {
          gsap.from(elem, {
            opacity: 0,
            y: 50,
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
    }, 100)

    return () => clearTimeout(timer)
  }, [className])
}

export default useGsapOpacityTransAppear2
