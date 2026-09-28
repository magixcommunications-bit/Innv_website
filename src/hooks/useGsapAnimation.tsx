import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

interface AnimationOptions {
  singleSelector?: string
  childSelector?: string
  parentSelector?: string
  combinedSelector?: string
  startPosition?: string
  duration?: number
  ease?: string
  y?: number
  staggerDelay?: number
  toggleActions?: string
}

const useGsapAnimation = ({
  singleSelector,
  childSelector,
  parentSelector,
  combinedSelector,
  startPosition,
  duration = 1,
  ease = 'ease',
  y = 50,
  staggerDelay = 0.8,
  toggleActions = 'play none none reverse',
}: AnimationOptions) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const processedElements = new Set()

      if (combinedSelector) {
        const combinedElems = document.querySelectorAll(combinedSelector)

        if (combinedElems.length > 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger:
                combinedElems[0].closest(parentSelector || '') ||
                combinedElems[0],
              start: startPosition || 'top 80%',
              toggleActions,
            },
          })

          combinedElems.forEach((elem, index) => {
            processedElements.add(elem)

            tl.from(
              elem,
              {
                opacity: 0,
                y,
                scale: 0.95,
                duration,
                ease,
              },
              (index * staggerDelay) / combinedElems.length,
            )
          })
        }
      }

      // Handle staggered animations
      if (childSelector && parentSelector) {
        const elems = document.querySelectorAll(childSelector)
        const parent = document.querySelector(parentSelector)

        if (parent && elems.length > 0) {
          const remainingElems = Array.from(elems).filter(
            (elem) => !processedElements.has(elem),
          )

          if (remainingElems.length > 0) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: parent,
                start: startPosition || 'top 80%',
                toggleActions,
              },
            })

            remainingElems.forEach((elem, index) => {
              tl.from(
                elem,
                {
                  opacity: 0,
                  y,
                  duration,
                  ease,
                },
                (index * staggerDelay) / remainingElems.length,
              )
            })
          }
        }
      }

      if (singleSelector) {
        const elems = document.querySelectorAll(singleSelector)

        if (elems.length > 0) {
          const remainingElems = Array.from(elems).filter(
            (elem) => !processedElements.has(elem),
          )

          remainingElems.forEach((elem: any) => {
            gsap.from(elem, {
              opacity: 0,
              y,
              duration,
              ease,
              scrollTrigger: {
                trigger: elem,
                start: startPosition || 'top 85%',
                toggleActions,
              },
            })
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
      ctx.revert()
    }
  }, [
    singleSelector,
    childSelector,
    parentSelector,
    combinedSelector,
    startPosition,
    duration,
    ease,
    y,
    staggerDelay,
    toggleActions,
  ])
}

export default useGsapAnimation
