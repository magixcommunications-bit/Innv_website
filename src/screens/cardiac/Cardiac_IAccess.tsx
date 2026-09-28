import React from 'react'
import AccessImg1 from 'assets/cardiac/Access/Access3.png'
import AccessImg2 from 'assets/cardiac/Access/Access4.png'
import DotIcon from 'assets/cardiac/Dot.png'
import AccessLogo from 'assets/cardiac/Access/AccessLOGO.png'

const Cardiac_IAccess = () => {
  const ControlSyringesFeatures = [
    'Glass-like polycarbonate barrel with enhanced scale markings',
    'Designed for one-hand operation',
    'Plunger with latex-free stop',
  ]

  const ControlSyringesBenefits = ['Easy fluid inspection', 'Smooth movement']

  const HighPressureFeatures = [
    'Pressure rating up to 500 psi',
    'Standard length at 900 mm and 1220 mm',
  ]

  const HighPressureBenefits = [
    'Fulfilling PCI procedural needs',
    'Stable performance',
  ]

  const tableData = [
    {
      refNo: 'DS312',
      volume: '12',
    },
  ]

  const tableData2 = [
    {
      pressure: '500psi',
      items: [
        { refNo: 'DT500090', rotatedMaleLuerLock: 'N', length: '90' },
        { refNo: 'DT500122', rotatedMaleLuerLock: 'N', length: '122' },
        { refNo: 'DT500090R', rotatedMaleLuerLock: 'Y', length: '90' },
        { refNo: 'DT500122R', rotatedMaleLuerLock: 'Y', length: '122' },
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-amber-200 to-white">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex items-center flex-col w-full h-auto mb-6 sm:m-0 md:h-[60px] sm:flex-row gsap-opacity-trans-appear">
          <div className="w-full sm:w-[20%] h-full justify-center sm:justify-start flex">
            <img src={AccessLogo} className="h-[60px]" alt="" />
          </div>
          <div className="w-full sm:w-[80%] h-full">
            <h3 className="text-center sm:text-right text-[30px] md:text-[36px] lg:text-[48px] font-medium">
              Control Syringes
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-full mt-5 md:flex-row">
          <div className="flex flex-1">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full h-full max-w-[280px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px]">
                <img
                  src={AccessImg1}
                  className="object-contain w-full h-full gsap-opacity-trans-appear drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col w-full">
              <div className="flex flex-col gap-6 mt-10 gsap-scale">
                <div className="w-full">
                  <h3 className="text-[24px] font-bold">Features:</h3>
                  <ul className="mt-3">
                    {ControlSyringesFeatures.map((val, index) => {
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
                <div className="w-full">
                  <h3 className="text-[24px] font-bold">Benefits:</h3>
                  <ul className="mt-3">
                    {ControlSyringesBenefits.map((val, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-start mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-regular"
                        >
                          <img
                            src={DotIcon}
                            width={20}
                            height={20}
                            className="inline-block mr-3  mt-[2px] lg:mt-[5px]"
                            alt=""
                          />{' '}
                          {val}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="relative flex w-full mt-10 gsap-opacity-trans-appear">
                <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
                  <p className="text-white text-[24px] font-regular">
                    Control Syringe
                  </p>
                </div>
                <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
                  <table className="w-full border-collapse">
                    <thead className="font-regular text-center text-[20px]">
                      <tr>
                        <th className="p-2 border border-gray-500 bg-[#f9dcb3] ">
                          Ref. No.
                        </th>
                        <th className="p-2 border border-gray-500 bg-[#f9dcb3] ">
                          Volume (ml)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr
                          key={index}
                          className="font-regular text-[18px] text-center"
                        >
                          <td className="p-2 border border-gray-500 ">
                            {row.refNo}
                          </td>
                          <td className="p-2 border border-gray-500 ">
                            {row.volume}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <h3 className="text-[30px] text-center lg:text-right md:text-[36px] lg:text-[48px] font-medium">
            High Pressure line
          </h3>
        </div>
        <div className="flex flex-col w-full mt-8 md:m-0 md:flex-row">
          <div className="flex w-full md:w-[50%]">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full h-full max-w-[300px] md:max-w-[300px] lg:max-w-[400px]">
                <img
                  src={AccessImg2}
                  className="object-contain w-full h-full gsap-opacity-trans-appear drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-[50%]">
            <div className="flex flex-col w-full ">
              <div className="flex flex-col gap-6 mt-10 gsap-scale">
                <div className="w-full">
                  <h3 className="text-[24px] font-bold">Features:</h3>
                  <ul className="mt-3">
                    {HighPressureFeatures.map((val, index) => {
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
                <div className="w-full">
                  <h3 className="text-[24px] font-bold">Benefits:</h3>
                  <ul className="mt-3">
                    {HighPressureBenefits.map((val, index) => {
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
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="mt-10 gsap-opacity-trans-appear">
            <div className="relative flex w-full">
              <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
                <p className="text-white text-[24px] font-regular">
                  Pressure Line
                </p>
              </div>
              <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
                <table className="w-full border-collapse">
                  <thead className="font-regular text-center text-[20px]">
                    <tr>
                      <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                        Pressure
                      </th>
                      <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                        Ref. No.
                      </th>
                      <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                        Rotated Male Luer Lock
                      </th>
                      <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                        Length(cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData2.map((pressureGroup, groupIndex) =>
                      pressureGroup.items.map((item, itemIndex) => (
                        <tr
                          key={`${groupIndex}-${itemIndex}`}
                          className="font-regular text-[18px] text-center"
                        >
                          {itemIndex === 0 && (
                            <td
                              rowSpan={pressureGroup.items.length}
                              className="p-2 align-middle border border-gray-500"
                            >
                              {pressureGroup.pressure}
                            </td>
                          )}
                          <td className="p-2 text-center border border-gray-500">
                            {item.refNo}
                          </td>
                          <td className="p-2 text-center border border-gray-500">
                            {item.rotatedMaleLuerLock}
                          </td>
                          <td className="p-2 text-center border border-gray-500">
                            {item.length}
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
    </div>
  )
}

export default Cardiac_IAccess
