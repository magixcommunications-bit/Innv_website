import React from 'react'
import plusIcon from 'assets/stents/landingPage/stentCarousal/plus-icon.svg'
import line from 'assets/pinnacle/dash-line.png'

type TableFeaturesProps = {
  title: string
  subTitle: string
  image: string
  featuresList: JSX.Element[]
}
const TableFeatures = ({
  title,
  subTitle,
  image,
  featuresList,
}: TableFeaturesProps) => {
  return (
    <div className="black-gradient blade-top-padding-lg">
      <section className=" bg-[url(assets/pinnacleAgile/tableFeatures/bg.png)] bg-cover bg-no-repeat w-full">
        <div className="w-container lg:w-container-lg 2xl:pt-0  gap-y-6 flex flex-col md:flex-row lg:items-center lg:gap-x-10 xl:gap-x-20 justify-between blade-bottom-padding-lg">
          <div className="flex-shrink-0">
            <h3
              style={{
                backgroundImage:
                  'linear-gradient(113deg, #F69A4D 37.57%, #FFF 194.48%)',
              }}
              className="gsap-opacity-trans-appear  bg-clip-text text-transparent font-bold mb-2 lg:mb-4"
            >
              {title}
            </h3>
            <h4 className="gsap-opacity-trans-appear text-white hidden 2xl:block font-regular blade-bottom-margin xl:blade-bottom-margin-sm max-[834px]:text-xl">
              {subTitle}
            </h4>
            <h5 className="gsap-opacity-trans-appear text-white block 2xl:hidden font-regular blade-bottom-margin xl:blade-bottom-margin-sm max-[834px]:text-xl">
              {subTitle}
            </h5>

            <div className="gsap-opacity-trans-appear md:hidden pt-2 pb-5">
              <img className="w-full max-w-sm " src={image} alt={title} />
            </div>

            <div className="gsap-opacity-trans-appear flex items-baseline gap-3 ">
              <div className="blade-top-margin-sm flex flex-col items-center w-fit relative">
                <img height={16} width={16} src={plusIcon} alt="List item 1" />
                <img className="h-40 lg:h-56" src={line} alt="Dash line" />
                <img
                  height={16}
                  width={16}
                  className="absolute top-1/3"
                  src={plusIcon}
                  alt="List item 2"
                />
                <img
                  height={16}
                  width={16}
                  className="absolute top-2/3"
                  src={plusIcon}
                  alt="List item 3"
                />
                <img
                  height={16}
                  width={16}
                  className="absolute top-[100%]"
                  src={plusIcon}
                  alt="List item 4"
                />
              </div>
              <div className="flex flex-col gap-[36px] min-[320px]:gap-[34px] md:gap-[32px] lg:gap-[49px] xl:gap-[49px] 2xl:gap-[43px] text-[#EFEFEF]">
                {featuresList.map((listItem, index) => {
                  return (
                    <React.Fragment key={index}>
                      <h6 className="text-[14px]  font-normal font-regular  min-[320px]:text-base md:hidden">
                        {listItem}
                      </h6>
                      <h5 className="md:block hidden font-normal font-regular ">
                        {listItem}
                      </h5>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="gsap-opacity-trans-appear hidden md:block 2xl:pt-6">
            <img
              className="w-auto lg:h-auto blade-top-margin lg:mt-0 min-[1800px]:h-[32rem] px-6 md:px-0 object-center "
              src={image}
              alt={title}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TableFeatures
