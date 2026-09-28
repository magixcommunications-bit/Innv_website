import React from 'react'
import { useNavigate } from 'react-router-dom'

import realtime from 'assets/home/standards/realtime.svg'
import dynamic from 'assets/home/standards/dynamic_coronary.svg'
import bridging from 'assets/home/standards/bridging_gaps.svg'
import revolutionising from 'assets/home/standards/visualisation.svg'
import pioneering from 'assets/home/standards/pioneering.svg'
import lowset_radiation from 'assets/home/standards/lowset_radiation.svg'

const cards = [
  {
    title: 'Realtime QCA results in just 2 Seconds​',
    icon: realtime,
  },
  {
    title: 'Superior resolution with zero extra (Radiation and Contrast)​',
    icon: lowset_radiation,
  },
  {
    title: 'Dynamic coronary roadmap to precision',
    icon: dynamic,
  },
  {
    title: 'Bridging gaps with <br /> tele-echocardiography',
    icon: bridging,
  },
  {
    title:
      'Revolutionizing <br /> visualization with virtual FFR and 3D Rendering',
    icon: revolutionising,
  },
  {
    title: 'Pioneering <br /> drug-eluting balloons',
    icon: pioneering,
  },
]

import { MasterBtn } from 'atoms/buttons'

type ICard = (typeof cards)[0]
export default function Standards() {
  const navigate = useNavigate()

  return (
    <section className="blade-bottom-padding-lg bg-[#F0F4F5] overflow-x-hidden standards-wrapper sm:pl-[10%] md:pl-0 ">
      <section className="blade-top-padding-lg md:pb-5 px-3 sm:w-containersm md:w-container">
        <section className="blade-bottom-padding flex items-start flex-col gap-3 lg:gap-5 max-w-7xl ">
          <h3 className="gsap-opacity-trans-appear font-medium leading-tight text-black ">
            Innovating for hearts, evolving lives
          </h3>

          <h5 className="gsap-opacity-trans-appear  font-regular text-black max-w-lg lg:max-w-none pb-3 md:pb-4 md:block hidden">
            We fuel innovation with heartfelt commitment, delivering{' '}
            <br className="lg:block hidden" /> cardiovascular solutions that
            touch countless lives.
          </h5>
          <h6 className="gsap-opacity-trans-appear font-regular text-black pb-3 md:pb-4 block md:hidden max-w-md">
            We fuel innovation with heartfelt commitment, delivering{' '}
            <br className="lg:block hidden" /> cardiovascular solutions that
            touch countless lives.
          </h6>

          <div className="btn-wrapper ">
            <MasterBtn
              aria-label="Innovation"
              extraClasses="gsap-opacity-trans-appear"
              type="button"
              color="orange"
              text="Innovation"
              size="base"
              onClick={() => {
                navigate('/innovation')
              }}
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-7 w-fit max-w-5xl 2xl:max-w-6xl pt-5 ">
          {cards.map((elem, index) => {
            const key = `${index}`
            return <Card data={elem} key={key} index={index} />
          })}
        </section>
      </section>
    </section>
  )
}

function Card({ data, index }: { index: number; data: ICard }) {
  const { icon, title } = data
  return (
    <article
      key={index}
      className="gsap-scale relative group rounded-[18px] bg-white border-1 flex flex-col items-start max-w-[332px] md:h-[210px] 2xl:h-[250px] h-auto w-full gap-3 border-gray border-solid  px-5 py-8 xl:p-6 2xl:p-7 2xl:pb-10 "
    >
      <img src={icon} className="md:h-12 h-12" alt={title} />
      <div className="pb-2 flex-0 flex items-start z-10">
        <h5
          className=" lg:w11/12  md:max-w-[280px] font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </article>
  )
}
