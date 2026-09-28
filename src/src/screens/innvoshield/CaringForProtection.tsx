import { Check, X } from 'lucide-react'

const protectionIngo = [
  {
    headingText: "Do's",
    headingClassBox: 'bg-[linear-gradient(135deg,_#06D6A0_0%,_#4CAF50_100%)]',
    headingClassText: 'text-green-500',
    icon: Check,
    listClass: 'bg-[#e6fbf5] text-green-500',
    list: [
      'Clean with designated solutions or mild soap',
      'Use soft cloth or wipe with room temperature water',
      'Hang properly or roll up for storage',
      'Store in protective box or bag during transport',
      'Inspect regularly for any damage',
    ],
  },
  {
    headingText: "Don'ts",
    headingClassBox: 'bg-[#f75e1f]',
    headingClassText: 'text-[#fb8500]',
    icon: X,
    listClass: 'bg-[#fff3e5] text-[#fb8500]',
    list: [
      'Never machine wash or dry',
      'Avoid using hot water for cleaning',
      'Do not iron or autoclave',
      'Keep away from sharp objects during storage',
      'Avoid folding or creasing the material',
    ],
  },
]

export default function CaringForProtection() {
  return (
    <div className="relative bg-neutral-100">
      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex items-center justify-center w-full gsap-opacity-trans-appear">
          <span className="px-6 py-2 text-base bg-[linear-gradient(135deg,_#06D6A0_0%,_#3E92CC_100%)] text-white rounded-[50px] inline-block mx-auto mb-4">
            Maintenance Guide
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Caring for Your Protection Equipment
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            Proper care ensures longevity and optimal performance of your
            radiation protection gear.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 gsap-stagger-bounce-parent">
          {protectionIngo.map((val, i) => {
            return (
              <div className="flex flex-col gap-8 p-5 transition-all bg-white shadow-lg sm:p-10 gsap-stagger-bounce rounded-2xl hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-2xl ${val.headingClassBox}`}
                  >
                    {<val.icon className="w-8 h-8" />}
                  </div>
                  <h3
                    className={`${val.headingClassText} text-3xl font-semibold`}
                  >
                    {val.headingText}
                  </h3>
                </div>
                <div>
                  <ul>
                    {val.list.map((li, index) => {
                      return (
                        <>
                          <li className="flex items-center gap-3 text-base sm:text-lg text-slate-700">
                            <div
                              className={`${val.listClass} min-w-[32px] min-h-[32px] flex items-center justify-center rounded-full`}
                            >
                              {<val.icon className="w-4 h-4" />}
                            </div>
                            {li}
                          </li>
                          {index < val.list.length - 1 && (
                            <hr className="my-3 border-t border-neutral-300" />
                          )}
                        </>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
