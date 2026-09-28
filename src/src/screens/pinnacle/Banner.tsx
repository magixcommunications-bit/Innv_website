import React from 'react'
import pagelogo from 'assets/pinnacle/pinnacle-logo.svg'

export default function Banner() {
  return (
    <div className="bg-[#371101] bg-[url('assets/pinnacle/banner.png')] h-[110vh] min-h-[700px] bg-cover bg-center xl:bg-bottom 2xl:bg-center bg-no-repeat">
      <div className="flex items-end pb-5 h-full ">
        <div className=" w-10/12 max-w-3xl 2xl:max-w-4xl flex w-container items-center justify-center blade-top-padding xl:mb-6">
          <div className=" flex-col grow-0 shrink flex items-start justify-center ">
            <div className=" w-fit h-12 md:h-16 lg:h-20 p-1 ">
              <img
                className="h-full w-auto object-contain"
                src={pagelogo}
                alt="Pinnacle logo"
              />
            </div>
            <div>
              <h3
                style={{
                  backgroundImage:
                    'linear-gradient(186deg, #FFF -96.64%, #F69A4D 109.37%)',
                }}
                className="bg-clip-text text-transparent font-medium"
              >
                Pinnacle
              </h3>
            </div>
          </div>
          <div className="w-[5px] mx-[3rem] h-auto  block  min-h-full self-stretch">
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

          <div className="flex text-white flex-col gap-3 items-start w-full">
            <h4 className="font-regular text-white leading-snug">
              Fixed, flat-Panel, Fully Digital Cath Lab
            </h4>
            <ol className="list-disc font-light pl-7 2xl:text-[18px]">
              <li>Real time image acquisition</li>
              <li>1344x1344 high-resolution image</li>
              <li>Smallest footprint</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
