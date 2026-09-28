import MainImg from 'assets/clearpac/Clearpac1Main.png'
import Icon from 'assets/clearpac/icon.png'

export default function OptimizedDrugDose() {
  return (
    <div className="relative bg-slate-100">
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#12498e] gsap-opacity-trans-appear">
              Optimised Drug Dose for Long-Term Arterial Healing
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col ">
              <div className="flex items-center justify-start w-full">
                <img
                  src={MainImg}
                  alt=""
                  className="object-contain gsap-scale"
                />
              </div>
              {/* <div className="flex flex-col gap-10">
                <div>
                  <h6 className="text-[#ee8132] text-2xl font-bold">
                    Paclitaxel
                  </h6>
                  <p className="text-xl text-black">
                    Lipophilic and anti-proliferative agent that prevents
                    restenosis
                  </p>
                </div>
                <div>
                  <h6 className="text-[#ee8132] text-2xl font-bold">
                    Shellac - USFDA Approved
                  </h6>
                  <p className="text-xl text-black">
                    A hydrophilic resin enabling optimum release of Paclitaxel
                  </p>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col justify-end gap-5 gsap-opacity-trans-appear">
              <div className="flex flex-col items-end text-[#ee8132] font-bold sm:text-2xl text-xl">
                <p className="text-right">Therapeutic Range of Paclitaxel*</p>
                <p>
                  (2.00 - 3.50 pg/mm<sup>2</sup>)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid h-12 grid-cols-5 gap-2 sm:grid-cols-3">
                  <div className="col-span-3 sm:col-span-2 bg-[#225092] px-4 flex items-center text-white font-bold">
                    <h6 className="text-sm sm:text-base">BRAND</h6>
                  </div>
                  <div className="bg-[#225092] px-4 flex items-center text-white font-bold col-span-2 sm:col-span-1">
                    <h6 className="text-sm sm:text-base">DOSE</h6>
                  </div>
                </div>
                <div className="grid h-12 grid-cols-5 gap-2 sm:grid-cols-3">
                  <div className="col-span-3 sm:col-span-2 bg-[#daddeb] px-4 flex items-center">
                    <h6 className="text-sm sm:text-base">Agent</h6>
                  </div>
                  <div className="bg-[#daddeb] px-4 flex items-center col-span-2 sm:col-span-1">
                    <h6 className="text-sm sm:text-base">
                      2.00 μg/mm<sup>2</sup>
                    </h6>
                  </div>
                </div>
                <div className="grid h-12 grid-cols-5 gap-2 sm:grid-cols-3">
                  <div className="col-span-3 sm:col-span-2 bg-[#daddeb] px-4 flex items-center">
                    <h6 className="text-sm sm:text-base">Prevail</h6>
                  </div>
                  <div className="bg-[#daddeb] px-4 flex items-center col-span-2 sm:col-span-1">
                    <h6 className="text-sm sm:text-base">
                      3.50 μg/mm<sup>2</sup>
                    </h6>
                  </div>
                </div>
                <div className="grid h-12 grid-cols-5 gap-2 sm:grid-cols-3">
                  <div className="col-span-3 sm:col-span-2 bg-[#daddeb] px-4 flex items-center">
                    <h6 className="text-sm sm:text-base">SeQuent Please Neo</h6>
                  </div>
                  <div className="bg-[#daddeb] px-4 flex items-center col-span-2 sm:col-span-1">
                    <h6 className="text-sm sm:text-base">
                      3.50 μg/mm<sup>2</sup>
                    </h6>
                  </div>
                </div>
                <div className="grid h-12 grid-cols-5 gap-2 sm:grid-cols-3">
                  <div className="flex items-center col-span-3 sm:col-span-2 px-4 bg-gradient-to-r from-[#ee8132] via-[#66557a] to-[#1c498a] text-white">
                    <h6 className="text-sm sm:text-base">ClearPac</h6>
                  </div>
                  <div className="bg-[#daddeb] px-4 flex items-center bg-gradient-to-r from-[#ee8132] via-[#66557a] to-[#1c498a] text-white col-span-2 sm:col-span-1">
                    <h6 className="text-sm sm:text-base">
                      2.30 μg/mm<sup>2</sup>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <div className="w-1 h-full bg-[#717db0]" />
                <h2 className="text-[#ee8132] font-bold xl:text-3xl sm:text-2xl text-xl">
                  Optimised Dose of Paclitaxel
                </h2>
              </div>
            </div>
          </div>
          <div className="grid h-auto grid-cols-1 gap-10 lg:grid-cols-2 gsap-stagger-bounce-parent">
            <div className="grid grid-cols-3 gap-5 lg:grid-cols-5 gsap-stagger-bounce">
              <div className="lg:col-span-2">
                <img src={Icon} alt="" />
              </div>
              <div className="col-span-2 lg:col-span-3 text-[#12498e] flex flex-col justify-center">
                <h4 className="text-xl font-bold xl:text-3xl sm:text-2xl">
                  Seamless 360° Shellac Coating
                </h4>
                <p className="text-base xl:text-xl sm:text-lg">
                  Prevents uneven drug loss while ensuring precise adhesion and
                  release.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 lg:grid-cols-5 gsap-stagger-bounce">
              <div className="lg:col-span-2">
                <img src={Icon} alt="" />
              </div>
              <div className="col-span-2 lg:col-span-3 text-[#12498e] flex flex-col justify-center">
                <h4 className="text-xl font-bold xl:text-3xl sm:text-2xl">
                  2.30 μg/mm<sup>2</sup> Paclitaxel
                </h4>
                <p className="text-base xl:text-xl sm:text-lg">
                  effectively inhibits cell proliferation and prevents
                  restenosis within the optimal dosage range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
