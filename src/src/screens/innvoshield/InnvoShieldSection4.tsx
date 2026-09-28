import Img1 from '../../assets/innvoshield/section4/Img1.png'
import Img2 from '../../assets/innvoshield/section4/Img2.png'
import Img3 from '../../assets/innvoshield/section4/Img3.png'
import Img4 from '../../assets/innvoshield/section4/Img4.png'
import Img5 from '../../assets/innvoshield/section4/Img5.png'
import Img6 from '../../assets/innvoshield/section4/Img6.png'

function InnvoShieldSection4() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-200 via-pink-300 to-rose-400">
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <svg
            key={i}
            className="absolute"
            style={{
              left: `${((i * 67) % 120) - 10}%`,
              top: `${((i * 43) % 120) - 10}%`,
              width: '60px',
              height: '60px',
            }}
            viewBox="0 0 60 60"
          >
            <polygon
              points="30,5 50,17 50,37 30,50 10,37 10,17"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
          </svg>
        ))}
      </div>
      <div className="h-auto py-20 max-w-[1440px] mx-auto relative z-10 px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10 sm:gap-0">
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex-[100%] sm:flex-[70%] md:flex-[60%] lg:flex-[70%] xl:flex-[75%] 2xl:flex-[80%] items-center flex">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Thyroid Collar
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>0.50mmPb / 0.35mmPb / 0.25mmPb</li>
                  <li>Wraps neck to block X-ray radiation</li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex justify-center sm:justify-start">
              <img
                src={Img1}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-left"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex-[100%] sm:flex-[70%] md:flex-[60%] lg:flex-[70%] xl:flex-[75%] 2xl:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Head Cap
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>0.50mmPb / 0.35mmPb</li>
                  <li>Protects skull from radiation</li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex sm:justify-end justify-center">
              <img
                src={Img2}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-right"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex-[100%] sm:flex-[70%] md:flex-[60%] lg:flex-[70%] xl:flex-[75%] 2xl:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Leg Protector
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>Shields lower extremities, ergonomic and flexible.</li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex justify-center sm:justify-start">
              <img
                src={Img3}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-left"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex-[100%] sm:flex-[70%] md:flex-[60%] lg:flex-[70%] xl:flex-[75%] 2xl:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Arm Shield
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>Factory- Itte , protects upper arm and shoulder</li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex sm:justify-end justify-center">
              <img
                src={Img4}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-right"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex-[100%] sm:flex-[70%] md:flex-[60%] lg:flex-[70%] xl:flex-[75%] 2xl:flex-[80%] flex items-center gsap-slide-down">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Goggles: Eyeglass Regular
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>Lead Equivalency: 0.75mmPb</li>
                  <li>Frame Color: Black with Blue</li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex justify-center sm:justify-start">
              <img
                src={Img6}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-left"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row">
            <div className="flex items-center gsap-slide-down sm:flex-[70%] flex-[100%] md:flex-[60%] lg:flex-[60%] xl:flex-[75%] 2xl:flex-[80%] ">
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-bold text-black lg:text-3xl">
                  Goggles: Eyeglass Fit Over
                </h2>
                <ul className="flex flex-col gap-2 ml-10 text-lg list-disc md:text-xl lg:text-2xl font-regular">
                  <li>
                    Lead Equivalency: Front- 0.75mmPb; Side- 0.50mmPb; Frame
                    Color: Black
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-[100%] sm:flex-[30%] md:flex-[40%] lg:flex-[30%] xl:flex-[25%] 2xl:flex-[20%] flex sm:justify-end justify-center">
              <img
                src={Img5}
                alt=""
                className="max-w-[170px] xl:max-w-[180px] h-auto gsap-slide-from-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection4
