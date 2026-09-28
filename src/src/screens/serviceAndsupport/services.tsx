import React, { useRef, useState } from 'react'
import img1 from 'assets/serviceAndsupport/services/01.webp'
import img2 from 'assets/serviceAndsupport/services/02.webp'
import img3 from 'assets/serviceAndsupport/services/03.webp'
import img4 from 'assets/serviceAndsupport/services/04.webp'
import img5 from 'assets/serviceAndsupport/services/05.webp'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const data = [
  {
    id: 0,
    title: 'Distributor training',
    para: 'Our commitment to technical excellence extends to our partnerships with distributors. We provide comprehensive technical expertise to help distributors fully grasp the breadth of our solutions, including product diversity, technical specifications, and unique advantages.',
    img: img1,
  },
  {
    id: 1,
    title: 'Solution implementation',
    para: 'Our solution implementation service empowers you to deploy cutting-edge cardiovascular solutions in a sustainable manner. Our services encompass installation, application training, and educational support to ensure successful integration.',
    img: img2,
  },
  {
    id: 2,
    title: 'Performance optimization',
    para: 'Our dedicated team offers expert guidance to enhance process efficiency and optimize cardiovascular technology, resulting in improved overall performance.',
    img: img3,
  },
  {
    id: 3,
    title: 'Preventive maintenance',
    para: 'While our solutions are renowned for their reliability, our dedicated team conducts routine inspections to ensure they consistently meet your clinical requirements and performance expectations.',
    img: img4,
  },
  {
    id: 4,
    title: 'Upgrading services',
    para: "We're committed to keeping your cardiovascular technology current and up-to-date. Our team collaborates with you to identify the most suitable and advanced technology suite tailored to your specific cardiovascular solution needs.",
    img: img5,
  },
]

const Services = () => {
  const [selected, setSelected] = useState<number>(0)
  const imageRef = useRef<HTMLDivElement>(null)

  return (
    <section className="services-section w-full lg:w-4/5 bg-lightgray">
      <div className="w-container 2xl:pl-[70px] blade-top-padding blade-bottom-padding-lg ">
        <h3 className="font-medium text-center lg:text-left blade-bottom-padding">
          Explore our service portfolio
        </h3>
        <div className="flex flex-col lg:flex-row items-start gap-x-20 lg:gap-x-10 xl:gap-x-16 min-[1440px]:gap-x-28 gap-y-6 md:gap-y-12 relative lg:w-[85vw]">
          <div className="grid w-full lg:w-fit gap-y-6 flex-col lg:h-[850px]">
            {data.map((item, index) => (
              <div
                className={`lg:w-[400px] xl:w-[500px] 2xl:w-[620px]  ${
                  selected === index
                    ? 'bg-white rounded-2xl'
                    : 'bg-trasnparent rounded-2xl'
                } transition-all duration-300 lg:duration-500`}
                key={index}
              >
                <div
                  onClick={() => {
                    if (selected === index && window.innerWidth < 1024)
                      setSelected(-1)
                    else setSelected(index)
                  }}
                  className={`flex w-full py-6 px-4 sm:px-6 md:px-8 items-center justify-between cursor-pointer ${
                    selected === index ? 'cursor-auto' : 'rounded-2xl border'
                  }`}
                >
                  <div className="flex items-center flex-row ">
                    {/* Left icon */}
                    <svg
                      className="h-7 xsl:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      width="71"
                      height="32"
                      viewBox="0 0 71 32"
                      fill="none"
                    >
                      <circle
                        cx="35.311"
                        cy="15.7124"
                        r="15.3023"
                        stroke={`${selected === index ? '#F69A4D' : '#000'}`}
                        strokeWidth="0.81826"
                      />
                      <circle
                        opacity="0.2"
                        cx="54.4321"
                        cy="15.7124"
                        r="15.3023"
                        stroke={`${selected === index ? '#F69A4D' : '#000'}`}
                        strokeWidth="0.81826"
                      />
                      <circle
                        opacity="0.2"
                        cx="16.184"
                        cy="15.7114"
                        r="15.3023"
                        stroke={`${selected === index ? '#F69A4D' : '#000'}`}
                        strokeWidth="0.81826"
                      />
                    </svg>
                    <h5
                      className={`${
                        selected === index ? 'text-orange' : 'text-black'
                      } font-medium text-left px-3 xl:px-0 xl:ml-6 max-w-md transition-all duration-300 lg:duration-500`}
                    >
                      {item.title}
                    </h5>
                  </div>

                  {/* Side icons : +/- */}
                  <span
                    className={`${
                      selected === index ? 'text-black' : 'text-green'
                    } `}
                  >
                    <svg
                      className={`${selected === index ? 'hidden' : 'block'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.84689 0H11.11V7.09091H18V10.9091H11.11V18H6.84689V10.9091H0V7.09091H6.84689V0Z"
                        fill="#000"
                      />
                    </svg>
                    <svg
                      className={`cursor-pointer ${
                        selected === index ? 'block' : 'hidden'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                    >
                      <path
                        d="M6.84689 0.00893555H11.11V0H18V3.81818H11.11V3.80894H6.84689V3.81818H0V0H6.84689V0.00893555Z"
                        fill="#F69A4D"
                      />
                    </svg>
                  </span>
                </div>

                {/* open part */}
                <div
                  className={`text-black grid px-4 sm:px-6 md:px-8 transition-all duration-300 lg:duration-500  grid-rows-[0fr] ${
                    selected === index
                      ? 'grid-rows-[1fr] lg:pb-6 xl:pb-8 rounded-b-2xl'
                      : ''
                  }`}
                >
                  <div className="min-h-0 overflow-hidden xl:pl-24 xl:pr-7">
                    <span className="2xl:text-xl font-regular ">
                      {item.para}
                    </span>
                    <div className="w-full py-6 lg:hidden ">
                      <img
                        className="w-full h-auto object-cover object-center"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side image - large screens */}
          <div className="hidden lg:block lg:sticky top-20">
            <SwitchTransition>
              <CSSTransition
                key={selected}
                nodeRef={imageRef}
                timeout={300}
                classNames="services-carousel-image"
              >
                <div
                  ref={imageRef}
                  className=" flex flex-col items-center justify-center gap-2 "
                >
                  <img
                    src={data[selected]?.img}
                    alt="Icon"
                    className="w-full h-auto max-w-3xl 2xl:ml-auto"
                  />
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
