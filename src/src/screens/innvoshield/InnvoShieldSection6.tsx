import InnvoShieldAeroSeries from './tables/InnvoShieldAeroSeries'
import InnvoShieldLiteSeries from './tables/InnvoShieldLiteSeries'
import InnvoShieldPrimeSeries from './tables/InnvoShieldPrimeSeries'

function InnvoShieldSection6() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#eff6ff] to-purple-50">
      {/* <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 400 300"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 67) % 400}
              cy={(i * 43) % 300}
              r="6"
              fill="rgba(255,255,255,0.15)"
            />
          ))}
        </svg>
      </div> */}
      <div className="h-auto py-20 max-w-[1440px] mx-auto relative z-10 px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Technical Specifications
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            Comprehensive weight comparison and protection specifications
          </p>
        </div>
        <div className="flex flex-col">
          <InnvoShieldAeroSeries />
          <InnvoShieldLiteSeries />
          <InnvoShieldPrimeSeries />
        </div>
        <div className="p-4 gsap-opacity-trans-appear">
          <h3 className="text-2xl text-[#f58b26] font-bold">Note:</h3>
          <ul className="flex flex-col gap-1 pl-3 ml-4 text-xl list-disc font-regular">
            <li>
              Weights are net in kgs for regular fabric and subject to ± 7%
              manufacturing tolerance.
            </li>
            <li>
              All aprons are approximately the same weight (same pattern).
            </li>
            <li>
              There are some slight differences due to customization in size,
              design, velcro strap options, velcro, strap options, belt.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection6
