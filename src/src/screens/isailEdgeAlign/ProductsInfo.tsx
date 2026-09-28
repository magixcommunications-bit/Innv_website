import OrderingInformationTable from './OrderingInformationTable'

const specifications = [
  {
    label: 'Proximal Shaft',
    value: '2.0F',
  },
  {
    label: 'Distal Shaft',
    value: '2.7F',
  },
  {
    label: 'Catheter Working Length',
    value: '140 cm',
  },
  {
    label: 'Tip Length',
    value: '2.00 mm (Ø2.50 – 3.00 mm); 2.50 mm (Ø3.50 mm)',
  },
  {
    label: 'Crossing Profile (Ø3.0 mm)',
    value: '0.83 mm',
  },
  {
    label: 'Coating',
    value: 'Hydrophilic',
  },
  {
    label: 'Nominal Pressure (NP)',
    value: '12 atm',
  },
  {
    label: 'Rated Burst Pressure (RBP)',
    value: '22 atm',
  },
  {
    label: 'Balloon Diameters (mm)',
    value: '2.50, 2.75, 3.00, 3.50',
  },
  {
    label: 'Balloon Lengths (mm)',
    value: '8, 10, 12, 15',
  },
  {
    label: 'Guiding Catheter Compatibility',
    value: '5F',
  },
  {
    label: 'Compatible Guidewire',
    value: '0.014"',
  },
]

export default function ProductsInfo() {
  return (
    <div className="relative bg-[#12488c]">
      {/* Dashed Top Fade Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      {/* Dashed Bottom Fade Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] "
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
         repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
      `,
          WebkitMaskImage: `
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
      `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center">
            <p className="text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl gsap-opacity-trans-appear">
              <span className="font-regular">i</span>Sail{' '}
              <span className="text-xl sm:text-2xl md:text-3xl font-regular">
                Edge Align
              </span>
              <sup className="text-[12px] sm:text-sm font-regular align-super">
                TM
              </sup>
            </p>
          </div>
          <div className="flex justify-center">
            <OrderingInformationTable />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <h3 className="text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl gsap-opacity-trans-appear">
              Device Technical Specifications
            </h3>
            <div className="gsap-stagger-bounce-parent">
              <div className="grid grid-cols-7 px-0 text-white sm:px-6 lg:grid-cols-5">
                <div className="col-span-3 lg:col-span-2">
                  <h6 className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
                    Features
                  </h6>
                </div>
                <div className="col-span-4 lg:col-span-3">
                  <h6 className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
                    <span className="font-regular">i</span>Sail{' '}
                    <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-regular">
                      Edge Align
                    </span>
                    <sup className="text-[12px] sm:text-sm font-regular align-super">
                      TM
                    </sup>
                  </h6>
                </div>
              </div>
              <hr className="mb-2 text-white" />
              {specifications.map((val, ind) => {
                return (
                  <div
                    key={ind}
                    className="grid grid-cols-7 gap-2 px-0 sm:px-6 lg:grid-cols-5 gsap-stagger-bounce lg:gap-0"
                  >
                    <div className="col-span-3 lg:col-span-2">
                      <p className="text-base text-white sm:text-lg md:text-xl xl:text-2xl">
                        {val.label}
                      </p>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <p className="text-base text-white sm:text-lg md:text-xl xl:text-2xl">
                        {val.value}
                      </p>
                    </div>
                  </div>
                )
              })}
              <hr className="mt-2 text-white sm:mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
