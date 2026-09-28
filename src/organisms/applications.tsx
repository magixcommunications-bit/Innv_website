import React from 'react'
import applications from 'assets/scoreflexNC/applications/applications.webp'

const Applications = ({
  title,
  subTitle,
  listTitle,
}: {
  title: JSX.Element
  subTitle: JSX.Element
  listTitle: string
}) => {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg font-regular bg-[url(assets/scoreflexNC/applications/bg.jpg)] bg-cover bg-top">
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2 px-3">
        {title}
      </h2> */}
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        {title}
      </h3>
      {subTitle}

      <div className="px-3 blade-top-margin">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:w-container md:gap-x-10 xl:gap-x-20 2xl:gap-x-40 lg:w-container-lg lg:justify-center">
          <div className="sm:max-w-sm sm:mx-auto lg:max-w-md 2xl:max-w-lg lg:mx-0">
            <h4 className="gsap-opacity-trans-appear text-black font-medium max-w-sm lg:max-w-md 2xl:max-w-lg py-3">
              {listTitle}
            </h4>
            <ul className="list-disc list-outside ml-5 xl:text-lg 2xl:text-xl 2xl:max-w-sm text-darkgray">
              <li className="gsap-opacity-trans-appear py-1">
                Lesion preparation for stents, scaffolds, drug-coated balloons
              </li>
              <li className="gsap-opacity-trans-appear py-1">
                Calcified and fibrotic lesions
              </li>
              <li className="gsap-opacity-trans-appear py-1">Ostial lesions</li>
              <li className="gsap-opacity-trans-appear py-1">
                Bifurcation lesions
              </li>
              <li className="gsap-opacity-trans-appear py-1">
                Long diffused lesions
              </li>
              <li className="gsap-opacity-trans-appear py-1">
                Small lesions without need of stenting
              </li>
              <li className="gsap-opacity-trans-appear py-1">
                In-stent restenosis
              </li>
            </ul>
          </div>
          <div className="grid place-content-center w-fit mx-auto lg:mx-0 my-8 md:my-0">
            <img
              src={applications}
              alt="Applications"
              className="gsap-opacity-trans-appear max-w-xl w-full mx-auto md:mx-0 md:max-w-sm xl:max-w-lg 2xl:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Applications
