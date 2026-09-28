import React from 'react'

const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg blade-top-padding-lg">
      {/* <h2 className="font-medium lg:hidden text-center md:-mt-2">
        Compliance Chart
      </h2> */}
      <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3">
        Compliance chart
      </h3>
      <div
        className="gsap-opacity-trans-appear rounded-[5px] overflow-auto w-fi 2xl:w-container w-container-lg blade-top-margin !px-0 mx-3 md:mx-auto"
        style={{
          filter: 'drop-shadow(9.341px 9.341px 56.045px rgba(0, 0, 0, 0.25))',
        }}
      >
        <table className="w-full compliance-chart font-medium border border-white xl:text-lg border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="border-r-[2px] border-b-[2px] border-[#10171E] bg-white sticky left-0">
                Pressure (atm)
              </th>
              <th className="text-left sm:text-center" colSpan={12}>
                Balloon diameter (Ø mm)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black text-white text-center">
              <td className="bg-white sticky left-0 border-r-[2px] border-[#10171E]"></td>
              <td>1.75</td>
              <td>2.00</td>
              <td>2.25</td>
              <td>2.75</td>
              <td>2.75</td>
              <td>3.0</td>
              <td>3.25</td>
              <td>3.5</td>
              <td>3.75</td>
              <td>4.00</td>
              <td>4.50</td>
              <td>5.00</td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                6
              </td>
              <td>1.68</td>
              <td>1.90</td>
              <td>2.14</td>
              <td>2.40</td>
              <td>2.61</td>
              <td>2.86</td>
              <td>3.10</td>
              <td>3.33</td>
              <td>3.54</td>
              <td>3.79</td>
              <td>4.26</td>
              <td>4.70</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#D9D9D9]">
              <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                8
              </td>
              <td> 1.70</td>
              <td> 1.93</td>
              <td> 2.17</td>
              <td> 2.44</td>
              <td> 2.66</td>
              <td> 2.91</td>
              <td> 3.15</td>
              <td> 3.39</td>
              <td> 3.61</td>
              <td> 3.86</td>
              <td> 4.34</td>
              <td> 4.80</td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                10
              </td>
              <td> 1.73</td>
              <td> 1.97</td>
              <td> 2.21</td>
              <td> 2.47</td>
              <td> 2.70</td>
              <td> 2.95</td>
              <td> 3.20</td>
              <td> 3.44</td>
              <td> 3.68</td>
              <td> 3.93</td>
              <td> 4.42</td>
              <td> 4.90</td>
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
              <td> 3.25</td>
              <td> 3.50</td>
              <td> 3.75</td>
              <td> 4.00</td>
              <td> 4.50</td>
              <td> 5.00</td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                14
              </td>
              <td> 1.77</td>
              <td> 2.03</td>
              <td> 2.29</td>
              <td> 2.53</td>
              <td> 2.80</td>
              <td> 3.05</td>
              <td> 3.30</td>
              <td> 3.56</td>
              <td> 3.82</td>
              <td> 4.07</td>
              <td> 4.58</td>
              <td> 5.10</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#D9D9D9]">
              <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                16
              </td>
              <td> 1.80</td>
              <td> 2.07</td>
              <td> 2.33</td>
              <td> 2.56</td>
              <td> 2.84</td>
              <td> 3.09</td>
              <td> 3.35</td>
              <td> 3.61</td>
              <td> 3.89</td>
              <td> 4.14</td>
              <td> 4.66</td>
              <td> 5.20</td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                18 (RBP)**
              </td>
              <td> 1.82</td>
              <td> 2.10</td>
              <td> 2.36</td>
              <td> 2.60</td>
              <td> 2.89</td>
              <td> 3.14</td>
              <td> 3.40</td>
              <td> 3.67</td>
              <td> 3.96</td>
              <td> 4.21</td>
              <td className="bg-black text-white "> 4.74</td>
              <td className="bg-black text-white "> 5.30</td>
            </tr>
            <tr className="bg-black text-white text-center">
              <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                20 (RBP)**
              </td>
              <td> 1.84</td>
              <td> 2.13</td>
              <td> 2.40</td>
              <td> 2.63</td>
              <td> 2.93</td>
              <td> 3.18</td>
              <td> 3.45</td>
              <td> 3.72</td>
              <td> 4.03</td>
              <td> 4.27</td>
              <td className="bg-white text-darkgray border-b border-gray">
                {' '}
                4.82
              </td>
              <td className="bg-white text-darkgray border-b border-gray">
                {' '}
                5.40
              </td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                22
              </td>
              <td> 1.87</td>
              <td> 2.16</td>
              <td> 2.44</td>
              <td> 2.66</td>
              <td> 2.98</td>
              <td> 3.23</td>
              <td> 3.50</td>
              <td> 3.78</td>
              <td> 4.10</td>
              <td> 4.34</td>
              <td> 4.90</td>
              <td> 5.49</td>
            </tr>
            <tr className=" text-darkgray text-center bg-[#D9D9D9]">
              <td className="bg-[#D9D9D9] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                24
              </td>
              <td> 1.89</td>
              <td> 2.20</td>
              <td> 2.48</td>
              <td> 2.69</td>
              <td> 3.02</td>
              <td> 3.27</td>
              <td> 3.55</td>
              <td> 3.83</td>
              <td> 4.17</td>
              <td> 4.41</td>
              <td> 4.98</td>
              <td> 5.59</td>
            </tr>
            <tr className=" text-darkgray text-center bg-white">
              <td className="bg-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                26
              </td>
              <td> 1.92</td>
              <td> 2.23</td>
              <td> 2.51</td>
              <td> 2.72</td>
              <td> 3.07</td>
              <td> 3.32</td>
              <td> 3.59</td>
              <td> 3.89</td>
              <td> 4.24</td>
              <td> 4.48</td>
              <td> 5.06</td>
              <td> 5.69</td>
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
