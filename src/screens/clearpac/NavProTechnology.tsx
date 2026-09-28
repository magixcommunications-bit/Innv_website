import LineDiv from './LineDiv'

const Data = [
  {
    heading: 'Transition-Free Design',
    text: 'Continuous tip movement reduces vascular trauma',
  },
  {
    heading: 'Tri-Layered Atraumatic Tip',
    text: 'Flexible, durable, and safe for optimal support and stability',
  },
  {
    heading: '0.41 mm Tapered Profile',
    text: 'Effortless entry into complex tortous anatomy',
  },
  {
    heading: 'NavPro Technology',
    text: 'Smooth navigation and durable performance, with enhanced pushability and kink resistance',
  },
]

const products = [
  {
    name: 'Agent',
    tipEntry: '0.42 mm',
    trackability: '157 gf',
    highlight: false,
    width: 'w-[60%] sm:w-[70%]',
    width2: 'w-[63%] sm:w-[73%]',
  },
  {
    name: 'Prevail',
    tipEntry: '0.45 mm',
    trackability: '207 gf',
    highlight: false,
    width: 'w-full',
    width2: 'w-[70%] sm:w-[80%]',
  },
  {
    name: 'SeQuent Please Neo',
    tipEntry: '0.41 mm',
    trackability: '190 gf',
    highlight: false,
    width: 'w-[50%] sm:w-[60%]',
    width2: 'w-[66%] sm:w-[76%]',
  },
  {
    name: 'Magic Touch',
    tipEntry: '0.41 mm',
    trackability: '246 gf',
    highlight: false,
    width: 'w-[50%] sm:w-[60%]',
    width2: 'w-full',
  },
  {
    name: 'ClearPac',
    tipEntry: '0.41 mm',
    trackability: '130 gf',
    highlight: true,
    width: 'w-[50%] sm:w-[60%]',
    width2: 'w-[60%] sm:w-[70%]',
  },
]
const ComparisonTable = ({
  title,
  valueKey,
}: {
  title: string
  valueKey: string
}) => (
  <div className="flex-1 min-w-[280px] gsap-opacity-trans-appear">
    <div className="flex items-center mb-4">
      <div
        className="mr-3 text-base sm:text-lg font-semibold text-[#ee8132]"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}
      >
        {title}
      </div>
      <div className="flex flex-col flex-1 gap-1">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <div
              className={`px-2 sm:px-4 py-2 ${
                title === 'Tip entry profile' ? product.width : product.width2
              } inline-block ${
                product.highlight
                  ? 'bg-[radial-gradient(circle,#ed8132,#6c4e7b)] text-white'
                  : 'bg-[#daddeb] text-[#225092]'
              }`}
            >
              <span className="text-sm font-medium sm:text-lg">
                {product.name}
              </span>
            </div>
            <span className="text-sm sm:text-lg font-semibold text-slate-700 min-w-[80px] ml-4">
              {valueKey === 'tipEntry'
                ? product.tipEntry
                : product.trackability}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="flex items-center mt-4 ml-[52px] relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[3px] bg-orange-400"></div>
      </div>
      <div className="relative flex items-center justify-between w-full">
        <svg width="40" height="24" viewBox="0 0 40 24" className="relative">
          <path
            d="M 10 12 L 35 12 M 10 12 L 18 7 M 10 12 L 18 17"
            stroke="#fb923c"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="relative px-3 text-base font-bold text-[#225092] whitespace-nowrap">
          Lower is Better
        </span>
        <svg width="40" height="24" viewBox="0 0 40 24" className="relative">
          <path
            d="M 5 12 L 30 12"
            stroke="#fb923c"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div> */}
    <div className="relative mt-4 ml-[52px] h-6 flex items-center">
      {/* Full width arrow line */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="12"
          x2="100%"
          y2="12"
          stroke="#fb923c"
          strokeWidth="3"
        />
      </svg>

      {/* Left arrowhead */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="absolute z-10 -left-5"
      >
        <path d="M 6 16 L 20 6 L 20 26 Z" fill="#fb923c" stroke="none" />
      </svg>

      {/* Centered text */}
      <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <span className="bg-slate-100 px-4 py-1 text-base font-bold text-[#225092] whitespace-nowrap">
          Lower is Better
        </span>
      </div>
    </div>
  </div>
)

export default function NavProTechnology() {
  return (
    <div className="bg-slate-100">
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#12498e] gsap-opacity-trans-appear">
              Superior Results with 3T and NavPro Technology
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 sm:gap-5 md:gap-10 gsap-stagger-bounce-parent">
            {Data.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="flex items-center gap-5 gsap-stagger-bounce"
                >
                  <LineDiv />
                  <div className="flex flex-col">
                    <h6 className="text-[#ee8132] font-bold sm:text-2xl text-xl">
                      {val.heading}
                    </h6>
                    <p className="text-base sm:text-lg lg:text-xl">
                      {val.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col gap-10 xl:flex-row">
            <ComparisonTable title="Tip entry profile" valueKey="tipEntry" />
            <ComparisonTable title="Trackability" valueKey="trackability" />
          </div>
        </div>
      </div>
    </div>
  )
}
