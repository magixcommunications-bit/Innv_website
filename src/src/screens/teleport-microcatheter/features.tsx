import React from 'react'
import plusIcon from 'assets/teleportMicroCatheter/features/plusIcon.svg'
import productImage from 'assets/teleportMicroCatheter/features/features.png'

const Features = () => {
  const data = [
    {
      heading: 'Tip',
      desc: 'A robust tungsten radiopaque short tip',
    },
    {
      heading: 'Body',
      desc: 'An inner stainless steel body of hybrid braiding and coil construction with dual material ultra-thin polymer outer jacket for great distal flexibility',
    },
    {
      heading: 'Coating',
      desc: 'A distal catheter segment with a lubricious hydrophilic coating',
    },
  ]

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(180deg, #10171D 0%, #272E38 100%)',
        }}
      >
        <div className="text-white blade-top-padding blade-bottom-padding-lg w-container lg:grid md:grid-cols-2 gap-8 xsl:grid-cols-[auto_auto] xl:gap-20">
          <div className="w-fit ">
            <h3 className="font-medium">Features and benefits</h3>

            <div className="gradient-mask-features max-w-md w-full py-6 lg:hidden bg-[url(assets/teleportMicroCatheter/features/bg.webp)] bg-contain bg-center bg-no-repeat">
              <img
                src={productImage}
                alt="Microcatheter features and benefits"
              />
            </div>

            <h6 className="font-light max-w-md ">
              Teleport Microcatheter is designed for ultimate torquability,
              trackability, and safety to maximize guidewire support and luminal
              access in the most complex lesions.
            </h6>
            <div className="blade-top-margin flex flex-col gap-9">
              {data.map((elem, idx) => {
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <img
                      className="h-5 w-5 lg:h-6 lg:w-6"
                      src={plusIcon}
                      alt="Orange plus icon"
                    />
                    <div>
                      <h4 className="max-md:text-lg max-lg:text-xl font-medium -mt-1 md:-mt-2 lg:-mt-[10px]">
                        {elem.heading}
                      </h4>
                      <h6 className="font-light max-w-md">{elem.desc}</h6>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="hidden gradient-mask-features lg:grid w-full place-content-center bg-[url(assets/teleportMicroCatheter/features/bg.webp)] bg-contain bg-center bg-no-repeat ">
            <img
              src={productImage}
              alt="Microcatheter features and benefits"
              className="h-full w-full "
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
