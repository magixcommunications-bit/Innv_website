import React from 'react'

// white- [#FEFEFE]
// cream- [#F8F8FD]
const ComplianceChart = () => {
  return (
    <section className="blade-bottom-padding-lg blade-top-padding-lg bg-[#F0F4F5] bg-[url(assets/bg-overlay/green-ellipse-bg.webp)] bg-top">
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
            <tr className="bg-[#FEFEFE]">
              <th className="border-r-[2px] border-b-[2px] border-[#10171E] bg-[#FEFEFE] sticky left-0">
                Pressure (atm)
              </th>
              <th className="text-left sm:text-center" colSpan={10}>
                Balloon diameter (Ø mm)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black text-white text-center">
              <td className="bg-[#FEFEFE] sticky left-0 border-r-[2px] border-[#10171E]"></td>
              <td>1.50</td>
              <td>1.75</td>
              <td>2.00</td>
              <td>2.25</td>
              <td>2.50</td>
              <td>2.75</td>
              <td>3.00</td>
              <td>3.25</td>
              <td>3.54</td>
              <td>4.00</td>
            </tr>
            <tr className=" text-black text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                2
              </td>
              <td>1.42</td>
              <td>1.66</td>
              <td>1.87</td>
              <td>2.11</td>
              <td>2.36</td>
              <td>2.59</td>
              <td>2.82</td>
              <td>3.06</td>
              <td>3.29</td>
              <td>3.77</td>
            </tr>
            <tr className=" text-black text-center bg-[#DADFE0]">
              <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                4
              </td>
              <td> 1.46</td>
              <td> 1.70</td>
              <td> 1.94</td>
              <td> 2.18</td>
              <td> 2.43</td>
              <td> 2.67</td>
              <td> 2.91</td>
              <td> 3.16</td>
              <td> 3.39</td>
              <td> 3.89</td>
            </tr>
            <tr className=" text-white text-center bg-[#000]">
              <td className="bg-[#000] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                6 (NOM)*
              </td>
              <td> 1.50</td>
              <td> 1.75</td>
              <td> 2.00</td>
              <td> 2.25</td>
              <td> 2.50</td>
              <td> 2.75</td>
              <td> 3.00</td>
              <td> 3.25</td>
              <td> 3.50</td>
              <td> 4.00</td>
            </tr>
            <tr className=" text-black text-center bg-[#DADFE0]">
              <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                8
              </td>
              <td> 1.54</td>
              <td> 1.80</td>
              <td> 2.06</td>
              <td> 2.32</td>
              <td> 2.57</td>
              <td> 2.83</td>
              <td> 3.09</td>
              <td> 3.34</td>
              <td> 3.61</td>
              <td> 4.11</td>
            </tr>
            <tr className=" text-black text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                10
              </td>
              <td> 1.58</td>
              <td> 1.84</td>
              <td> 2.13</td>
              <td> 2.39</td>
              <td> 2.64</td>
              <td> 2.91</td>
              <td> 3.18</td>
              <td> 3.44</td>
              <td> 3.71</td>
              <td> 4.23</td>
            </tr>
            <tr className="bg-[#DADFE0] text-black text-center">
              <td className="bg-[#DADFE0] sticky left-0 border-r-[2px] border-[#10171E]">
                12
              </td>
              <td> 1.62</td>
              <td> 1.89</td>
              <td> 2.19</td>
              <td> 2.45</td>
              <td> 2.71</td>
              <td> 2.98</td>
              <td> 3.27</td>
              <td> 3.53</td>
              <td> 3.82</td>
              <td> 4.34</td>
            </tr>
            <tr className=" text-white text-center bg-[#000]">
              <td className="bg-[#000] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                14 (RBP)**
              </td>
              <td className="bg-[#FEFEFE] text-black"> 1.66</td>
              <td> 1.94</td>
              <td> 2.25</td>
              <td> 2.52</td>
              <td> 2.78</td>
              <td> 3.06</td>
              <td> 3.36</td>
              <td> 3.62</td>
              <td> 3.92</td>
              <td> 4.45</td>
            </tr>
            <tr className=" text-black text-center bg-[#DADFE0]">
              <td className="bg-[#000] text-white text-left sticky left-0 border-r-[2px] border-[#10171E]">
                16 (RBP)**
              </td>
              <td className="bg-[#000] text-white"> 1.70</td>
              <td> 1.98</td>
              <td> 2.32</td>
              <td> 2.59</td>
              <td> 2.85</td>
              <td> 3.14</td>
              <td> 3.45</td>
              <td> 3.72</td>
              <td> 4.03</td>
              <td> 4.57</td>
            </tr>
            <tr className=" text-black text-center bg-[#FEFEFE]">
              <td className="bg-[#FEFEFE] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                18
              </td>
              <td> 1.74</td>
              <td> 2.03</td>
              <td> 2.38</td>
              <td> 2.66</td>
              <td> 2.92</td>
              <td> 3.22</td>
              <td> 3.54</td>
              <td> 3.81</td>
              <td> 4.14</td>
              <td> 4.68</td>
            </tr>
            <tr className=" text-black text-center bg-[#DADFE0]">
              <td className="bg-[#DADFE0] text-left sticky left-0 border-r-[2px] border-[#10171E]">
                20
              </td>
              <td> 1.78</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            {/* <tr className="bg-black text-white text-center">
              <td className="bg-black sticky left-0 border-r-[2px] border-[#10171E]">
                22 (RBP)**
              </td>
              <td> 1.59</td>
              <td> 2.12</td>
              <td> 2.63</td>
              <td> 3.18</td>
              <td> 3.73</td>
              <td> 4.30</td>
              <td className="bg-[#FEFEFE] text-black"> 4.78</td>
              <td className="bg-[#FEFEFE] text-black"> 5.33</td>
              <td className="bg-[#FEFEFE] text-black"> 5.91</td>
              <td className="bg-[#FEFEFE] text-black"> 6.40</td>
            </tr>
            <tr className="text-black text-center bg-[#F8F8FD]">
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
            <tr className=" text-black text-center bg-[#FEFEFE]">
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
            </tr> */}
            <tr className=" text-black text-center bg-[#FEFEFE] h-8">
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
