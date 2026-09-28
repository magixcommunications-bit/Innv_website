import React from 'react'
import eterniaCiculation from 'assets/productsNew/eterniaBrio/eternia-circulation-brio.png'
import eterniaLogo from 'assets/productsNew/eterniaBrio/eterni-brio-logo.svg'
import eterniaPreview from 'assets/productsNew/eternia/ciculation/eternia-circualtion-feature.svg'

// circulations
import circulationcobalt from 'assets/productsNew/eterniaNexa/circulation-cobalt.png'
import circulationstruts from 'assets/productsNew/eterniaNexa/circulation-thin-struts.png'
import circulationeverolimus from 'assets/productsNew/eterniaNexa/circulation-everolimus.png'
import circulationCrossingprofile from 'assets/productsNew/eterniaNexa/circulation-crossing-profile.png'

// design icons
import openCellDesign from 'assets/productsNew/eterniaNexa/circulation-open-cell-design.png'
import v2vDesign from 'assets/productsNew/eterniaNexa/circulation-v2v.png'
import wavfloDesign from 'assets/productsNew/eterniaNexa/circulation-wavflo.png'
import { Flag } from 'atoms/flagLayout'

export default function EterniaCirculation() {
  return (
    <section className="bg-white">
      <div className="font-regular blade-top-padding blade-bottom-padding-lg">
        <div className="w-container-lg flex justify-between">
          <div className="max-w-md grid gap-2">
            <h4 className="text-orange font-medium">
              Restore Circulation with
            </h4>
            <div className="2xl:h-14 h-8 mb-2 w-fit">
              <img
                src={eterniaLogo}
                alt="Stent"
                className="w-full h-full object-contain object-left"
              />
            </div>
            <h6>
              What makes it the Future of <br className="md:block hidden " />
              Coronary Stenting?
            </h6>
          </div>

          {/* <div className="2xl:mb-[-18%] xl:mb-[-16%] items-end xl:flex hidden relative ">
            <div className="2xl:max-w-md max-w-xs grid gap-2">
              <h4 className="text-orange font-medium">
                Restore Circulation with
              </h4>
              <div className="2xl:h-14 h-8 mb-2 w-fit">
                <img
                  src={eterniaLogo}
                  alt="Stent"
                  className="w-full h-full object-contain object-left"
                />
              </div>

              <h6 className="font-medium">Design Crafted Platform</h6>
              <h6>
                What makes it the Future of <br className="md:block hidden " />
                Coronary Stenting?
              </h6>
            </div>
          </div> */}
        </div>

        {/* Desktop View */}
        <div className="xl:mt-[-10%] md:block hidden">
          <img src={eterniaCiculation} alt="Stent" className="w-full h-auto" />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex-1 mt-4 flex gap-4 flex-col mx-auto font-regular">
          <Flag img={circulationstruts} title="65 µm Thin Struts" />
          <Flag
            img={circulationeverolimus}
            title="Everolimus"
            list={['Enabling rapid absorption into the arterial wall']}
          />

          <Flag
            img={circulationCrossingprofile}
            title="1 mm Crossing Profile"
            list={['Improved deliverability with minimal injury']}
          />
          <Flag
            img={circulationcobalt}
            title="L605 Cobalt Chromium"
            list={['High radial strength of 1.50 N/mm']}
          />
        </div>

        {/* Mobile View */}
        <div className="w-container-lg md:hidden mt-8">
          <div className="max-w-md grid gap-2">
            <h4 className="text-orange font-medium">
              Restore Circulation with
            </h4>
            <div className="2xl:h-14 lg:h-12 h-8 mb-2 w-fit">
              <img
                src={eterniaLogo}
                alt="Stent"
                className="w-full h-full object-contain object-left"
              />
            </div>

            <h5 className="font-medium">Design Crafted Platform</h5>
            <h5>
              What makes it the Future of <br className="md:block hidden" />
              Coronary Stenting?
            </h5>
          </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden mt-4 flex gap-4 flex-col font-regular">
          <Flag
            img={openCellDesign}
            title="Open Cell Design"
            list={[
              'Providing enhanced side branch access, better endothelial coverage and conforms best to angulated vessels',
            ]}
          />

          <Flag
            img={wavfloDesign}
            title="Proprietary WavFlo Struts"
            list={[
              'DES with thin struts up to 65 µm',
              `Enhancing trackability, crossability, and radial force, while reducing the risk of restenosis and 
              thrombosis<sup>1</sup>`,
            ]}
          />
          <Flag
            img={v2vDesign}
            title="Proprietary V2V S-connectors"
            list={[
              'Valley-to-valley long ‘S’ Connectors',
              'For higher flexibility, deliverability, radial strength, and conformability<sup>1</sup>',
              'Lowering stent dislodgement force to minimum 6N in 12 mm stents<sup>2</sup>',
            ]}
          />
        </div>
        <div className="w-container flex gap-5 flex-wrap lg:flex-nowrap justify-between blade-top-padding-lg mx-auto ">
          <div className="">
            <h3 className="font-medium text-orange">Next-generation DES</h3>
            <h6 className="">Ensuring the well-being of your CAD patients!</h6>
          </div>

          <div className="grid gap-5 mb-8 lg:px-4 max-w-2xl">
            <h5 className="font-bold ">
              CAD = Coronary Artery Disease; DES = Drug-eluting Stent
            </h5>

            <h6 className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 lg:mt-2 mt-[6px]"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5193 2.88992C12.5193 1.62036 11.4902 0.591187 10.2206 0.591187C8.95105 0.591187 7.92188 1.62036 7.92188 2.88992V4.08763C7.92188 6.01631 6.35837 7.57982 4.42969 7.57982H3.23623C1.96668 7.57982 0.9375 8.60899 0.9375 9.87855C0.9375 11.1481 1.96668 12.1773 3.23623 12.1773H4.42969C6.35837 12.1773 7.92188 13.7408 7.92188 15.6695V16.8664C7.92188 18.1359 8.95105 19.1651 10.2206 19.1651C11.4902 19.1651 12.5193 18.1359 12.5193 16.8664V15.6712C12.5193 13.7416 14.0836 12.1773 16.0132 12.1773H17.2127C18.4822 12.1773 19.5114 11.1481 19.5114 9.87855C19.5114 8.60899 18.4822 7.57982 17.2127 7.57982L16.0137 7.57982C14.0838 7.57982 12.5193 6.01536 12.5193 4.0855V2.88992Z"
                  fill="black"
                />
              </svg>
              <span className="flex-1">
                {' '}
                Koźlik M, Harpula J, Chuchra PJ, et al. Drug-Eluting Stents:
                Technical and Clinical Progress. Biomimetics (Basel). 2023 Feb
                9;8(1):72. doi: 10.3390/biomimetics8010072.
              </span>
            </h6>
            <h6 className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 lg:mt-2 mt-[6px]"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5193 2.88992C12.5193 1.62036 11.4902 0.591187 10.2206 0.591187C8.95105 0.591187 7.92188 1.62036 7.92188 2.88992V4.08763C7.92188 6.01631 6.35837 7.57982 4.42969 7.57982H3.23623C1.96668 7.57982 0.9375 8.60899 0.9375 9.87855C0.9375 11.1481 1.96668 12.1773 3.23623 12.1773H4.42969C6.35837 12.1773 7.92188 13.7408 7.92188 15.6695V16.8664C7.92188 18.1359 8.95105 19.1651 10.2206 19.1651C11.4902 19.1651 12.5193 18.1359 12.5193 16.8664V15.6712C12.5193 13.7416 14.0836 12.1773 16.0132 12.1773H17.2127C18.4822 12.1773 19.5114 11.1481 19.5114 9.87855C19.5114 8.60899 18.4822 7.57982 17.2127 7.57982L16.0137 7.57982C14.0838 7.57982 12.5193 6.01536 12.5193 4.0855V2.88992Z"
                  fill="black"
                />
              </svg>{' '}
              <span className="flex-1">In-house data.</span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
