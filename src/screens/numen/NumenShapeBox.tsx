import React, { useEffect, useState } from 'react'
import shapeImg03 from 'assets/numen/Asset 8.png'
import shapeImg02 from 'assets/numen/Asset 9.png'
import shapeImg01 from 'assets/numen/Asset 10.png'
import HalfArrow from 'assets/numen/HalfArrow.png'

export default function NumenShapeBox() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      // console.log('window', window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const shapeBoxData = [
    {
      icon: shapeImg01,
      desc: 'First 1.5 loop minimizes the risk of coil protrusion',
    },
    {
      icon: shapeImg02,
      desc: 'Ω shape provides predictable and stable basket',
    },
    {
      icon: shapeImg03,
      desc: 'S shape allows subsequent loops to pack open spaces',
    },
  ]

  return (
    <div className="flex flex-col w-full px-4 py-8 mx-auto gap-7 max-w-7xl md:py-12 md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-2 md:gap-3 text-appear-anim">
        <h2 className="text-[#00568f] text-3xl md:text-4xl lg:text-[48px] font-medium">
          Shape
        </h2>
        <p className="font-regular md:text-xl lg:text-[24px]">
          <strong className="text-[#008f35]">Ω+S</strong> structure is designed
          to achieve
          <strong className="text-[#008f35]">
            {' '}
            uniform distribution and robust neck coverage
          </strong>
        </p>
      </div>

      <div className="relative flex flex-col gap-[40px] sm:gap-[60px] w-[100%]">
        {shapeBoxData.map((data, index) => {
          const EvenValue = index % 2 === 0

          const isMobileView =
            width > 640 ? (EvenValue ? '-scale-x-100' : '') : '-scale-x-100'

          const arrowPositionClass = EvenValue
            ? '-left-[60px] -bottom-[80px] xs:-left-[40px] sm:-left-[55px] md:-left-[85px] lg:-left-[70px] xl:-left-[30px]'
            : `${
                width > 640 ? '-right-[60px]' : '-left-[60px]'
              } -bottom-[85px] xs:-right-[40px] sm:-right-[55px] md:-right-[85px] lg:-right-[70px] xl:-right-[30px]`

          const heightClass =
            'h-[100px] xs:h-[120px] sm:h-[140px] md:h-[170px] lg:h-[200px]'

          const bottomClass =
            'xs:bottom-[-100px] sm:bottom-[-100px] md:bottom-[-120px] lg:bottom-[-140px] xl:bottom-[-140px]'

          return (
            <React.Fragment key={index}>
              <div
                key={index}
                className="flex items-center gap-5 sm:gap-5 gsap-opacity-trans-appear"
              >
                <div className="flex items-center justify-center flex-1">
                  <div className="px-3 py-1 border-[#00568f] rounded-[30px] border-2">
                    <span className="text-sm md:text-base lg:text-[34px] font-medium text-[#00568f]">
                      Step {index + 1}
                    </span>
                  </div>
                </div>
                <div className="relative flex items-center justify-center flex-1">
                  <div className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] sm:w-[100px]  sm:h-[100px] xs:w-[100px]  xs:h-[100px] bg-[#a7d1ee] outline rounded-full outline-2 outline-[#00568f] outline-offset-[10px] flex items-center justify-center">
                    <img
                      src={data.icon}
                      alt={`Shape step ${index + 1}`}
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>
                  {index < shapeBoxData.length - 1 && (
                    <div
                      className={`absolute flex w-auto ${arrowPositionClass} ${heightClass} ${bottomClass}`}
                    >
                      <img
                        src={HalfArrow}
                        className={`w-auto h-auto ${isMobileView}`}
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center flex-1 ">
                  <div className="w-full max-w-[330px]">
                    <p className="text-center font-bold text-sm md:text-lg lg:text-[24px]">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
