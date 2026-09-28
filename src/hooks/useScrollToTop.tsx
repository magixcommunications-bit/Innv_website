import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const useScrollToTop = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(window, { scrollTo: 0 })
    })

    return () => ctx.revert()

    // window.scrollTo(0, 0)
  }, [])
}

export default useScrollToTop
