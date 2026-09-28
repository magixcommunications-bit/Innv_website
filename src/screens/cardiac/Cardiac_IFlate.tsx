import React from 'react'
import FlateImg1 from 'assets/cardiac/Flate/Flate2.png'
import FlateImg2 from 'assets/cardiac/Flate/Flate3.png'
import DotIcon from 'assets/cardiac/Dot.png'
import FlateLogo from 'assets/cardiac/Flate/FlateLOGO.png'

const Cardiac_IFlate = () => {
  const Features1 = [
    'Ergonomic design',
    'Selok® patent technology',
    'Precise pressure gauges',
    'Maximum pressure of 30 atm',
    '20 ml clear syringe barrel with smooth moving plunger',
  ]

  const Benefits1 = [
    'Suitable for left and right hand, easy to operate, reduce fatigue',
    'The pressure is stable and does not fall back at high pressure',
    'Fast release key design, easy pressure relief',
    'The accuracy is higher than that of similar domestic products',
  ]

  const Features2 = [
    '30 ml clear syringe barrel with smooth moving plunger',
    'The manometer is adjustable 45° left and right',
    'Night light dial',
  ]

  const Benefits2 = [
    'The performance of the second generation is fully upgraded compared with that of the first generation',
    'Visible in low light',
    'Broader clinical usage',
  ]

  const tableData = [
    {
      description: 'Balloon In- Deflation Device',
      refNo: 'DID30S(OFF)',
      nominalMaxPressure: '30',
      capacity: '20',
      threeWayStopcock: 'Y',
    },
    {
      description: 'Plus- Balloon In-Deflation Device',
      refNo: 'DPD30/OFF',
      nominalMaxPressure: '30',
      capacity: '30',
      threeWayStopcock: 'Y',
    },
  ]

  const tableData2 = [
    {
      refNo: 'DAS001',
      packContent:
        'Y Connector Pack(Twist Type), Guidewire Introducer, Blue Torque, Balloon In-Deflation Device, 3-Way Stopcock(OFF)',
    },
    {
      refNo: 'DAS007',
      packContent:
        'Push-Click Y Connector Kit, Bypass without Extension Tube, Guidewire Introducer, Blue Torque, In-Deflation Device, 3-Way Stopcock(OFF)',
    },
    {
      refNo: 'DAS013',
      packContent:
        'Push-Click Y Connector Kit, Bypass with Fixed Extension Tube, Guidewire Introducer, Blue Torque, In-Deflation Device',
    },
    {
      refNo: 'DAS020',
      packContent:
        'Push-Click Y Connector Kit, Guidewire Introducer, Blue Torque, In-Deflation Device, 3-Way Stopcock (OFF)',
    },
  ]

  return (
    <div className="bg-gradient-to-t from-fuchsia-50 to-indigo-200">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full h-auto items-center mb:h-[60px] mb-6 gsap-opacity-trans-appear sm:flex-row sm:mb-0">
          <div className="w-full sm:w-[20%] h-full flex justify-center sm:justify-start">
            <img src={FlateLogo} className="h-[60px]" alt="" />
          </div>
          <div className="w-full sm:w-[80%] h-full">
            <h3 className="text-center sm:text-right text-[30px] md:text-[36px] lg:text-[48px] font-medium">
              Balloon In-Deflation Device
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full h-full  max-w-[300px] md:max-w-[300px] lg:max-w-[400px] mb-10 md:mb-[60px] lg:mb-[30px] xl:mb-0">
                <img
                  src={FlateImg1}
                  className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-0 font-regular text-base sm:text-[18px]">
                <p> DPD30/0FF</p>
                <p>30 atm, 30 ml volume,</p>
                <p>with 3-Way stopcock (OFF)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around flex-1 gap-10">
            <div className="flex flex-col w-full">
              <div className="flex flex-col gap-6 mt-10 gsap-opacity-trans-appear">
                <div className="w-full">
                  <h3 className="text-[24px] font-bold">Features:</h3>
                  <ul className="mt-3">
                    {Features1.map((val, index) => {
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
                    {Benefits1.map((val, index) => {
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
        <div className="w-full mt-5">
          <h3 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium text-center xl:text-right">
            Balloon In-Deflation Device II
          </h3>
        </div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-1">
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full h-full max-w-[300px] md:max-w-[300px] lg:max-w-[400px] mb-10 lg:mb-[30px] xl:mb-0">
                <img
                  src={FlateImg1}
                  className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-0 font-regular text-base sm:text-[18px]">
                <p>D1D30S (OFF)</p>
                <p>30 atm, 20 ml volume,</p>
                <p>with 3-Way stopcock (OFF)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full gsap-opacity-trans-appear">
            <div className="flex flex-col gap-6 mt-10 ">
              <div className="w-full">
                <h3 className="text-[24px] font-bold">Features:</h3>
                <ul className="mt-3">
                  {Features2.map((val, index) => {
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
                  {Benefits2.map((val, index) => {
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
        <div className="relative flex w-full mt-10 gsap-opacity-trans-appear">
          <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
            <p className="text-white text-[24px] font-regular">
              Ballon In-Deflation Device
            </p>
          </div>
          <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
            <table className="w-full border-collapse">
              <thead className="font-regular text-[20px] text-center">
                <tr>
                  <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                    Description
                  </th>
                  <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                    Ref. No.
                  </th>
                  <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                    Nominal Max Pressure (atm)
                  </th>
                  <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                    Capacity (ml)
                  </th>
                  <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                    3-Way Stopcock
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="font-regular text-[18px] text-center"
                  >
                    <td className="p-2 border border-gray-500">
                      {row.description}
                    </td>
                    <td className="p-2 border border-gray-500">{row.refNo}</td>
                    <td className="p-2 border border-gray-500">
                      {row.nominalMaxPressure}
                    </td>
                    <td className="p-2 border border-gray-500">
                      {row.capacity}
                    </td>
                    <td className="p-2 border border-gray-500">
                      {row.threeWayStopcock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <div className="flex w-full h-auto gsap-opacity-trans-appear">
            <h3 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium">
              Interventional Device Set
            </h3>
          </div>
          <div className="flex items-center justify-center w-full mt-3">
            <div className="w-full h-full max-w-[450px] md:max-w-[650px]">
              <img
                src={FlateImg2}
                className="gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                alt=""
              />
            </div>
          </div>
          <div className="relative flex w-full mt-10 gsap-opacity-trans-appear">
            <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
              <p className="text-white text-[24px] font-regular">
                Interventional Device Set
              </p>
            </div>
            <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
              <table className="w-full border-collapse">
                <thead className="font-regular text-[20px] text-center">
                  <tr>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3] h-[70px] min-h-[70px] w-1/5">
                      Ref. No.
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3] h-[70px] min-h-[70px] w-4/5">
                      Pack Content
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData2.map((row, index) => (
                    <tr
                      key={index}
                      className="font-regular text-[18px] text-center"
                    >
                      <td className="p-2 border border-gray-500 h-[70px] min-h-[70px]">
                        {row.refNo}
                      </td>
                      <td className="p-2 border border-gray-500 h-[70px] min-h-[70px]">
                        {row.packContent}
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
  )
}

export default Cardiac_IFlate
