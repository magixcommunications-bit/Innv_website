import React from 'react'

const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg bg-[#F0F4F5] blade-top-padding-lg bg-contain bg-bottom font-regular">
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">
        Compliance Chart
      </h2> */}
      <h3 className="gsap-opacity-trans-appear appear-anim-gsap font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        Compliance chart
      </h3>
      <div className=" ">
        <div
          className="gsap-opacity-trans-appear rounded-[5px] overflow-auto 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto 2xl:max-w-7xl"
          //! Shadow is creating glitchy effect on Iphone on scroll
          style={{
            filter:
              window.innerWidth > 768
                ? 'drop-shadow(20px 20px 56.045px rgba(0, 0, 0, 0.2))'
                : 'none',
          }}
        >
          <table className="w-full compliance-chart font-medium border border-white xl:text-lg border-collapse">
            <thead>
              <tr className="bg-[#F0F4F5]">
                <th className="border-r-[2px] border-b-[2px] font-medium 2xl:text-[22px] border-[#10171E] bg-[#F0F4F5] sticky left-0 w-48 xl:w-60">
                  Pressure (atm)
                </th>
                <th
                  className="text-left sm:text-center font-medium 2xl:text-[22px]"
                  colSpan={3}
                >
                  Balloon diameter (Ø mm)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#141B22] text-white text-center">
                <td className="bg-[#141B22] sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60"></td>
                <td> 0.85</td>
                <td> 1.00</td>
                <td> 1.25</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  2
                </td>
                <td> 0.78</td>
                <td> 0.94</td>
                <td> 1.18</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  4
                </td>
                <td> 0.82</td>
                <td> 0.97</td>
                <td> 1.22</td>
              </tr>
              <tr className="bg-[#141B22] text-white text-center">
                <td className="bg-[#141B22] sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  6 NOM*
                </td>
                <td> 0.85</td>
                <td> 1.00</td>
                <td> 1.25</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  8
                </td>
                <td> 0.88</td>
                <td> 1.03</td>
                <td> 1.28</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  10
                </td>
                <td> 0.92</td>
                <td> 1.06</td>
                <td> 1.32</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  12
                </td>
                <td> 0.95</td>
                <td> 1.09</td>
                <td> 1.35</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  14
                </td>
                <td> 0.98</td>
                <td> 1.12</td>
                <td> 1.38</td>
              </tr>
              <tr className="bg-[#141B22] text-white text-center">
                <td className="bg-[#141B22] sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  16 RBP**
                </td>
                <td> 1.01</td>
                <td> 1.15</td>
                <td> 1.42</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  18
                </td>
                <td> 1.05</td>
                <td> 1.18</td>
                <td> 1.45</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  20
                </td>
                <td> 1.08</td>
                <td> 1.21</td>
                <td> 1.48</td>
              </tr>

              <tr className=" text-darkgray text-center bg-[#F0F4F5] h-8">
                <td className="bg-[#F0F4F5] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60"></td>
                <td className="border-t border-gray"> </td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="2xl:w-container w-container-lg">
          <h6 className="gsap-opacity-trans-appear text-center mt-6 font-medium xl:mt-12 pt-4 xl:pt-9 border-t-2 border-[#D3D3D3] border-opacity-50 max-w-md md:max-w-xl xl:max-w-3xl 2xl:max-w-3xl mx-auto">
            *Nominal pressure. The nominal in vitro device specifications do not
            take into account any lesion resistance. **Rated burst pressure. Do
            not exceed RBP.
          </h6>
        </div>
      </div>
    </section>
  )
}

export default ComplianceChart
