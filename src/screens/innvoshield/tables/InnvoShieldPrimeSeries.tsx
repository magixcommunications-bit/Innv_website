const InnvoShieldPrimeSeries = () => {
  return (
    <div className="w-full p-4 gsap-opacity-trans-appear">
      <div className="overflow-x-auto transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(255,217,171,0.8)] rounded-3xl">
        <table className="w-full border border-separate border-spacing-0 border-[#ffd9ab] bg-[#fff5e9] overflow-hidden rounded-3xl">
          {/* Header */}
          <thead>
            <tr>
              <th
                colSpan={7}
                className="px-4 py-3 text-lg font-bold text-center  border border-[#ffd9ab] bg-[#ea5b2f]"
              >
                <p className="text-white">PRIME SERIES - LITE LEAD</p>
              </th>
            </tr>

            {/* Main column headers */}
            <tr>
              <th
                rowSpan={2}
                className="bg-gray-100 border border-[#ffd9ab] px-4 py-3 text-center font-bold min-w-[200px]"
              >
                PRODUCT NAME
              </th>
              <th
                colSpan={2}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#ffd9ab]"
              >
                LEAD EQUIVALENCY
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#ffd9ab]"
              >
                WEIGHT IN KG
              </th>
              {/* <th
                rowSpan={2}
                className="bg-gray-100 border border-[#ffd9ab] px-4 py-3 text-center font-bold min-w-[120px]"
              >
                MODEL NO.
              </th> */}
            </tr>

            {/* Sub-headers */}
            <tr>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#ffd9ab]">
                FRONT
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#ffd9ab]">
                BACK
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#ffd9ab]">
                SMALL
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#ffd9ab]">
                MEDIUM
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#ffd9ab]">
                LARGE
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Frontal/Coat Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Frontal/Coat Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Nil
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                3.9
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                4.0
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                4.2
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                3204LL-X
              </td> */}
            </tr>

            {/* Regular Skirt & Vest Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Regular Skirt & Vest Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                5.8
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                6.2
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                6.7
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                3210LL-X
              </td> */}
            </tr>

            {/* Regular Over wrap Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Regular Over wrap Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                5.7
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                6.1
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                6.6
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                3212LL-X
              </td> */}
            </tr>

            {/* Thyroid Collar */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Thyroid Collar
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Nil
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]"></td>
              <td
                // colSpan={3}
                className="px-4 py-3 text-center border border-[#ffd9ab]"
              >
                0.26
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]"></td>
              {/* <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#ffd9ab]"
              >
                3213LL-X
              </td> */}
            </tr>

            {/* Head Cap */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Head Cap
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                Nil
              </td>
              <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#ffd9ab]"
              >
                0.18
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#ffd9ab]">
                3214LL-Y
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InnvoShieldPrimeSeries
