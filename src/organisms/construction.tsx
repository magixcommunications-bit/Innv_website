import React from 'react'

export type CardData = {
  title: string
  desc: string
}

const Construction = ({
  title,
  image,
  imageBg,
  imageDesc,
  bgGrad,
  bgClasses,
  cardData,
}: {
  title: string
  image: string
  imageBg?: string
  imageDesc: string
  bgGrad: string
  bgClasses: string
  cardData: CardData[]
}) => {
  return (
    <section
      className={` font-regular ${bgClasses}`}
      style={{
        background: bgGrad ? bgGrad : 'none',
      }}
    >
      <div
        className={`${bgClasses} blade-top-padding-lg blade-bottom-padding-lg`}
      >
        {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">{title}</h2> */}
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
          {title}
        </h3>

        <section className="blade-top-margin-lg md:flex md:items-center md:flex-row-reverse md:w-container-lg md:gap-x-12 xl:max-w-7xl 2xl:max-w-[1280px] md:justify-between">
          <article className="relative px-3 md:px-0 blade-bottom-margin-lg max-w-lg mx-auto md:mb-0 2xl:max-w-none 2xl:mx-0">
            <img src={image} alt={title} className="gsap-scale w-full " />
            <p className="gsap-opacity-trans-appear max-w-sm text-center pt-4 mx-auto opacity-80 xl:text-lg 2xl:mt-10">
              {imageDesc}
            </p>
            {imageBg && (
              <img
                src={imageBg}
                alt="Product background"
                className="absolute -top-[60%] left-0 w-full h-[200%]"
              />
            )}
          </article>
          <article className="max-w-[26rem] mx-auto xl:max-w-[29.5rem] 2xl:mx-0">
            {cardData.map((elem, index) => {
              return (
                <ConstructionCard
                  title={elem.title}
                  desc={elem.desc}
                  key={index}
                />
              )
            })}
          </article>
        </section>
      </div>
    </section>
  )
}

export default Construction

function ConstructionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="py-3 px-3 md:px-0 xl:py-4 md:first-of-type:pt-0 2xl:py-8 ">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="gsap-opacity-trans-appear w-auto h-4 lg:h-5"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75658 3.0983C9.75658 1.45512 11.0886 0.123047 12.7318 0.123047C14.375 0.123047 15.7071 1.45511 15.7071 3.0983V4.64815C15.7071 7.14474 17.731 9.16863 20.2276 9.16863L21.7728 9.16863C23.416 9.16863 24.748 10.5007 24.748 12.1439C24.748 13.7871 23.416 15.1191 21.7728 15.1191H20.2276C17.731 15.1191 15.7071 17.143 15.7071 19.6396V21.1881C15.7071 22.8312 14.375 24.1633 12.7318 24.1633C11.0886 24.1633 9.75658 22.8312 9.75658 21.1881V19.6412C9.75658 17.1437 7.73198 15.1191 5.2345 15.1191H3.68304C2.03985 15.1191 0.707783 13.7871 0.707783 12.1439C0.707783 10.5007 2.03985 9.16863 3.68304 9.16863L5.23379 9.16863C7.73166 9.16863 9.75658 7.14371 9.75658 4.64584V3.0983Z"
            fill="#001850"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75658 3.0983C9.75658 1.45512 11.0886 0.123047 12.7318 0.123047C14.375 0.123047 15.7071 1.45511 15.7071 3.0983V4.64815C15.7071 7.14474 17.731 9.16863 20.2276 9.16863L21.7728 9.16863C23.416 9.16863 24.748 10.5007 24.748 12.1439C24.748 13.7871 23.416 15.1191 21.7728 15.1191H20.2276C17.731 15.1191 15.7071 17.143 15.7071 19.6396V21.1881C15.7071 22.8312 14.375 24.1633 12.7318 24.1633C11.0886 24.1633 9.75658 22.8312 9.75658 21.1881V19.6412C9.75658 17.1437 7.73198 15.1191 5.2345 15.1191H3.68304C2.03985 15.1191 0.707783 13.7871 0.707783 12.1439C0.707783 10.5007 2.03985 9.16863 3.68304 9.16863L5.23379 9.16863C7.73166 9.16863 9.75658 7.14371 9.75658 4.64584V3.0983Z"
            fill="url(#paint0_linear_94_892)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94_892"
              x1="12.7279"
              y1="-5.56578"
              x2="9.95161"
              y2="26.2659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F69A4D" />
              <stop offset="1" stopColor="#FF7400" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className="gsap-opacity-trans-appear ml-2 font-medium hidden lg:block">
          {title}
        </h4>
        <h5 className="gsap-opacity-trans-appear ml-2 font-medium lg:hidden">
          {title}
        </h5>
      </div>
      <p className="gsap-opacity-trans-appear ml-7 opacity-90 xl:text-[20px]">
        {desc}
      </p>
    </div>
  )
}
