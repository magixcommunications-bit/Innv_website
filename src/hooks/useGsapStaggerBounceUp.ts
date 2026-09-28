// import { useEffect } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// /**
//  * Stagger slide-up with a quick, subtle bounce at the end.
//  * - Fast entrance: y: 40 -> 0
//  * - Tiny bounce: 0 -> -6 -> 0
//  * - Scroll-triggered on the parent
//  */
// const useGsapStaggerBounceUp = (childClass: string, parentClass: string) => {
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const elems = Array.from(
//         document.querySelectorAll<HTMLElement>(childClass),
//       )
//       const parent = document.querySelector(parentClass)

//       if (!parent || elems.length === 0) return

//       // Ensure they are visible and positioned before animation
//       gsap.set(elems, { y: 40, autoAlpha: 0, willChange: 'transform, opacity' })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: parent,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse', // plays on enter, reverses on leave
//           // markers: true, // uncomment to debug
//         },
//         defaults: { ease: 'power3.out' },
//       })

//       // Fast slide-up + fade-in
//       tl.to(elems, {
//         y: 0,
//         autoAlpha: 1,
//         duration: 0.1, // ⚡ fast
//         stagger: 0.15,
//       })

//       // Subtle “landing” bounce (only when they reach their spot)
//       tl.to(
//         elems,
//         {
//           keyframes: [
//             { y: -6, duration: 0.12, ease: 'power1.out' }, // tiny overshoot
//             { y: 0, duration: 0.18, ease: 'power1.inOut' }, // settle
//           ],
//           stagger: 0.15,
//         },
//         '<+=0.02', // start bounce right after each lands
//       )
//     })

//     return () => ctx.revert()
//   })
// }

// export default useGsapStaggerBounceUp

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useGsapStaggerBounceUp = (childClass: string, parentClass: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const parents = document.querySelectorAll(parentClass)

      if (parents.length === 0) return

      parents.forEach((parent: Element) => {
        const elems = Array.from(
          parent.querySelectorAll<HTMLElement>(childClass.split(' ').pop()!),
        )

        if (elems.length === 0) return

        // Wait for images to load
        const images = parent.querySelectorAll('img')
        const imagePromises = Array.from(images).map((img: any) => {
          if (img.complete) return Promise.resolve()
          return new Promise((resolve) => {
            img.addEventListener('load', resolve)
            img.addEventListener('error', resolve) // resolve even on error
          })
        })

        Promise.all(imagePromises).then(() => {
          gsap.set(elems, {
            y: 40,
            autoAlpha: 0,
            willChange: 'transform, opacity',
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: parent,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            defaults: { ease: 'power3.out' },
          })

          tl.to(elems, {
            y: 0,
            autoAlpha: 1,
            duration: 0.1,
            stagger: 0.15,
          })

          tl.to(
            elems,
            {
              keyframes: [
                { y: -6, duration: 0.12, ease: 'power1.out' },
                { y: 0, duration: 0.18, ease: 'power1.inOut' },
              ],
              stagger: 0.15,
            },
            '<+=0.02',
          )
        })
      })
    })

    return () => ctx.revert()
  })
}

export default useGsapStaggerBounceUp
