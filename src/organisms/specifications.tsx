import React from 'react'
import './specifications.css'

export type SpecificationData = {
  th: string[]
  bg: string
  tableWidth: string
  columnWidthStructure: string[]
  tb: Array<[string, string, ...string[]]>
}

const Specifications = ({
  title,
  bgGrad,
  titleColor,
  specifications,
  showHeading,
  headingClass,
  extraWidth,
}: {
  title: string
  bgGrad?: string
  titleColor?: string
  specifications: SpecificationData
  showHeading?: boolean
  headingClass?: string
  extraWidth?: string
}) => {
  return (
    <section
      className={`blade-top-padding font-regular blade-bottom-padding-lg ${specifications.bg}`}
    >
      <h3
        className={`gsap-opacity-trans-appear font-medium font-normal text-center hidde lg:block leading-tight ${titleColor}`}
      >
        {title}
      </h3>

      <div
        className={`gsap-opacity-trans-appear w-container ${specifications.tableWidth} z-20 relative blade-top-margin-sm px-0 mx-3 bg-white md:mx-auto overflow-auto border-2 border-[#a7a7a7] rounded-[5px]`}
      >
        <table
          className={`table-fixed border-collapse w-full min-w-[30rem] text-sm md:text-base xl:text-lg z-10 ${extraWidth}`}
        >
          <thead className="">
            <tr className=" fixed-first-column ">
              {specifications.th.map((item, index) => {
                return (
                  <th
                    className={`text-left  ${
                      showHeading ? headingClass : 'bg-[#F1F1F1]'
                    } ${specifications.columnWidthStructure[index]}`}
                    key={index}
                  >
                    {showHeading ? item : ''}

                    {/* {item} */}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {specifications.tb.map((item, index) => {
              return (
                <tr
                  className="fixed-first-column odd:bg-[#F1F1F1] relative"
                  key={index}
                >
                  {item.map((td, index) => {
                    return (
                      <td key={index} className=" px-4 lg:px-6 py-2 ">
                        {td}
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

export default Specifications
