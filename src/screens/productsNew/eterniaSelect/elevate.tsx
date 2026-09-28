import React from 'react'
import { StentLength } from 'organisms/stentLength'
import eterniaSelectLogo from 'assets/productsNew/eterniaSelect/logo.png'

export default function Elevate({
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
    <section className="bg-gradient-to-b from-gray via-gray to-gray ">
      <div
        className={`lg:bg-[url(assets/productsNew/eterniaNexa/nexa-bg-circular-elements.png)] bg-right-top bg-[length:90%] bg-none bg-no-repeat `}
      >
        <div className="2xl:pl-20 md:flex 2xl:gap-16 gap-10 justify-end lg:w-11/12 !ml-auto">
          <div className="flex-1 max-w-3xl flex flex-col justify-center items-start px-4 ">
            <h4 className="font-regular blade-top-padding">
              <h3 className="font-medium text-orange inline">Elevate</h3> your
              practice with{' '}
              <span className="inline-flex">
                <img
                  src={eterniaSelectLogo}
                  alt="eternia-brio-logo"
                  className="xxl:h-12 lg:h-10 md:h-6 h-6 object-contain object-left"
                />
              </span>
              , now available in a multitude of dimensions to cater to your
              diverse unblocking needs. Experience a new realm of possibilities
              for superior patient care.
            </h4>
          </div>

          <div className="md:w-6/12 md:blade-bottom-padding-lg">
            <div className={`w-full ml-auto flex justify-end`}>
              <img
                src={productImage}
                alt="elevate with eternia brio"
                className="h-full w-full pr-10"
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
