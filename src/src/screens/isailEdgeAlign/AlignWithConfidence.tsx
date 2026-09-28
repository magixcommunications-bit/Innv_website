import HeartImg from 'assets/isailEdgeAlign/Heart.png'
import OrangeRadialGradientDot from './OrangeRadialGradientDot'

export default function AlignWithConfidence() {
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

          /* Responsive grid size */
          backgroundSize: 'clamp(56px, 8vw, 72px) clamp(56px, 8vw, 72px)',

          /* Responsive LEFT-BOTTOM mask */
          WebkitMaskImage: `
      radial-gradient(
        ellipse clamp(500px, 80vw, 1400px)
                clamp(420px, 140vw, 900px)
        at 0% 100%,
        black 35%,
        transparent 70%
      )
    `,
          maskImage: `
      radial-gradient(
        ellipse clamp(500px, 80vw, 1400px)
                clamp(420px, 140vw, 900px)
        at 0% 100%,
        black 35%,
        transparent 70%
      )
    `,

          opacity: 0.45,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto h-auto pb-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex justify-center">
              <div className="w-full max-w-[500px]">
                <img
                  src={HeartImg}
                  alt=""
                  className="object-contain w-full h-full gsap-scale"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:col-span-2 gsap-stagger-bounce-parent">
              <div className="flex items-start gap-4 gsap-stagger-bounce">
                <div>
                  <OrangeRadialGradientDot height={25} width={25} />
                </div>
                <div className="text-base sm:text-xl xl:text-2xl">
                  <p className="text-[#12488c] font-bold">
                    New Class of Balloon
                  </p>{' '}
                  <p>Optimised shoulder length - 0.6 mm</p>
                </div>
              </div>
              <div className="flex items-start gap-4 gsap-stagger-bounce">
                <div>
                  <OrangeRadialGradientDot height={25} width={25} />
                </div>
                <div className="text-base sm:text-xl xl:text-2xl">
                  <p className="text-[#12488c] font-bold">
                    Mastering Complexity with the Seamless Power of 3T
                    Technology
                  </p>{' '}
                  <p>Transition-Free Design</p>
                  <p>0.41 mm Tapered Profile for Lesion Entry</p>
                  <p>2 mm Tri-Layered Atraumatic Tip</p>
                </div>
              </div>
              <div className="flex items-start gap-4 gsap-stagger-bounce">
                <div>
                  <OrangeRadialGradientDot height={25} width={25} />
                </div>
                <div className="text-base sm:text-xl xl:text-2xl">
                  <p className="text-[#12488c] font-bold">
                    Empowering Excellence in Cardiac Procedures
                  </p>
                  <div>
                    <p className="text-[#f58220] font-bold">
                      FlexDura Balloon Technology
                    </p>
                    <p>
                      Unique balloon formation with excellent wrap/re-wrap
                      capabilities
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#f58220] font-bold">
                      NavPro Technology
                    </p>
                    <p>
                      Smooth navigation and durable performance with enhanced
                      pushability and kink resistance
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 gsap-stagger-bounce">
                <div>
                  <OrangeRadialGradientDot height={25} width={25} />
                </div>
                <div className="text-base sm:text-xl xl:text-2xl">
                  <p>
                    A{' '}
                    <span className="text-[#12488c] font-bold">
                      Precision Tool
                    </span>{' '}
                    for segmental and edge-level optimization, ideal in complex
                    bifurcation or left main cases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
