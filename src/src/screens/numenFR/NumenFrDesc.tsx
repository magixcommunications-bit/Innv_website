import React from 'react'
import DotIcon from 'assets/numen/DotIcon.png'
import NumenFrImg from 'assets/numen/NumenFRImg.png'

const NumenFrDesc = () => {
  return (
    <div className="h-[auto] flex flex-col items-center bg-gradient-to-tr from-lime-100 to-cyan-200 justify-center">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex w-full">
          <div className="w-full h-full sm:w-full sm:h-[100%] md:w-full md:h-[560px] lg:w-[100%] lg:h-[560px] gsap-scale">
            <img
              src={NumenFrImg}
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col-reverse w-full gsap-opacity-trans-appear mt-[10px]">
          <div className="flex-1">
            <ul className="flex flex-col gap-2">
              <li className="flex items-baseline text-[18px] sm:text-[20px] mb-[10px] mt-[10px] font-regular">
                <img
                  src={DotIcon}
                  className="inline-block object-contain mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <div>
                  <strong className=" text-[#006838] text-[28px] sm:text-[30px]">
                    {' '}
                    Place
                  </strong>{' '}
                  NumenFR™ Detachment System over Numen™ coil's proximal end of
                  delivery wire, until the{' '}
                  <span className="rounded-[50px] inline-block font-regular px-3 py-1 text-white bg-[#0057ec]">
                    System Ready Indicator
                  </span>{' '}
                  illuminates green and one short beep sounds.
                </div>
              </li>
              <li className="flex items-baseline text-[18px] sm:text-[20px] mb-[10px] mt-[10px] font-regular">
                <img
                  src={DotIcon}
                  className="inline-block object-contain mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <div>
                  <strong className=" text-[#006838] text-[28px] sm:text-[30px]">
                    {' '}
                    Press
                  </strong>{' '}
                  the{' '}
                  <span className="rounded-[50px] inline-block font-regular px-3 py-1 text-white bg-[#fa8500]">
                    Detachment Button
                  </span>{' '}
                  to activate the detachment
                </div>
              </li>
              <li className="flex items-baseline text-[18px] sm:text-[20px] mb-[10px] mt-[10px] font-regular">
                <img
                  src={DotIcon}
                  className="inline-block object-contain mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <div>
                  <strong className=" text-[#006838] text-[28px] sm:text-[30px]">
                    {' '}
                    Observe
                  </strong>{' '}
                  the{' '}
                  <span className="rounded-[50px] inline-block font-regular px-3 py-1 text-white bg-[#009ba3]">
                    Status Indicator
                  </span>
                  <span className="text-[#009200]">
                    {' '}
                    - a flashing green light indicates detachment in process
                  </span>{' '}
                  - for 5-10 seconds until it illuminates solid green light with
                  3 short beeps or 1 long beep sound.
                </div>
              </li>
              <li className="flex items-baseline text-[18px] sm:text-[20px] mb-[10px] mt-[10px] font-regular">
                <img
                  src={DotIcon}
                  className="inline-block object-contain mr-2"
                  width={20}
                  height={20}
                  alt=""
                />
                <div>
                  <strong className=" text-[#006838] text-[28px] sm:text-[30px]">
                    {' '}
                    Confirm
                  </strong>{' '}
                  successful detachment under fluoroscopy and pull out NumenFR™
                  Detachment System.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#006838] mb-[10px]">
              Simple, Reliable and Fast Electrolytic Detachment with Real-time
              Feedback
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumenFrDesc
