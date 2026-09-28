import image from 'assets/diamondBack360/mechanism-of-action/orbital atherectomy.webp'
import tabletImg from 'assets/diamondBack360/mechanism-of-action/orbital atherectomy-tablet.webp'
import React from 'react'

const data = [
  {
    id: 1,
    title: 'Single, 6 FR, 1.25 mm crown treats 2.5 – 4.0 mm vessels',
    features: [
      'Eccentrically mounted crown sands hard plaque and deliver pulsatile force°',
      'Healthy, elastic tissues flexes away from crown minimize 1.2 vessel damage',
    ],
  },
  {
    id: 2,
    title:
      'Continuous flow reduces risk of thermal injury during treatment, minimizing heat damage, slow flow and subsequent need for revascularization',
    features: [],
  },
  {
    id: 3,
    title:
      'With Diamondback 360 Coronary Orbital Atherectomy devices we can safely sand the intimal calcium with particulate size 2μm – which is smaller than a capillary vessel',
    features: [],
  },
]

export function MechanismOfAction() {
  return (
    <div className="blade-top-padding blade-bottom-padding-lg mechanism-wrapper ">
      <div className="w-container-sm 2xl:w-container flex gap-x-20 2xl:gap-x-28 lg:flex-row items-center">
        <div className="hidden lg:flex w-[260px] xl:w-[500px] xl:h-[500px] 2xl:w-auto 2xl:h-[460px]">
          <img
            className="gsap-opacity-trans-appear w-full hidden xl:block h-full object-contain min-[1600px]:pt-4"
            src={image}
            alt="Before and after of Orbital Atherectomy"
          />
          <img
            className="gsap-opacity-trans-appear w-full h-full xl:hidden object-cover"
            src={tabletImg}
            alt="Before and after of Orbital Atherectomy"
          />
        </div>

        <div className="md:basis-32 flex-1">
          <h2 className="gsap-opacity-trans-appear text-2xl text-center lg:text-left lg:text-3xl leading-tight 2xl:text-4xl font-medium">
            Mechanism of action
          </h2>
          <p className="gsap-opacity-trans-appear text-lg lg:text-2xl text-center lg:text-left font-medium mt-2 lg:mt-6 xl:mt-8">
            Orbiting, bi-directional, diamond-coated crown
          </p>
          <div className="mt-6 sm:mt-8 lg:hidden">
            <img
              className="gsap-opacity-trans-appear w-full h-full object-cover md:object-contain"
              src={image}
              alt="Before and after of Orbital Atherectomy"
            />
          </div>

          {/* <ul className="mt-6 sm:mt-8 lg:mt-6 xl:mt-8"> */}
          <ul className="">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <li className="gsap-opacity-trans-appear flex gap-3 pt-6">
                  <div className="flex items-center flex-col">
                    <div className="flex-0 grid place-content-center">
                      <svg
                        className="mt-1.5 h-4 w-4 xl:h-5 xl:w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5938 3.53024C14.5938 1.99934 13.3528 0.758301 11.8219 0.758301V0.758301C10.291 0.758301 9.04996 1.99934 9.04996 3.53024V4.97159C9.04996 7.29853 7.16361 9.18488 4.83667 9.18488H3.39491C1.86401 9.18488 0.622971 10.4259 0.622971 11.9568V11.9568C0.622971 13.4877 1.86401 14.7288 3.39491 14.7288H4.83647C7.16352 14.7288 9.04996 16.6152 9.04996 18.9423V20.3838C9.04996 21.9147 10.291 23.1558 11.8219 23.1558V23.1558C13.3528 23.1558 14.5938 21.9147 14.5938 20.3838V18.942C14.5938 16.6151 16.4802 14.7288 18.8071 14.7288H20.2485C21.7794 14.7288 23.0204 13.4877 23.0204 11.9568V11.9568C23.0204 10.4259 21.7794 9.18488 20.2485 9.18488H18.8071C16.4802 9.18488 14.5938 7.29852 14.5938 4.97159V3.53024Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 h-full hidden lg:block">
                      <div className="h-full w-[2px] dash-line"></div>
                    </div>
                  </div>
                  <div className="">
                    <span
                      className="text-lg font-regular"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <ul className="list-disc pl-6 flex flex-col ">
                      {item.features.map((feature, key) => (
                        <li key={key} className="text-base font-regular pt-4">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* <div className="mt-1  pl-[10px] items-center hidden lg:flex">
                  <div className="h-6 w-[2px] dash-line"></div>
                </div> */}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
