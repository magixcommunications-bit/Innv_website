import Sec2Img from '../../assets/innvoshield/InnvoShieldSec2Img.png'
import { Shield, Zap } from 'lucide-react'

function InnvoShieldSection2() {
  return (
    <div className="relative overflow-hidden bg-white/50">
      {/* <div className="absolute inset-0">
        <div className="absolute rounded-full -top-32 -right-32 w-96 h-96 bg-white/20"></div>

        <div className="absolute w-64 h-64 rounded-full -top-20 -left-20 bg-white/10"></div>

        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-white/10"></div>

        <div className="absolute rounded-full top-1/3 -right-24 w-72 h-72 bg-white/10"></div>

        <div className="absolute w-48 h-48 rounded-full top-1/2 left-1/4 bg-white/10"></div>

        <div className="absolute w-56 h-56 rounded-full -bottom-20 -right-20 bg-white/10"></div>

        <div className="absolute w-32 h-32 rounded-full top-20 left-1/3 bg-white/10"></div>
        <div className="absolute w-40 h-40 rounded-full bottom-32 left-1/2 bg-white/10"></div>
        <div className="absolute rounded-full top-3/4 right-1/4 w-36 h-36 bg-white/10"></div>
      </div> */}

      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        {/* <div className="flex flex-col-reverse gap-10 sm:gap-4 xl:flex-row-reverse">
          <div className="flex flex-col xl:flex-[60%] 2xl:flex-[70%] gap-6 gsap-stagger2-parent">
            <div className="flex flex-col gsap-stagger2">
              <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                Innvoshield <span className="text-[#ed592d]">Aero Series</span>
              </h2>
              <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                <li>
                  Latest innovation: Antimony, Bismuth, and Rare Earth Metals
                </li>
                <li>Super lightweight, flexible, crack-resistant</li>
                <li>Recyclable, safe for non-hazardous disposal</li>
              </ul>
            </div>
            <div className="flex flex-col gsap-stagger2">
              <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                Innvoshield <span className="text-[#eb237a]">Lite Series</span>
              </h2>
              <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                <li>
                  Lead-free, lightweight, flexible, crack-free & recyclable.
                  Antimony and Bismuth blend.
                </li>
                <li>
                  Optimized for minimum area-weight, maximum attenuation{' '}
                  <span className="font-medium">(80—150 kV)</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gsap-stagger2">
              <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                Innvoshield <span className="text-[#65308e]">Prime Series</span>
              </h2>
              <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                <li>Multi-metal, leadless, non-hazardous apparel</li>
                <li>Affordable, reliable, strong</li>
                <li>Ideal for X-ray and nuclear medicine procedures</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center xl:flex-[40%] 2xl:flex-[30%]">
            <img
              src={Sec2Img}
              alt=""
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] h-auto gsap-scale"
            />
          </div>
        </div> */}

        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Innvoshield Series Overview
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            Three advanced series designed for different protection needs and
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 gsap-stagger-bounce-parent">
          <div className="relative flex flex-col h-full gap-6 px-6 py-6 overflow-hidden transition-all duration-300 border border-purple-200 shadow-sm gsap-stagger-bounce text-card-foreground rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br from-purple-400/20 to-transparent"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] tracking-wide text-white bg-purple-700 shadow-lg rounded-md px-2 py-[2px]">
                  Premium
                </span>
                <Zap className="!w-8 !h-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Aero Series
              </h3>
              <p className="text-base text-slate-600">
                Ultra-lightweight design with maximum flexibility
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Material Composition:
                </h4>
                <p className="text-base text-slate-600">
                  Advanced lead-free composite materials with bismuth, tungsten,
                  and antimony
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Applications:
                </h4>
                <p className="text-base text-slate-600">
                  Extended procedures, interventional radiology, cardiac
                  catheterization
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Lead Equivalency:
                </h4>
                <p className="text-base text-slate-600">
                  {/* Customizable from 0.25mm to 0.50mm Pb equivalent */}
                  Customizable from 0.25 / 0.35 / 0.50 mmPb equivalent
                </p>
              </div>
            </div>
          </div>
          <div className="gsap-stagger-bounce relative flex flex-col h-full gap-6 py-6 px-6  overflow-hidden transition-all duration-300 border border-sky-200 shadow-sm text-card-foreground rounded-xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br from-[#60A5FA33] to-transparent"></div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] tracking-wide text-white bg-[#1447e6] shadow-lg rounded-md px-2 py-[2px]">
                  Essential
                </span>
                <Shield className="!w-8 !h-8 text-blueLight" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Lite Series
              </h3>
              <p className="text-base text-slate-600">
                Cost-effective solution for everyday protection
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Material Composition:
                </h4>
                <p className="text-base text-slate-600">
                  Optimized lead-free blend for everyday protection with Bismuth
                  and Antimony
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Applications:
                </h4>
                <p className="text-base text-slate-600">
                  General radiology, diagnostic imaging, routine procedures
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Lead Equivalency:
                </h4>
                <p className="text-base text-slate-600">
                  {/* 0.25mm to 0.35mm Pb equivalent options */}
                  0.25 / 0.35 / 0.50 mmPb equivalent options
                </p>
              </div>
            </div>
          </div>
          <div className="gsap-stagger-bounce relative flex flex-col h-full gap-6 px-6 py-6 overflow-hidden transition-all duration-300 border border-[#ffd7a8] shadow-sm text-card-foreground rounded-xl bg-gradient-to-br from-[#fff7ed] to-[#ffedd4] hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br from-[#FB923C33] to-transparent"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] tracking-wide text-white bg-gradient-to-r from-[#EA580C] to-red-600 shadow-lg rounded-md px-2 py-[2px]">
                  Professional
                </span>
                <Zap className="!w-8 !h-8 text-[#f54a00]" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Prime Series
              </h3>
              <p className="text-base text-slate-600">
                Maximum protection with professional-grade durability
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Material Composition:
                </h4>
                <p className="text-base text-slate-600">
                  High-performance protective core with enhanced shielding
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Applications:
                </h4>
                <p className="text-base text-slate-600">
                  High-intensity procedures, fluoroscopy, specialized imaging
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-700">
                  Lead Equivalency:
                </h4>
                <p className="text-base text-slate-600">
                  0.25 / 0.35 / 0.50 mmPb equivalent range
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection2
