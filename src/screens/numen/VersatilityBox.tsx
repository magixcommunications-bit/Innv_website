import { useState } from 'react'
import framingImg from 'assets/numen/Asset 2.png'
import fillingImg from 'assets/numen/Asset 3.png'
import finishingImg from 'assets/numen/Asset 4.png'

export default function VersatilityBox() {
  const productData = [
    {
      productImg: framingImg,
      title: 'framing',
    },
    {
      productImg: fillingImg,
      title: 'filling',
    },
    {
      productImg: finishingImg,
      title: 'finishing',
    },
  ]

  const microData = [
    {
      text: 'MicroFrame',
      inputValue: 60,
      class: 'justify-start',
      color: '#ff8513',
    },
    {
      text: 'MicroFill',
      inputValue: 40,
      class: 'justify-end',
      color: '#142d6e',
    },
    {
      text: 'MicroFinish',
      inputValue: 100,
      class: 'justify-center',
      color: '#e22b19',
    },
  ]

  return (
    <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0 xl:gap-12">
        <div className="w-full lg:w-[30%]">
          <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#00568f] mb-[12px]">
            Versatility
          </h3>
          <p className="text-base md:text-xl lg:text-2xl">
            <strong className="text-[#008f35]">Comprehensive</strong> portfolio
            offers optimal coils in all stages during coil embolization
            procedures.
          </p>
        </div>

        <div className="flex flex-col w-full gap-8 lg:w-[70%]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-4">
            {productData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 gsap-opacity-trans-appear"
              >
                <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full border-[10px] md:border-[15px] border-[#a7d1ee] flex items-center justify-center">
                  <img
                    src={data.productImg || '/placeholder.svg'}
                    alt={data.title}
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
                <p className="text-lg font-medium md:text-xl lg:text-2xl text-[#00568f]">
                  {data.title.charAt(0).toUpperCase() +
                    data.title.slice(1).toLowerCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full mt-4 md:mt-8">
            <div className="flex flex-col w-full gap-4 md:gap-6">
              {microData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 sm:flex-row sm:items-center"
                >
                  <div className="w-full sm:w-[180px]">
                    <span className="text-[#00568f] font-semibold text-xl md:text-2xl">
                      {data.text}
                    </span>
                  </div>
                  <div
                    className={`w-full h-10 px-4 md:px-6 bg-[#a7d1ee] rounded-md flex items-center ${data.class}`}
                  >
                    <div
                      className="relative flex h-[6px] rounded-md gsap-scale"
                      style={{
                        width: `${data.inputValue}%`,
                        backgroundColor: data.color,
                      }}
                    >
                      <div
                        className="w-[12px] h-[12px] top-[-3px] rounded-full absolute left-0"
                        style={{ backgroundColor: data.color }}
                      ></div>
                      <div
                        className="w-[12px] h-[12px] top-[-3px] rounded-full absolute right-0"
                        style={{ backgroundColor: data.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
