import React, { useEffect } from 'react'
import { MasterBtn } from 'atoms/buttons'
import logoSVG from 'assets/globals/logo_svg.svg'

import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/contact-us')
  }
  return (
    <section className="">
      <section className="grid  gap-y-10  grid-cols-1 lg:grid-cols-11 divide-x-1 divide-solid divide-gray  border-t-1 border-solid border-gray">
        <div className="col-start-1 col-end-2 lg:col-end-5 blade-top-padding blade-bottom-padding lg:block hidden ">
          <div className="grid place-content-center h-full">
            <img
              src={logoSVG}
              alt="Innvolutions's logo"
              className="h-24 lg:h-28"
            />
          </div>
        </div>
        <div
          className=" col-start-1 lg:col-start-5 col-end-12 blade-top-padding blade-bottom-padding md:pl-4"
          style={{
            background:
              'linear-gradient(128deg, rgba(249, 239, 231, 0.00) 39.99%, rgba(246, 154, 77, 0.33) 123%)',
          }}
        >
          <div className="px-1 md:px-3 w-[95%] xl:w-10/12 mx-auto blade-top-padding-sm blade-bottom-padding-sm">
            <h3 className="pb-3 font-medium font-regular bg-clip-text text-transparent bg-text-dark">
              Always here to help!
            </h3>
            <h5 className="font-medium text-black pb-4  text-opacity-70 md:block w-11/12 hidden">
              Have a question? Let us know, and we&apos;ll be reaching out.
            </h5>
            <span className="text-sm font-regular leading-tight text-black text-opacity-70 md:hidden w-10/12 block">
              Have a question? Let us know, and we&apos;ll be reaching out.
            </span>
            <div className="pt-6 md:pt-8">
              <MasterBtn
                type="button"
                color="black"
                text="Contact Us"
                size="large"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

/*


    <div className=" blade-top-padding-sm max-w-xl ">
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div
                  className={` ${
                    errors.query ? 'bg-danger' : 'bg-transparent'
                  } flex `}
                >
                  <input
                    className={` ${
                      errors.query
                        ? 'focus:text-danger text-danger'
                        : 'text-black focus:text-black'
                    } flex-1 placeholder:lightgray font-regular bg-white  border-l-2 border-t-2 border-b-2 border-orange border-solid border-opacity-60 placeholder:font-light tracking-wider placeholder:text-dark py-3 md:py-4 pl-3 md:pl-4 pr-5 outline-none text-sm md:text-lg`}
                    size={1}
                    id=""
                    placeholder="What are you looking for?"
                    {...register('query')}
                  />

                  <FilledBtn
                    color="orange"
                    text="Submit"
                    size="base"
                    type="submit"
                  />
                </div>
              </form>
            </div>


*/
