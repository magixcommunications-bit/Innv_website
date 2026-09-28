import React from 'react'
import { useNavigate } from 'react-router-dom'

import teamImageMobile from 'assets/about/team/teamImageMobile.jpg'
import teamImage from 'assets/about/team/team-img.jpg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MasterBtn } from 'atoms/buttons'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
  const navigate = useNavigate()

  return (
    <section className=" pt-3 lg:pt-6  md:pb-4 team-wrapper">
      <section className="blade-top-padding-lg pb-4 md:blade-bottom-padding-lg">
        <div className="blade-bottom-padding-lg  md:grid grid-cols-1 md:grid-cols-12   px-3 sm:w-container-sm gap-y-10">
          <div className=" col-start-1 lg:col-start-2 col-end-7 pb-4 md:pb-0">
            <h3 className="gsap-opacity-trans-appear font-medium leading-tight md:pt-2 block md:hidden mb-7 md:mt-0 lg:pt-1 2xl:pt-0">
              Bringing a change with <br className="md:block hidden" />
              like-minded people
            </h3>
            <div className="md:hidden block">
              <img
                src={teamImageMobile}
                alt="our team"
                className="gsap-opacity-trans-appear"
              />
            </div>
            <h3 className="gsap-opacity-trans-appear font-medium leading-tight md:pt-2 hidden md:block lg:pt-1 2xl:pt-0">
              Bringing a change with <br className="md:block hidden" />
              like-minded people
            </h3>

            <div className="gsap-opacity-trans-appear  btn-wrapper  place-content-start  pt-4 md:pt-5 lg:pt-8 md:grid hidden  ">
              <MasterBtn
                aria-label="Join us"
                type="button"
                color="black"
                text="Join our team"
                size="base"
                onClick={() => {
                  navigate('/careers')
                }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center mt-7 md:mt-0 items-start  gap-7 xl:gap-6 col-start-7 col-end-13 md:pl-5 lg:pl-10 w-11/12  ">
            <h6 className="gsap-opacity-trans-appear md:pt-2 sm:w-11/12 md:w-full leading-snug font-regular max-w-lg ">
              Our people, driven by a shared passion for interventional
              healthcare solutions, form the backbone of our success. Together,
              we embrace challenges, push boundaries, and inspire change – all
              while fostering an environment that nurtures growth and
              collaboration.
            </h6>
            <h6 className="gsap-opacity-trans-appear sm:w-11/12 md:w-full leading-snug  font-regular max-w-lg  ">
              Become a part of a collective force dedicated to making a lasting
              impact on global heart health.
            </h6>
          </div>

          <div className="gsap-opacity-trans-appear place-content-start  btn-wrapper mt-7 md:pt-5 lg:pt-8 md:hidden  grid  ">
            <MasterBtn
              aria-label="Join us"
              type="button"
              color="black"
              text="Join our team"
              size="base"
              onClick={() => {
                navigate('/careers')
              }}
            />
          </div>
        </div>

        <div className="grid-cols-12 md:grid hidden img-wrapper ">
          <div className="col-start-2 col-end-12">
            <img
              src={teamImage}
              alt="Our team"
              className="gsap-opacity-trans-appear"
            />
          </div>
        </div>
      </section>
    </section>
  )
}
