import React from 'react'
import misson_heart from 'assets/about/mission/mission_heart.png'
// import './index.css'

export const ProductSpecifications = ({ data }: { data: any }) => {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg bg-center bg-cover bg-no-repeat bg-lightgray">
      <div className="w-container-lg xl:w-container-sm flex flex-col gap-y-4 gap-x-7 md:gap-x-20 md:flex-row">
        <div className="basis-12 grow shrink flex flex-col justify-center items-start gap-3 ">
          <h3
            style={{
              backgroundImage:
                'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
            }}
            className="gsap-opacity-trans-appear bg-clip-text text-transparent font-medium "
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <h5
            dangerouslySetInnerHTML={{ __html: data.desc }}
            className="gsap-opacity-trans-appear text-left max-w-lg mx-auto md:mx-0 md:mt-1 xl:mt-3 font-regular md:max-w-[590px] "
          />
          <h5
            dangerouslySetInnerHTML={{ __html: data.desc2 }}
            className="gsap-opacity-trans-appear text-left max-w-lg mx-auto md:mx-0  font-regular mt-1 xl:mt-3 md:max-w-[590px]"
          />
        </div>
        <div className="flex-1 ">
          <img
            src={data.image}
            className="gsap-opacity-trans-appear h-full  object-contain w-full max-w-md md:max-w-none"
            alt={data.title}
          />
        </div>
      </div>
    </section>
  )
}
