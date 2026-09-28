import image from '../../assets/diamondBack360/crown.webp'

const data = [
  {
    id: 1,
    text: 'Reduces severe calcium and allows the healthy tissue to flex away',
  },
  {
    id: 2,
    text: 'Creates minuscule particulates (most smaller than a red blood cell)',
  },
  { id: 3, text: 'Provides bi-directional sanding' },
]

export function ClassicCrown() {
  return (
    <div className="classic-crown blade-top-padding blade-bottom-padding-lg">
      <div className="w-container-lg 2xl:w-container-sm flex flex-col items-center">
        <h3 className="gsap-opacity-trans-appear font-medium  text-white">
          Classic crown
        </h3>
        <p className="gsap-opacity-trans-appear font-light mt-6 text-base lg:text-lg 2xl:text-xl max-w-lg text-white text-center tracking-wide">
          The Diamondback 360 Coronary OAS utilizes a 1.25 mm eccentrically
          mounted diamond-coated crown.
        </p>
        <div className="mt-12 md:mt-20 2xl:mt-28 w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
          <img
            className="gsap-opacity-trans-appear w-full h-full object-cover"
            src={image}
            alt="Diamond coated crown"
          />
        </div>
        <div className="gsap-stagger-parent mt-12 sm:mt-16 mb-6 xl:mb-0 2xl:mt-28 justify-center gap-y-6 items-start flex flex-col md:flex-row gap-x-6 xl:gap-x-12">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="gsap-stagger flex max-w-sm 2xl:max-w-[360px] item-center gap-x-4"
              >
                <div className="flex mt-1 lg:mt-2 items-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="93"
                    viewBox="0 0 18 93"
                    fill="none"
                    className="hidden md:block"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.153 3.09347C11.153 1.94591 10.2227 1.01562 9.07513 1.01562C7.92756 1.01562 6.99728 1.94591 6.99728 3.09347V4.17555C6.99728 5.91902 5.58391 7.33239 3.84044 7.33239L2.76144 7.33239C1.61388 7.33239 0.683594 8.26268 0.683594 9.41024C0.683594 10.5578 1.61388 11.4881 2.76144 11.4881H3.84043C5.58391 11.4881 6.99728 12.9015 6.99728 14.6449V15.7269C6.99728 16.8745 7.92756 17.8048 9.07513 17.8048C10.2227 17.8048 11.153 16.8745 11.153 15.7269V14.6464C11.153 12.9021 12.567 11.4881 14.3113 11.4881H15.3949C16.5425 11.4881 17.4727 10.5578 17.4727 9.41024C17.4727 8.26268 16.5425 7.33239 15.3949 7.33239L14.3114 7.33239C12.567 7.33239 11.153 5.91834 11.153 4.17401V3.09347Z"
                      fill="#F69A4D"
                    />
                    <line
                      x1="9.56641"
                      y1="23.2217"
                      x2="9.5664"
                      y2="92.4734"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="md:hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.04857 3.24223C9.04857 1.59904 10.3806 0.266968 12.0238 0.266968C13.667 0.266968 14.9991 1.59903 14.9991 3.24222V4.79147C14.9991 7.28806 17.023 9.31195 19.5196 9.31195L21.0648 9.31195C22.708 9.31195 24.04 10.644 24.04 12.2872C24.04 13.9304 22.708 15.2625 21.0648 15.2625H19.5196C17.023 15.2625 14.9991 17.2863 14.9991 19.7829V21.332C14.9991 22.9752 13.667 24.3072 12.0238 24.3072C10.3806 24.3072 9.04857 22.9752 9.04857 21.332V19.7848C9.04857 17.2872 7.02383 15.2625 4.52619 15.2625H2.97503C1.33184 15.2625 -0.000225067 13.9304 -0.000225067 12.2872C-0.000225067 10.644 1.33184 9.31194 2.97503 9.31194L4.52608 9.31195C7.02379 9.31195 9.04857 7.28716 9.04857 4.78946V3.24223Z"
                      fill="#001850"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.04857 3.24223C9.04857 1.59904 10.3806 0.266968 12.0238 0.266968C13.667 0.266968 14.9991 1.59903 14.9991 3.24222V4.79147C14.9991 7.28806 17.023 9.31195 19.5196 9.31195L21.0648 9.31195C22.708 9.31195 24.04 10.644 24.04 12.2872C24.04 13.9304 22.708 15.2625 21.0648 15.2625H19.5196C17.023 15.2625 14.9991 17.2863 14.9991 19.7829V21.332C14.9991 22.9752 13.667 24.3072 12.0238 24.3072C10.3806 24.3072 9.04857 22.9752 9.04857 21.332V19.7848C9.04857 17.2872 7.02383 15.2625 4.52619 15.2625H2.97503C1.33184 15.2625 -0.000225067 13.9304 -0.000225067 12.2872C-0.000225067 10.644 1.33184 9.31194 2.97503 9.31194L4.52608 9.31195C7.02379 9.31195 9.04857 7.28716 9.04857 4.78946V3.24223Z"
                      fill="url(#paint0_linear_295_2077)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_295_2077"
                        x1="12.0199"
                        y1="-5.42186"
                        x2="9.2436"
                        y2="26.4098"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F69A4D" />
                        <stop offset="1" stopColor="#FF7400" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="font-light tracking-wider text-white text-lg lg:text-xl 2xl:text-2xl">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
        <p className="gsap-opacity-trans-appear mt-6 lg:mt-12 text-white text-base lg:text-lg 2xl:text-xl xl:max-w-xl max-w-lg opacity-70 text-center font-light tracking-wider">
          GlideAssist is an innovative solution that allows for tracking, easier
          removal and smoother repositioning of the device-especially in
          challenging anatomies.
        </p>
      </div>
    </div>
  )
}
