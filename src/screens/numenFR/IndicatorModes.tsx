import React, { useEffect, useState } from 'react'
import './'
import OKIcon from 'assets/numen/OkIcon.png'
import RightIcon from 'assets/numen/RightIcon.png'
import BatteryIcon from 'assets/numen/BatteryIcon.png'
import FrontNumenFr from 'assets/numen/FrontNumenFr.png'

const IndicatorModes = () => {
  const indications = [
    {
      icon: [OKIcon],
      indication: 'SOLID GREEN\n1 SHORT BEEP',
      mode: 'Ready for detachment',
      action: 'Press the Detachment Button',
    },
    {
      icon: [RightIcon],
      indication: 'FLASHING GREEN',
      mode: 'Detachment in progress',
      action: 'Wait for detachment',
    },
    {
      icon: [RightIcon],
      indication: 'SOLID GREEN\n3 SHORT BEEPS/ 1 LONG BEEP',
      mode: 'Detachment cycle complete',
      action:
        'Confirm successful detachment under fluoroscopy. If the coil is not detached, repeat the detachment procedure',
    },
    {
      icon: [OKIcon],
      indication: 'OFF',
      mode: 'Connection error',
      action: 'Pull out NumenFR™ and place it over the delivery wire again',
    },
    {
      icon: [BatteryIcon],
      indication: 'FLASHING YELLOW',
      mode: 'Battery low',
      action: 'Replace the NumenFR™',
      rowSpan: 3,
    },
    {
      icon: [OKIcon, RightIcon, BatteryIcon],
      indication: 'FLASHING YELLOW\nCONTINUOUS SHORT BEEPS',
      mode: 'Battery error',
      action: null,
    },
    {
      icon: [OKIcon, RightIcon],
      indication: 'FLASHING YELLOW\nCONTINUOUS SHORT BEEPS',
      mode: 'System error',
      action: null,
    },
    {
      icon: [OKIcon],
      indication: 'FLASHING YELLOW\nCONTINUOUS SHORT BEEPS',
      mode: 'Short circuit of delivery wire',
      action: 'Replace the Numen™ Coil',
    },
  ]

  const highlightIndication = (text: string) => {
    return text
      .replace(
        /GREEN/g,
        '<span  className="font-bold" style="color: #006838;font-weight: 700;">GREEN</span>',
      )
      .replace(
        /YELLOW/g,
        '<span className="font-bold" style="color: #fa8500;font-weight: 700;">YELLOW</span>',
      )
  }

  return (
    <div className="h-[auto] flex flex-col items-center bg-gradient-to-tr from-amber-50 to-amber-200 justify-center">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex justify-end w-full ">
          <h3 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#006838] mb-2 lg:mb-3 xl:mb-2">
            NumenFR™ Indicator Modes and Suggested Actions
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col items-center w-full xl:max-h-[700px] h-full gap-2">
          <div className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[30%] h-full gsap-slide-from-left">
            <img
              src={FrontNumenFr}
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
          <div
            className={`w-full md:w-full lg:w-[70%] gsap-opacity-trans-appear`}
          >
            <div className="w-full h-full overflow-x-auto">
              <div className="xl:max-w-[836px] overflow-x-auto w-full border-[3px] border-[#62bd69] border-b-0  rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                <table className="w-full text-left border-collapse border-spacing-0">
                  <thead className="bg-[#fff] border-b-[3px] border-[#62bd69]">
                    <tr className="font-regular text-[#62bd69]">
                      <th className="p-2 h-[65px] text-center border-r-[3px] border-[#62bd69] text-[20px] sm:text-[24px] first:rounded-tl-[20px]">
                        INDICATION
                      </th>
                      <th className="p-2 h-[65px] text-center border-r-[3px] border-[#62bd69] text-[20px] sm:text-[24px]">
                        MODE
                      </th>
                      <th className="p-2 h-[65px] text-center border-[#62bd69] text-[20px] sm:text-[24px] last:rounded-tr-[20px]">
                        SUGGESTED ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {indications.map((item, index) => (
                      <tr
                        key={index}
                        className="font-regular  text-[16px] sm:text-[18px]"
                      >
                        <td className="h-[65px] p-2 border-b-[3px] border-[#62bd69]">
                          <div>
                            {item.icon.map((val, ind) => (
                              <img
                                src={val}
                                alt="icon"
                                className={`w-auto object-contain h-[26px] inline-block mr-2 mb-1 ${
                                  val.includes('==') ? '' : 'w-[30px]'
                                }`}
                                key={ind}
                              />
                            ))}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: highlightIndication(item.indication),
                              }}
                            />
                          </div>
                        </td>
                        <td className="h-[65px] p-2 border-b-[3px] border-r-[3px] border-l-[3px] border-[#62bd69]">
                          {item.mode}
                        </td>
                        {item.action !== null && (
                          <td
                            className="p-2 border-[#62bd69]  border-b-[3px] border-l-[3px] w-[350px]"
                            rowSpan={item.rowSpan || 1}
                          >
                            <div>{item.action}</div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndicatorModes
