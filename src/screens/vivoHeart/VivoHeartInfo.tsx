import React, { useEffect, useState } from 'react'
import VivoHeartImg1 from 'assets/vivoHeart/VivoHeartImg1.png'
import VivoHeartImg2 from 'assets/vivoHeart/VivoHeartImg2.png'
import VivoHeartImg3 from 'assets/vivoHeart/VivoHeartImg3.png'
import TrueVisionImg from 'assets/vivoHeart/TrueVisionImg.png'
import VivoHeartAnimation from './VivoHeartAnimation'

const VivoHeartInfo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const VivoHeartSpecs = [
    {
      img: VivoHeartImg1,
      Heading: 'High Resolution',
      SubHeading1:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">60 MHz</span><br/> center frequency for high-resolution and crystal-clear imaging.',
    },
    {
      img: VivoHeartImg2,
      Heading: 'High Speed',
      SubHeading1:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">150 mm</span><br/> Automatic pullback distance.',
      SubHeading2:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">10 mm/s</span><br/> Fastest pullback speed.',
      SubHeading3:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">100 FPS</span><br/> Highest frame rate.',
    },
    {
      img: VivoHeartImg3,
      Heading: 'High Efficiency',
      SubHeading1:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">InSmartVision™</span><br/> Image Analysis Platform.',
      SubHeading2:
        '<span class="font-bold  text-[18px] md:text-[20px] lg:text-[24px]">EasyGo™</span><br/> IVUS-Angio co-registration.',
    },
  ]

  const tableData = [
    [
      { label: 'Distal Diameter:', value: '3.15F (1.05 mm)' },
      { label: 'Pullback distance:', value: '150 mm' },
    ],
    [
      { label: 'Compatible Wire:', value: '0.014" (0.36 mm)' },
      { label: 'Compatible guide catheter:', value: '6F' },
    ],
    [
      { label: 'Proximal Diameter:', value: '3.5F (1.15 mm)' },
      { label: 'Working Length:', value: '1350 mm' },
    ],
    [
      { label: 'Tip to Transducer:', value: '20 mm' },
      { label: '', value: '' },
    ],
  ]

  return (
    <div className="bg-gradient-to-b from-[#bbdefb] to-[#d1c4e9] h-full">
      <VivoHeartAnimation />
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col gap-10 mt-[50px]">
          {/* <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
            {VivoHeartSpecs.map((specs, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col flex-grow gap-4 rounded-2xl p-[20px] bg-[#e3dfff] h-[350px] sm:h-auto lg:h-full stagger-child gsap-opacity-trans-appear-animation ${
                    windowWidth >= 768 && windowWidth <= 1024 && index === 2
                      ? 'w-[96vw]'
                      : 'w-full'
                  }`}
                >
                  <div className="flex justify-between flex-col h-[158px] ">
                    <div
                      className={`w-full flex items-center ${
                        index === 0 ? 'max-w-[80px]' : 'max-w-[100px]'
                      } h-full`}
                    >
                      <img
                        src={specs.img}
                        className="block w-full"
                        alt="VivoHeart"
                      />
                    </div>
                    <h2 className="text-[25px] md:text-[30px] font-bold mt-5 text-[#15306e]">
                      {specs.Heading}
                    </h2>
                  </div>
                  <div className="flex h-auto">
                    <div className="font-regular text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                      {specs.SubHeading1 && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: specs.SubHeading1,
                          }}
                        ></p>
                      )}
                      {specs.SubHeading2 && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: specs.SubHeading2,
                          }}
                        ></p>
                      )}
                      {specs.SubHeading3 && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: specs.SubHeading3,
                          }}
                        ></p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div> */}
          <div className="flex w-full">
            <h3 className="font-medium text-[30px] md:text-[36px] lg:text-[48px] text-[#15306e] gsap-opacity-trans-appear">
              TrueVision® Image Catheter Specifications
            </h3>
          </div>
          <div className="flex w-full">
            <img
              src={TrueVisionImg}
              className="block w-full h-full gsap-opacity"
              alt="TrueVisionImg"
            />
          </div>
          <div className="flex w-full overflow-x-auto gsap-opacity-trans-appear rounded-3xl">
            <div className="w-full mx-auto min-w-max overflow-hidden bg-white shadow-lg rounded-3xl border border-[#a988b5] ">
              <div className="p-4 text-[25px] sm:text-[30px] font-medium text-center text-white bg-gradient-to-b from-[#972d8f] to-[#123978]">
                Model : TRUEVISION<sup>®</sup>
              </div>

              <div className="divide-y divide-gray-300">
                {tableData.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="flex divide-x divide-gray-300 h-[80px] sm:h-[90px] md:h-[64px]"
                  >
                    {row.map((cell, cellIndex) => (
                      <div
                        key={`cell-${rowIndex}-${cellIndex}`}
                        className={`w-1/2 p-4 ${
                          rowIndex % 2 === 0 ? 'bg-[#bebae2]' : 'bg-white'
                        }`}
                      >
                        <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] text-gray-800">
                          {cell.label} {cell.value && cell.value}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="flex w-full gsap-opacity-trans-appear">
            <div className="w-full mx-auto overflow-hidden bg-white shadow-lg rounded-3xl border border-[#a988b5]">
              <div className="p-4 text-[30px] font-medium text-center text-white bg-gradient-to-b from-[#972d8f] to-[#123978]">
                Model : TRUEVISION<sup>®</sup>
              </div>

              <div className="divide-y divide-gray-300">
                {tableData.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="flex flex-col divide-y divide-gray-300 md:flex-row md:divide-y-0 md:divide-x"
                  >
                    {row.map((cell, cellIndex) => (
                      <div
                        key={`cell-${rowIndex}-${cellIndex}`}
                        className={`w-full md:w-1/2 p-4 ${
                          rowIndex % 2 === 0 ? 'bg-[#bebae2]' : 'bg-white'
                        }`}
                      >
                        <p className="font-bold text-[20px] md:text-[24px] text-gray-800">
                          {cell.label} {cell.value && cell.value}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default VivoHeartInfo
