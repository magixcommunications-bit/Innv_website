import React from 'react'

const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg bg-[#F0F4F5] blade-top-padding-lg bg-[url(assets/scoreflexNC/complianceChart/bg.svg)] bg-contain bg-top md:bg-bottom">
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">
        Compliance Chart
      </h2> */}
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        Compliance chart
      </h3>
      <div
        className=" "
        // style={{
        //   background: 'linear-gradient(175deg, #B391C3 9.74%, #DED1EA 104.54%)',
        // }}
      >
        <div
          className="gsap-opacity-trans-appear rounded-[5px] overflow-auto 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto "
          style={{
            filter: 'drop-shadow(20px 20px 56.045px rgba(0, 0, 0, 0.2))',
          }}
        >
          <table className="w-full compliance-chart font-medium border border-white xl:text-lg border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="border-r-[2px] font-medium border-b-[2px] border-[#10171E] bg-white sticky left-0 w-48 xl:w-60">
                  Pressure (atm)
                </th>
                <th
                  className="text-left sm:text-center font-medium"
                  colSpan={5}
                >
                  Balloon diameter (Ø mm)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black text-white text-center">
                <td className="bg-white sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60"></td>
                <td> 2.0</td>
                <td> 2.5</td>
                <td> 3.0</td>
                <td> 3.5</td>
                <td> 4.0</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  4
                </td>
                <td> 1.96</td>
                <td> 2.45</td>
                <td> 2.94</td>
                <td> 3.43</td>
                <td> 3.92</td>
              </tr>
              <tr className="bg-black text-white text-center">
                <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  6 (NOM)*
                </td>
                <td> 2.00</td>
                <td> 2.50</td>
                <td> 3.00</td>
                <td> 3.50</td>
                <td> 4.00</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  8
                </td>
                <td> 2.04</td>
                <td> 2.55</td>
                <td> 3.05</td>
                <td> 3.57</td>
                <td> 4.08</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  10
                </td>
                <td> 2.08</td>
                <td> 2.60</td>
                <td> 3.11</td>
                <td> 3.63</td>
                <td> 4.15</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  12
                </td>
                <td> 2.12</td>
                <td> 2.65</td>
                <td> 3.17</td>
                <td> 3.70</td>
                <td> 4.23</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  14
                </td>
                <td> 2.16</td>
                <td> 2.70</td>
                <td> 3.22</td>
                <td> 3.76</td>
                <td> 4.31</td>
              </tr>
              <tr className="bg-black text-white text-center">
                <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  16 RBP**
                </td>
                <td> 2.20</td>
                <td> 2.75</td>
                <td> 3.28</td>
                <td> 3.93</td>
                <td> 4.38</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#DADFE0]">
                <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  18
                </td>
                <td> 2.23</td>
                <td> 2.80</td>
                <td> 3.34</td>
                <td> 3.90</td>
                <td> 4.46</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#fff6ed]">
                <td className="bg-[#fff6ed] text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60">
                  20
                </td>
                <td> 2.27</td>
                <td> 2.86</td>
                <td> 3.39</td>
                <td> 3.96</td>
                <td> 4.53</td>
              </tr>

              <tr className=" text-darkgray text-center bg-white h-8">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E] w-48 xl:w-60"></td>
                <td className="border-t border-gray"> </td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ComplianceChart
