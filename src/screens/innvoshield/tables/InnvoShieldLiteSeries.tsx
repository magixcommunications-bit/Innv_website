const InnvoShieldLiteSeries = () => {
  return (
    <div className="w-full p-4 gsap-opacity-trans-appear">
      <div className="overflow-x-auto transition-all duration-300  hover:shadow-[0_25px_50px_-12px_rgba(150,197,255,0.8)] rounded-3xl">
        <table className="w-full border border-separate border-spacing-0 border-[#96c5ff] bg-[#ddebfe] overflow-hidden rounded-3xl">
          {/* Header */}
          <thead>
            <tr>
              <th
                colSpan={7}
                className="px-4 py-3 text-lg font-bold text-center border border-[#96c5ff] bg-[#3061d8]"
              >
                <p className="text-white">LITE SERIES - NON LEAD/LEAD FREE</p>
              </th>
            </tr>

            {/* Main column headers */}
            <tr>
              <th
                rowSpan={2}
                className="bg-gray-100 border border-[#96c5ff] px-4 py-3 text-center font-bold min-w-[200px]"
              >
                PRODUCT NAME
              </th>
              <th
                colSpan={2}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#96c5ff]"
              >
                LEAD EQUIVALENCY
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 font-bold text-center bg-gray-100 border border-[#96c5ff]"
              >
                WEIGHT IN KG
              </th>
              {/* <th
                rowSpan={2}
                className="bg-gray-100 border border-[#96c5ff] px-4 py-3 text-center font-bold min-w-[120px]"
              >
                MODEL NO.
              </th> */}
            </tr>

            {/* Sub-headers */}
            <tr>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#96c5ff]">
                FRONT
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#96c5ff]">
                BACK
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#96c5ff]">
                SMALL
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#96c5ff]">
                MEDIUM
              </th>
              <th className="px-4 py-2 font-bold text-center bg-gray-100 border border-[#96c5ff]">
                LARGE
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Frontal/Coat Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Frontal/Coat Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Nil
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3.2
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3.3
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3.5
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3204NL-X
              </td> */}
            </tr>

            {/* Regular Skirt & Vest Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Regular Skirt & Vest Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.2
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.6
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.9
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3210NL-X
              </td> */}
            </tr>

            {/* Regular Over wrap Apron */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Regular Over wrap Apron
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.3
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.6
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                5.9
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3212NL-X
              </td> */}
            </tr>

            {/* Thyroid Collar */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Thyroid Collar
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.50mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Nil
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]"></td>
              <td
                // colSpan={3}
                className="px-4 py-3 text-center border border-[#96c5ff]"
              >
                0.22
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]"></td>
              {/* <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#96c5ff]"
              >
                3213NL-X
              </td> */}
            </tr>

            {/* Head Cap */}
            <tr>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Head Cap
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                0.25mmPb
              </td>
              <td className="px-4 py-3 text-center border border-[#96c5ff]">
                Nil
              </td>
              <td
                colSpan={3}
                className="px-4 py-3 text-center border border-[#96c5ff]"
              >
                0.16
              </td>
              {/* <td className="px-4 py-3 text-center border border-[#96c5ff]">
                3214NL-Y
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InnvoShieldLiteSeries
