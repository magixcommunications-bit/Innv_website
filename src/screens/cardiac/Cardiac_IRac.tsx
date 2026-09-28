import React from 'react'
import RacImg1 from 'assets/cardiac/Rac/Rac2.png'
import RacImg2 from 'assets/cardiac/Rac/Rac3.png'
import RacImg3 from 'assets/cardiac/Rac/Rac4.png'
import DotIcon from 'assets/cardiac/Dot.png'
import RacLogo from 'assets/cardiac/Rac/RacLOGO.png'

const Cardiac_IRac = () => {
  const RadialFlatFeatures = [
    'Transparent Pad',
    'Spherical design',
    'Elastic Pressure belt',
    'Supporting pad has no contact with wrist',
  ]

  const RadialFlatBenefits = [
    'Easy to locate and observe',
    'Effective hemostasis',
    'Provides high comfort',
    'Avoiding putting pressure on ulnar artery',
  ]

  const RadialRotaryFeatures = [
    {
      boldText: 'Efficient',
      desc: 'Single-large deck observation window, which provides a more efficient view of the puncture site.',
    },
    {
      boldText: 'Comfort',
      desc: 'Ergonomic design and premium Velcro',
    },
    {
      boldText: 'Easy Operation',
      desc: 'Well-educated market(watch wearing method)',
    },
    {
      boldText: 'Safety',
      desc: 'Zero pressure on the ulnar side, safety buttons, and yellow stitches on the band as an alert.',
    },
  ]

  const tableData = [
    {
      refNo: 'DHD0914',
      Description: 'Radial Artery Compression Tourniquet',
      lengthOfPlate: '90',
      lengthOfBand: '140',
    },
    {
      refNo: 'DHD0916',
      Description: 'Radial Artery Compression Tourniquet',
      lengthOfPlate: '90',
      lengthOfBand: '160',
    },
  ]

  const tableData2 = [
    {
      perspectives: 'Material of Band',
      demax: 'Velcro & Nylon',
    },
    {
      perspectives: 'Design of Window',
      demax: 'Single Deck',
    },
    {
      perspectives: 'Safety Gear',
      demax: 'Large',
    },
    {
      perspectives: 'Compression on Ulnar Artery',
      demax: 'No',
    },
  ]

  const tableData3 = [
    {
      no: '1',
      model: 'DRD17',
      spec: '170 mm',
    },
    {
      no: '2',
      model: 'DRD19',
      spec: '190 mm',
    },
    {
      no: '3',
      model: 'DRD21',
      spec: '210 mm',
    },
  ]

  return (
    <div className="bg-gradient-to-t from-teal-100 to-sky-200">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full gap-10">
          <div className="flex sm:flex-row-reverse flex-col-reverse w-full h-auto mb-6 sm:mb-0  items-center mb:h-[60px] gsap-opacity-trans-appear">
            <div className="w-[85%] h-full">
              <h3 className="text-center sm:text-right text-[30px] md:text-[36px] lg:text-[48px] font-medium">
                Radial Artery Compression Tourniquets (Flat)
              </h3>
            </div>
            <div className="w-full sm:w-[15%] h-full justify-center sm:justify-start flex">
              <img src={RacLogo} className="h-[60px]" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full h-full max-w-[650px]">
              <img
                src={RacImg1}
                className="object-contain w-full h-full gsap-opacity-trans-appear drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-6 mt-8 md:flex-row md:gap-0">
            <div className="flex-1 gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Features:</h3>
              <ul className="mt-3">
                {RadialFlatFeatures.map((val, index) => {
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
                {RadialFlatBenefits.map((val, index) => {
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
                Radial Artery Compression Tourniquets
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
                      Description
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Length of Plate(mm)
                    </th>
                    <th className="p-2 border border-gray-500 bg-[#f9dcb3]">
                      Length of Band(mm)
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
                        {row.Description}
                      </td>
                      <td className="p-2 border border-gray-500 ">
                        {row.lengthOfPlate}
                      </td>
                      <td className="p-2 border border-gray-500 h-[70px] min-h-[70px]">
                        {row.lengthOfBand}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="flex w-full h-auto gsap-opacity-trans-appear">
              <h3 className="text-[30px] md:text-[36px] lg:text-[48px] font-medium">
                Radial Artery Compression Tourniquets (Rotary)
              </h3>
            </div>
            <div className="relative flex items-center justify-center flex-col md:gap-0 gap-5 md:flex-row h-full md:h-[650px] lg:h-[650px] w-full gsap-scale mt-5">
              <div className="relative top-0 right-0 md:absolute">
                <div className="w-full relative h-full max-w-[300px] sm:max-w-[350px] md:max-w-[250px] lg:max-w-[350px] ">
                  <img
                    src={RacImg2}
                    className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                    alt=""
                  />
                </div>
              </div>
              <div className=" w-full h-full max-w-[300px] max-h-[400px] sm:max-w-[360px] sm:max-h-[400px] md:max-w-[500px] md:max-h-[400px] lg:max-w-[600px] md:mr-[80px] lg:max-h-[460px] lg:mr-[160px] xl:m-0">
                <img
                  src={RacImg3}
                  className="object-contain w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full gsap-opacity-trans-appear">
              <h3 className="text-[24px] font-bold">Features:</h3>
              <ul className="mt-3">
                {RadialRotaryFeatures.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-start mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-regular"
                    >
                      <img
                        src={DotIcon}
                        width={20}
                        height={20}
                        className="inline-block mt-[2px] mr-3 lg:mt-[5px]"
                        alt=""
                      />{' '}
                      <p>
                        <strong className="inline-block pr-1">
                          {val.boldText}:{' '}
                        </strong>{' '}
                        {val.desc}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col w-full gap-8 mt-10 md:gap-5 md:flex-row">
              <div className="flex flex-1 gsap-opacity-trans-appear">
                <div className="relative flex w-full">
                  <div className="absolute top-0 w-full max-w-[400px] h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
                    <p className="text-white text-[24px] font-regular">
                      Details
                    </p>
                  </div>
                  <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
                    <table className="w-full border-collapse">
                      <thead className="font-regular text-center text-[20px]">
                        <tr>
                          <th className="p-2 border border-gray-500 bg-[#f9dcb3]  w-3/5">
                            Perspectives
                          </th>
                          <th className="p-2 border border-gray-500 bg-[#f9dcb3]  w-2/5">
                            Demax
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData2.map((row, index) => (
                          <tr
                            key={index}
                            className="font-regular text-[18px] text-center"
                          >
                            <td className="p-2 border border-gray-500 ">
                              {row.perspectives}
                            </td>
                            <td className="p-2 border border-gray-500 ">
                              {row.demax}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 gsap-opacity-trans-appear">
                <div className="relative flex w-full">
                  <div className="absolute top-0 w-full max-w-[400px] h-[90px] bg-gradient-to-r from-[#d05323] to-[#ff852d] pl-5 pt-3 rounded-2xl">
                    <p className="text-white text-[24px] font-regular">
                      Models and Specifications
                    </p>
                  </div>
                  <div className="w-full overflow-x-auto mt-[50px] ml-[22px] z-[20]">
                    <table className="w-full border-collapse">
                      <thead className="font-regular text-center text-[20px]">
                        <tr>
                          <th className="p-2 border border-gray-500 bg-[#f9dcb3] ">
                            No.
                          </th>
                          <th className="p-2 border border-gray-500 bg-[#f9dcb3] ">
                            Model
                          </th>
                          <th className="p-2 border border-gray-500 bg-[#f9dcb3] ">
                            Specification/Strap length
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData3.map((row, index) => (
                          <tr
                            key={index}
                            className="font-regular text-[18px] text-center"
                          >
                            <td className="p-2 border border-gray-500 ">
                              {row.no}
                            </td>
                            <td className="p-2 border border-gray-500 ">
                              {row.model}
                            </td>
                            <td className="p-2 border border-gray-500 ">
                              {row.spec}
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
        </div>
      </div>
    </div>
  )
}

export default Cardiac_IRac
