import React from 'react'
import Img1 from 'assets/numen/Asset 7.png'
import Img2 from 'assets/numen/Asset 6.png'
import Img3 from 'assets/numen/Asset 5.png'

export default function ConformabilityBox() {
  const conformabilityData = [
    {
      icon: Img1,
      title: 'Saccular Aneurysm',
    },
    {
      icon: Img2,
      title: 'Aneurysm with daughter sac',
    },
    {
      icon: Img3,
      title: 'Bilobed Aneurysm',
    },
  ]

  return (
    <div className="flex flex-col w-full gap-6 px-4 py-8 mx-auto max-w-7xl md:py-12 md:gap-12 lg:gap-16">
      <div className="flex flex-col w-full gap-3">
        <h3 className="text-[#00568f] text-3xl md:text-4xl lg:text-[48px] font-medium">
          Conformability
        </h3>
        <p className="font-regular md:text-xl lg:text-[24px]">
          Conform to various aneurysm morphologies and pack remnant spaces with
          exceptional conformability
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 gsap-stagger2-parent sm:gap-5 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
        {conformabilityData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 gsap-stagger2 md:gap-5"
          >
            <div className="rounded-[50px] lg:rounded-[85px] md:rounded-[62px] w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] flex items-center justify-center shadow-[0px_7px_29px_0px_#a6dcff]">
              <img
                src={data.icon || '/placeholder.svg'}
                alt={data.title}
                className="w-[100%] h-[100%] object-contain"
              />
            </div>
            <p className="text-lg font-bold text-center md:text-xl lg:text-[24px]">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
