import React from 'react'
import ManImg from 'assets/cardiac/Man/Man2.png'
import DotIcon from 'assets/cardiac/Dot.png'
import ManLogo from 'assets/cardiac/Man/ManLOGO.png'

const Cardiac_IMan = () => {
  const Features = [
    '3-port manifold with pressure rating up to 500 psi',
    'Clear body',
    'Rotating luer for secure connections',
  ]

  const Benefits = [
    'Meet a variety of surgical needs',
    'Easy visibility for de-bubbling',
    'Easy operation',
  ]

  const tableData = [
    {
      description: '3 ways of stop cock',
      items: [
        {
          refNo: 'DM5001 (ON)',
          pressureResistance: '500psi',
          typeOfStopcock: 'ON',
        },
        {
          refNo: 'DM5001(OFF)',
          pressureResistance: '500psi',
          typeOfStopcock: 'OFF',
        },
      ],
    },
    {
      description: '3-port manifold',
      items: [
        {
          refNo: 'DM5003(ON)',
          pressureResistance: '500psi',
          typeOfStopcock: 'ON',
        },
        {
          refNo: 'DM5003(OFF)',
          pressureResistance: '500psi',
          typeOfStopcock: 'OFF',
        },
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-rose-200 to-white">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col-reverse w-full mb:h-[60px] h-auto sm:flex-row-reverse gsap-opacity-trans-appear items-center">
            <div className="w-full sm:w-[80%] h-full">
              <h3 className="text-[30px] md:text-[36px] lg:text-[48px] text-center sm:text-right font-medium">
                Manifolds
              </h3>
            </div>
            <div className="w-full flex justify-center sm:w-[20%] h-full ">
              <img src={ManLogo} className="h-[60px]" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full h-full max-w-[650px]">
              <img
                src={ManImg}
                className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-6 mt-8 md:flex-row md:gap-0">
            <div className="flex-1 gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Features:</h3>
              <ul className="mt-3">
                {Features.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-start mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-regular"
                    >
                      <img
                        src={DotIcon}
                        width={20}
                        height={20}
                        className="inline-block mr-3 mt-[2px] lg:mt-[5px]"
                        alt=""
                      />{' '}
                      {val}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex-1 gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Benefits:</h3>
              <ul className="mt-3">
                {Benefits.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-start mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-regular"
                    >
                      <img
                        src={DotIcon}
                        width={20}
                        height={20}
                        className="inline-block mr-3 mt-[2px] lg:mt-[5px]"
                        alt=""
                      />{' '}
                      {val}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="relative flex w-full gsap-opacity-trans-appear">
            <div className="absolute top-0 w-full max-w-[500px] h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
              <p className="text-white text-[24px] font-regular">Manifolds</p>
            </div>
            <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
              <table className="w-full border-collapse">
                <thead className="font-regular text-center text-[20px]">
                  <tr>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Description
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Ref. No.
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Pressure Resistance
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Type of Stopcock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((group, groupIndex) =>
                    group.items.map((item, itemIndex) => (
                      <tr
                        key={`${groupIndex}-${itemIndex}`}
                        className="font-regular text-[18px] text-center"
                      >
                        {itemIndex === 0 && (
                          <td
                            rowSpan={group.items.length}
                            className="p-2 align-middle border border-gray-500"
                          >
                            {group.description}
                          </td>
                        )}
                        <td className="p-2 border border-gray-500">
                          {item.refNo}
                        </td>
                        <td className="p-2 text-center border border-gray-500">
                          {item.pressureResistance}
                        </td>
                        <td className="p-2 text-center border border-gray-500">
                          {item.typeOfStopcock}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardiac_IMan
