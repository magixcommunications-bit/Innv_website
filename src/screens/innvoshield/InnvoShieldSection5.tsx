import { CircleCheckBig, Heart, Star, Zap } from 'lucide-react'
import Img1 from '../../assets/innvoshield/section5/Img1.png'
import Img2 from '../../assets/innvoshield/section5/Img2.png'
import Img3 from '../../assets/innvoshield/section5/Img3.png'
import Img4 from '../../assets/innvoshield/section5/Img4.png'
import Img5 from '../../assets/innvoshield/section5/Img5.png'
import Img6 from '../../assets/innvoshield/section5/Img6.png'
import Img7 from '../../assets/innvoshield/section5/Img7.png'
import Img8 from '../../assets/innvoshield/section5/Img8.png'
import Img9 from '../../assets/innvoshield/section5/Img9.png'
import Img10 from '../../assets/innvoshield/section5/Img10.png'

const features = [
  {
    icon: <Heart className="text-purple-700" />,
    title: 'Comfort Fabrics',
    gradient: 'from-white to-purple-50',
    hoverBorder: 'hover:border-purple-200',
    list: [
      'Antimicrobial treatments',
      'Stain-resistant coatings',
      'Breathable materials',
      'Temperature regulation',
    ],
  },
  {
    icon: <Zap className="text-[#155dfc]" />,
    title: 'Fabric Technologies',
    gradient: 'from-white to-[#eff6ff]',
    hoverBorder: 'hover:border-[#bedbff]',
    list: [
      'Satin Touch finish',
      'Wipeable surfaces',
      'Easy cleaning',
      'Enhanced comfort',
    ],
  },
  {
    icon: <Star className="text-[#f54a00]" />,
    title: 'Personalization',
    gradient: 'from-white to-[#fff7ed]',
    hoverBorder: 'hover:border-[#ffd7a8]',
    list: [
      'Custom embroidery options',
      'Institutional branding',
      'Logo placement',
      'Color customization',
    ],
  },
]

function InnvoShieldSection5() {
  return (
    <div className="relative overflow-hidden bg-neutral-100">
      {/* Horizontal flowing curves pattern */}
      {/* <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
          <path
            d="M -100 100 Q 100 50 300 120 Q 500 190 700 100 Q 900 10 1100 150"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <path
            d="M -50 200 Q 150 150 350 220 Q 550 290 750 200 Q 950 110 1150 250"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="35"
            strokeLinecap="round"
          />
          <path
            d="M -80 350 Q 120 300 320 370 Q 520 440 720 350 Q 920 260 1120 400"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="45"
            strokeLinecap="round"
          />
          <path
            d="M -120 500 Q 80 450 280 520 Q 480 590 680 500 Q 880 410 1080 550"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="38"
            strokeLinecap="round"
          />
          <path
            d="M -60 50 Q 140 0 340 70 Q 540 140 740 50 Q 940 -40 1140 100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div> */}
      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Style Meets Safety
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            Professional patterns and contemporary designs with advanced fabric
            technologies
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 gsap-stagger-bounce-parent">
          <img
            src={Img1}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img2}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img3}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img4}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img5}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img6}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img7}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img8}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img9}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />

          <img
            src={Img10}
            alt=""
            className="object-contain w-full h-auto gsap-stagger-bounce"
          />
        </div>
        {/* <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
          <div className="flex flex-col h-full gap-6 px-6 py-6 transition-all duration-300 border-2 border-transparent shadow-sm text-card-foreground rounded-xl bg-gradient-to-br from-white to-purple-50 hover:border-purple-200 hover:shadow-xl">
            <div className="flex items-center gap-3 text-xl font-semibold text-slate-800">
              <Heart className="text-purple-700" /> Comfort Fabrics
            </div>
            <div>
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-center">
                  <CircleCheckBig /> Antimicrobial treatments
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Stain-resistant coatings
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Breathable materials
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Temperature regulation
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-full gap-6 px-6 py-6 transition-all duration-300 border-2 border-transparent shadow-sm text-card-foreground rounded-xl bg-gradient-to-br from-white to-blue-50 hover:border-blue-200 hover:shadow-xl">
            <div className="flex items-center gap-3 text-xl font-semibold text-slate-800">
              <Zap className="text-[#155dfc]" /> Fabric Technologies
            </div>
            <div>
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-center">
                  <CircleCheckBig />
                  Satin Touch finish
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Wipeable surfaces
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Easy cleaning
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Enhanced comfort
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col h-full gap-6 px-6 py-6 transition-all duration-300 border-2 border-transparent shadow-sm text-card-foreground rounded-xl bg-gradient-to-br from-white to-orange-50 hover:border-orange-200 hover:shadow-xl">
            <div className="flex items-center gap-3 text-xl font-semibold text-slate-800">
              <Star className="text-[#f54a00]" /> Personalization
            </div>
            <div>
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-center">
                  <CircleCheckBig />
                  Custom embroidery options
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Institutional branding
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Logo placement
                </li>
                <li className="flex items-center">
                  <CircleCheckBig />
                  Color customization
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3 gsap-stagger-bounce-parent">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`gsap-stagger-bounce flex flex-col h-full gap-6 px-6 py-6 transition-all duration-300 border-2 border-transparent shadow-sm text-card-foreground rounded-xl bg-gradient-to-br ${feature.gradient} ${feature.hoverBorder} hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3 text-xl font-semibold text-slate-800">
                {feature.icon} {feature.title}
              </div>
              <ul className="space-y-2 text-base text-slate-600">
                {feature.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldSection5
