interface ProductCode {
  length: string
  codes: string[]
}

const BalloonTable: React.FC = () => {
  const diameters = [
    '2.00',
    '2.25',
    '2.50',
    '2.75',
    '3.00',
    '3.50',
    '4.00',
    '4.50',
  ]
  const lengths = [
    '08',
    '12',
    '16',
    '20',
    '24',
    '28',
    '32',
    '36',
    '40',
    '44',
    '48',
    '52',
  ]

  const generateProductCode = (diameter: string, length: string): string => {
    const diameterCode = diameter.replace('.', '')
    return `CLP${diameterCode}${length}`
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="w-full border-collapse bg-[#daddeb]">
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="px-4 py-3 text-lg font-semibold text-center border border-white text-slate-800"
              >
                Balloon
                <br />
                Length (mm)
              </th>
              <th
                colSpan={diameters.length}
                className="px-4 py-2 text-lg font-semibold text-center border border-white text-slate-800"
              >
                Balloon Diameter (mm)
              </th>
            </tr>
            <tr>
              {diameters.map((diameter) => (
                <th
                  key={diameter}
                  className=" px-4 py-2 text-center text-lg font-semibold text-slate-800 border border-white min-w-[100px]"
                >
                  {diameter}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lengths.map((length, rowIndex) => (
              <tr key={length}>
                <td className="px-4 py-2 text-lg font-medium text-center border border-white text-slate-800">
                  {length}
                </td>
                {diameters.map((diameter) => (
                  <td
                    key={`${length}-${diameter}`}
                    className="px-4 py-2 text-lg text-center border border-white text-slate-700"
                  >
                    {generateProductCode(diameter, length)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BalloonTable
