import React from 'react'
import eternia_top from 'assets/productsNew/eternia/eternia-top-perspective.png'
import { StentLength } from 'organisms/stentLength'

export default function ElevateNexa({
  logo,
  title,
  productImage,
}: {
  logo?: string
  title?: any
  productImage?: string
}) {
  const tableHeading: string[] = [
    '8',
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

  const diameters: string[] = [
    '2.00',
    '2.25',
    '2.50',
    '2.75',
    '3.00',
    '3.50',
    '4.00',
    '4.50',
  ]

  const tableData = [
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
  ]

  return (
    <section className="bg-gradient-to-b from-gray via-gray to-lightorange lg:pt-0 blade-top-padding">
      <div
        className={`lg:bg-[url(assets/productsNew/eterniaNexa/nexa-bg-circular-elements.png)] bg-right-top bg-contain bg-none bg-no-repeat`}
      >
        <div className="2xl:pl-20 md:flex 2xl:gap-20 gap-10 justify-end w-11/12 !ml-auto">
          <div className="flex-1 max-w-2xl flex flex-col justify-center items-start">
            {logo ? (
              <img src={logo} className="2xl:h-16 xl:h-14 h-10" alt="" />
            ) : (
              ''
            )}
            <h4 className="font-regular mt-5">{title}</h4>
          </div>

          <div className="md:w-6/12 blade-bottom-padding-lg">
            <div className={`w-full ml-auto flex justify-end`}>
              <img
                src={productImage ? productImage : eternia_top}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="blade-top-padding-lg blade-bottom-padding-lg">
          <StentLength
            diameters={diameters}
            tableHeading={tableHeading}
            tableData={tableData}
          />
        </div>
      </div>
    </section>
  )
}
