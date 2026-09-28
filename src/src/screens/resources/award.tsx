import React from 'react'
import award from 'assets/resources/award.png'
import { useNavigate } from 'react-router-dom'
import { MasterBtn } from 'atoms/buttons'

const Innovating = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-cover bg-center blade-top-padding blade-bottom-padding-lg xl:py-32">
      <div className="w-container grid place-content-center lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-2 xl:gap-x-20">
        <div className="lg:grid hidden h-full place-content-center">
          <img
            className="h-full w-full"
            src={award}
            alt="Dr. Gaurav Agarwal World’s Leading Leader 2023 Award"
          />
        </div>
        <div className="max-w-lg text-center lg:text-left flex flex-col justify-center mx-auto lg:max-w-none lg:mx-0 xl:max-w-2xl xl:ml-auto">
          <h3 className="font-medium ">
            World's Best and Emerging Brand Award 2023
          </h3>
          <img
            className="lg:h-72 xl:h-96 2xl:h-fit mt-6 lg:hidden"
            src={award}
            alt="Dr. Gaurav Agarwal World’s Leading Leader 2023 Award"
          />
          <h6 className="font-regular text-center lg:text-left text-[#4D4D4D] mt-6">
            Innvolution has been honored with the prestigious WCRC INT{' '}
            <span className="font-medium">
              World's Best and Emerging Brand Award
            </span>
            , and our Managing Director, Mr. Gaurav Agarwal, has received the
            esteemed <span className="font-medium">World's Leading Leader</span>{' '}
            2023 award at{' '}
            <span className="font-medium">
              Palace of Westminster, House of Lords
            </span>
            , where he was joined by distinguished figures like{' '}
            <span className="font-medium">
              Lord Swaraj Paul and Lord Michael
            </span>
            .
          </h6>
          <div className="mt-6 lg:mt-8 lg:block flex justify-center">
            <MasterBtn
              type="button"
              color="orange"
              text="See all awards"
              size="base"
              onClick={() => {
                navigate('/awards-and-recognitions')
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovating
