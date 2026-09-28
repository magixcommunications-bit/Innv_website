import React, { useEffect, useState } from 'react'

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1000) {
      setVisible(true)
    } else if (scrolled <= 1000) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <div>
      <button
        onClick={scrollToTop}
        aria-label="Previous slide"
        className={`shadow 2xl:w-14 2xl:h-14 lg:w-12 lg:h-12 w-8 h-8 fixed z-10 bottom-0 right-0 rounded-full rotate-90 -translate-x-[75%] -translate-y-full ${
          visible ? 'opacity-100' : 'opacity-0'
        } transition-all duration-300 hidden lg:flex justify-center items-center hover:bg-white border-1 hover:border-gray border-solid bg-white stroke-orange border-orange fill-orange hover:stroke-black hover:fill-black`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 xl:h-4  fill-inherit !transition-none"
          viewBox="0 0 25 21"
        >
          <path
            fill="inherit"
            d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTopBtn
