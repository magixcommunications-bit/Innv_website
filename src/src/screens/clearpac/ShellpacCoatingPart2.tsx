import MainImg from 'assets/clearpac/Clearpac2Main.png'

import GradientDot from './GradientDot'
import LineDiv from './LineDiv'

const Data = [
  {
    heading: 'Efficient Drug Carrier',
    text: 'Ensures uniform Paclitaxel distribution for targeted therapeutic action',
  },
  {
    heading: 'Controlled Release',
    text: 'Regulates Paclitaxel elution, maximising local efficacy',
  },
  {
    heading: 'Strong Adhesion',
    text: 'Prevents drug loss, ensuring effective delivery during inflation',
  },
  {
    heading: 'Biocompatible & Safe',
    text: 'A natural resin with excellent tolerance, reducing the risk of adverse reactions',
  },
  {
    heading: 'Enhanced Drug Stability',
    text: 'Protects Paclitaxel from early washout, preserving its potency for sustained impact',
  },
]

const DesignedForData = [
  'De-Novo Lesions',
  'Diffuse Lesions',
  'Bifurcation Lesions',
  'Ostial Lesions',
  'Calcified Lesions',
  'Long Lesions',
  'Small Vessels',
  'In-Stent Restenosis',
  'ST Elevation Myocardial Infarction',
  'Acute Coronary Syndrome',
  'High-Bleeding Risk',
  'Young Patients',
]

export default function ShellpacCoatingPart2() {
  return (
    <div className="bg-slate-50">
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto pb-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center w-full h-auto max-w-4xl mx-auto">
            <img
              src={MainImg}
              alt=""
              className="object-contain w-full h-full gsap-scale"
            />
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-10 gsap-stagger-bounce-parent">
              {Data.map((val, index) => {
                return (
                  <div key={index} className="flex gap-5 gsap-stagger-bounce">
                    <LineDiv />
                    <div className="flex flex-col">
                      <h6 className="text-[#ee8132] font-bold text-xl sm:text-2xl">
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
            <div className="bg-[#daddeb] p-8 flex flex-col gap-5 gsap-opacity-trans-appear">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl text-[#12498e]">
                  Designed for:
                </h3>
              </div>
              <div className="flex flex-col gap-2 gsap-stagger-bounce-parent">
                {DesignedForData.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 gsap-stagger-bounce"
                    >
                      <div>
                        <GradientDot />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl">
                          {data}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
