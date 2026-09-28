import React from 'react'

function Banner({
  bannerImage,
  bgImage,
  bannerClassName,
  titleClassName,
  productLogo,
  title,
  subtitle,
  className,
  flipImageClass,
}: {
  className?: string
  bannerImage: string
  bgImage: string
  bannerClassName: string
  titleClassName?: string
  productLogo: string
  title?: string
  subtitle?: string
  flipImageClass?: boolean | string
}) {
  return (
    <div
      className={` sm:h-[90vh] md:h-[70vh] min-h-[520px] md:min-h-[600px] 2xl:min-h-[700px] xl:h-screen
                bg-cover bg-center text-black flex flex-col items-center justify-center
                gap-7 xl:gap-[20px] 2xl:gap-[38px] relative overflow-hidden ${className}`}
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {flipImageClass ? (
        <div className="text-appear-anim">
          <img
            className={`${bannerClassName} ${flipImageClass} stent-image object-cover `}
            src={bannerImage}
            alt={title}
          />
        </div>
      ) : (
        <img
          className={`${bannerClassName} text-appear-anim stent-image object-cover `}
          src={bannerImage}
          alt={title}
        />
      )}
      <div
        className={`${titleClassName} flex flex-col lg:flex-row md:gap-y-4 gap-y-2 absolute bottom-7 xl:bottom-6 px-4 sm:px-12 left-0 right-0 mx-auto
      2xl:bottom-12 items-center gap-x-12 justify-center`}
      >
        <div className="w-[180px] sm:w-[180px] md:w-[180px] xl:w-[300px] xxl:w-auto 2xl:h-20 xl:h-16 h-12">
          <img
            src={productLogo}
            alt={title}
            className="text-appear-anim-delayed h-full object-contain"
          />
        </div>
        {title ? (
          <>
            <div
              className="text-appear-anim-delayed lg:block hidden w-full max-w-[180px] h-[2px] md:w-[2px] md:h-[100px] 
            rounded-full xl:h-[110px] 2xl:h-[140px] bg-gradient-to-b from-transparent via-black to-transparent"
            />
            <div className="">
              <h2
                className="text-appear-anim-delayed md:font-bold font-medium text-center 
              lg:text-left text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] sm:mt-3 2xl:text-[48px] leading-tight"
              >
                {title}
              </h2>
              <p
                className="text-appear-anim-delayed font-regular mt-1 2xl:mt-3 text-center lg:text-left text-sm md:text-base 
              2xl:text-xl tracking-wide leading-none"
              >
                {subtitle}
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Banner
