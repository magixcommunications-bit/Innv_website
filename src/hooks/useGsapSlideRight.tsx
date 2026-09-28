import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useGsapSlideFromRight = (className: string) => {
  const animationsRef = useRef<gsap.core.Animation[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className)

      if (elems.length === 0) {
        return
      }

      if (animationsRef.current.length) {
        animationsRef.current.forEach((anim) => anim.kill())
        animationsRef.current = []
      }

      elems.forEach((elem) => {
        const animation = gsap.fromTo(
          elem,
          { x: 100, y: 0, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )

        animationsRef.current.push(animation)
      })
    })

    return () => {
      if (animationsRef.current.length) {
        animationsRef.current.forEach((anim) => anim.kill())
      }
      ctx.revert()
    }
  }, [className])
}

export default useGsapSlideFromRight
