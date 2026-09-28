import React from 'react'
import curveProductSM from 'assets/productsNew/siroflexCurve/curve-left-alligned.png'
import v2v from 'assets/productsNew/siroflexCurve/circulation-v2v.png'
import drugCoating from 'assets/productsNew/siroflexCurve/circulation-drug-coating.png'
import wavflo from 'assets/productsNew/siroflexCurve/circulation-wavFlo.png'

// pointer
import p1 from 'assets/productsNew/siroflexCurve/p1.png'
import p2 from 'assets/productsNew/siroflexCurve/p2.png'
import p3 from 'assets/productsNew/siroflexCurve/p3.png'

// design
import openCell from 'assets/productsNew/siroflexCurve/curveDesign/open-cell-design.png'
import edges from 'assets/productsNew/siroflexCurve/curveDesign/smooth-edges.png'
import utrathin from 'assets/productsNew/siroflexCurve/curveDesign/utrathin.png'

export default function EterniaCirculation() {
  return (
    <section className="bg-white font-regular blade-bottom-padding-lg">
      {' '}
      <div className="  blade-top-padding blade-bottom-padding-lg">
        <div className="w-container">
          <h2 className="text-center font-medium ">
            An Innovative Sirolimus Stent with Extreme{' '}
            <br className="md:block hidden" /> Flexibility for Complex Lesions
          </h2>
        </div>

        {/* Desktop View */}
        <div className="lg:flex xxl:gap-[10%] gap-[5%] hidden blade-top-padding-sm relative">
          <div className="flex-1 ">
            <img src={curveProductSM} alt="Stent" className="w-full h-auto" />
          </div>

          <div className="flex-1 mt-10 flex flex-col gap-10 xxl:pr-[10%] pr-10">
            <Flag
              pointerImg={p1}
              pointerCls=" right-[110%] w-[130%]"
              img={v2v}
              title="Proprietary V2V S-connectors"
              list={[
                `Valley-to-valley long 'S' Connectors`,
                'For higher flexibility, deliverability, radial strength, and conformability',
                'Lowering stent dislodgement force to minimum 6N in 12 mm stents',
              ]}
            />

            <Flag
              pointerImg={p2}
              pointerCls="right-[110%] w-[240%]"
              img={wavflo}
              title="Proprietary WavFlo Struts"
              list={[
                'DES with thin struts up to 65 μm',
                ' Enhancing trackability, crossability, and radial force, while reducing the risk of restenosis and thrombosis',
              ]}
              classNames="md:ml-[15%] "
            />

            <Flag
              pointerImg={p3}
              pointerCls="right-[110%] w-[400%]"
              img={drugCoating}
              title=" Perfect drug coating ensures systematic and sustained drug
                  release to the target lesion"
              list={[
                'Coated with Sirolimus drug- biodegradable polymers mix using highly automated process',
              ]}
              classNames="md:ml-[30%] "
            />
          </div>
        </div>

        <div className="lg:flex xxl:gap-[10%] gap-[5%] hidden blade-top-padding">
          <div className="flex-1 mt-10 flex flex-col gap-10 xxl:pl-[10%] pl-10">
            <Flag
              pointerImg={p1}
              pointerCls=" left-[110%] rotate-180 w-[130%]"
              img={edges}
              title="Perfectly engineered smooth edges"
              list={[`Preventing artery injury or dissection`]}
              classNames="md:ml-[30%] !flex-row-reverse"
            />
            <Flag
              pointerImg={p2}
              pointerCls=" left-[110%] rotate-180 w-[240%]"
              img={utrathin}
              title="Enhanced deliverability with 65 μm ultrathin struts"
              list={[
                // 'Enhanced deliverability with 65 μm ultrathin struts',
                'Reducing deep wall trauma',
              ]}
              classNames="md:ml-[15%] !flex-row-reverse"
            />

            <Flag
              pointerImg={p3}
              pointerCls=" left-[110%] rotate-180 w-[400%]"
              img={openCell}
              title="Spacious open cell design"
              list={[
                'Helps navigate tortuous and serpentine vessels',
                'Providing high flexibility',
                'Providing enhanced side branch access ',
              ]}
              classNames="!flex-row-reverse"
            />
          </div>
          <div className="flex-1 scale-x-[-1]">
            <img src={curveProductSM} alt="Stent" className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <MobileView />
    </section>
  )
}

const MobileView = () => {
  return (
    <>
      {' '}
      <div className="lg:hidden block">
        <div className="w-10/12 max-w-lg">
          <img src={curveProductSM} alt="Stent" className="w-full h-auto" />
        </div>

        <div className="mt-12 grid gap-6">
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
              'DES with thin struts up to 65 μm',
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

        <div className="mt-14 w-10/12 max-w-lg ml-auto scale-x-[-1]">
          <img src={curveProductSM} alt="Stent" className="w-full h-auto" />
        </div>

        <div className="grid gap-6">
          <Flag
            img={edges}
            title="Perfectly engineered smooth edges"
            list={[`Preventing artery injury or dissection`]}
          />
          <Flag
            img={utrathin}
            title="Enhanced deliverability with 65 μm ultrathin struts "
            list={[
              'Enhanced deliverability with 65 μm ultrathin struts ',
              'Reducing deep wall trauma',
            ]}
            classNames="md:ml-[25%] "
          />

          <Flag
            img={openCell}
            title="Spacious open cell design"
            list={[
              'Helps navigate tortuous and serpentine vessels',
              'Providing high flexibility',
              'Providing enhanced side branch access ',
            ]}
            classNames="md:ml-[50%] "
          />
        </div>
      </div>
    </>
  )
}

interface FlagProps {
  img: string
  pointerImg?: string
  pointerCls?: string
  title: string
  subtitle?: string
  classNames?: string
  list: string[]
}

const Flag: React.FC<FlagProps> = ({
  img,
  pointerImg,
  pointerCls,
  title,
  subtitle,
  list,
  classNames,
}) => {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col flex-wrap xxl:gap-10 xl:gap-5 gap-2 lg:flex-nowrap px-4 xxl:max-w-lg max-w-md ${classNames}`}
      >
        <div className="relative h-fit w-fit inline">
          <div className="2xl:w-32 w-28 2xl:h-32 h-28">
            <img
              src={img}
              alt={title}
              className="w-fit h-full object-contain"
            />
          </div>
          <div
            className={`${pointerCls} lg:flex hidden items-center h-full object-contain absolute top-0`}
          >
            <img className="w-full object-contain" src={pointerImg} alt="" />
          </div>
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
