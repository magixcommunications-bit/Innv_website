import React, { useState } from 'react'

import team_section_heading from 'assets/about/leaders/logo.png'
import './index.css'
import { useAdmin } from 'store/store'

type CardProps = {
  name: string
  role: string
  image: string
  description: string
  profileURL: string
}

export const Leaders = () => {
  const { aboutData } = useAdmin()

  const [activeIndex, updateIndex] = useState(10)
  const updateState = (update: number) => {
    if (update === activeIndex) updateIndex(100)
    else updateIndex(update)
  }

  return (
    <>
      {aboutData.SECTION_5.length === 0 ? null : (
        <>
          <section className="blade-bottom-padding-lg blade-top-padding-lg">
            <div className="grid place-items-center place-content-center w-11/12 mx-auto ">
              <img
                src={team_section_heading}
                className="gsap-opacity-trans-appear object-contain h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36"
                alt="leadership experience"
                aria-hidden
              />
            </div>
            <section className="text-center px-3  pt-3 md:pt-4 lg:pt-6 blade-bottom-padding-sm">
              <h3 className="gsap-opacity-trans-appear font-medium bg-dark-to-black text-transparen bg-clip-text ">
                Over 100 years of <br className="sm:block hidden" /> combined
                leadership experience
              </h3>
            </section>
            <section className=" w-container-lg  2xl:w-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-5 xl:gap-5 2xl:gap-8   pt-5 md:pt-7  lg:pt-10">
              {aboutData.SECTION_5.map((elem, index: number) => {
                const key = `${index}`
                return (
                  <LeaderCard
                    activeIndex={activeIndex}
                    index={index}
                    onClick={updateState}
                    data={elem}
                    key={key}
                  />
                )
              })}
            </section>
          </section>
        </>
      )}
    </>
  )
}

export function LeaderCard({
  data,
  onClick,
  activeIndex,
  index,
}: { data: CardProps } & {
  activeIndex: number
  index: number
  onClick: (update: number) => void
}) {
  const { name, role, image, description, profileURL } = data

  let isActive = index === activeIndex
  return (
    <article className="gsap-opacity-trans-appear max-w-[350px] md:w-full  mx-auto w-11/12 ">
      <div className=" h-80 lg:h-[20rem] 2xl:h-96 ">
        <img
          src={image}
          className="h-full w-full object-[50%_-20px] object-cover rounded-md lg:object-top"
          alt={name}
        />
      </div>
      <div className="flex justify-between gap-3 items-center pt-4 ">
        <div>
          <span className=" text-xl md:text-2xl  block font-regular leading-snug  whitespace-nowrap">
            {name}
          </span>
          <span className="text-base font-normal font-regular text-black text-opacity-60">
            {role}
          </span>
        </div>
        <div>
          <a
            href={profileURL}
            className="grid mr-1 place-items-center  outline-offset-2 fill-[#2F66DE] opacity-80 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline outline-2 outline-[#2F66DE] rounded-sm transition-all "
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={32}
              height={32}
              x={0}
              y={0}
              viewBox="0 0 382 382"
              xmlSpace="preserve"
              className="h-7 md:h-8"
            >
              <g>
                <path
                  d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 0 1-9.246 9.246H286.73a9.247 9.247 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 0 1-9.246 9.246h-44.426a9.247 9.247 0 0 1-9.246-9.246V149.593a9.247 9.247 0 0 1 9.246-9.246h44.426a9.247 9.247 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                  style={{}}
                  fill="inherit"
                  className=" transition-colors "
                />
              </g>
            </svg>
          </a>
        </div>
      </div>

      <div
        className={`${
          isActive ? 'max-h-[300px] py-2 oapcity-0' : 'max-h-0 py-0 opacity-100'
        } overflow-hidden  px-1  transition-all duration-300 ease-in-out`}
      >
        <span className="text-sm lg:text-base font-regular leading-snug block  text-black text-opacity-80 ">
          {description}
        </span>
      </div>

      <div className="">
        <button
          type="button"
          aria-label="Read more/less"
          onClick={() => onClick(index)}
          className="font-medium w-full text-base text-orange flex items-center gap-1 mt-1 outline-offset-2 focus-visible:outline-orange"
        >
          <span className=" text-left ">
            {isActive ? 'Read Less' : 'Read More'}
          </span>
          <div>
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F69A4D"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F69A4D"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
    </article>
  )
}
