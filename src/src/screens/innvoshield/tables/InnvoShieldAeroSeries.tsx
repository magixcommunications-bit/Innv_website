const InnvoShieldAeroSeries = () => {
  return (
    <div className="w-full p-4 gsap-opacity-trans-appear">
      <div className="overflow-x-auto transition-shadow  duration-300 rounded-3xl hover:shadow-[0_25px_50px_-12px_rgba(136,61,216,0.3)]">
        <table
          className="w-full border border-separate border-spacing-0 border-[#e0ccfc] bg-[#f7f0ff] rounded-3xl 
    overflow-hidden"
        >
          {/* Header */}
          <thead>
            <tr>
              <th
                colSpan={7}
                className="px-4 py-3 text-lg font-bold text-center  border border-[#e0ccfc] bg-[#883dd8]"
              >
                <p className="text-white">
                  AERO SERIES - SUPER LIGHTWEIGHT LEAD FREE
                </p>
              </th>
            </tr>

            {/* Main column headers */}
            <tr>
              <th
                rowSpan={2}
                className="bg-gray-100 border border-[#e0ccfc] px-4 py-3 text-center font-bold min-w-[200px]"
              >
                PRODUCT NAME
              </th>
              <th
                colSpan={2}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#e0ccfc]"
              >
                LEAD EQUIVALENCY
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#e0ccfc]"
              >
                WEIGHT IN KG
              </th>
              {/* <th
                rowSpan={2}
                className="bg-gray-100 border border-[#e0ccfc] px-4 py-3 text-center font-bold min-w-[120px]"
              >
                MODEL NO.
              </th> */}
            </tr>

            {/* Sub-headers */}
            <tr>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#e0ccfc]">
                FRONT
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#e0ccfc]">
                BACK
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#e0ccfc]">
                SMALL
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#e0ccfc]">
                MEDIUM
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#e0ccfc]">
                LARGE
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Frontal/Coat Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Frontal/Coat Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Nil
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                2.85
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3.1
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3.38
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3204SL-X
              </td> */}
            </tr>

            {/* Regular Skirt & Vest Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Regular Skirt & Vest Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                4.7
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                4.9
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                5.1
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3210SL-X
              </td> */}
            </tr>

            {/* Regular Over wrap Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Regular Over wrap Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3.7
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3.9
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                4.1
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                3212SL-X
              </td> */}
            </tr>

            {/* Thyroid Collar */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Thyroid Collar
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Nil
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]"></td> */}
              <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#e0ccfc]"
              >
                0.18
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]"></td> */}
              {/* <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#e0ccfc]"
              >
                3213SL-X
              </td> */}
            </tr>

            {/* Head Cap */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Head Cap
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                Nil
              </td>
              <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#e0ccfc]"
              >
                0.17
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#e0ccfc]">
                321SSL-Y
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InnvoShieldAeroSeries
