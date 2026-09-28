import React from 'react'
import siroflexDesign from 'assets/productsNew/siroflex/siroflex-design.png'
import one from 'assets/productsNew/siroflex/siroflexDesign/one.png'
import two from 'assets/productsNew/siroflex/siroflexDesign/two.png'
import three from 'assets/productsNew/siroflex/siroflexDesign/three.png'

export default function SiroflexDesign() {
  return (
    <section className="bg-gray">
      <div className=" font-regular blade-top-padding blade-bottom-padding-lg">
        {/* <h2 className="font-medium text-center w-container">
          An Innovative Sirolimus Stent with Extreme
          <br className="lg:block hidden" /> Flexibility for Complex Lesions
        </h2> */}

        <div className="relative 2xl:min-h-[32rem] xl:min-h-[28rem] min-h-[26rem] lg:flex  items-end w-full lg:pt-20 pt-5 bg-gradient-to-r from-orange-100 via-white to-orange-100">
          <div className="lg:absolute inset-0 top-0 w-full">
            <img
              src={siroflexDesign}
              alt="Product"
              className="lg:object-contain object-cover w-full mx-auto 2xl:min-h-[10rem]"
            />
          </div>

          <div className="relative mx-auto xl:px-20 font-regular w-container-lg">
            <div className="flex flex-wrap 2xl:gap-8 gap-4 lg:flex-nowrap justify-between lg:mt-0 mt-10">
              <Flag
                children={<PointerOne />}
                img={one}
                title="Spacious open cell design"
                list={[
                  `Helps navigate tortuous and serpentine vessels`,
                  'Providing high flexibility',
                  'Providing enhanced side branch access',
                ]}
              />

              <Flag
                children={<PointerTwo />}
                img={two}
                title="Enhanced deliverability with 60 μm ultrathin struts "
                list={[
                  'Preventing stent thrombosis & restenosis',
                  'Reducing deep wall trauma',
                ]}
              />

              <Flag
                children={<PointerThree />}
                img={three}
                title="Perfectly engineered smooth edges"
                list={['Preventing artery injury or dissection']}
              />
            </div>
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
  children?: any
}

const Flag: React.FC<FlagProps> = ({
  img,
  title,
  subtitle,
  list,
  classNames,
  children,
}) => {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col flex-wrap md:gap-4 gap-2 lg:flex-nowrap 2xl:px-4 max-w-md ${classNames}`}
      >
        <div className="relative h-fit">
          <div className="w-full 2xl:h-24 h-20">
            <img
              src={img}
              alt={title}
              className="w-auto h-full object-contain"
            />
          </div>
          <div className="lg:block hidden">{children}</div>
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

const PointerOne = () => {
  return (
    <svg
      className="absolute bottom-full left-[50%] w-[10rem]"
      viewBox="0 0 181 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0349 5.94334L20.0349 4.94334L19.1396 4.94334L19.041 5.83314L20.0349 5.94334ZM174.721 11.2767C177.666 11.2767 180.054 8.88886 180.054 5.94335C180.054 2.99783 177.666 0.610008 174.721 0.610008C171.775 0.610008 169.387 2.99783 169.387 5.94335C169.387 8.88886 171.775 11.2767 174.721 11.2767ZM2.52907 172.923L21.0288 6.05353L19.041 5.83314L0.541246 172.703L2.52907 172.923ZM20.0349 6.94334L174.721 6.94335L174.721 4.94335L20.0349 4.94334L20.0349 6.94334Z"
        fill="url(#paint0_linear_5093_14460)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5093_14460"
          x1="57.8482"
          y1="173.366"
          x2="57.8482"
          y2="5.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F78D28" />
          <stop offset="0.29" stop-color="#F7902A" />
          <stop offset="0.55" stop-color="#F79B31" />
          <stop offset="0.78" stop-color="#F7AC3E" />
          <stop offset="1" stop-color="#F8C44F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const PointerTwo = () => {
  return (
    <svg
      className="absolute bottom-full left-[-1rem] w-[4rem]"
      viewBox="0 0 69 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.0881 5.82591L61.0881 4.82591L62.0492 4.82591L62.0873 5.78629L61.0881 5.82591ZM5.75999 11.1593C2.81447 11.1593 0.426658 8.77144 0.426658 5.82592C0.426658 2.8804 2.81447 0.492581 5.75999 0.492582C8.70551 0.492582 11.0933 2.8804 11.0933 5.82593C11.0933 8.77144 8.70551 11.1593 5.75999 11.1593ZM66.7059 172.735L60.0889 5.86552L62.0873 5.78629L68.7043 172.656L66.7059 172.735ZM61.0881 6.82591L5.75999 6.82593L5.75999 4.82593L61.0881 4.82591L61.0881 6.82591Z"
        fill="url(#paint0_linear_5093_14459)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5093_14459"
          x1="47.563"
          y1="173.249"
          x2="47.563"
          y2="5.27257"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F78D28" />
          <stop offset="0.29" stop-color="#F7902A" />
          <stop offset="0.55" stop-color="#F79B31" />
          <stop offset="0.78" stop-color="#F7AC3E" />
          <stop offset="1" stop-color="#F8C44F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const PointerThree = () => {
  return (
    <svg
      className="absolute bottom-full left-[-8rem] w-[10rem] scale-x-[-1]"
      viewBox="0 0 181 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0349 5.94334L20.0349 4.94334L19.1396 4.94334L19.041 5.83314L20.0349 5.94334ZM174.721 11.2767C177.666 11.2767 180.054 8.88886 180.054 5.94335C180.054 2.99783 177.666 0.610008 174.721 0.610008C171.775 0.610008 169.387 2.99783 169.387 5.94335C169.387 8.88886 171.775 11.2767 174.721 11.2767ZM2.52907 172.923L21.0288 6.05353L19.041 5.83314L0.541246 172.703L2.52907 172.923ZM20.0349 6.94334L174.721 6.94335L174.721 4.94335L20.0349 4.94334L20.0349 6.94334Z"
        fill="url(#paint0_linear_5093_14460)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5093_14460"
          x1="57.8482"
          y1="173.366"
          x2="57.8482"
          y2="5.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F78D28" />
          <stop offset="0.29" stop-color="#F7902A" />
          <stop offset="0.55" stop-color="#F79B31" />
          <stop offset="0.78" stop-color="#F7AC3E" />
          <stop offset="1" stop-color="#F8C44F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
