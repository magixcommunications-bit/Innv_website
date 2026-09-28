import React from 'react'
import siroflex from 'assets/productsNew/siroflex/circulation-siroflex.png'
import drugCoating from 'assets/productsNew/siroflex/drug-coating.png'
import wavflo from 'assets/productsNew/siroflex/ciculation-wavflo.png'
import v2v from 'assets/productsNew/siroflex/circulation-v2v.png'

export default function SiroflexCirculation() {
  return (
    <section className="bg-gradient-to-t from-lightorange to-white relative blade-top-padding blade-bottom-padding-lg">
      <h3 className="w-container font-medium text-center mb-10">
        An Innovative Sirolimus Stent with Extreme
        <br className="md:block hidden" /> Flexibility for Complex Lesions
      </h3>
      <div className="font-regular ">
        <div className="w-full relative overflow-hidden">
          <div className="2xl:w-9/12 xl:w-10/12 ">
            <div className="w-full">
              <img src={siroflex} alt="Stent" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex-1 2xl:pb-[10%] pb-[8%] flex xxl:gap-10 gap-4 flex-col justify-center items-center xl:absolute inset-0 mx-auto font-regular">
            <Flag
              img={v2v}
              title="Proprietary V2V S-connectors"
              list={[
                `Valley-to-valley long 'S' Connectors`,
                'For higher flexibility, deliverability, radial strength, and conformability',
                'Lowering stent dislodgement force to minimum 6N in 12 mm stents',
              ]}
            />
            <Flag
              img={wavflo}
              title="Proprietary WavFlo Struts"
              list={[
                'DES with thin struts up to 60 μm',
                'Enhancing trackability, crossability, and radial force, while reducing the risk of restenosis and thrombosis',
              ]}
              classNames="xl:ml-[25%] "
            />

            <Flag
              img={drugCoating}
              title=" Perfect drug coating ensures systematic and sustained drug
                  release to the target lesion"
              list={[
                'Coated with Sirolimus drug- biodegradable polymers mix using highly automated process',
              ]}
              classNames="xl:ml-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FlagProps {
  img: string
  title: string
  subtitle?: string
  classNames?: string
  list: string[]
}

const Flag: React.FC<FlagProps> = ({
  img,
  title,
  subtitle,
  list,
  classNames,
}) => {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col flex-wrap md:gap-10 gap-2 lg:flex-nowrap px-4 max-w-lg ${classNames}`}
      >
        <div className="relative h-fit">
          <div className="w-full 2xl:h-32 xl:h-28 h-24">
            <img
              src={img}
              alt={title}
              className="w-fit h-full object-contain"
            />
          </div>
          <svg
            className="absolute top-0 bottom-0 my-auto right-full pr-3 xl:block hidden 2xl:w-96 w-48 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 343 14"
          >
            <path
              d="M342.671 5.48532C342.611 8.43021 340.174 10.7683 337.229 10.7077C334.284 10.647 331.946 8.21055 332.007 5.26566C332.067 2.32076 334.504 -0.0173728 337.449 0.0432855C340.394 0.103944 342.732 2.54043 342.671 5.48532ZM337.36 6.37526L0.655249 13.5283L0.612769 11.5288L337.318 4.37571L337.36 6.37526Z"
              fill="url(#paint0_linear_5014_16627)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5014_16627"
                x1="337.572"
                y1="48.2654"
                x2="-1.07444"
                y2="41.2901"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F78D28" />
                <stop offset="1" stop-color="#F7902A" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex-1">
          <h6 className="font-bold text-orange">{title}</h6>
          <ul className="mt-2 list-disc list-outside pl-5">
            {list.map((item, ind) => {
              const keyVal = ind + 'flag'
              return (
                <li dangerouslySetInnerHTML={{ __html: item }} key={keyVal} />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
