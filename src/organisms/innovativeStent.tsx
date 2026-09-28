export type InnovativeStentDataList = {
  id: number
  title: string
  subtitle: string | null
  points: string[]
}

type InnovativeStentData = {
  title: string
  stentImageMobile: string
  stentImage: string
  data: InnovativeStentDataList[]
}

export function InnovativeStent({
  title,
  data,
  stentImage,
  stentImageMobile,
}: InnovativeStentData) {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-x-12 gap-y-8 pb-2 xl:pb-0 innovative-stent-wrapper overflow-hidden">
      <div className="pt-4 xl:blade-top-padding-lg flex-1 blade-bottom-padding-lg min-[1800px]:pb-0">
        <div className="xl:pl-20 2xl:pl-28 flex flex-col items-center xl:items-start px-4">
          <h3 className="font-medium text-xl md:text-2xl 2xl:text-3xl text-white max-w-[460px] md:max-w-[560px] xl:max-w-[700px]">
            {title}
          </h3>
          <img
            src={stentImageMobile}
            className="w-auto xl:hidden pr-4 pt-4"
            alt="Innovative stent image"
          />
          <ul className="mt-8 lg:mt-12 flex flex-col gap-y-8 w-full max-w-[460px] md:max-w-[560px]">
            {data.map((item, key) => (
              <li key={key} className="flex gap-x-2">
                <span className="mt-1 2xl:mt-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5938 3.53024C14.5938 1.99934 13.3528 0.758301 11.8219 0.758301V0.758301C10.291 0.758301 9.04996 1.99934 9.04996 3.53024V4.97159C9.04996 7.29853 7.16361 9.18488 4.83667 9.18488H3.39491C1.86401 9.18488 0.622971 10.4259 0.622971 11.9568V11.9568C0.622971 13.4877 1.86401 14.7288 3.39491 14.7288H4.83647C7.16352 14.7288 9.04996 16.6152 9.04996 18.9423V20.3838C9.04996 21.9147 10.291 23.1558 11.8219 23.1558V23.1558C13.3528 23.1558 14.5938 21.9147 14.5938 20.3838V18.942C14.5938 16.6151 16.4802 14.7288 18.8071 14.7288H20.2485C21.7794 14.7288 23.0204 13.4877 23.0204 11.9568V11.9568C23.0204 10.4259 21.7794 9.18488 20.2485 9.18488H18.8071C16.4802 9.18488 14.5938 7.29852 14.5938 4.97159V3.53024Z"
                      fill="#F69A4D"
                    />
                  </svg>
                </span>
                <div className="">
                  <p className="text-white font-medium text-lg md:text-xl 2xl:text-2xl">
                    {item.title}
                  </p>

                  {item.subtitle ? (
                    <p className="text-white text-base mt-4 max-w-[420px font-light leading-[28px] tracking-wider">
                      {item.subtitle}
                    </p>
                  ) : null}

                  {item.points.length ? (
                    <ul className="list-disc pl-4 mt-4 flex flex-col gap-y-4">
                      {item.points.map((point, key) => (
                        <li
                          key={key}
                          className="font-light text-white text-base max-w-sm xl:max-w-md tracking-wider leading-[28px]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image-wrapper relative flex justify-center my-auto 2xl:justify-start 2xl:items-start items-center xl:w-[52%] 2xl:w-[50%] h-min min-[1800px]:-mb-12">
        <img
          src={stentImage}
          alt="Innovative stent image"
          className="hidden xl:block w-auto 2xl:w-full xl:h-[700px] 2xl:h-[90%] object-contain xl:object-cover xl:object-left"
        />
      </div>
    </div>
  )
}
