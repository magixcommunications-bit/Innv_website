import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

const useGsapStagger2 = (childClass: string, parentClass: string) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const elems = document.querySelectorAll(childClass)
        const parent = document.querySelector(parentClass)

        if (!parent || elems.length === 0) {
          return
        }

        gsap.from(elems, {
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'ease',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      return () => {
        ctx.revert()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [childClass, parentClass])
}

export default useGsapStagger2
