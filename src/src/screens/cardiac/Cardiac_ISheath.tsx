import React from 'react'
import SheathImg1 from 'assets/cardiac/Sheath/Sheath3.png'
import SheathImg2 from 'assets/cardiac/Sheath/Sheath4.png'
import SheathImg3 from 'assets/cardiac/Sheath/Sheath5.png'
import DotIcon from 'assets/cardiac/Dot.png'
import SheathLogo from 'assets/cardiac/Sheath/SheathLOGO.png'

const Cardiac_ISheath = () => {
  const Features = ['Atraumatic tapered tip', 'Hydrophilic coating']

  const Benefits = [
    'Minimising vascular damage',
    'Reduce injury from instruments entering the vessel',
  ]

  const tableData = [
    {
      refNo: 'DQ05082121T',
      frenchSize: '5F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ05082121S',
      frenchSize: '5F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ05112121T',
      frenchSize: '5F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ05112121S',
      frenchSize: '5F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ06082121T',
      frenchSize: '6F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ06082121S',
      frenchSize: '6F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ06112121T',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ06112121S',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ07082121S',
      frenchSize: '7F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ07082121T',
      frenchSize: '7F',
      sheathLength: '8',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ07112121S',
      frenchSize: '7F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ07112121T',
      frenchSize: '7F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Metal',
      needleGauge: '21G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ05113818T',
      frenchSize: '5F',
      sheathLength: '11',
      guidewireSize: '0.038"',
      needle: 'Metal',
      needleGauge: '18G',
      femoral: true,
      radial: false,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ06113818T',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.038"',
      needle: 'Metal',
      needleGauge: '18G',
      femoral: true,
      radial: false,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ07113818T',
      frenchSize: '7F',
      sheathLength: '11',
      guidewireSize: '0.038"',
      needle: 'Metal',
      needleGauge: '18G',
      femoral: true,
      radial: false,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ08113818T',
      frenchSize: '8F',
      sheathLength: '11',
      guidewireSize: '0.038"',
      needle: 'Metal',
      needleGauge: '18G',
      femoral: true,
      radial: false,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
    {
      refNo: 'DQ06112120S',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Trocar',
      needleGauge: '20G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: false,
      metalGuidewireHydrophobic: true,
    },
    {
      refNo: 'DQ06112120T',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.021"',
      needle: 'Trocar',
      needleGauge: '20G',
      femoral: false,
      radial: true,
      hydrophilicCoating: true,
      metalGuidewire: true,
      metalGuidewireHydrophobic: false,
    },
  ]

  const CheckMark = () => (
    <div className="flex justify-center">
      <span>√</span>
    </div>
  )

  const Features2 = [
    'Smooth transition between dilator and the sheath',
    'Polymer guidewire with hydrophilic coating and IV catheter',
  ]

  const Benefits2 = [
    'Minimising vascular damage',
    'Reduce injury from instruments entering the vessel',
    'Better experience for doctors and patients',
  ]

  const tableData2 = [
    {
      refNo: 'DXQ05082520',
      frenchSize: '5F',
      sheathLength: '8',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ05112520',
      frenchSize: '5F',
      sheathLength: '11',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ06082520',
      frenchSize: '6F',
      sheathLength: '8',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ06112520',
      frenchSize: '6F',
      sheathLength: '11',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ07082520',
      frenchSize: '7F',
      sheathLength: '8',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ07112520',
      frenchSize: '7F',
      sheathLength: '11',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ08082520',
      frenchSize: '8F',
      sheathLength: '8',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
    {
      refNo: 'DXQ08112520',
      frenchSize: '8F',
      sheathLength: '11',
      guidewireSize: '0.025"',
      needle: 'Trocar',
      needleGauge: '20G',
      radial: true,
      hydrophilicCoating: true,
      polymerGuidewire: true,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-purple-200 to-rose-50">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full gap-10">
          <div className="flex sm:flex-row-reverse items-center w-full h-auto flex-col-reverse gsap-opacity-trans-appear mb:h-[60px]">
            <div className="w-full sm:w-[80%] h-full">
              <h3 className="text-[30px] md:text-[36px] text-center sm:text-right lg:text-[48px] font-medium">
                Introducer Sheath Kits
              </h3>
            </div>
            <div className="w-full flex justify-center sm:justify-start sm:w-[20%] h-full ">
              <img src={SheathLogo} className="h-[60px]" alt="" />
            </div>
          </div>
          <div className="flex w-full h-full">
            <div className="flex flex-col flex-1 gsap-opacity-trans-appear">
              <div className="flex justify-center">
                <div className="w-full h-full max-w-[500px]">
                  <img
                    src={SheathImg1}
                    className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex mt-4 mb:m-0">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                  Radial Introducer
                  <br />
                  Sheath
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1 gsap-opacity-trans-appear">
              <div className="flex">
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                  Femoral Introducer
                  <br />
                  Sheath
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full h-full max-w-[500px]">
                  <img
                    src={SheathImg2}
                    className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-6 md:flex-row">
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
                      Ref.No.
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      French Size
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Sheath Length (cm)
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Guidewire size
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Needle
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Needle Gauge
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Femoral
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Radial
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Hydrophilic Coating
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Metal Guidewire
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Metal Guidewire with Hydrophobic coating
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
                        {row.refNo}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.frenchSize}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.sheathLength}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.guidewireSize}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.needle}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.needleGauge}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.femoral && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.radial && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.hydrophilicCoating && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.metalGuidewire && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.metalGuidewireHydrophobic && <CheckMark />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-10 mt-10">
          <div className="flex w-full h-auto gsap-opacity-trans-appear">
            <h3 className="text-[30px] md:text-[36px] lg:text-[48px] font-mediums">
              Introducer Sheath Kits (Hydrophilic)
            </h3>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full h-full max-w-[750px]">
              <img
                src={SheathImg3}
                className="object-contain w-full h-full gsap-scale drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-6 md:flex-row">
            <div className="flex-1 gsap-opacity-trans-appear">
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
            <div className="flex-1 gsap-opacity-trans-appear">
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
          <div className="relative flex w-full gsap-opacity-trans-appear">
            <div className="absolute top-0 w-full max-w-[500px] h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
              <p className="text-white text-[24px] font-regular">
                Introducer Sheath Kits (Hydrophilic)
              </p>
            </div>
            <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
              <table className="w-full border-collapse">
                <thead className="font-regular text-center text-[20px]">
                  <tr>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Ref. No.
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      French Size
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Sheath Length(cm)
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Guidewire size
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Needle
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Needle Gauge
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Radial
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Hydrophilic Coating
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Polymer Guidewire
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
                        {row.refNo}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.frenchSize}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.sheathLength}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.guidewireSize}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.needle}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.needleGauge}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.radial && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.hydrophilicCoating && <CheckMark />}
                      </td>
                      <td className="p-2 border border-gray-500">
                        {row.polymerGuidewire && <CheckMark />}
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

export default Cardiac_ISheath
