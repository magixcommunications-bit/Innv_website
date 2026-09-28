import React from 'react'
import ConnectImg1 from 'assets/cardiac/Connect/Connect3.png'
import ConnectImg2 from 'assets/cardiac/Connect/Connect4.png'
import ConnectImg3 from 'assets/cardiac/Connect/Connect5.png'
import ConnectImg4 from 'assets/cardiac/Connect/Connect6.png'
import ConnectImg5 from 'assets/cardiac/Connect/Connect7.png'
import DotIcon from 'assets/cardiac/Dot.png'
import ConnectLogo from 'assets/cardiac/Connect/ConnectLOGO.png'

const Cardiac_IConnect = () => {
  const YconnectInfo = [
    {
      Img: ConnectImg2,
      desc: ' DPY01B \n Push-Click Type Hemostasis \n Valve, Blue Torque, Guidewire \n Introducer',
    },
    {
      Img: ConnectImg3,
      desc: ' DPY02B \n Push-Click Type Hemostasis \n Valve with fixed bypass \n extension tube, Blue Torque, \n Guidewire Introducer',
    },
  ]

  const YconnectorFeatures = [
    'Unique push-click design',
    'Torque and Introducer Fit 0.014"- 0.021" Guidewire',
    '180 psi leak-proof seal from proprietary valve',
  ]

  const YconnectorBenefits = [
    'Convenient operation, effectively reduce blood loss',
    'Fulfilling PCI procedural needs',
  ]

  const YconnectorTwistFeatures = [
    'Memory hemostatic device',
    'Large inner diameter',
    ' 300 psi leak-proof seal from proprietary valve',
  ]

  const YconnectorTwistBenefits = [
    'Effectively reducing blood loss',
    'Fulfilling PCI procedural needs',
  ]

  const tableData = [
    {
      description: 'Push-Click Y Connector',
      rows: [
        {
          refNo: 'DPY01',
          torqueDevice: 'N',
          guidewireIntroducer: 'N',
          extensionTubing: 'N',
        },
        {
          refNo: 'DPY02',
          torqueDevice: 'N',
          guidewireIntroducer: 'N',
          extensionTubing: 'Y',
        },
      ],
      guidewireSpan: false,
    },
    {
      description: 'Push-Click Y Connector Kit',
      rows: [
        {
          refNo: 'DPY01B',
          torqueDevice: 'Blue Torque',
          guidewireIntroducer: 'Y',
          extensionTubing: 'N',
        },
        {
          refNo: 'DPY02B',
          torqueDevice: 'Blue Torque',
          guidewireIntroducer: '',
          extensionTubing: 'Y',
        },
      ],
      guidewireSpan: true,
    },
  ]

  const tableData2 = [
    {
      description: 'Y Connector (Twist)',
      refNo: 'DRY01',
      torqueDevice: 'N',
      guidewireIntroducer: 'N',
      extensionTubing: 'N',
    },
    {
      description: 'Y Connector Pack (Twist)',
      refNo: 'DRY01B',
      torqueDevice: 'Blue Torque',
      guidewireIntroducer: 'Y',
      extensionTubing: 'N',
    },
    {
      description: 'Y Connector Pack (Twist)',
      refNo: 'DRY02B',
      torqueDevice: 'Blue Torque',
      guidewireIntroducer: 'Y',
      extensionTubing: 'Y',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#ff8b389d] to-yellow-100">
      <div className="relative w-full h-auto px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full">
          <div className="flex sm:flex-row flex-col w-full h-auto mb-6 sm:mb-0  items-center mb:h-[60px] gsap-opacity-trans-appear">
            <div className="w-full sm:w-[20%] h-full justify-center sm:justify-start flex">
              <img src={ConnectLogo} className="h-[60px]" alt="" />
            </div>
            <div className="w-full sm:w-[80%] h-full">
              <h3 className="text-[30px] md:text-[36px] text-center sm:text-right lg:text-[48px] font-medium">
                Y- Connector (Push Click)
              </h3>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto gap-5 sm:flex-row sm:gap-0">
            <div className="w-full md:w-[60%] flex items-center justify-center">
              <div className="relative w-full h-full max-w-[250px] max-h-[250px] sm:max-w-[280px] sm:max-h-[280px] md:max-w-[400px] md:max-h-[400px]">
                <img
                  src={ConnectImg1}
                  className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
                <p className="absolute w-full mt-3 text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                  DPY02
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-[40%]">
              {YconnectInfo.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full "
                  >
                    <div className="w-full h-full max-w-[300px] max-h-[300px] sm:max-h-[330px] sm:max-w-[330px]">
                      <img
                        src={val.Img}
                        className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                        alt=""
                      />
                    </div>
                    <div className="w-full max-w-[400px]">
                      <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 md:flex-row md:gap-0 sm:gap-3">
            <div className="w-full md:w-[50%] gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Features:</h3>
              <ul className="mt-3">
                {YconnectorFeatures.map((val, index) => {
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
            <div className="w-full md:w-[50%] gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Benefits:</h3>
              <ul className="mt-3">
                {YconnectorBenefits.map((val, index) => {
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
          <div className="relative flex flex-col w-full mt-10 gsap-opacity-trans-appear">
            <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
              <p className="text-white text-[24px] font-regular">
                Push-Click Y Connector Kit
              </p>
            </div>
            <div className="w-auto overflow-x-auto mt-[50px] ml-[22px] z-[20]">
              <table className="w-full border-collapse">
                <thead className="font-regular text-center text-[20px]">
                  <tr>
                    <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                      Description
                    </th>
                    <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                      Ref. No.
                    </th>
                    <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                      Torque Device
                    </th>
                    <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                      Guidewire Introducer
                    </th>
                    <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                      Extension Tubing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((section, sectionIndex) =>
                    section.rows.map((row, rowIndex) => (
                      <tr
                        key={`${sectionIndex}-${rowIndex}`}
                        className="font-regular text-[18px] text-center"
                      >
                        {rowIndex === 0 && (
                          <td
                            rowSpan={section.rows.length}
                            className="p-2 border border-gray-500"
                          >
                            {section.description}
                          </td>
                        )}
                        <td className="p-2 border border-gray-500">
                          {row.refNo}
                        </td>
                        <td className="p-2 border border-gray-500">
                          {row.torqueDevice}
                        </td>
                        {section.guidewireSpan ? (
                          rowIndex === 0 ? (
                            <td
                              rowSpan={section.rows.length}
                              className="p-2 border border-gray-500"
                            >
                              {row.guidewireIntroducer}
                            </td>
                          ) : null
                        ) : (
                          <td className="p-2 border border-gray-500">
                            {row.guidewireIntroducer}
                          </td>
                        )}
                        <td className="p-2 border border-gray-500">
                          {row.extensionTubing}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10">
          <div className="flex w-full h-[60px] mb-5 gsap-opacity-trans-appear">
            <h3 className="text-[30px] text-center sm:text-left md:text-[36px] lg:text-[48px] font-medium">
              Y- Connector (Twist)
            </h3>
          </div>
          <div className="relative flex items-center justify-center h-full md:h-[750px] w-full md:flex-row flex-col md:gap-0 gap-5 md:mb-0 mb-10">
            <div className="relative top-0 right-0 md:absolute">
              <div className="w-full relative h-full max-w-[250px] sm:max-w-[280px] md:max-w-[250px] lg:max-w-[350px] gsap-opacity-trans-appear">
                <img
                  src={ConnectImg5}
                  className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
                <p className="relative md:absolute w-full mt-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center">
                  DRY01
                </p>
              </div>
            </div>
            <div className="relative w-full h-full max-w-[300px]  sm:max-w-[350px] sm:max-h-[390px] md:max-w-[500px] md:max-h-[390px] lg:max-w-[600px] lg:max-h-[460px] lg:mr-[80px] xl:m-0 gsap-opacity-trans-appear">
              <img
                src={ConnectImg4}
                className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                alt=""
              />
              <p className="absolute w-full mt-3 text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                DRY01B
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 mt-8 md:flex-row md:gap-5">
          <div className="flex-1 gsap-opacity-trans-appear">
            <h3 className="text-[24px] font-bold">Features:</h3>
            <ul className="mt-3">
              {YconnectorTwistFeatures.map((val, index) => {
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
              {YconnectorTwistBenefits.map((val, index) => {
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
        <div className="relative flex flex-col w-full mt-10 gsap-opacity-trans-appear">
          <div className="absolute top-0 w-auto pr-10 h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
            <p className="text-white text-[24px] font-regular">
              Y Connector Pack (Twist)
            </p>
          </div>
          <div className="w-auto overflow-x-auto mt-[50px] ml-[22px] z-[20]">
            <table className="w-full border-collapse">
              <thead className="font-regular text-center text-[20px]">
                <tr>
                  <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                    Description
                  </th>
                  <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                    Ref. No.
                  </th>
                  <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                    Torque Device
                  </th>
                  <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                    Guidewire Introducer
                  </th>
                  <th className="p-2  border border-gray-500 bg-[#f9dcb3]">
                    Extension Tubing
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData2.map((row, index) => (
                  <tr
                    key={index}
                    className="font-regular text-[18px] text-center"
                  >
                    <td className="p-2 border border-gray-500">
                      {row.description}
                    </td>
                    <td className="p-2 border border-gray-500">{row.refNo}</td>
                    <td className="p-2 border border-gray-500">
                      {row.torqueDevice}
                    </td>
                    <td className="p-2 border border-gray-500">
                      {row.guidewireIntroducer}
                    </td>
                    <td className="p-2 border border-gray-500">
                      {row.extensionTubing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardiac_IConnect
