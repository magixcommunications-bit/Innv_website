import Logo from 'assets/isailEdgeAlign/logo.png'
import TargetIcon from 'assets/isailEdgeAlign/target.png'
import OrangeRadialGradientDot from './OrangeRadialGradientDot'

export default function DifferentiationStrategy() {
  return (
    <div className="relative bg-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#88b5f8',

          backgroundImage: `
      linear-gradient(to right, rgba(200,214,230,0.6) 8px, transparent 1px),
      linear-gradient(to bottom, rgba(200,214,230,0.6) 8px, transparent 1px)
    `,

          backgroundSize: 'clamp(56px, 8vw, 72px) clamp(56px, 8vw, 72px)',

          WebkitMaskImage: `
      radial-gradient(
        ellipse clamp(480px, 80vw, 1000px)
                clamp(420px, 140vw, 1000px)
        at 100% 0%,
        black 35%,
        transparent 70%
      )
    `,
          maskImage: `
      radial-gradient(
        ellipse clamp(480px, 80vw, 1000px)
                clamp(420px, 140vw, 1000px)
        at 100% 0%,
        black 35%,
        transparent 70%
      )
    `,

          opacity: 0.45,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center w-full">
            {/* <p className="text-2xl text-center sm:text-3xl md:text-4xl  gsap-opacity-trans-appear text-[#12488c] font-bold">
              <span className="text-[#f58220] font-regular">i</span>Sail{' '}
              <span className="text-[#f58220] font-regular">Edge Align</span>
              <sup className="text-sm text-darkgray font-regular align-super">
                TM
              </sup>
            </p> */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-lg">
              <img
                src={Logo}
                alt=""
                className="object-contain w-full h-full gsap-opacity-trans-appear"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex flex-col order-2 gap-10 lg:col-span-2 lg:order-1">
              <h3 className="text-xl font-bold sm:text-[28px] md:text-3xl text-[#12488c] gsap-opacity-trans-appear">
                Differentiation Strategy for Vessel Optimization
              </h3>
              <div className="flex flex-col gap-5 gsap-stagger-bounce-parent">
                <div className="flex items-start gap-4 gsap-stagger-bounce">
                  <div>
                    <OrangeRadialGradientDot height={25} width={25} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl xl:text-2xl">
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        Engineered for Precision
                      </span>{' '}
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        <span className="text-[#f58220] font-regular">i</span>
                        Sail{' '}
                        <span className="text-[#f58220] font-regular">
                          Edge Align
                        </span>
                        <sup className="text-[12px] sm:text-sm text-darkgray font-regular align-super">
                          TM
                        </sup>
                      </span>{' '}
                      is a uniquely engineered Edge Align solution for treatment
                      with precision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 gsap-stagger-bounce">
                  <div>
                    <OrangeRadialGradientDot height={25} width={25} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl xl:text-2xl">
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        <span className="text-[#f58220] font-regular">
                          Edge Align
                        </span>
                        <sup className="text-[12px] sm:text-sm text-darkgray font-regular align-super">
                          TM
                        </sup>
                      </span>{' '}
                      <span className="text-[#12488c] font-bold sm:text-2xl md:text-[28px]">
                        Technology
                      </span>{' '}
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        <span className="text-[#f58220] font-regular">i</span>
                        Sail
                      </span>{' '}
                      ensures controlled and targeted expansion of
                      intent-to-treat-vessel segment in a precise manner
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 gsap-stagger-bounce">
                  <div>
                    <OrangeRadialGradientDot height={25} width={25} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl xl:text-2xl">
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        Precision in Complex Bifurcations
                      </span>{' '}
                      With{' '}
                      <span className="font-bold text-[#12488c] sm:text-2xl md:text-[28px]">
                        <span className="text-[#f58220] font-regular">i</span>
                        Sail{' '}
                        <span className="text-[#f58220] font-regular">
                          Edge Align
                        </span>
                        <sup className="text-[12px] sm:text-sm text-darkgray font-regular align-super">
                          TM
                        </sup>
                      </span>{' '}
                      , you get
                    </p>
                    <div>
                      <div className="flex items-start gap-4">
                        <div>
                          <OrangeRadialGradientDot height={10} width={10} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl xl:text-2xl text-[#12488c] font-bold">
                            Precise control
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div>
                          <OrangeRadialGradientDot height={10} width={10} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl xl:text-2xl text-[#12488c] font-bold">
                            Reduced risk of unintended vessel injury
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div>
                          <OrangeRadialGradientDot height={10} width={10} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl xl:text-2xl">
                            <span className="text-[#12488c] font-bold">
                              Procedural efficiency,
                            </span>{' '}
                            especially in complex bifurcations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-xl lg:max-w-2xl">
                <img
                  src={TargetIcon}
                  alt=""
                  className="object-contain w-full h-full gsap-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
