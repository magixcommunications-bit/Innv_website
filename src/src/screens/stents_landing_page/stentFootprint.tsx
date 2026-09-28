import React from 'react'
import footprint_1 from 'assets/stents/landingPage/footprint/01.webp'
import footprint_2 from 'assets/stents/landingPage/footprint/02.webp'
import footprint_3 from 'assets/stents/landingPage/footprint/03.webp'

const StentFootprint = () => {
  const tableData = [
    {
      image: footprint_1,
      size: '2.00-2.75mm',
      crowns: '6',
      connectors: '3 Connectors',
      links: '2 Links',
    },
    {
      image: footprint_2,
      size: '3.00-3.50mm',
      crowns: '8',
      connectors: '4 Connectors',
      links: '2 Links',
    },
    {
      image: footprint_3,
      size: '4.00-4.50mm',
      crowns: '10',
      connectors: '5 Connectors',
      links: '2 Links',
    },
  ]

  const tableDataDesk = [
    ['Size diameter', '2.00-2.75mm', '3.00-3.50mm', '4.00-4.50mm'],
    ['Number of Crowns', '6', '8', '10'],
    [
      'Number of S Connectors',
      '3 Connectors',
      '4 Connectors',
      '5 Connectors',
    ],
    ['Number of Links', '2 Links', '2 Links', '2 Links'],
  ]

  return (
    <div className="footprint-table flex items-center justify-center blade-top-padding blade-bottom-padding">
      {/* Desktop View */}
      <div className="hidden md:block w-full 2xl:max-w-7xl mx-auto w-container xl:w-container-lg xl:max-w-6xl">
        <table className="table-auto border-collapse border-1 border-[#C3C3C3] rounded-md w-full font-regular">
          <thead>
            <tr>
              <th colSpan={4}>
                <div className="md:text-2xl 2xl:text-3xl font-medium py-6 text-left pl-4">
                  Footprint CUSTOMIZED for different vessels
                </div>
                {/* <h4 className="text-left pl-4 font-medium py-5 ">
                Footprint CUSTOMIZED for different vessels
              </h4> */}
              </th>
            </tr>
            <tr>
              <td className="relative">
                <div className="bg-[#F1F5F6] pl-4 py-2 absolute bottom-0 w-full border-r border-[#C3C3C3]">
                  <span className="font-medium text-lg ">
                    Stents Footprints
                  </span>
                </div>
              </td>
              {tableData.map((elem, idx) => {
                return (
                  <td key={idx} className="!border-0 p-6 lg:p-0 ">
                    <img
                      src={elem.image}
                      alt={'Stent footprint' + (idx + 1)}
                      className="mx-auto my-4 lg:my-12 2xl:h-36 md:h-32 h-24"
                    />
                  </td>
                )
              })}
            </tr>
            {tableDataDesk.map((elem, index) => {
              return (
                <tr key={index}>
                  {elem.map((td, idx) => {
                    return (
                      <td
                        key={idx}
                        className={`${
                          idx === 0 ? 'pl-4 xl:text-lg' : 'pl-8'
                        } py-2 pr-4`}
                      >
                        {td}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </thead>
        </table>
      </div>

      {/* Mobile View */}
      <div className="w-[90%] flex md:hidden flex-col items-center font-regular ">
        <h4 className="text-center blade-bottom-margin font-medium">
          Footprint CUSTOMIZED for different vessels
        </h4>
        {tableData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="w-full border border-[#C3C3C3] blade-bottom-margin-lg"
            >
              <div className="flex items-center justify-center blade-top-padding-sm blade-bottom-padding-sm">
                <img
                  className="px-4 object-contain w-full h-full"
                  src={elem.image}
                  alt="Footprint Image"
                />
              </div>
              <div className="w-full flex items-center border-t border-[#C3C3C3]">
                <div className="w-1/2 bg-[#F1F5F6] border-r border-[#C3C3C3] py-2 pl-2">
                  <h6>Size diameter</h6>
                </div>
                <div className="w-1/2 py-2 pl-2">
                  <h6>{elem.size}</h6>
                </div>
              </div>
              <div className="w-full flex items-center border-t border-[#C3C3C3]">
                <div className="w-1/2 border-r border-[#C3C3C3] py-2 pl-2">
                  <h6>Number of Crowns</h6>
                </div>
                <div className="w-1/2 py-2 pl-2">
                  <h6>{elem.crowns}</h6>
                </div>
              </div>
              <div className="w-full flex items-center border-t border-[#C3C3C3]">
                <div className="w-1/2 bg-[#F1F5F6] border-r border-[#C3C3C3] py-2 pl-2">
                  <h6>Number of Straight Connectors</h6>
                </div>
                <div className="w-1/2 py-2 pl-2">
                  <h6>{elem.connectors}</h6>
                </div>
              </div>
              <div className="w-full flex items-center border-t border-[#C3C3C3]">
                <div className="w-1/2 border-r border-[#C3C3C3] py-2 pl-2">
                  <h6>Number of Links</h6>
                </div>
                <div className="w-1/2 py-2 pl-2">
                  <h6>{elem.links}</h6>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StentFootprint
