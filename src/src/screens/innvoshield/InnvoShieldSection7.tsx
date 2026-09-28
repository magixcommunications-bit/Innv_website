import Img1 from '../../assets/innvoshield/section7/Img1.png'
import Img2 from '../../assets/innvoshield/section7/Img2.png'
import Img3 from '../../assets/innvoshield/section7/Img3.png'
import Img4 from '../../assets/innvoshield/section7/Img4.png'
import Img5 from '../../assets/innvoshield/section7/Img5.png'

function InnvoShieldSection7() {
  return (
    <div className="relative w-full bg-white">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
      `,
          backgroundSize: '100% 100%',
        }}
      />
      <div className="h-auto py-20 max-w-[1440px] mx-auto z-10 relative px-4  md:px-10 lg:px-16 2xl:px-0">
        <div>
          <h2 className="text-3xl font-bold text-center text-orange">
            Certifications
          </h2>
        </div>
        <div className="flex items-center justify-center gap-10 mt-8">
          <img
            src={Img1}
            alt=""
            className="max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-auto"
          />
          <img
            src={Img2}
            alt=""
            className="max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-10 mt-6 md:gap-20">
          <img
            src={Img3}
            alt=""
            className="max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-auto"
          />
          <div className="hidden sm:block">
            <img
              src={Img4}
              alt=""
              className="max-w-[160px] md:max-w-[200px] lg:max-w-[250px] h-auto"
            />
            <p className="text-3xl font-bold text-center text-black">BARC</p>
          </div>
          <img
            src={Img5}
            alt=""
            className="max-w-[160px] md:max-w-[200px] lg:max-w-[250px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-6 sm:hidden">
          <img
            src={Img4}
            alt=""
            className="max-w-[160px] md:max-w-[200px] lg:max-w-[250px] h-auto"
          />
          <p className="text-3xl font-bold text-center text-black">BARC</p>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection7
