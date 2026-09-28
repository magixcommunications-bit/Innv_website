import './index.css'

export function Specifications({
  specRows,
  expansionRows,
  title,
}: {
  specRows: any
  expansionRows: any
  title?: string
}) {
  return (
    <section className="bg-[url(assets/productsNew/bg-grid.jpg)] bg-no-repeat bg-contain">
      <div
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(246, 154, 77, 0.40) 30%, transparent 70%)',
        }}
      >
        <div className="flex-1 blade-top-padding tablewrapper blade-bottom-padding-lg flex flex-col items-center px-4">
          <h3 className="font-medium lg:w-full text-black text-center px-4">
            {title ? `${title}` : 'Device Technical Specifications'}
          </h3>
          <div
            style={{
              background:
                'linear-gradient(132deg, rgba(255, 228, 205, 0.50) 9.01%, rgba(255, 245, 236, 0.29) 110.08%)',
            }}
            className="w-full lg:max-w-4xl 2xl:max-w-5xl border border-[#F69A4D] mt-8 2xl:mt-12 rounded-lg"
          >
            <table className="table-fixed w-full overflow-hidden">
              {specRows.map((row: any, index: number) => (
                <tr key={index}>
                  {row.columns.map((column: any, idx: any) => (
                    <td
                      key={idx}
                      className={`md:py-4 py-3 px-3 sm:px-6 2xl:px-10 text-black ${
                        idx === 0 ? '' : ''
                      } ${
                        index !== 0 && 'border-t border-white border-opacity-75'
                      }  
                      text-sm lg:text-base 2xl:text-xl font-medium`}
                    >
                      {column}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
        {expansionRows ? (
          <div className="flex-1 tablewrapper blade-bottom-padding-lg flex flex-col items-center px-4">
            <h3 className="font-medium lg:w-full text-black text-center px-4">
              Over-expansion Limit
            </h3>
            <div
              style={{
                background:
                  'linear-gradient(132deg, rgba(255, 228, 205, 0.50) 9.01%, rgba(255, 245, 236, 0.29) 110.08%)',
              }}
              className="w-full lg:max-w-4xl 2xl:max-w-5xl border border-[#F69A4D] mt-8 2xl:mt-12 rounded-lg overflow-x-auto"
            >
              <table className="expansionRows min-w-[600px] table-fixed w-full overflow-hidden">
                {expansionRows.map((row: any, index: number) => (
                  <tr key={index} className="">
                    {row.columns.map((column: any, idx: any) => (
                      <td
                        key={idx}
                        className={`md:py-4 py-3 px-3 sm:px-6 2xl:px-8 text-black ${
                          idx === 0 ? '' : ''
                        } ${
                          index !== 0 &&
                          'border-t border-white border-opacity-75'
                        }  text-sm lg:text-base 2xl:text-xl font-medium`}
                      >
                        {column}
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}
