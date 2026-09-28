import React from 'react'
import bg from 'assets/productsNew/stent-bg-element.png'
import eternia_top from 'assets/productsNew/eternia/eternia-top-perspective.png'
import { StentLength } from 'organisms/stentLength'

export default function StentSizes({
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
    <section className="bg-gradient-to-br from-white via-[#fec99a6b] to-lightorange">
      <div className='bg-[url("assets/productsNew/bg-grid.png")] bg-no-repeat bg-contain bg-[center_top_-150px] blade-top-padding blade-bottom-padding-lg'>
        {title ? (
          <div className="w-container-lg 2xl:w-container-sm 2xl:pl-20 mx-auto md:flex blade-bottom-padding">
            <div className="flex-1 xxl:max-w-2xl max-w-xl flex flex-col justify-center items-start">
              {logo ? <img src={logo} className="2xl:h-16 h-14" alt="" /> : ''}
              <h4 className="font-regular mt-5">{title}</h4>
            </div>
            <div
              className={`flex-1 2xl:max-w-xl max-w-md flex mx-auto bg-no-repeat bg-contain `}
              style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <img
                src={productImage ? productImage : eternia_top}
                className="h-full w-full"
              />
            </div>
          </div>
        ) : (
          ''
        )}
        <StentLength
          diameters={diameters}
          tableHeading={tableHeading}
          tableData={tableData}
        />
      </div>
    </section>
  )
}
