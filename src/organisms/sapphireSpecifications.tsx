import React from 'react'
import './sapphireSpecifications.css'

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
}: {
  title: string
  bgGrad?: string
  titleColor?: string
  specifications: SpecificationData
}) => {
  return (
    <section
      className={`blade-top-padding blade-bottom-padding-lg ${specifications.bg} bg-cover bg-center`}
      // style={{
      //   backgroundImage: bgGrad ? bgGrad : 'none',
      // }}
    >
      {/* <h2
        className={`font-medium font-normal text-center lg:hidden ${titleColor}`}
      >
        {title}
      </h2> */}
      <h3
        className={`gsap-opacity-trans-appear font-medium font-normal text-center hidde lg:block leading-tight ${titleColor}`}
      >
        {title}
      </h3>

      <div
        className={`gsap-opacity-trans-appear w-container ${specifications.tableWidth} blade-top-margin-sm px-0 mx-3 bg-white md:mx-auto overflow-auto border-1 border-[#a7a7a7] rounded-[5px]`}
      >
        <table className="table-fixed border-collapse w-full minw-[30rem] ">
          <thead>
            <tr className="">
              {specifications.th.map((_, index) => {
                return (
                  <th
                    className={`text-left bg-lightorange last:bg-white -h-1 text-white font-medium text-sm md:text-base xl:text-lg ${specifications.columnWidthStructure[index]}`}
                    key={index}
                  >
                    {/* {item} */}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="">
            {specifications.tb.map((item, index) => {
              return (
                <tr className="sapphire-fixed-first-column" key={index}>
                  {item.map((td, index) => {
                    return (
                      <td
                        key={index}
                        className="px-4 lg:px-6 py-2 md:text-lg font-medium"
                      >
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
