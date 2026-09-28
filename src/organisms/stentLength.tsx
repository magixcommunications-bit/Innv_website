import checkIcon from 'assets/productsNew/check-icon.svg'

import './stentLength.css'

export function StentLength({
  title,
  diameters,
  tableHeading,
  tableData,
}: {
  title?: string
  diameters: string[]
  tableHeading: string[]
  tableData: Array<boolean[]>
}) {
  return (
    <div className=" relative lg:flex flex-col items-center justify-center px-4 bg-cover bg-center">
      <div className="mt-6 lg:mt-0 w-container relative !rounded-md border border-orange md:p-3 p-1 bg-transparent h-fit max-w-4xl 2xl:max-w-5xl">
        <div className=" px-0 !rounded-md overflow-hidden ">
          <div className="stent-length-scrollbar overflow-x-auto overflow-y-hidden rounded-md ">
            <table className="bg-transparent bg-opacity-30 !rounded-md w-full">
              <thead>
                <tr className="stent-fixed-first-column relative">
                  <th
                    rowSpan={2}
                    className="stent-diameter bg-orange text-base 2xl:text-xl font-medium whitespace-nowrap border-r-1 border-r-[#cacaca82] text-left p-2 md:px-4 2xl:px-6"
                  >
                    Diameter (mm)
                  </th>
                  <th
                    colSpan={12}
                    className=" bg-orange text-base 2xl:text-xl font-medium whitespace-nowrap  border-b-[#cacaca82] md:text-center text-left p-2 px-3 md:px-4 2xl:px-6"
                  >
                    Stent Length (mm)
                  </th>
                </tr>
                <tr className="">
                  {tableHeading.map((heading, index) => (
                    <th
                      key={index}
                      className={`bg-orange text-base 2xl:text-xl font-medium py-2 px-5 ${
                        index !== tableHeading.length - 1 &&
                        'border-r1 border-r[#cacaca82]'
                      } ${index === tableHeading.length - 1 && ''}`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {diameters.map((diameter, index) => (
                  <tr
                    key={index}
                    className="border-t-1 border-t-[#cacaca82] stent-fixed-first-column"
                  >
                    <td className="pl-2 py-1 md:px-4 2xl:px-6 2xl:py-1.5 text-base 2xl:text-lg font-medium stent-first-column-color border-r-1 border-r-[#cacaca82]">
                      {diameter}
                    </td>
                    {tableHeading.map((_, idx) => (
                      <td
                        key={idx}
                        className={`text-center ${
                          idx !== tableHeading.length - 1 &&
                          'border-r-1 border-r-[#cacaca82]'
                        }`}
                      >
                        <div>
                          {tableData[index][idx] ? (
                            <img
                              src={checkIcon}
                              alt="present"
                              className="mx-auto h-3 2xl:h-4"
                            />
                          ) : (
                            <div className="grid place-content-center">
                              <div className="w-4 h-[3px] bg-[#4D4D4D] rounded-md"></div>
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
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
