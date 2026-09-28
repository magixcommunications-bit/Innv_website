import React from 'react'
import curveProduct from 'assets/productsNew/siroflexPlus/plus-design-circulation.png'
import curveProductSM from 'assets/productsNew/siroflexPlus/siroflex-plus-mobile.png'

// circulation
import v2v from 'assets/productsNew/siroflexPlus/circulation/v2v.png'
import drugCoating from 'assets/productsNew/siroflexPlus/circulation/drugCoating.png'
import wavflo from 'assets/productsNew/siroflexPlus/circulation/wavFlo.png'

// design
import SmoothedgeDesign from 'assets/productsNew/siroflexPlus/circulation/SmoothedgeDesign.png'
import opencellDesign from 'assets/productsNew/siroflexPlus/circulation/opencellDesign.png'
import utrathinDesign from 'assets/productsNew/siroflexPlus/circulation/utrathinDesign.png'

export default function EterniaCirculation() {
  return (
    <section className="bg-white blade-bottom-padding-lg">
      <div className=" font-regular blade-top-padding blade-bottom-padding-lg">
        <div className="w-container">
          <h2 className="text-center font-medium ">
            An Innovative Sirolimus Stent with Extreme{' '}
            <br className="md:block hidden" /> Flexibility for Complex Lesions
          </h2>
        </div>

        <div className="md:block hidden">
          <img src={curveProduct} alt="Stent" className="w-full h-auto" />
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden block">
        <div className="w-full">
          <img src={curveProductSM} alt="Stent" className="w-full h-auto" />
        </div>

        <div className="mt-6 grid gap-6">
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
              ' Enhancing trackability, crossability, and radial force, while reducing the risk of restenosis and thrombosis',
            ]}
            classNames="md:ml-[25%] "
          />

          <Flag
            img={drugCoating}
            title=" Perfect drug coating ensures systematic and sustained drug
                  release to the target lesion"
            list={[
              'Coated with Sirolimus drug- biodegradable polymers mix using highly automated process',
            ]}
            classNames="md:ml-[50%] "
          />
        </div>

        <div className="mt-6 grid gap-6">
          <Flag
            img={SmoothedgeDesign}
            title="Perfectly engineered smooth edges"
            list={[`Preventing artery injury or dissection`]}
          />
          <Flag
            img={utrathinDesign}
            title="Enhanced deliverability with 60 μm ultrathin struts "
            list={[
              'Enhanced deliverability with 60 μm ultrathin struts ',
              'Reducing deep wall trauma',
            ]}
            classNames="md:ml-[25%] "
          />

          <Flag
            img={drugCoating}
            title=" Perfect drug coating ensures systematic and sustained drug release to the target lesion"
            list={[
              'Coated with Sirolimus drug- biodegradable polymers mix using highly automated process',
            ]}
            classNames="md:ml-[50%] "
          />
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
          <div className="w-full 2xl:h-32 h-28">
            <img
              src={img}
              alt={title}
              className="w-fit h-full object-contain"
            />
          </div>
          <svg
            className="absolute top-0 bottom-0 my-auto right-full pr-3 md:block hidden 2xl:w-96 w-48 h-10"
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
              return <li key={keyVal}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
