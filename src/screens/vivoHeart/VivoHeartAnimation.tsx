import React, { useEffect, useLayoutEffect, useState } from 'react'
import video from 'assets/vivoHeart/videos/IVUS Product Video.mp4'
import poster from 'assets/vivoHeart/videos/IVUS_Video_poster.png'

const VivoHeartAnimation = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [showIframe, setShowIframe] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth)
  //   handleResize()

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log('windowWidth', windowWidth)

  return (
    <section className="blade-top-padding text-white font-regular bg-gradient-to-b from-[#8B5CF6] to-[#FEF3C7]">
      <div className="blade-bottom-padding-lg bg-[url(assets/scoreflexNC/animation/bg.svg)] bg-cover bg-no-repeat bg-bottom ">
        <h3 className="block font-medium leading-tight text-center gsap-opacity-trans-appear md:-mt-2 2xl:-mt-3">
          TrueVision® animation
        </h3>

        <h5 className="max-w-md px-3 pt-2 mx-auto text-center gsap-opacity-trans-appear 2xl:pt-3 2xl:max-w-xl">
          Watch the TrueVision® animation to understand its functionality
          and applications.
        </h5>

        {/* <div className="px-3 blade-top-margin">
          <iframe
            // controls
            className="gsap-opacity-trans-appear h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-md  md:max-w-none md:w-9/12 xl:max-w-6xl object-center mx-auto border-4 border-white rounded-[10px]"
            src={`https://www.youtube-nocookie.com/embed/8GCNaRVGldY?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&vq=hd720`}
            // src={`${videoData?.thumbnail}?autoplay=1&mute=1&rel=0`}
            // autoPlay
            // loop
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div> */}
        <div className="px-3 blade-top-margin">
          <iframe
            // className={`gsap-opacity-trans-appear ${
            //   windowWidth <= 375
            //     ? 'max-w-max'
            //     : windowWidth <= 350
            //     ? 'w-[150px]'
            //     : ''
            // } w-[369px] h-[211px] sm:h-[350px] md:w-full md:h-[422px] lg:w-full lg:h-[566px]  xl:w-[1061px]  xl:h-[600px] object-center mx-auto border-4 border-white rounded-[10px]`}
            className={`gsap-opacity-trans-appear ${
              windowWidth <= 320
                ? 'w-full h-full'
                : windowWidth <= 375
                ? 'w-full h-[200px]'
                : 'w-[369px] h-[211px]'
            } sm:w-[615px] sm:h-[350px] md:w-full md:h-[422px] lg:w-full lg:h-[566px] xl:w-[1061px] xl:h-[600px] object-center mx-auto border-4 border-white rounded-[10px]`}
            src={`https://www.youtube-nocookie.com/embed/8GCNaRVGldY?mute=1&rel=0&modestbranding=1&showinfo=0&vq=hd720`}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* <div className="relative px-3 blade-top-margin">
          {!showIframe ? (
            <div onClick={() => setShowIframe(true)} className="cursor-pointer">
              <img
                src={poster}
                alt="Video Preview"
                className={`gsap-opacity-trans-appear ${
                  windowWidth <= 320
                    ? 'w-full h-full'
                    : windowWidth <= 372
                    ? 'w-full h-full'
                    : 'max-w-[369px]'
                } max-h-[211px] sm:max-h-[350px] md:max-w-full md:max-h-[422px] lg:max-w-full lg:max-h-[566px] xl:max-w-[1061px] xl:max-h-[600px] object-center mx-auto border-4 border-white rounded-[10px]`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="px-4 py-2 text-black bg-white rounded font-regular">
                  Play
                </button>
              </div>
            </div>
          ) : (
            <iframe
              className={`gsap-opacity-trans-appear ${
                windowWidth <= 320
                  ? 'w-full h-full'
                  : windowWidth <= 372
                  ? 'w-full h-full'
                  : 'w-[369px]'
              } h-[211px] sm:h-[350px] md:w-full md:h-[422px] lg:w-full lg:h-[566px] xl:w-[1061px] xl:h-[600px] object-center mx-auto border-4 border-white rounded-[10px]`}
              src="https://www.youtube-nocookie.com/embed/8GCNaRVGldY?autoplay=1&mute=1&rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div> */}
      </div>
    </section>
  )
}

export default VivoHeartAnimation
