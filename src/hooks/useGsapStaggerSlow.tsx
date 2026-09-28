import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useGsapStaggerSlow = (childSelector: string) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const elems = document.querySelectorAll(childSelector)

        if (elems.length === 0) {
          return
        }

        // Set initial state to ensure elements start invisible
        gsap.set(elems, { opacity: 0, y: 50, scale: 0.9 })

        // Animate each card individually when it comes into view
        elems.forEach((elem, index) => {
          gsap.to(elem, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem, // Each card is its own trigger
              start: 'top 90%', // Animate when card is 90% in viewport
              end: 'bottom 10%',
              toggleActions: 'play none none reverse',
              once: false, // Animation plays only once per card
              // markers: true, // Uncomment for debugging
            },
          })
        })
      })

      return () => {
        ctx.revert()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [childSelector])
}

export default useGsapStaggerSlow
