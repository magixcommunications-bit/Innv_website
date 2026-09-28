import Img1 from '../../assets/innvoshield/AppronGrid/Asset8.png'
import Img2 from '../../assets/innvoshield/AppronGrid/Asset9.png'
import Img3 from '../../assets/innvoshield/AppronGrid/Asset10.png'
import Img4 from '../../assets/innvoshield/AppronGrid/Asset7.png'
import Img5 from '../../assets/innvoshield/AppronGrid/Asset5.png'
import Img6 from '../../assets/innvoshield/AppronGrid/Asset6.png'
import Img7 from '../../assets/innvoshield/AppronGrid/Asset3.png'
import Img8 from '../../assets/innvoshield/AppronGrid/Asset4.png'
import Img9 from '../../assets/innvoshield/AppronGrid/Asset1.png'
import Img10 from '../../assets/innvoshield/AppronGrid/Asset2.png'

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]

export default function AppronGrid() {
  return (
    <div className="relative bg-neutral-50">
      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Comprehensive Product Range
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            From head-to-toe protection, our complete range ensures safety in
            every procedure
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:gap-20 sm:grid-cols-2 md:grid-cols-2 gsap-stagger-bounce-parent lg:hidden">
          {images.map((img, index) => {
            return (
              <div className="relative block gsap-stagger-bounce ">
                <img
                  key={index}
                  src={img}
                  alt={`Appron Grid Image ${index + 1}`}
                  className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl "
                />
              </div>
            )
          })}
        </div>

        <div className="hidden grid-cols-3 mb-20 lg:gap-10 xl:gap-20 lg:grid gsap-stagger-bounce-parent">
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img1}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img2}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img3}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
        </div>
        <div className="hidden grid-cols-3 mb-20 lg:gap-10 xl:gap-20 lg:grid gsap-stagger-bounce-parent">
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img4}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img5}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img6}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
        </div>
        <div className="hidden grid-cols-3 mb-20 lg:gap-10 xl:gap-20 lg:grid gsap-stagger-bounce-parent">
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img7}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img8}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img9}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
        </div>
        <div className="hidden grid-cols-3 xl:gap-20 lg:grid gsap-stagger-bounce-parent">
          <div className="relative block gsap-stagger-bounce">
            <img
              src={Img10}
              className="block object-contain w-full h-auto transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
