import './index.css'

const data = [
  {
    id: 1,
    pressure: '',
    diameters: ['2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00'],
  },
  {
    id: 2,
    pressure: '2',
    diameters: ['2.09', '2.32', '2.55', '2.78', '3.01', '3.24', '3.48', '3.71'],
  },
  {
    id: 3,
    pressure: '4',
    diameters: ['2.16', '2.40', '2.64', '2.88', '3.12', '3.36', '3.60', '3.84'],
  },
  {
    id: 4,
    pressure: '6',
    diameters: ['2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00'],
  },
  {
    id: 5,
    pressure: '8',
    diameters: ['2.31', '2.56', '2.82', '3.07', '3.33', '3.58', '3.84', '4.09'],
  },
  {
    id: 6,
    pressure: '10',
    diameters: ['2.35', '2.61', '2.87', '3.13', '3.39', '3.65', '3.91', '4.17'],
  },
  {
    id: 7,
    pressure: '12',
    diameters: ['2.39', '2.65', '2.92', '3.18', '3.45', '3.71', '3.98', '4.24'],
  },
  {
    id: 8,
    pressure: '14',
    diameters: ['2.43', '2.70', '2.97', '3.24', '3.51', '3.78', '4.05', '4.32'],
  },
  {
    id: 9,
    pressure: '16',
    diameters: ['2.48', '2.75', '3.03', '3.30', '3.58', '3.85', '4.13', '4.40'],
  },
  {
    id: 10,
    pressure: '18',
    diameters: ['2.52', '2.80', '3.08', '3.36', '3.64', '3.92', '4.20', '4.48'],
  },
]

export function ComplianceChart() {
  return (
    <div className="blade-top-padding-lg insignia-compliance-chart blade-bottom-padding-lg bg-gradient-to-b from-gray to-[#FFE4CD]">
      <div className="w-container">
        <h3 className="font-medium text-center text-black">
          Over-expansion Limit
        </h3>
        <div className="overflow-x-auto">
          <table className="bg-[#FFE4CD] relative max-w-4xl xl:max-w-[200px] mx-auto mt-6 md:mt-12 border-none border-collapse">
            <thead>
              <tr className="">
                <th className="font-medium text-left text-lg rounded-tl-[20px] border-b-2 border-orange whitespace-nowrap bg-[#FFE4CD] bg xl:text-xl 2xl:text-2xl  py-2 px-4 xl:px-8 w-[200px]">{`Pressure (bars)`}</th>
                <th
                  colSpan={8}
                  className="font-medium text-left pl-8 lg:text-center text-lg xl:text-xl 2xl:text-2xl z-0 border-b-2 border-orange"
                >{`Balloon diameters (mm)`}</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    className={`${
                      item.pressure === '6' && 'bg-[#FFE4CD] bg-opacity-20'
                    } ${item.pressure === '18' && 'bg-zinc-700 text-white'}`}
                  >
                    <td
                      className={`text-base xl:text-lg 2xl:text-xl ${
                        item.pressure !== '18'
                          ? 'bg-[#ffe4cd] border-b-1 border-zinc-300 '
                          : 'bg-zinc-700'
                      }  px-6 xl:px-8 py-2 font-medium`}
                    >
                      {item.pressure}
                    </td>
                    {item.diameters.map((diameter, index) => (
                      <td
                        key={index}
                        className={`${
                          index !== data.length - 1 &&
                          'border-b-1 border-zinc-300'
                        } text-base xl:text-lg 2xl:text-xl lg:w-[40px] xl:w-[120px] font-medium px-10 py-2
                    `}
                      >
                        {diameter}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>

            <tfoot>
              <tr className="bg-[#FFE4CD] bg-opacity-20">
                <td className="text-base whitespace-nowrap bg-[#FFE4CD] bg-opacity-20 border-none xl:text-lg 2xl:text-xl px-8 py-2 font-regular">
                  Nominal pressure
                </td>
                <td colSpan={8}></td>
              </tr>
              <tr className="bg-zinc-700 rounded-b-[6px] text-white">
                <td className="text-base whitespace-nowrap rounded-bl-[6px] bg-zinc-700 xl:text-lg 2xl:text-xl px-8 py-2 font-regular">
                  Rated burst pressure
                </td>
                <td colSpan={8} className="border-none rounded-br-[6px]"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
