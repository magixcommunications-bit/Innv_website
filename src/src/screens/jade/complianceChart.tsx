import React from 'react'

// white- [#FEFEFE]
// cream- [#F8F8FD]
const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg blade-top-padding-lg bg-[#F0F4F5] bg-[url(assets/bg-overlay/dark-blue-ellipse-bg.webp)] bg-top">
      <h3 className="gsap-opacity-trans-appear font-medium  lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        Compliance chart
      </h3>
      <div
        className="gsap-opacity-trans-appear rounded-[5px] overflow-auto w-fi 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto"
        style={{
          filter: 'drop-shadow(9.341px 9.341px 56.045px rgba(0, 0, 0, 0.25))',
        }}
      >
        <table className="w-full compliance-chart font-medium border border-white border-collapse text-sm md:text-base xl:text-lg">
          <thead>
            <tr className="bg-[#FEFEFE]">
              <th className="border-r-[2px] border-b-[2px] border-[#10171E] bg-[#FEFEFE] sticky left-0">
                Pressure (atm)
              </th>
              <th className="text-left sm:text-center" colSpan={10}>
                Balloon Diameter (Ø mm)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black text-white text-center">
              <td className="bg-[#FEFEFE] sticky left-0 border-r-[2px] border-[#10171E]"></td>
              <td>1.5</td>
              <td> 2.0</td>
              <td> 2.5</td>
              <td> 3.0</td>
              <td> 3.5</td>
              <td> 4.0</td>
              <td> 4.5</td>
              <td> 5.0</td>
              <td> 5.5</td>
              <td> 6.0</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                2
              </td>
              <td> 1.41</td>
              <td> 1.88</td>
              <td> 2.37</td>
              <td> 2.82</td>
              <td> 3.27</td>
              <td> 3.70</td>
              <td> 4.22</td>
              <td> 4.67</td>
              <td> 5.09</td>
              <td> 5.60</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#F8F8FD]">
              <td className="bg-[#F8F8FD] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                4
              </td>
              <td> 1.43</td>
              <td> 1.90</td>
              <td> 2.40</td>
              <td> 2.86</td>
              <td> 3.32</td>
              <td> 3.76</td>
              <td> 4.27</td>
              <td> 4.74</td>
              <td> 5.17</td>
              <td> 5.68</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                6
              </td>
              <td> 1.45</td>
              <td> 1.93</td>
              <td> 2.42</td>
              <td> 2.89</td>
              <td> 3.36</td>
              <td> 3.82</td>
              <td> 4.33</td>
              <td> 4.80</td>
              <td> 5.26</td>
              <td> 5.76</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#F8F8FD]">
              <td className="bg-[#F8F8FD] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                8
              </td>
              <td> 1.47</td>
              <td> 1.95</td>
              <td> 2.45</td>
              <td> 2.93</td>
              <td> 3.41</td>
              <td> 3.88</td>
              <td> 4.39</td>
              <td> 4.87</td>
              <td> 5.34</td>
              <td> 5.84</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                10
              </td>
              <td> 1.48</td>
              <td> 1.98</td>
              <td> 2.47</td>
              <td> 2.96</td>
              <td> 3.45</td>
              <td> 3.94</td>
              <td> 4.44</td>
              <td> 4.93</td>
              <td> 5.42</td>
              <td> 5.92</td>
            </tr>
            <tr className="bg-black text-white text-center">
              <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                12 (NOM)*
              </td>
              <td> 1.50</td>
              <td> 2.00</td>
              <td> 2.50</td>
              <td> 3.00</td>
              <td> 3.50</td>
              <td> 4.00</td>
              <td> 4.50</td>
              <td> 5.00</td>
              <td> 5.50</td>
              <td> 6.00</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                14
              </td>
              <td> 1.52</td>
              <td> 2.02</td>
              <td> 2.53</td>
              <td> 3.04</td>
              <td> 3.55</td>
              <td> 4.06</td>
              <td> 4.56</td>
              <td> 5.07</td>
              <td> 5.58</td>
              <td> 6.08</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#F8F8FD]">
              <td className="bg-[#F8F8FD] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                16
              </td>
              <td> 1.53</td>
              <td> 2.05</td>
              <td> 2.55</td>
              <td> 3.07</td>
              <td> 3.59</td>
              <td> 4.12</td>
              <td> 4.61</td>
              <td> 5.13</td>
              <td> 5.66</td>
              <td> 6.16</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                18 (RBP)**
              </td>
              <td> 1.55</td>
              <td> 2.07</td>
              <td> 2.58</td>
              <td> 3.11</td>
              <td> 3.64</td>
              <td> 4.18</td>
              <td> 4.67</td>
              <td> 5.20</td>
              <td className="bg-black text-white "> 5.74</td>
              <td className="bg-black text-white "> 6.24</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#F8F8FD]">
              <td className="bg-[#F8F8FD] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                20 (RBP)**
              </td>
              <td> 1.57</td>
              <td> 2.10</td>
              <td> 2.60</td>
              <td> 3.14</td>
              <td> 3.68</td>
              <td> 4.24</td>
              <td className="bg-black text-white "> 4.73</td>
              <td className="bg-black text-white "> 5.26</td>
              <td> 5.83</td>
              <td> 6.32</td>
            </tr>
            <tr className="bg-black text-white text-center">
              <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                22 (RBP)**
              </td>
              <td> 1.59</td>
              <td> 2.12</td>
              <td> 2.63</td>
              <td> 3.18</td>
              <td> 3.73</td>
              <td> 4.30</td>
              <td className="bg-[#FEFEFE] text-darkgray"> 4.78</td>
              <td className="bg-[#FEFEFE] text-darkgray"> 5.33</td>
              <td className="bg-[#FEFEFE] text-darkgray"> 5.91</td>
              <td className="bg-[#FEFEFE] text-darkgray"> 6.40</td>
            </tr>
            <tr className="text-darkgray text-center bg-[#F8F8FD]">
              <td className="bg-[#F8F8FD] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                22
              </td>
              <td> 1.60</td>
              <td> 2.14</td>
              <td> 2.65</td>
              <td> 3.22</td>
              <td> 3.78</td>
              <td> 4.36</td>
              <td> 4.84</td>
              <td> 5.40</td>
              <td> - </td>
              <td> - </td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                24
              </td>
              <td> 1.62</td>
              <td> 2.17</td>
              <td> 2.68</td>
              <td> 3.25</td>
              <td> 3.82</td>
              <td> 4.42</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#FEFEFE] h-8">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]"></td>
              <td className="border-t border-gray"> </td>
              <td className="border-t border-gray"></td>
              <td className="border-t border-gray"></td>
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
    </section>
  )
}

export default ComplianceChart
