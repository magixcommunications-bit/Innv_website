import ballonImg1 from 'assets/clearpac/Balloon.png'
import ballonImg2 from 'assets/clearpac/Balloon2.png'
import ballonImg3 from 'assets/clearpac/Balloon3.png'
import GradientDot from './GradientDot'

export default function ShellpacCoating() {
  return (
    <div className="bg-slate-50">
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#12498e] gsap-opacity-trans-appear">
              Engineered for Effcient Drug Release with ShellPac Coating
              Technology
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 gsap-stagger-bounce-parent">
            <div className="flex flex-col gap-5 gsap-stagger-bounce">
              <div className="lg:min-h-[190px] xl:min-h-auto 2xl:min-h-[350px] flex justify-center">
                <img
                  src={ballonImg1}
                  alt=""
                  className="2xl:mt-[34px] xl:mt-[27px] lg:mt-[20px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      ShellPac consists of a unique{' '}
                      <span className="font-bold">1:1 formulation</span> of
                      Paclitaxel and Shellac
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Shellac applied through a{' '}
                      <span className="font-bold">360° spray coating</span> for
                      uniform drug delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Additional protective Shellac layer{' '}
                      <span className="font-bold">
                        enhance coating stability
                      </span>{' '}
                      and prevents early washout and drug loss during transit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 gsap-stagger-bounce">
              <div className="lg:min-h-[190px] xl:min-h-auto 2xl:min-h-[350px] flex justify-center">
                <img src={ballonImg2} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      <span className="font-bold">Hydrophilic Shellac</span>{' '}
                      matrix swells upon contact with blood
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Controlled and optimised release of Paclitaxel during
                      inflation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 gsap-stagger-bounce">
              <div className="lg:min-h-[190px] xl:min-h-auto 2xl:min-h-[350px] flex justify-center">
                <img src={ballonImg3} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <h6 className="text-lg font-bold sm:text-xl">Drug Release:</h6>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Quick and effective delivery of Paclitaxel within
                      <span className="font-bold"> 45 secs</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Prevents excessive tissue growth
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <GradientDot />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg xl:text-xl">
                      Reduces chances of{' '}
                      <span className="font-bold">restenosis</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
