import React from 'react'
import './complianceChart.css'

// white- [#FEFEFE]
// cream- [#F8F8FD]
export type tableData = {
  text: string[]
  textColor: string[]
  bgColor: string[]
}

export type ComplienceData = {
  th: string[]
  tableWidth: string
  columnSpanStructure: number[]
  td: tableData[]
  columnWidths: string[]
}

const ComplianceChart = ({
  heading,
  bgColor,
  bgGradient,
  complience,
}: // tableContent,
{
  heading: string
  bgColor: string
  bgGradient: string
  complience: ComplienceData
  // tableContent: tableData
}) => {
  const { tableWidth } = complience

  return (
    <section
      className={`blade-bottom-padding-lg blade-top-padding-lg ${bgColor} ${bgGradient} bg-top`}
    >
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        {heading}
      </h3>
      <div
        className="gsap-opacity-trans-appear rounded-[5px] overflow-auto w-fi 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto"
        style={{
          filter: 'drop-shadow(9.341px 9.341px 56.045px rgba(0, 0, 0, 0.25))',
        }}
      >
        <table
          className={`w-full compliance-chart-global font-medium borer borderwhite rounded-[5px] xl:text-lg border-collapse ${tableWidth}`}
        >
          <thead>
            <tr className="bg-[#FEFEFE]">
              {complience.th.map((elem, idx) => {
                return (
                  <th
                    key={idx}
                    colSpan={complience.columnSpanStructure[idx]}
                    className={`${
                      idx === 0
                        ? 'border-r-[2px] border-b-[2px] border-[#10171E] bg-[#FEFEFE] sticky left-0'
                        : 'text-left sm:text-center'
                    } ${complience.columnWidths[idx]}`}
                  >
                    {elem}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {complience.td.map((elem, index) => {
              return (
                <tr key={index} className="bg-black text-white text-center">
                  {elem.text.map((data, idx) => {
                    return (
                      <td
                        className={`${
                          idx === 0
                            ? 'sticky left-0'
                            : 'text-left sm:text-center'
                        }  ${elem.textColor[idx]} ${elem.bgColor[idx]}`}
                        key={idx}
                      >
                        {data}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ComplianceChart
