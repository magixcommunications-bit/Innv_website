import React, { useEffect } from 'react'
import RightIcon from 'assets/vivoHeart/RightIcon.png'
import CloseIcon from 'assets/vivoHeart/CloseIcon.png'
import VivoHeartImg1 from 'assets/vivoHeart/VivoHeartImg4.png'
import VivoHeartImg2 from 'assets/vivoHeart/VivoHeartImg5.png'
import VivoHeartImg3 from 'assets/vivoHeart/VivoHeartImg6.png'
import VivoHeartImg4 from 'assets/vivoHeart/VivoHeartImg7.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VivoHeartThirdSection = () => {
  const rowLabels = [
    'Brand',
    'Type',
    'Center Frequency (MHz)',
    'Axial Resolution (μm)',
    'Penetration depth diameter(mm)',
    'Full Vessel Image analysis',
    'IVUS-Angio Co-registration',
  ]

  const tableData = {
    brands: ['Innvolution', 'BSC', 'Philips'],
    types: ['Rotational', 'Rotational', ['Rotational', 'Phased Array']],
    frequencies: [
      ['60', '40'],
      ['60', '40'],
      ['45', '20'],
    ],
    resolutions: [
      ['22', '38'],
      ['22', '38'],
      ['50', '< 170'],
    ],
    penetration: ['> 12', '> 12', ['> 12', '> 20']],
    analysis: [
      { available: true, note: '(InsmartVision™)' },
      { available: true, note: '(only for AVVIGO+) (ALA)' },
      { available: false, note: '' },
    ],
    coregistration: [
      { available: true, note: '(EasyGo™)' },
      { available: false, note: '' },
      { available: true, note: '(Only for 20 MHz) (SyncVision)' },
    ],
  }

  const renderCheckMark = (isAvailable: boolean, note: string) => {
    if (isAvailable) {
      return (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-6 h-6 bg-blue-800 rounded-full">
            <img src={RightIcon} />
          </div>
          {note && (
            <div className="mt-1 text-[16px] font-semibold text-center">
              {note}
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full">
            <img src={CloseIcon} />
          </div>
          {note && <div className="mt-1 text-xs text-center">{note}</div>}
        </div>
      )
    }
  }

  const getRowBgColor = (index: number) => {
    return 'bg-gradient-to-r from-[#123978] to-[#972d8f] text-white'
  }

  const getCellBgColor = (brandIndex: number) => {
    switch (brandIndex) {
      case 0:
        return 'bg-[#bebae2]'
      case 1:
        return 'bg-white'
      case 2:
        return 'bg-white'
      default:
        return 'bg-white'
    }
  }

  const VivoHeartSpecs = [
    {
      img: VivoHeartImg1,
      desc: '40 MHz & 60 MHz transducer frequency',
    },
    {
      img: VivoHeartImg2,
      desc: '150 mm Pullback distance',
    },
    {
      img: VivoHeartImg3,
      desc: 'Complete Co-registration with HD images',
    },
    {
      img: VivoHeartImg4,
      desc: 'Wide spectrum with higher clarity',
    },
  ]

  useEffect(() => {
    if (
      Object.values(tableData).some(
        (value) => Array.isArray(value) && value.length > 0,
      )
    ) {
      ScrollTrigger.refresh()
    }
  }, [tableData])

  return (
    <div className="bg-gradient-to-b from-[#ffb84d83] to-sky-200">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full gap-10">
          {/* <div className="flex w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px] w-full gsap-stagger2-parent">
              {VivoHeartSpecs.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col bg-white shadow-lg rounded-2xl gsap-stagger2"
                  >
                    <div className="flex items-center justify-center h-[200px]">
                      <img
                        alt="VivoHeartSpecs"
                        className="w-full h-full"
                        src={val.img}
                      />
                    </div>
                    <div className="pb-[20px] pr-[8px] pl-[8px]">
                      <p className="text-[22px] font-bold text-center">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div> */}
          <div className="w-full">
            <h3 className="font-medium text-[#15306e] text-center text-3xl md:text-4xl lg:text-[48px] gsap-opacity-trans-appear2">
              IVUS Comparative Table
            </h3>
          </div>
          <div className="flex w-full gsap-opacity-trans-appear2">
            <div className="w-full mx-auto overflow-x-auto shadow-xl rounded-3xl ">
              <div className="min-w-max flex gap-[4px] text-[20px] font-regular">
                <div className="w-1/4 flex flex-col gap-[4px]">
                  {rowLabels.map((label, index) => (
                    <div
                      key={`label-${index}`}
                      className={`p-4 flex items-center h-20 md:h-20 lg:h-20 xl:h-16 ${getRowBgColor(
                        index,
                      )}`}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {tableData.brands.map((brand, brandIndex) => (
                  <div
                    key={`brand-${brandIndex}`}
                    className="w-1/4 flex flex-col gap-[4px]"
                  >
                    <div
                      className={`flex justify-center items-center p-4 text-center h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )} font-bold`}
                    >
                      {brand}
                    </div>

                    <div
                      className={`p-0  text-center h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      {Array.isArray(tableData.types[brandIndex]) ? (
                        <div className="flex h-full">
                          <div className="flex items-center justify-center flex-1 border-r border-gray-300">
                            {tableData.types[brandIndex][0]}
                          </div>
                          <div className="flex items-center justify-center flex-1">
                            {tableData.types[brandIndex][1]}
                          </div>
                        </div>
                      ) : (
                        //   tableData.types[brandIndex]
                        <div className="flex items-center justify-center h-full">
                          {tableData.types[brandIndex]}
                        </div>
                      )}
                    </div>

                    <div
                      className={`h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      <div className="flex h-full">
                        {tableData.frequencies[brandIndex].map(
                          (freq, freqIndex) => (
                            <div
                              key={`freq-${brandIndex}-${freqIndex}`}
                              className="flex items-center justify-center flex-1 border-r border-gray-300 last:border-r-0"
                            >
                              {freq}
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div
                      className={`h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      <div className="flex h-full">
                        {tableData.resolutions[brandIndex].map(
                          (res, resIndex) => (
                            <div
                              key={`res-${brandIndex}-${resIndex}`}
                              className="flex items-center justify-center flex-1 border-r border-gray-300 last:border-r-0"
                            >
                              {res}
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div
                      className={`p-0 text-center h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      {Array.isArray(tableData.penetration[brandIndex]) ? (
                        <div className="flex h-full">
                          <div className="flex items-center justify-center flex-1 border-r border-gray-300">
                            {tableData.penetration[brandIndex][0]}
                          </div>
                          <div className="flex items-center justify-center flex-1">
                            {tableData.penetration[brandIndex][1]}
                          </div>
                        </div>
                      ) : (
                        //   tableData.penetration[brandIndex]
                        <div className="flex items-center justify-center h-full">
                          {tableData.penetration[brandIndex]}
                        </div>
                      )}
                    </div>

                    <div
                      className={`p-4 flex justify-center items-center h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      {renderCheckMark(
                        tableData.analysis[brandIndex].available,
                        tableData.analysis[brandIndex].note,
                      )}
                    </div>

                    <div
                      className={`p-4 flex justify-center items-center h-20 md:h-20 lg:h-20 xl:h-16 ${getCellBgColor(
                        brandIndex,
                      )}`}
                    >
                      {renderCheckMark(
                        tableData.coregistration[brandIndex].available,
                        tableData.coregistration[brandIndex].note,
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VivoHeartThirdSection
