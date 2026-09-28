import React from 'react'
import misson_heart from 'assets/about/mission/mission_heart.png'
import './index.css'

export const Mission = () => {
  return (
    <section className="blade-top-padding blade-bottom-padding-lg bg-center bg-cover bg-no-repeat ">
      <div className=" w-container-lg xl:w-container-sm flex flex-col gap-y-4 gap-x-7 xl:gap-x-20 2xl:gap-x-24 md:flex-row ">
        <h3
          style={{
            backgroundImage:
              'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
          }}
          className="gsap-opacity-trans-appear bg-clip-text text-transparent font-medium block md:hidden text-center"
        >
          Your partner at every stage{' '}
          <br className="hidden min-[400px]:block" /> of heart care
        </h3>

        <div className="flex-1 grid place-content-center place-items-center img-wrapper">
          <img
            src={misson_heart}
            className="gsap-opacity-trans-appear h-full  object-contain w-11/12 max-w-md md:max-w-none"
            alt="Human hand holding a heart showing love and compassion"
          />
        </div>
        <div className="basis-12 grow shrink flex flex-col justify-center items-start gap-3 ">
          <h3
            style={{
              backgroundImage:
                'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
            }}
            className="gsap-opacity-trans-appear bg-clip-text text-transparent font-medium hidden md:block"
          >
            Your partner at every stage <br className="md:hidde lg:block" /> of
            heart care
          </h3>
          <h6 className="gsap-opacity-trans-appear text-center md:text-left max-w-lg mx-auto md:mx-0 md:mt-1 xl:mt-3 font-regular md:max-w-[590px] ">
            At Innvolution, our mission is to improve heart care globally
            through interventional cardiology solutions. We are on our way to
            reaching all 766+ districts in India by 2030 with our diversified
            portfolio of imaging and consumable products in cardiology.
          </h6>
          <h6 className="gsap-opacity-trans-appear text-center md:text-left max-w-lg mx-auto md:mx-0  font-regular mt-1 xl:mt-3 md:max-w-[590px]">
            As a healthcare technology company, we work with the purpose of
            providing best-in-class solutions for precision diagnosis and
            personalized treatment for cardiovascular diseases.
          </h6>
        </div>
      </div>
    </section>
  )
}
