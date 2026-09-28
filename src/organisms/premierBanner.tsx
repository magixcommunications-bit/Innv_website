import React from 'react'
import CE from 'assets/innvolution/carousel/logos/CE-2265.svg'

export default function PremierBanner({
  title,
  logo,
  logoClasses,
  logoAlt,
  bgClasses,
  bgGrad,
  subDesc,
}: {
  title: string
  logo: string
  logoClasses?: string
  logoAlt: string
  bgClasses: string
  bgGrad: string
  subDesc: JSX.Element
}) {
  return (
    <div
      className={`h-screen min-h-[650px] max-h-[650px] md:max-h-[700px] lg:max-h-screen lg:min-h-[700px] bg-cover bg-center bg-no-repeat 2xl:min-h-[800px] ${bgClasses}`}
    >
      <div className="flex items-end blade-bottom-padding-sm h-full">
        <div className=" max-w-3x 2xl:max-w-4x sm:max-w-[90%] sm:flex w-container blade-top-padding w-fit mx-auto gap-x-12 xl:gap-x-16">
          <div className=" flex-col grow-0 shrink flex  items-start justify-center gap-2 ">
            <div className={`${logoClasses} h-12 md:h-14 lg:h-16 `}>
              <img
                className="h-full w-full object-contain text-appear-anim"
                src={logo}
                alt={logoAlt}
              />
              {/* <img
                className="h-10 opacity-40 absolute md:bottom-[32%] bottom-[2%] right-[25%] z-10  text-appear-anim-delayed w-auto object-contain object-bottom"
                src={CE}
                alt="CE logo"
              /> */}
            </div>
            <div>
              <h3
                style={{
                  backgroundImage: bgGrad,
                }}
                className="bg-clip-text text-transparent font-medium text-appear-anim"
              >
                {title}
              </h3>
            </div>
          </div>

          <div className="w-full h-[2px] bg-[#F69A4D] sm:hidden rounded-full max-w-[160px] mb-5 mt-3 text-appear-anim"></div>

          <div className="w-[5px] h-auto hidden sm:block  min-h-full h- self-stretch text-appear-anim">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              className="h-full w-auto object-contain"
              viewBox="0 0 8 126"
              fill="none"
            >
              <g filter="url(#filter0_f_1099_14363)">
                <rect
                  x="2"
                  y="2.72168"
                  width="4"
                  height="121"
                  fill="url(#paint0_linear_1099_14363)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1099_14363"
                  x="0"
                  y="0.72168"
                  width="8"
                  height="125"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect1_foregroundBlur_1099_14363"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1099_14363"
                  x1="4"
                  y1="2.72168"
                  x2="41.2978"
                  y2="8.69574"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE9D7" />
                  <stop offset="1" stopColor="#F69A4D" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {subDesc}
        </div>
      </div>
    </div>
  )
}
