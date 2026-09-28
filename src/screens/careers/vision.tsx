import React, { useEffect } from 'react'
import icon from 'assets/careers/vision/list-icon.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

const visionList = [
  {
    title: 'Mission',
    icon: icon,
    statement:
      'In a world where access to affordable, quality healthcare is a pressing issue, we are on a mission to make a difference.',
  },
  {
    title: 'Purpose',
    icon: icon,
    statement:
      'At Innvolution, our purpose is clear—to make high-quality cardiovascular care accessible to everyone, everywhere.',
  },
  {
    title: 'Vision',
    icon: icon,
    statement:
      'Our vision is to contribute to a healthier and more sustainable world through responsible leadership, innovative solutions, and meaningful collaborations.',
  },
]

type ICard = (typeof visionList)[0]

const Vision = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vision-card-careers',
        {
          y: 150,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'back.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.vision-card-careers-parent',
            start: 'top 80%',
            toggleActions: 'restart none none reverse',
          },
        },
      )
      gsap.from('.text-appear-anim-vision', {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: '.text-appear-anim-vision',
          start: 'top 90%',
          toggleActions: 'restart none none reverse',
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg career-vision lg:h-screen lg:flex lg:items-end lg:min-h-[600px]">
      <div className="w-container-lg 2xl:w-container h-fit">
        <h2 className="text-appear-anim-vision lghidden text-white font-regular font-medium">
          More than <span className="font-light">just a job</span>
        </h2>

        <section className="vision-card-careers-parent lg:grid lg:grid-cols-3 lg:pt-16 2xl:pt-24">
          {visionList.map((elem, index) => {
            const key = `${index}`
            return <Card data={elem} key={key} />
          })}
        </section>
      </div>
    </section>
  )
}

export default Vision

function Card({ data }: { data: ICard }) {
  const { title, icon, statement } = data
  return (
    <article className="vision-card-careers relative vision-card-custom-border text-white self-stretch group bg-transparent flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-16 justify-between max-w-md lg:max-w-none w-full py-8 lg:px-8 lg:py-0 xl:px-6 2xl:px-16 ">
      <img
        src={icon}
        alt={title}
        aria-hidden
        className="h-12 md:h-14 w-12 md:w-14 xl:h-16 xl:w-16"
      />
      <div className="z-10">
        <h4 className="font-medium font-regular pb-2">{title}</h4>
        <p className="font-light max-w-xl">{statement}</p>
      </div>
    </article>
  )
}
