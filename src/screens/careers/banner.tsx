import React from 'react'

export default function Banner() {
  return (
    <section className="careers-wrapper bg-[url(assets/careers/banner.webp)] bg-cover bg-right">
      <div className="w-full min-h-[600px] max-h-[650px] lg:max-h-[700px] xl:max-h-[920px] h-screen banner-wrapper pb-10 md:pb-0">
        <div className="w-container-sm px-6 flex-col h-full flex w-fit md:w-container-lg 2xl:w-container justify-center md:gap-2 gap-1 lg:gap-4 blade-top-padding blade-bottom-padding">
          <div className="flex items-end gap-x-3">
            <h2 className="hidden lg:block pb-1 lg:pb-1 text-white md:text-black text-center md:text-left font-regular translate-y-4 opacity-0">
              Inspired by
            </h2>
            <h3 className="lg:hidden pb-1 lg:pb-1 text-white md:text-black text-center md:text-left font-regular translate-y-4 opacity-0">
              Inspired by
            </h3>
            <h1 className="hidden lg:block text-white md:text-black font-medium text-center md:text-left  translate-y-4 opacity-0">
              Purpose
            </h1>
            <h2 className="lg:hidden text-white md:text-black font-medium text-center md:text-left  translate-y-4 opacity-0">
              Purpose
            </h2>
          </div>
          <div className="flex items-end gap-x-3 max-[320px]:ml-6 ml-12 md:ml-24 xl:ml-32">
            <h2 className="hidden lg:block pb-1 lg:pb-1 text-white md:text-black text-center md:text-left font-regular translate-y-4 opacity-0">
              Powered by
            </h2>
            <h3 className="lg:hidden whitespace-nowrap pb-1 lg:pb-1 text-white md:text-black text-center md:text-left font-regular translate-y-4 opacity-0">
              Powered by
            </h3>
            <h1 className="hidden lg:block text-white md:text-black font-medium text-center md:text-left  translate-y-4 opacity-0">
              People
            </h1>
            <h2 className="lg:hidden text-white md:text-black font-medium text-center md:text-left  translate-y-4 opacity-0">
              People
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
