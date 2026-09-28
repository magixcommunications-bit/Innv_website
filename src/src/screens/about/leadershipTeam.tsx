import React, { useState } from 'react'
import Img1 from 'assets/about/leadershipTeam/Naresh Vashdev -Alreja.jpg'
import Img2 from 'assets/about/leadershipTeam/Surendra Deolekar.jpg'
import Img3 from 'assets/about/leadershipTeam/Bhaveshkumar Mistry.jpg'
import Img4 from 'assets/about/leadershipTeam/Praveen Daga.jpg'
import Img5 from 'assets/about/leadershipTeam/Raghavendra Karanth.jpg'
import Img6 from 'assets/about/leadershipTeam/Dr Ravi Rathod.jpg'
import Img7 from 'assets/about/leadershipTeam/Nagalakshmi S T.jpg'
import Img8 from 'assets/about/leadershipTeam/Vijesh K.jpg'
import Img9 from 'assets/about/leadershipTeam/Ankit Srivastava.jpg'
import Img10 from 'assets/about/leadershipTeam/Divyesh Aiya.jpg'
import Img11 from 'assets/about/leadershipTeam/Bhavesh Pastagia.jpg'
import Img12 from 'assets/about/leadershipTeam/George Anthony.jpg'
import Img13 from 'assets/about/leadershipTeam/Rajesh Nayak.jpg'
import Img14 from 'assets/about/leadershipTeam/Harish S.jpg'
import Img15 from 'assets/about/leadershipTeam/Awdhoot Selokar.jpg'
import Img16 from 'assets/about/leadershipTeam/Naveen Bali.jpg'
import Img17 from 'assets/about/leadershipTeam/Veerakoti B Reddy.jpg'
import Img18 from 'assets/about/leadershipTeam/Ajay Jain.jpg'
import Img19 from 'assets/about/leadershipTeam/Naresh Suresh Chhabra.jpg'
import Img20 from 'assets/about/leadershipTeam/Santosh Mhatre.jpg'
import Img21 from 'assets/about/leadershipTeam/Angsuman Hazra.jpg'

export default function LeadershipTeam() {
  const [cardIndex, setCardIndex] = useState<number>()
  const [cardActive, setCardActive] = useState<boolean>(false)
  const leadershipTeams = [
    // {
    //   name: 'Naresh Vashdev Alreja',
    //   designation: 'Chief of Imaging Innovations',
    //   about: [
    //     "Innovation takes root when deep technical expertise meets purposeful design. We engineer solutions that don't just meet standards - they set them.",
    //     'With every breakthrough, we bring greater precision, reliability and impact to cardiac care, shaping the future of healthcare with intention and integrity.',
    //   ],
    //   place: 'Pune',
    //   image: Img1,
    // },
    {
      name: 'Surendra Deolekar',
      designation: 'Tech Guru',
      about: [
        "We lead with imagination and deliver with impact. At Innvolution, we dont't just keep up with technology - we anticipate what's next, designing advanced, life-saving innovations that push the boundaries of healthcare itself.",
      ],
      place: 'Pune',
      image: Img2,
    },
    {
      name: 'Bhaveshkumar Mistry',
      designation: 'Clinical Ninja',
      about: [
        "True innovation begins when knowledge meets application. That's why we at Innvolution invests in training that turns potential into performance - ensuring our technology delivers in every critical moment.",
      ],
      place: 'Pune',
      image: Img3,
    },
    {
      name: 'Praveen Daga',
      designation: 'Brand Custodian',
      about: [
        "We turn purpose into presence. Every campaign, every message, every market move we make is designed to reflect the heart of Innvolution - innovation that doesn't just speak, but resonates where it matters most.",
      ],
      place: 'Bengaluru',
      image: Img4,
    },
    {
      name: 'Raghavendra Karanth',
      designation: 'Operations Maestro',
      about: [
        'Our strength lies in consistency. With every process fine-tuned and every workflow aligned, we enable Innvolution to deliver reliably - day after day, lab after lab, with quality that speaks for itself.',
      ],
      place: 'Bengaluru',
      image: Img5,
    },
    {
      name: 'Dr Ravi Rathod',
      designation: 'Master Strategist',
      about: [
        'Behind every shift in the healthcare landscape is thoughtful influence. We engage with policymakers, aniticipate industry shifts and guide strategy that keeps Innvolution ahead - and always aligned with meaningful impact.',
      ],
      place: 'Noida',
      image: Img6,
    },
    {
      name: 'Nagalakshmi S T',
      designation: 'Talent Magnet',
      about: [
        'Purpose brings direction. Focus keeps it moving. We align teams around shared goals, enabling Innvolution to run with rhythm, intention and a commitment to making meaningful change in healthcare.',
      ],
      place: 'Bengaluru',
      image: Img7,
    },
    {
      name: 'Vijesh K',
      designation: 'Device Manufacturing Captain',
      about: [
        'Production is more than a process — it’s a promise. We ensure that every component moves with purpose, every system runs with precision and every product we deliver carries the reliability that cardiac care demands.',
      ],
      place: 'Vizag',
      image: Img8,
    },
    {
      name: 'Ankit Srivastava',
      designation: 'Device Quality Hawk',
      about: [
        ' We see quality not as a checkpoint — but as a culture. From the rst prototype to the nal product, we hold ourselves accountable to the promise that every device we deliver upholds the excellence Innvolution stands for.',
      ],
      place: 'Jaipur',
      image: Img9,
    },
    {
      name: 'Divyesh Aiya',
      designation: 'Financial Wizkid',
      about: [
        'Numbers tell a story — and ours is one of impact, efficiency and purpose. We align nancial strategy with visionary thinking to power innovations that go beyond business — building a healthier future, one smart decision at a time.',
      ],
      place: 'Bengaluru',
      image: Img10,
    },
    {
      name: 'Bhavesh Pastagia',
      designation: 'Chief Device Innovator',
      about: [
        'Precision on the production oor is what brings life-saving ideas into reality. We uphold the highest standards of quality, consistency and efficiency — ensuring that every product we build carries the care, commitment and excellence that denes Innvolution.',
      ],
      place: 'Jaipur',
      image: Img11,
    },
    {
      name: 'George Anthony',
      designation: 'Marketing Alchemist',
      about: [
        'We don’t just launch products — we shape their journey. By deeply understanding our users, markets and mission, we create marketing plans that connects, educates and inspires — turning innovation into momentum across every touchpoint.',
      ],
      place: 'Bengaluru',
      image: Img12,
    },
    {
      name: 'Rajesh Nayak',
      designation: 'Chief Design Sculptor',
      about: [
        'Our design is more than visual — it’s purposeful. We translate vision into experiences that empower healthcare providers and restore condence in critical moments.',
      ],
      place: 'Pune',
      image: Img13,
    },
    {
      name: 'Harish S',
      designation: 'Quality Vanguard',
      about: [
        'We ensure that every product meets more than standards — it meets lives. At Innvolution, we embed trust into every layer of our technology through rigorous quality systems and global regulatory excellence.',
      ],
      place: 'Bengaluru',
      image: Img14,
    },
    {
      name: 'Awdhoot Selokar',
      designation: 'Systems Wizard',
      about: [
        'Patients deserve solutions that speak the same language. Our approach to system integration ensures that Innvolution’s technologies communicate clearly, consistently and with purpose — delivering care that feels connected at every touchpoint.',
      ],
      place: 'Pune',
      image: Img15,
    },
    {
      name: 'Naveen Bali',
      designation: 'Imaging Biz Maestro',
      about: [
        'We work at the intersection of strategy and advocacy — shaping Innvolution’s path forward by aligning our innovations with the larger public health ecosystem, policy priorities and long-term impact.',
      ],
      place: 'New Delhi',
      image: Img16,
    },
    {
      name: 'Veerakoti B Reddy',
      designation: 'Software Oracle',
      about: [
        'Tomorrow’s care isn’t a dream — it’s a blueprint. We engineer the software that brings it to life — fast, stable and designed with the user at the center of every experience.',
      ],
      place: 'Bengaluru',
      image: Img17,
    },
    {
      name: 'Ajay Jain',
      designation: 'Global Biz Ambassador',
      about: [
        'From large institutions to emerging markets, we make sure Innvolution’s solutions don’t just travel — they resonate. Every market we enter and every collaboration we foster is a step towards healthcare that’s truly borderless.',
      ],
      place: 'Bengaluru',
      image: Img18,
    },
    {
      name: 'Naresh Suresh Chhabra',
      designation: 'Market Sensei',
      about: [
        'Strong reputations are forged through intention, not chance. We ensure Innvolution moves forward with a presence that reects its values — rooted in clarity, collaboration and a genuine commitment to better healthcare.',
      ],
      place: 'Bengaluru',
      image: Img19,
    },
    {
      name: 'Santosh Mhatre',
      designation: 'Resolution Rockstar',
      about: [
        'We believe in delivering exceptional customer experiences that foster loyalty, advocacy and long-term business success at Innvolution. We ensure every customer interaction reflects our commitment to excellence.',
      ],
      place: 'Pune',
      image: Img20,
    },
    {
      name: 'Angsuman Hazra',
      designation: 'Device Growth Architect',
      about: [
        "We don't just sell devices—we connect people to possibilities. We are on a mission to deliver cutting-edge devices that transform the health and improve patient lives. We are on a trailblazing mission to lead the charge, own the category, and redefine the way we go to market.",
      ],
      place: 'Mumbai',
      image: Img21,
    },
  ]

  const toggleBox = (index: number) => {
    if (cardIndex === index) {
      setCardActive(!cardActive)
    } else {
      setCardIndex(index)
      setCardActive(true)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-auto py-10 md:py-20 bg-slate-200">
      <div className="mb-10">
        <h3 className="font-medium gsap-opacity-trans-appear bg-dark-to-black text-transparen bg-clip-text ">
          Leadership Team
        </h3>
      </div>
      <div className="w-container-lg 2xl:w-container">
        <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gsap-stagger2-parent">
          {leadershipTeams.map((val, index) => {
            const isActive = index === cardIndex && cardActive
            return (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-lg h-max gsap-stagger2"
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={val.image}
                    className="w-full h-full object-contain scale-1 hover:scale-[1.10] transition-all"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <div>
                    <p className="block text-2xl leading-snug font-regular lg:text-xl xl:text-2xl whitespace-nowrap">
                      {val.name}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-regular mr-[2px] text-base lg:text-sm xl:text-base">
                      {val.designation},{' '}
                      <span className="ml-1 font-regular">{val.place}</span>
                    </p>
                  </div>
                  <div
                    className={`${
                      isActive
                        ? 'max-h-[500px] py-2 oapcity-0'
                        : 'max-h-0 py-0 opacity-100'
                    } overflow-hidden transition-all duration-300 ease-in-out`}
                  >
                    <div>
                      {val.about?.map((about, i) => {
                        return (
                          <p key={i} className="text-base font-regular">
                            {about}
                          </p>
                        )
                      })}
                    </div>
                  </div>{' '}
                  <div className="">
                    <button
                      type="button"
                      aria-label="Read more/less"
                      onClick={() => toggleBox(index)}
                      className="flex items-center w-full gap-1 mt-1 text-base font-medium text-orange outline-offset-2 focus-visible:outline-orange"
                    >
                      <span className="text-left ">
                        {isActive ? 'Read Less' : 'Read More'}
                      </span>
                      <div>
                        {isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#F69A4D"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#F69A4D"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
