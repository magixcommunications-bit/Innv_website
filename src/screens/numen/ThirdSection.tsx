import React, { useEffect, useState } from 'react'
import mainImg from 'assets/numen/Coil with DW.png'
import coil1 from 'assets/numen/Asset 15.png'
import coil2 from 'assets/numen/Asset 11.png'
import coil3 from 'assets/numen/Asset 12.png'
import coil4 from 'assets/numen/Asset 13.png'
import coil5 from 'assets/numen/NumenFR.png'
import coil6 from 'assets/numen/Asset 14.png'
import coil7 from 'assets/numen/Asset 16.png'

const ThirdSection = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative flex flex-col items-center h-[auto] bg-gradient-to-b from-[#272e38] via-[#86c746] to-[#272e38] gap-10 pb-10 ">
      <div className="flex flex-col w-full px-4 py-8 mx-auto text-white max-w-7xl md:py-12 ">
        <div className="flex w-full">
          <h3 className="font-medium text-3xl md:text-4xl lg:text-[48px] text-[#ffeb3d] mb-5 mr-7">
            Coil Design
          </h3>
        </div>
        {width < 1024 ? (
          <div className="gsap-scale">
            <img
              className="object-contain w-full h-full"
              src={mainImg}
              alt=""
            />
          </div>
        ) : (
          ''
        )}
        <div
          className={`flex w-[100%] ${
            width >= 1440 && width <= 1600
              ? 'h-[217px]'
              : 'h-[310px] flex-col sm:flex-row'
          }`}
        >
          {width >= 1024 && width < 1440 ? (
            <>
              <div className="flex flex-1">
                <div className="gsap-scale">
                  <img
                    className="object-contain w-full h-full"
                    src={mainImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center flex-1">
                <div className="flex-1 gsap-opacity-trans-appear">
                  <h4 className="text-[28px] md:text-4xl lg:text-[40px] text-[#ffeb3d] font-medium  border-b-2  border-white">
                    Variety
                  </h4>
                  <p className="font-regular md:text-xl lg:text-[20px]">
                    Numen™ coil offers{' '}
                    <strong className="text-[#ffeb3d] ">8</strong> grades of
                    softness by combining{' '}
                    <strong className="text-[#ffeb3d] ">7</strong> filament wire
                    diameters with{' '}
                    <strong className="text-[#ffeb3d] ">4</strong> coil primary
                    diameters. Softness design is based on the theory of coil
                    stiffness (k-factor theoretically represents for coil
                    softness).
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-none sm:flex-none md:flex-none lg:flex-1"></div>
              <div
                className={`flex ${
                  width >= 1440 && width <= 1600
                    ? 'items-start'
                    : 'items-center'
                } flex-1`}
              >
                <div className="flex-1 gsap-opacity-trans-appear">
                  <h4 className="text-[28px] md:text-4xl lg:text-[40px] text-[#ffeb3d] font-medium  border-b-2  border-white">
                    Variety
                  </h4>
                  <p className="font-regular md:text-xl lg:text-[20px]">
                    Numen™ coil offers{' '}
                    <strong className="text-[#ffeb3d] ">8</strong> grades of
                    softness by combining{' '}
                    <strong className="text-[#ffeb3d] ">7</strong> filament wire
                    diameters with{' '}
                    <strong className="text-[#ffeb3d] ">4</strong> coil primary
                    diameters. Softness design is based on the theory of coil
                    stiffness (k-factor theoretically represents for coil
                    softness).
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-end flex-1">
                <div className="flex sm:flex md:flex lg:hidden  p-4 text-[#001a08] gsap-opacity-trans-appear w-[auto]">
                  <div className="flex items-center text-2xl font-bold">
                    <span className="text-[22px] sm:text-[24px]">K ∝</span>
                    <div className="flex flex-col items-center ml-2">
                      <span className="pb-1 border-b border-[#001a08] text-[22px] sm:text-[24px]">
                        (Filament Wire Diameter)<sup>4</sup>
                      </span>
                      <span className="text-sm">
                        (Number of turns per unit length) × (Primary Coil
                        Diameter)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={`flex w-[100%] ${
            width >= 1440 && width <= 1600
              ? 'h-[353px]'
              : 'md:h-auto lg:h-[400px]'
          } mt-[20px] flex-col-reverse sm:flex-row`}
        >
          <div className="hidden sm:hidden md:hidden lg:flex flex-col items-center justify-center w-[45%] gap-4 gsap-opacity-trans-appear">
            <div className="w-[200px] h-[200px] rounded-[100%]  border-[8px] border-[#006838] gsap-scale bg-white ">
              <img
                src={coil1}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[18px] md:text-xl font-bold">
                  Primary Coil Diameter
                </p>
                <span className="font-regular">Range: 0.010"-0.014"</span>
              </div>
              <div>
                <p className="text-[18px] md:text-xl font-bold">
                  Filament Wire Diameter
                </p>
                <span className="font-regular">Range: 0.00125"-0.00350"</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:w-full lg:w-[60%]">
            <div className="hidden sm:hidden md:hidden lg:flex p-4 text-[#001a08] gsap-opacity-trans-appear w-[auto]">
              <div className="flex items-center text-2xl font-bold">
                <span>K ∝</span>
                <div className="flex flex-col items-center ml-2">
                  <span className="pb-1 border-b border-[#001a08] ">
                    (Filament Wire Diameter)<sup>4</sup>
                  </span>
                  <span className="text-sm">
                    (Number of turns per unit length) × (Primary Coil Diameter)
                  </span>
                </div>
              </div>
            </div>
            <div className="gsap-opacity-trans-appear">
              <h4 className="text-[28px] md:text-4xl lg:text-[40px] md:text-left lg:text-right text-[#ffeb3d] font-medium  border-b-2  border-white">
                Stability
              </h4>
              <p className="font-regular md:text-xl md:text-left lg:text-right lg:text-[20px]">
                Junction zone between coil and delivery wire greatly effects the
                microcatheter stability during the coiling procedure Numen™ coil
                has very <strong>short junction zone</strong> which provides
                stable filing and safe finishing with less kickback
              </p>
            </div>
          </div>
          <div className="flex md:w-full lg:w-[30%] md:items-center md:justify-center justify-center items-center lg:items-end gsap-opacity-trans-appear">
            <div className="w-[200px] h-[200px] rounded-[100%] m-0 sm:ml-10  border-[8px] border-[#006838] gsap-scale bg-white ">
              <img
                src={coil2}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex w-[100%] mt-10 md:h-[650px] lg:h-auto">
          <div className="flex flex-col sm:w-full md:w-[35%] gap-4">
            <div className="flex flex-col gap-4 sm:justify-around sm:flex-row">
              <div className="flex flex-col items-center gap-3 gsap-opacity-trans-appear">
                <div className="w-[210px] h-[210px] rounded-[100%]  relative border-[8px] border-[#006838] gsap-scale bg-white ">
                  <img
                    src={coil3}
                    className="object-contain w-full h-full "
                    alt=""
                  />
                  <span className="absolute font-medium text-[#1e6936] bottom-[15px] left-[45px]">
                    Single suture
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-regular text-[18px]">
                    MicroFill 1 mm - 3.5 mm
                  </span>
                  <span className="font-regular text-[18px]">
                    MicroFill 1 mm - 8 mm
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 gsap-opacity-trans-appear">
                <div className="w-[210px] h-[210px] rounded-[100%] relative  border-[8px] border-[#006838] gsap-scale bg-white ">
                  <img
                    src={coil4}
                    className="object-contain w-full h-full"
                    alt=""
                  />
                  <span className="absolute font-medium text-[#1e6936] bottom-[15px] left-[45px]">
                    Double sutures
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-regular text-[17px]">
                    MicroFill 4 mm - 20 mm
                  </span>
                  <span className="font-regular text-[17px]">
                    MicroFill 4 mm - 24 mm
                  </span>
                </div>
              </div>
            </div>
            <div className="gsap-opacity-trans-appear">
              <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] font-medium  border-b-2  border-white">
                Balance
              </h4>
              <p className="font-regular md:text-xl lg:text-[20px]">
                Two types of stretch resistance design to ensure the balance
                between robust tensile strength and excellent softness.
              </p>
            </div>
          </div>
          <div className="w-0 sm:w-0 md:w-[30%] flex flex-col justify-end items-center gsap-opacity-trans-appear">
            <div className="hidden sm:hidden md:hidden lg:block w-[200px] h-[200px] rounded-[100%] border-[8px] border-[#006838] gsap-scale bg-white ">
              <img
                src={coil6}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
            <div className="flex-col items-center justify-center hidden w-full gap-4 sm:hidden md:flex lg:hidden gsap-opacity-trans-appear">
              <div className="w-[200px] h-[200px] rounded-[100%]  border-[8px] border-[#006838] gsap-scale bg-white ">
                <img
                  src={coil1}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[18px] md:text-xl font-bold">
                    Primary Coil Diameter
                  </p>
                  <span className="font-regular">Range: 0.010"-0.014"</span>
                </div>
                <div>
                  <p className="text-[18px] md:text-xl font-bold">
                    Filament Wire Diameter
                  </p>
                  <span className="font-regular">Range: 0.00125"-0.00350"</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:hidden md:flex flex-col md:justify-start lg:justify-between w-[35%] gsap-opacity-trans-appear">
            <div className="w-[100%] flex justify-end mt-[20px] gsap-scale">
              <img
                src={coil5}
                className="object-contain w-[300px] h-[250px]"
                alt=""
              />
            </div>
            <div className="md:mt-[28px] lg:m-0">
              <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] text-right font-medium  border-b-2  border-white">
                Reliability
              </h4>
              <p className="font-regular md:text-xl lg:text-[20px] text-right">
                <span className="font-bold">NumenFR™ detachment system </span>
                Reliable, fast and simplified electrolytic detachment with
                real-time feedback and ergonomic handle.
              </p>
            </div>
          </div>
        </div>
        {width >= 300 && width <= 768 ? (
          <div className="flex w-full sm:gap-[20px] flex-col sm:flex-row mt-5">
            <div className="flex flex-col flex-1 sm:justify-end sm:items-center">
              <div className="flex justify-center w-full sm:justify-start">
                <div className="md:block lg:hidden w-[200px] h-[200px] rounded-[100%] border-[8px] border-[#006838] gsap-scale bg-white ">
                  <img
                    src={coil6}
                    className="object-contain w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] md:text-right lg:text-center font-medium  border-b-2  border-white">
                  Convenience
                </h4>
                <p className="font-regular md:text-xl lg:text-[20px] md:text-right lg:text-center">
                  The raised fluoro-saver marker provides tactile feedback,
                  designed to reduce radiation exposure time for patients and
                  physicians.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="w-[100%] flex justify-center sm:justify-end mt-[20px] gsap-scale">
                <img
                  src={coil5}
                  className="object-contain w-[300px] h-[250px]"
                  alt=""
                />
              </div>
              <div className="md:mt-[28px] lg:m-0">
                <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] text-left sm:text-right font-medium  border-b-2  border-white">
                  Reliability
                </h4>
                <p className="font-regular md:text-xl lg:text-[20px] text-left sm:text-right">
                  <span className="font-bold">NumenFR™ detachment system </span>
                  Reliable, fast and simplified electrolytic detachment with
                  real-time feedback and ergonomic handle.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="flex flex-col sm:flex-row w-[100%] mt-7 md:mt-6 lg:m-0">
          <div className="flex lg:w-[35%] md:w-full sm:w-[50%] w-full md:items-start md:justify-center sm:items-center sm:justify-center justify-center items-center">
            <div className="hidden sm:hidden md:block lg:hidden w-[200px] h-[200px] rounded-[100%] border-[8px] border-[#006838] gsap-scale bg-white ">
              <img
                src={coil6}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
            <div className="md:hidden sm:block w-[200px] h-[200px] rounded-[100%]  border-[8px] border-[#006838] gsap-scale bg-white ">
              <img
                src={coil1}
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex lg:w-[30%] md:w-full sm:w-[50%] sm:items-center sm:justify-center w-full justify-center items-center gsap-opacity-trans-appear">
            <div className="hidden md:block">
              <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] md:text-right lg:text-center font-medium  border-b-2  border-white">
                Convenience
              </h4>
              <p className="font-regular md:text-xl lg:text-[20px] md:text-right lg:text-center">
                The raised fluoro-saver marker provides tactile feedback,
                designed to reduce radiation exposure time for patients and
                physicians.
              </p>
            </div>
            <div className="flex-col gap-4 mt-6 sm:flex md:hidden">
              <div>
                <p className="text-[18px] md:text-xl font-bold">
                  Primary Coil Diameter
                </p>
                <span className="font-regular">Range: 0.010"-0.014"</span>
              </div>
              <div>
                <p className="text-[18px] md:text-xl font-bold">
                  Filament Wire Diameter
                </p>
                <span className="font-regular">Range: 0.00125"-0.00350"</span>
              </div>
            </div>
          </div>
          <div className="flex md:w-0 lg:w-[35%] justify-end items-end"></div>
        </div>
        <div className="flex w-[100%] flex-col sm:flex-row gap-[20px] sm:gap-5 md:gap-[70px] mt-6">
          <div className="w-full sm:w-[50%] flex flex-col md:justify-start lg:justify-center gsap-opacity-trans-appear">
            <h4 className="mb-4 text-[28px] md:text-4xl lg:text-[40px]  text-[#ffeb3d] text-left font-medium  border-b-2  border-white">
              Smoothness
            </h4>
            <p className="font-regular md:text-xl lg:text-[20px] text-left">
              Numen™ delivery wire promises stable and smooth coil delivery with
              hyper-coil design which balances between pushability and
              trackability.
            </p>
          </div>
          <div className="w-full sm:w-[50%] gsap-opacity-trans-appear">
            <div className="flex flex-col gap-2">
              <h4 className="text-[28px] md:text-[30px] text-[#ffeb3d] text-right font-medium  ">
                Results On Pushability
              </h4>
              <p className="text-right font-regular text-[16px]">
                <sup>*</sup>Data on file.
              </p>
            </div>
            <img src={coil7} className="object-contain" alt="" />
            <p className="text-base md:text-[20px] mt-2 font-regular">
              3 levels of gradual softness throughout the delivery wire ensure
              balanced performance between pushability and trackability.
            </p>
          </div>
        </div>
      </div>
      {width >= 1440 ? (
        <div className="absolute mt-[80px]  gsap-scale">
          <img className="w-full h-full " src={mainImg} alt="" />
        </div>
      ) : (
        ''
      )}
      {/* <div className="absolute mt-[80px] gsap-scale">
        <img className="w-full h-full " src={mainImg} alt="" />
      </div> */}
    </div>
  )
}

export default ThirdSection
