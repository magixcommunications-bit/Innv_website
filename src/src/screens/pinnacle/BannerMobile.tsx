import React from 'react'
import pagelogo from 'assets/pinnacle/pinnacle-logo.png'

export default function BannerMobile() {
  return (
    // <div className="bg-[#371101] bg-[url('assets/pinnacle/banner/bgMob.jpg')] h-[650px] bg-center bg-cover bg-no-repeat">
    <div className="bg-[#371101] bg-[url('assets/pinnacle/banner/pm.png')] min-[500px]:bg-[url(assets/pinnacle/banner/pmd.jpg)] h-[650px] bg-[60%_50%] min-[500px]:bg-[70%_0%] bg-cover bg-no-repeat">
      <div className="flex items-end blade-bottom-padding h-full">
        <div className="px-3 max-w-3xl 2xl:max-w-4xl relative w-container-sm blade-top-padding">
          <div className=" flex-col grow-0 shrink flex items-start justify-center gap-0">
            <div className="h-[52px] w-[120px] md:h-14 lg:h-16  ">
              <img
                className="h-full w-fit object-cover"
                src={pagelogo}
                alt="logo of premier elite"
              />
            </div>

            <div>
              <h3
                style={{
                  backgroundImage:
                    'linear-gradient(186deg, #FFF -96.64%, #F69A4D 109.37%)',
                }}
                className="bg-clip-text text-transparent font-medium"
              >
                Pinnacle
              </h3>
            </div>
          </div>

          <div className="w-full h-[2px] bg-orange rounded-full max-w-[150px] mb-5 mt-3"></div>

          <div className="flex-1 flex-col items-start text-white">
            <h6 className="font-regular leading-snug  ">
              Fixed, Flat-Panel, Fully Digital Cath Lab
            </h6>
            <ol className="list-disc font-light text-sm pl-7 mt-3">
              <li>Real time image acquisition</li>
              <li>1344x1344 high-resolution image</li>
              <li>Smallest footprint</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
