import React from 'react'

type balloonData = {
  productImg: string
  shadowImg: string
  logo: string
  desc: JSX.Element
  title: string
  bgClasses: string
  logoSize?: string
  productSize?: string
}

const BalloonBanner = ({
  productImg,
  shadowImg,
  logo,
  logoSize,
  productSize,
  desc,
  title,
  bgClasses,
}: balloonData) => {
  return (
    <div
      className={`flex flex-col overflow-hidden w-full min-h-[600px] max-h-[650px] lg:max-h-[700px] xl:max-h-[800px] 2xl:max-h-[920px] h-screen bg-center bg-cover bg-no-repeat ${bgClasses}`}
    >
      <div className="pt-12 mx-auto my-auto md:translate-y-10">
        <div
          className="-rotate-[20deg translate-y-16 max-w-sm mx-auto sm:opacity-100 sm:max-w-none 
          sm:translate-y-0 sm:rotate-0"
        >
          <img
            src={productImg}
            alt={title}
            className={`text-appear-anim px-3 w-full h-auto sm:max-w-lg mx-auto lg:max-w-xl xl:max-w-[38rem] 2xl:max-w-none ${productSize}`}
          />
        </div>
        <div className="translate-y-16 w-[80%] mx-auto opacity-70 sm:opacity-100 sm:max-w-none sm:translate-y-0 ">
          <img
            src={shadowImg}
            aria-hidden
            alt="shadow"
            className="text-appear-anim mx-auto min-[1800px]:!-translate-x-32"
          />
        </div>
      </div>
      <div className="flex items-en blade-bottom-padding-lg lg:blade-bottom-padding-sm h-min">
        <div className="flex flex-col items-center justify-center px-3 md:flex-row w-container gap-y-3 md:gap-y-6 md:gap-x-12">
          <div className="w-fit">
            <div className="p-1 text-appear-anim-delayed ">
              <img
                src={logo}
                alt={title}
                className={`w-auto h-8 md:h-14 lg:h-16 2xl:h-20 ${logoSize}`}
              />
            </div>
          </div>

          <div className="hidden md:block text-appear-anim-delayed">
            <svg
              width="2"
              className="h-24"
              viewBox="0 0 2 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.125"
                y1="0.384766"
                x2="1.12501"
                y2="158.917"
                stroke="#333"
              />
            </svg>
          </div>

          <div className="flex text-[#333] flex-col gap-3 items-center md:items-start w-fit text-appear-anim-delayed ">
            {desc}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalloonBanner
