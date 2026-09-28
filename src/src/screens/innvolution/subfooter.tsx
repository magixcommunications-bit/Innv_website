import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { MasterBtn } from 'atoms/buttons'

const Subfooter = () => {
  const navigate = useNavigate()

  return (
    <section className="innovation-subfooter-gradient bg-cover bg-top">
      <div className="w-container h[60vh] flex flex-col gap-8 items-center justify-center blade-top-padding-lg blade-bottom-padding-lg">
        <h5 className="gsap-opacity-trans-appear text-center max-w-xs 2xl:hidden md:max-w-md lg:max-w-none font-regular appear-anim-gsap">
          As we continue to grow our R&D, we see possibilities{' '}
          <br className="hidden lg:block" /> for new solutions in the field of
          cardiovascular solutions.
        </h5>
        <h4 className="gsap-opacity-trans-appear text-center hidden 2xl:block max-w-xs md:max-w-md lg:max-w-none font-regular appear-anim-gsap">
          As we continue to grow our R&D, we see possibilities{' '}
          <br className="hidden lg:block" /> for new solutions in the field of
          cardiovascular solutions.
        </h4>
        <h3 className="gsap-opacity-trans-appear font-medium -mt-2 max-w-xs md:max-w-md lg:max-w-none text-center appear-anim-gsap">
          Need a revamp for your practice?
        </h3>

        <div className="gsap-opacity-trans-appear py-2 md:py-3">
          <MasterBtn
            type="button"
            color="black"
            text="Talk to us"
            size="large"
            onClick={() => {
              navigate('/contact-us')
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Subfooter
