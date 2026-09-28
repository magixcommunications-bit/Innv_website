import React from 'react'

const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg bg-[#F0F4F5] blade-top-padding-lg bg-[url(assets/scoreflexNC/complianceChart/bg.svg)] bg-cover bg-center">
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">
        Compliance Chart
      </h2> */}
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        Compliance chart
      </h3>
      <div
        className=" gsap-opacity-trans-appear"
        // style={{
        //   background: 'linear-gradient(175deg, #B391C3 9.74%, #DED1EA 104.54%)',
        // }}
      >
        <div
          className="rounded-[5px] overflow-auto w-fi 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto"
          style={{
            filter: 'drop-shadow(20px 20px 56.045px rgba(0, 0, 0, 0.2))',
          }}
        >
          <table className="w-full compliance-chart font-medium border border-white xl:text-lg border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="border-r-[2px] border-b-[2px] border-[#10171E] bg-white sticky left-0">
                  Pressure (atm)
                </th>
                <th className="text-left sm:text-center" colSpan={8}>
                  Balloon diameter (Ø mm)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black text-white text-center">
                <td className="bg-white sticky left-0 border-r-[2px] border-[#10171E]"></td>
                <td> 1.75</td>
                <td> 2.0</td>
                <td> 2.25</td>
                <td> 2.5</td>
                <td> 2.75</td>
                <td> 3.0</td>
                <td> 3.5</td>
                <td> 4.0</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  2
                </td>
                <td> 1.64</td>
                <td> 1.87</td>
                <td> 2.13</td>
                <td> 2.35</td>
                <td> 2.55</td>
                <td> 2.79</td>
                <td> 3.20</td>
                <td> 3.67</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#D9D9D9]">
                <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  4
                </td>
                <td> 1.66</td>
                <td> 1.90</td>
                <td> 2.15</td>
                <td> 2.38</td>
                <td> 2.59</td>
                <td> 2.83</td>
                <td> 3.26</td>
                <td> 3.74</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  6
                </td>
                <td> 1.68</td>
                <td> 1.92</td>
                <td> 2.18</td>
                <td> 2.41</td>
                <td> 2.63</td>
                <td> 2.87</td>
                <td> 3.32</td>
                <td> 3.80</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#D9D9D9]">
                <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  8
                </td>
                <td> 1.71</td>
                <td> 1.95</td>
                <td> 2.20</td>
                <td> 2.44</td>
                <td> 2.67</td>
                <td> 2.92</td>
                <td> 3.38</td>
                <td> 3.87</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  10
                </td>
                <td> 1.73</td>
                <td> 1.97</td>
                <td> 2.23</td>
                <td> 2.47</td>
                <td> 2.71</td>
                <td> 2.96</td>
                <td> 3.44</td>
                <td> 3.93</td>
              </tr>
              <tr className="bg-black text-white text-center">
                <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                  12 (NOM)*
                </td>
                <td> 1.75</td>
                <td> 2.00</td>
                <td> 2.25</td>
                <td> 2.50</td>
                <td> 2.75</td>
                <td> 3.00</td>
                <td> 3.50</td>
                <td> 4.00</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  14
                </td>
                <td> 1.77</td>
                <td> 2.03</td>
                <td> 2.27</td>
                <td> 2.53</td>
                <td> 2.79</td>
                <td> 3.04</td>
                <td> 3.56</td>
                <td> 4.07</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#D9D9D9]">
                <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  16
                </td>
                <td> 1.79</td>
                <td> 2.05</td>
                <td> 2.30</td>
                <td> 2.56</td>
                <td> 2.83</td>
                <td> 3.08</td>
                <td> 3.62</td>
                <td> 4.13</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  18
                </td>
                <td> 1.82</td>
                <td> 2.08</td>
                <td> 2.32</td>
                <td> 2.59</td>
                <td> 2.87</td>
                <td> 3.13</td>
                <td> 3.68</td>
                <td> 4.20</td>
              </tr>
              <tr className="bg-black text-white text-center">
                <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                  20 (RBP)**
                </td>
                <td> 1.84</td>
                <td> 2.10</td>
                <td> 2.35</td>
                <td> 2.62</td>
                <td> 2.91</td>
                <td> 3.17</td>
                <td> 3.74</td>
                <td> 4.26</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  22
                </td>
                <td> 1.86</td>
                <td> 2.13</td>
                <td> 2.37</td>
                <td> 2.65</td>
                <td> 2.95</td>
                <td> 3.21</td>
                <td> 3.80</td>
                <td> 4.33</td>
              </tr>
              <tr className=" text-darkgray text-center bg-[#D9D9D9]">
                <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  24
                </td>
                <td> 1.88</td>
                <td> 2.15</td>
                <td> 2.40</td>
                <td> 2.68</td>
                <td> 2.99</td>
                <td> 3.25</td>
                <td> 3.86</td>
                <td> 4.39</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                  26
                </td>
                <td> 1.90</td>
                <td> 2.18</td>
                <td> 2.42</td>
                <td> 2.71</td>
                <td> 3.03</td>
                <td> 3.29</td>
                <td> 3.92</td>
                <td> 4.46</td>
              </tr>
              <tr className=" text-darkgray text-center bg-white h-8">
                <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]"></td>
                <td className="border-t border-gray"> </td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
                <td className="border-t border-gray"></td>
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
