import React from 'react'

export const ResourceBanner = ({
  title,
  subTitle,
  preTitle,
  bgClasses,
  subTitleClasses,
}: {
  title: string | JSX.Element
  subTitle?: string
  preTitle?: string
  bgClasses: string
  subTitleClasses: string
}) => {
  return (
    <section
      className={`w-full bg-cover bg-right-bottom min-h-[550px] h-screen max-h-[600px] sm:max-h-[640px] md:h-[550px] lg:h-screen lg:max-h-screen ${bgClasses}`}
    >
      <div className="flex flex-col justify-center h-full gap-1 w-container-sm md:gap-2 lg:gap-4 ">
        <div className="translate-y-[15%]">
          {preTitle && (
            <h5
              className={`${subTitleClasses} pb-3 2xl:pb-4 text-center text-appear-anim text-white md:text-black ml-auto md:ml-0  mr-auto md:text-left font-regular`}
            >
              {preTitle}
            </h5>
          )}
          <h2
            className={` leading-none text-white md:text-black font-medium ml-auto md:ml-0  mr-auto  text-center md:text-left ${
              preTitle ? 'text-appear-anim-delayed' : 'text-appear-anim'
            }`}
          >
            {title}
          </h2>
          {subTitle && (
            <h5
              className={`${subTitleClasses} pt-3 2xl:pt-4 text-center text-appear-anim-delayed text-white md:text-black ml-auto md:ml-0  mr-auto md:text-left font-regular`}
            >
              {subTitle}
            </h5>
          )}
        </div>
      </div>
    </section>
  )
}
