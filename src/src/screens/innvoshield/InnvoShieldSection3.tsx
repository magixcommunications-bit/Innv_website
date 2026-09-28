import Img1 from '../../assets/innvoshield/section3/Img1.png'
import Img2 from '../../assets/innvoshield/section3/Img2.png'
import Img3 from '../../assets/innvoshield/section3/Img3.png'
import Img4 from '../../assets/innvoshield/section3/Img4.png'

function InnvoShieldSection3() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 via-orange-400 to-yellow-300">
      {/* Background Pattern - Curved Arcs */}
      <div className="absolute inset-0">
        {/* Large curved arc - top right */}
        <svg
          className="absolute -top-20 -right-20 w-80 h-80"
          viewBox="0 0 200 200"
        >
          <path
            d="M 20 20 Q 180 20 180 180"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="40"
          />
        </svg>

        {/* Medium curved arc - top left */}
        <svg
          className="absolute w-64 h-64 -top-16 -left-16"
          viewBox="0 0 200 200"
        >
          <path
            d="M 180 40 Q 40 40 40 180"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="35"
          />
        </svg>

        {/* Large curved arc - bottom left */}
        <svg
          className="absolute -bottom-32 -left-32 w-96 h-96"
          viewBox="0 0 200 200"
        >
          <path
            d="M 160 20 Q 20 20 20 160"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="50"
          />
        </svg>

        {/* Medium curved arc - center right */}
        <svg
          className="absolute top-1/4 -right-20 w-72 h-72"
          viewBox="0 0 200 200"
        >
          <path
            d="M 30 30 Q 170 30 170 170"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="38"
          />
        </svg>

        {/* Small curved arc - center */}
        <svg
          className="absolute w-48 h-48 top-1/2 left-1/4"
          viewBox="0 0 200 200"
        >
          <path
            d="M 150 50 Q 50 50 50 150"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="30"
          />
        </svg>

        {/* Curved arc - bottom right */}
        <svg
          className="absolute w-64 h-64 -bottom-24 -right-24"
          viewBox="0 0 200 200"
        >
          <path
            d="M 40 40 Q 160 40 160 160"
            fill="none"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="42"
          />
        </svg>

        {/* Additional smaller curved arcs */}
        <svg
          className="absolute w-40 h-40 top-20 left-1/3"
          viewBox="0 0 200 200"
        >
          <path
            d="M 120 60 Q 60 60 60 120"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="25"
          />
        </svg>

        <svg
          className="absolute w-56 h-56 bottom-40 left-1/2"
          viewBox="0 0 200 200"
        >
          <path
            d="M 140 40 Q 40 40 40 140"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="32"
          />
        </svg>

        <svg
          className="absolute top-3/4 right-1/4 w-44 h-44"
          viewBox="0 0 200 200"
        >
          <path
            d="M 130 70 Q 70 70 70 130"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="28"
          />
        </svg>
      </div>

      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center text-blue">
            Protective Apparel
          </h2>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-[100%] sm:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl sm:text-left">
                  Frontal Apron
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>
                    <span className="font-bold">Front:</span> 0.50 mmPb / 0.35
                    mmPb / 0.25 mmPb
                  </li>
                  <li>Covers front torso and open back</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center flex-[100%] sm:flex-[10%]">
              <img
                src={Img1}
                alt=""
                className="max-w-[180px] h-auto gsap-scale"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-[100%] sm:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col ">
                <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl sm:text-left">
                  Skirt Vest Aprons
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>
                    <span className="font-bold">Front:</span> 0.50mmPb /
                    0.35mmPb / 0.25mmPb,{' '}
                    <span className="font-bold">Back:</span>
                    0.25mmPb
                  </li>
                  <li>
                    2-piece design, weight distributed between shoulders & hips
                  </li>
                  <li>
                    Overlap panels for enhanced protection, shoulder pads,
                    pockets and hanging loops
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center flex-[100%] sm:flex-[10%]">
              <img
                src={Img2}
                alt=""
                className="max-w-[180px] h-auto gsap-scale"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-[100%] sm:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl sm:text-left">
                  Full Overwrap Apron
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>
                    <span className="font-bold">Front:</span> 0.50mmPb /
                    0.35mmPb / 0.25mmPb,{' '}
                    <span className="font-bold">Back:</span>
                    0.25mmPb
                  </li>
                  <li>
                    Single-piece, double-sided protection Supported by back
                    support belt and shoulder pads.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center flex-[100%] sm:flex-[10%]">
              <img
                src={Img3}
                alt=""
                className="max-w-[180px] h-auto gsap-scale"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex-[100%] sm:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl sm:text-left">
                  Gonad Apron
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>Shields reproductive organs during procedures</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center flex-[100%] sm:flex-[10%]">
              <img
                src={Img4}
                alt=""
                className="max-w-[180px] h-auto gsap-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection3
