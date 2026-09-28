import productImg from 'assets/productsNew/insignia/insignia-product.png'
import productImgTablet from 'assets/insignia/stent-specification/product_tablet.png'

const rows = [
  {
    id: 1,
    columns: ['Diameter (mm)', '2.0 , 2.25 , 2.50 , 2.75 , 3.0 , 3.5 , 4.0'],
  },
  { id: 2, columns: ['Material', 'Cobalt chromium alloy (L-605) ASTM-F90'] },
  { id: 3, columns: ['Strut thickness', '73 µm'] },
  { id: 4, columns: ['Strut width', '0.08mm (hinge) - 0.12mm (strut)'] },
  {
    id: 5,
    columns: ['Avg. metal to artery ratio', '14%'],
  },
  {
    id: 6,
    columns: ['Nominal pressure', '8 ATM'],
  },
  {
    id: 7,
    columns: [
      'Rated burst pressure',
      '16 ATM for all sizes, except balloon diameters 4.5/5.0 (all lengths), and balloon diameter 4.0 with lengths higher than 20 mm -14 ATM',
    ],
  },
  { id: 8, columns: ['Avg. forshortening', '< 10%'] },
  { id: 9, columns: ['Avg. recoil', '< 7 %'] },
  { id: 10, columns: ['Crossing profile', '1 mm'] },
  {
    id: 11,
    columns: [
      'Guiding catheter compatibility',
      '5F for all sizes except diameters 4.5 & 5.0 - 6F',
    ],
  },
  { id: 12, columns: ['Guiding compatibility', '0.014"'] },
]

export function StentSpecifications() {
  return (
    <section className="stent-specification-wrapper relative">
      <div className="flex flex-col lg:flex-row w-container">
        <div className="flex-1  blade-top-padding table-wrapper blade-bottom-padding-lg flex flex-col items-left justify-center">
          <h3 className="font-medium text-center lg:text-left lg:w-full lg:max-w-lg 2xl:max-w-2xl text-black -mt-2">
            Technical Specifications
          </h3>
          <table className="table-fixed relative z-20 mt-6 2xl:mt-12 w-full bg-white bg-opacity-20 overflow-hidden lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl">
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {row.columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`py-2 px-4 sm:px-6 2xl:px-12 text-black ${
                        colIndex === 0
                          ? 'border-r border-[#F69A4D] font-medium'
                          : 'font-regular'
                      } ${
                        index !== 0 && 'border-t border-[#F69A4D]'
                      } text-sm md:text-base xl:text-lg`}
                    >
                      {column}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-full absolute inset-0 z-0 ">
        <div className="h-full xl:w-[50%] w-[40%] ml-auto">
          <img
            src={productImg}
            alt="Insignia product image"
            className="hidden xl:block w-full h-full object-cover"
          />
          <img
            src={productImgTablet}
            alt="Insignia product image"
            className="hidden lg:block xl:hidden w-auto h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
