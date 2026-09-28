import React from 'react'

const OrderingInformationTable: React.FC = () => {
  // Table data structure
  const balloonDiameters = ['2.50', '2.75', '3.00', '3.50']
  const balloonLengths = ['06', '08', '10', '12', '15']

  // Generate product code based on diameter and length
  const getProductCode = (diameter: string, length: string): string => {
    const diameterCode = diameter.replace('.', '')
    return `SNC-${diameterCode}${length}`
  }

  return (
    <div className="w-full max-w-6xl px-4 pb-4 overflow-hidden bg-white rounded-lg shadow-2xl sm:pb-4 md:pb-6 sm:px-2 md:px-6 lg:px-10 gsap-opacity-trans-appear">
      {/* Table Header */}
      <div className="py-2 bg-white">
        <h1 className="text-xl font-semibold text-center text-gray-800 sm:text-2xl md:text-3xl ">
          Ordering Information
        </h1>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full">
          <table className="w-full border-b-2 border-collapse">
            <thead>
              {/* First Header Row */}
              <tr className="border-t-2 border-gray-300">
                <th
                  rowSpan={2}
                  className="px-2 py-2 text-left bg-white border-b-2 border-r-2 border-gray-300 xl:px-4 xl:py-4"
                >
                  <div className="text-[#2B5A9E] font-semibold text-base sm:text-lg md:text-lg lg:text-xl">
                    Balloon
                    <br />
                    Diameter (mm)
                  </div>
                </th>
                <th
                  colSpan={5}
                  className="px-2 py-2 text-center bg-white border-b-2 border-gray-300 xl:px-4 xl:py-4"
                >
                  <div className="text-[#2B5A9E] font-semibold text-base sm:text-lg md:text-lg lg:text-xl">
                    Balloon Length (mm)/Item References
                  </div>
                </th>
              </tr>
              {/* Second Header Row - Length Values */}
              <tr className="border-b-2 border-gray-300">
                {balloonLengths.map((length, index) => (
                  <th
                    key={length}
                    className={`bg-white px-2 py-2 min-w-[100px]  xl:px-4 xl:py-4 text-center text-[#2B5A9E] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl ${
                      index < balloonLengths.length - 1
                        ? 'border-r-2 border-gray-300'
                        : ''
                    }`}
                  >
                    {length}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {balloonDiameters.map((diameter, rowIndex) => (
                <tr
                  key={diameter}
                  className={
                    rowIndex < balloonDiameters.length - 1
                      ? 'border-b-2 border-gray-300'
                      : ''
                  }
                >
                  {/* Diameter Cell */}
                  <td className="px-2 py-2 text-center bg-white border-r-2 border-gray-300 xl:px-4 xl:py-4">
                    <span className="text-[#2B5A9E] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                      {diameter}
                    </span>
                  </td>
                  {/* Product Code Cells */}
                  {balloonLengths.map((length, colIndex) => (
                    <td
                      key={`${diameter}-${length}`}
                      className={`bg-white px-2 py-2 sm:px-0  xl:px-4 xl:py-4 text-center text-gray-700 text-sm md:text-base lg:text-lg ${
                        colIndex < balloonLengths.length - 1
                          ? 'border-r-2 border-gray-300'
                          : ''
                      }`}
                    >
                      {getProductCode(diameter, length)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderingInformationTable
