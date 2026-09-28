import React from 'react'

const items = [
  {
    title: 'Intuitive interface ',
    subtitle:
      'User-friendly tab-based interface for streamlined patient workflow, screen control, and image processing.',
  },
  {
    title: "World's smallest Cath Lab",
    subtitle:
      'The smallest fixed flat-panel Cath Lab that saves on civil work and installation time.',
  },
]

export default function UserExperience() {
  return (
    <section className="bg-[url('assets/bg-overlay/ellipse-bg.webp')] bg-cover bg-center bg-[#371101] blade-top-padding-lg blade-bottom-padding">
      <div className="text-center grid place-content-center place-items-center gap-1">
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight text-white xl:pt-2">
          User experience at your convenience
        </h3>
        <h6 className="gsap-opacity-trans-appear text-white font-light tracking-wider max-w-md 2xl:max-w-xl px-3 pt-3 pb-10 md:pb-6 lg:pt-6 lg:blade-bottom-padding-sm">
          We have designed Agile to make your workflow as effortless as possible
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-5 md:blade-top-padding-sm blade-bottom-padding-sm md:gap-10 lg:gap-12 z-10 w-container-lg max-w-lg md:max-w-5xl ">
        {items.map((elem, index: number) => {
          return <Card key={index} data={elem} />
        })}
      </div>
    </section>
  )
}

function Card({ data }: { data: any } & { withPadding?: boolean }) {
  const { title, subtitle } = data
  return (
    <article className="gsap-opacity-trans-appear  z-[10] bg-white relative h-full min-h-full py-4 px-7 border border-white border-opacity-30 rounded-md">
      <div className="rounded-md overflow-hidden relative z-10">
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26.5815"
            cy="26.5366"
            r="26.0488"
            stroke="#F69A4D"
            strokeWidth="0.698355"
            strokeDasharray="2.49 2.49"
          />
          <circle cx="26.5813" cy="26.5368" r="21.6482" fill="#F69A4D" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5531 20.4678C28.5531 19.3128 27.6167 18.3765 26.4617 18.3765C25.3067 18.3765 24.3704 19.3128 24.3704 20.4678V21.5569C24.3704 23.3117 22.9478 24.7342 21.193 24.7342H20.107C18.952 24.7342 18.0156 25.6706 18.0156 26.8256C18.0156 27.9806 18.952 28.9169 20.107 28.9169H21.193C22.9478 28.9169 24.3704 30.3395 24.3704 32.0943V33.1833C24.3704 34.3383 25.3067 35.2747 26.4617 35.2747C27.6167 35.2747 28.5531 34.3383 28.5531 33.1833V32.0958C28.5531 30.3402 29.9763 28.9169 31.732 28.9169H32.8225C33.9775 28.9169 34.9138 27.9806 34.9138 26.8256C34.9138 25.6706 33.9775 24.7342 32.8225 24.7342H31.732C29.9763 24.7342 28.5531 23.311 28.5531 21.5553V20.4678Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="py-2 px-1 md:pb-4 md:pt-4 z-10">
        <span className="text-xl xl:text-2xl 2xl:text-[28px] font-medium  block mt-3 md:mt-0 pb-2 md:pb-4 tracking-wide leading-tight">
          {title}
        </span>

        <h6 className="font-normal md:pb-3 pt-1 leading-tight font-regular max-w-xs xl:max-w-sm  pb-3">
          {subtitle}
        </h6>
      </div>
    </article>
  )
}
