import React from 'react'
import { MasterBtn } from 'atoms/buttons'
import { useNavigate } from 'react-router-dom'

export const JoinUs = () => {
  const navigate = useNavigate()

  return (
    <div className=" joinus-info bg-lightorange bg-[url(assets/bg-overlay/ellipse-bg.webp)] bg-cover bg-top blade-top-padding md:mt-0 blade-bottom-padding-lg md:pb-4 lg:pb-0 flex flex-col items-center">
      <div className="grid gap-12 place-content-center place-items-center blade-bottom-padding-lg">
        <h3 className="appear-anim-gsap text-center leading-10 px-4 font-medium mt-12 md:mt-0">
          Be a part of the Innvolution team!
        </h3>

        <div className="appear-card-gsap">
          <MasterBtn
            aria-label="Request accessories"
            type="button"
            color="black"
            text="Request an accessory"
            size="large"
            onClick={() => {
              navigate('/careers')
            }}
          />
        </div>
      </div>
    </div>
  )
}
