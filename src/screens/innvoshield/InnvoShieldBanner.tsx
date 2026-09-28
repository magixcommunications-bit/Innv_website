import Logo from '../../assets/innvoshield/icons/InnvoShieldLogo.png'
// import LeadFreeIcon from '../../assets/innvoshield/icons/LeadFreeIcon.png'
// import SuperLightWeightIcon from '../../assets/innvoshield/icons/SuperLightWeighIcon.png'
// import DurableIcon from '../../assets/innvoshield/icons/DurableIcon.png'
// import DisposalIcon from '../../assets/innvoshield/icons/DisposalIcon.png'
// import BarcIcon from '../../assets/innvoshield/icons/BarcIcon.png'
// import IsoIcon from '../../assets/innvoshield/icons/IsoIcon.png'
// import CeIcon from '../../assets/innvoshield/icons/CeIcon.png'
import GoogleIcon from '../../assets/innvoshield/icons/goggles.png'
import AbsorbIcon from '../../assets/innvoshield/icons/Absorb.png'
import MainApronIcon from '../../assets/innvoshield/icons/MainApron.png'
import CollarIcon from '../../assets/innvoshield/icons/Collar.png'
import HeadCapIcon from '../../assets/innvoshield/icons/HeadCap.png'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function InnvoShieldBanner() {
  const [width, setWidth] = useState(window.innerWidth)
  const itemsRef = useRef<HTMLDivElement[]>([])

  // const centerRef = useRef<HTMLDivElement | null>(null)

  const centerRefDesktop = useRef(null)
  const centerRefMobile = useRef(null)
  const svgRefDesktop = useRef<SVGSVGElement>(null)
  const lineRefsDesktop = useRef<SVGPathElement[]>([])
  const svgRefMobile = useRef<SVGSVGElement>(null)
  const lineRefsMobile = useRef<SVGPathElement[]>([])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // useEffect(() => {
  //   // Create a timeline to control sequence
  //   const tl = gsap.timeline()

  //   // 1️⃣ Animate the 4 circular divs (staggered pop-in)
  //   tl.fromTo(
  //     itemsRef.current,
  //     { scale: 0, opacity: 0 },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 2,
  //       ease: 'back.out(1.7)',
  //       stagger: 0.3,
  //     },
  //   )

  //   // 2️⃣ Once the above animation completes, reveal SVG and draw lines
  //   tl.set(svgRef.current, { opacity: 1 }, '>-0.1')

  //   const lineLengths = lineRefs.current.map((line) =>
  //     line ? line.getTotalLength() : 0,
  //   )

  //   // Initialize each line so it’s invisible (fully offset)
  //   lineRefs.current.forEach((line, i) => {
  //     if (line) {
  //       const length = lineLengths[i]
  //       line.style.strokeDasharray = `${length}`
  //       line.style.strokeDashoffset = `${length}`
  //     }
  //   })

  //   // 4️⃣ Animate stroke offset smoothly based on real path length
  //   tl.to(
  //     lineRefs.current,
  //     {
  //       strokeDashoffset: 0,
  //       duration: 2, // nice and slow
  //       ease: 'none', // constant motion (no fast start/end)
  //       stagger: 0.2,
  //     },
  //     '<',
  //   )
  // }, [])

  // useEffect(() => {
  //   const tl = gsap.timeline()

  //   // 1️⃣ Animate the center apron card FIRST
  //   tl.fromTo(
  //     centerRef.current,
  //     { x: 250, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 2,
  //       // ease: 'power3.out',
  //     },
  //   )

  //   // 2️⃣ Then animate the 4 circular divs (staggered)
  //   tl.fromTo(
  //     itemsRef.current,
  //     { scale: 0, opacity: 0 },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 0.8,
  //       ease: 'back.out(1.7)',
  //       stagger: 0.3,
  //     },
  //     '>-0.2', // small overlap after apron settles
  //   )

  //   // 3️⃣ Reveal and draw SVG lines at the end
  //   tl.set(svgRef.current, { opacity: 1 }, '>-0.1')

  //   const lineLengths = lineRefs.current.map((line) =>
  //     line ? line.getTotalLength() : 0,
  //   )

  //   lineRefs.current.forEach((line, i) => {
  //     if (line) {
  //       const length = lineLengths[i]
  //       line.style.strokeDasharray = `${length}`
  //       line.style.strokeDashoffset = `${length}`
  //     }
  //   })

  //   tl.to(
  //     lineRefs.current,
  //     {
  //       strokeDashoffset: 0,
  //       duration: 2,
  //       ease: 'none',
  //       stagger: 0.2,
  //     },
  //     '<',
  //   )
  // }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    // 1️⃣ Animate BOTH center apron cards (only visible one will show)
    tl.fromTo(
      [centerRefDesktop.current, centerRefMobile.current], // ← Array of both refs
      { x: 250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
      },
    )

    // 2️⃣ Then animate the 4 circular divs (staggered)
    tl.fromTo(
      itemsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.3,
      },
      '>-0.2',
    )

    // 3️⃣ Add a label to keep both SVGs synced
    tl.addLabel('svgStart', '>-0.1')

    // Desktop SVG
    if (svgRefDesktop.current && lineRefsDesktop.current.length > 0) {
      tl.set(svgRefDesktop.current, { opacity: 1 }, 'svgStart')

      const lineLengths = lineRefsDesktop.current.map((line) =>
        line ? line.getTotalLength() : 0,
      )

      lineRefsDesktop.current.forEach((line, i) => {
        if (line) {
          const length = lineLengths[i]
          line.style.strokeDasharray = `${length}`
          line.style.strokeDashoffset = `${length}`
        }
      })

      tl.to(
        lineRefsDesktop.current,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'none',
          stagger: 0.2,
        },
        'svgStart',
      )
    }

    // Mobile SVG (at the SAME timeline position)
    if (svgRefMobile.current && lineRefsMobile.current.length > 0) {
      tl.set(svgRefMobile.current, { opacity: 1 }, 'svgStart')

      const lineLengths = lineRefsMobile.current.map((line) =>
        line ? line.getTotalLength() : 0,
      )

      lineRefsMobile.current.forEach((line, i) => {
        if (line) {
          const length = lineLengths[i]
          line.style.strokeDasharray = `${length}`
          line.style.strokeDashoffset = `${length}`
        }
      })

      tl.to(
        lineRefsMobile.current,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'none',
          stagger: 0.2,
        },
        'svgStart',
      )
    }
  }, [])

  const details = [
    {
      icon: '🌿',
      text: 'Lead-Free Technology',
    },
    {
      icon: '⚖️',
      text: 'Ultra Lightweight',
    },
    {
      icon: '💪',
      text: 'Crack Resistant',
    },
    {
      icon: '♻️',
      text: 'Eco-Friendly Disposal',
    },
  ]
  return (
    <div className="relative flex flex-col justify-center w-full h-full xl:min-h-screen bg-gradient-to-br from-slate-50 via-[#eff6ff] to-purple-50">
      {/* <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M -50 300 Q 200 200 400 300 Q 600 400 850 300 L 850 600 L -50 600 Z"
            fill="rgba(255,255,255,0.2)"
          />
          <path
            d="M -50 400 Q 150 300 300 400 Q 450 500 600 400 Q 750 300 850 400 L 850 600 L -50 600 Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
      </div> */}

      <div
        className={`relative z-10  min-h-full px-4  md:px-10 lg:px-16   2xl:px-20 py-28 xl:gap-0 gap-10 `}
      >
        <div className="max-w-full mx-auto xl:max-w-7xl">
          <div
            className={`grid grid-cols-1  xl:grid-cols-2 ${
              width >= 1440 ? 'gap-12' : 'xl:gap-8 gap-12'
            }`}
          >
            <div className="flex flex-col items-center w-full gap-10">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col items-start gap-4 element-appear-anim">
                  <div className="w-full h-auto max-w-[200px] sm:max-w-[230px]">
                    <img src={Logo} alt="" className="object-contain" />
                  </div>
                  <h2 className="text-2xl font-medium text-center sm:text-3xl">
                    Where Safety Meets Precision
                  </h2>
                </div>
                <p className="w-full mx-auto text-lg font-normal text-left sm:text-2xl md:max-w-2xl gsap-scale">
                  Introducing{' '}
                  <span className="font-bold text-red-600">InnvoShield</span> a
                  complete range of radiation safety solutions, Designed for
                  comfort, protection and performance in every procedure.
                </p>
              </div>
              <div className="flex w-full max-w-2xl text-appear-anim">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  {details.map((val, index) => {
                    return (
                      <div
                        key={`${'details' + index}`}
                        className="flex items-center flex-1 gap-4 "
                      >
                        <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-lg bg-neutral-200">
                          {val.icon}
                        </div>
                        <p className="text-base font-bold sm:text-lg">
                          {val.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* <div className="flex items-end justify-center h-full 2xl:justify-end">
              <div className="flex items-center gap-2 h-min">
                <img
                  src={BarcIcon}
                  alt=""
                  className="w-16 h-w-16 2xl:h-20 2xl:w-20"
                />
                <img
                  src={IsoIcon}
                  alt=""
                  className="w-16 h-auto 2xl:h-auto 2xl:w-20"
                />
                <img
                  src={CeIcon}
                  alt=""
                  className="w-16 h-auto 2xl:h-auto 2xl:w-20"
                />
              </div>
            </div> */}
            </div>

            {/* <div className="flex md:h-auto h-[530px]">
          <div className="flex-col items-center justify-between flex-1 hidden gap-4 md:flex">
            <div className="flex flex-col items-center gsap-scale">
              <span className="mb-4 text-2xl font-medium">Goggles</span>
              <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle">
                <div className="flex items-center justify-center  border-black rounded-full bg-[#f5b1c6] first-circle">
                  <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#ee6694]">
                    <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#e53e77]">
                      <img
                        src={GoogleIcon}
                        alt=""
                        className="md:max-w-[120px] lg:max-w-[150px] xl:max-w-[170px] w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gsap-scale">
              <span className="mb-4 text-2xl font-medium">Absorb</span>
              <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294]  border-circle">
                <div className="flex items-center justify-center  border-black rounded-full bg-[#e7e4e6] first-circle">
                  <div className="flex items-center justify-center  border-black rounded-full  bg-[#cacaca] second-circle">
                    <div className=" border-black rounded-full  flex items-center justify-center bg-[#bbbaba] third-circle">
                      <img
                        src={AbsorbIcon}
                        alt=""
                        className="w-full h-auto max-w-[170px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-end flex-1 h-auto mt-[10px]">
            <div className="absolute z-10 flex flex-col bottom-16 element-appear-anim">
              <span className="mb-4 text-3xl font-medium text-center">
                Apron
              </span>
              <img
                src={MainApronIcon}
                alt=""
                className="w-auto max-h-[400px] xl:max-h-[480px] 2xl:max-h-[500px]"
              />
            </div>
            <div className="text-appear-anim flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294]  main-border">
              <div className="flex items-center justify-center  border-black rounded-full bg-[#abdee7]  main-first">
                <div className="flex items-center justify-center  border-black rounded-full  bg-[#53c1ce] main-second">
                  <div className=" border-black rounded-full flex items-center justify-center bg-[#00b3b9] main-third"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col items-center justify-between flex-1 hidden gap-4 md:flex">
            <div className="flex flex-col items-center gsap-scale">
              <span className="mb-4 text-2xl font-medium">Thyroid Collar</span>
              <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle ">
                <div className="flex items-center justify-center  border-black rounded-full bg-[#b5d6ec] first-circle">
                  <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#67b7e3]">
                    <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#4da0d4]">
                      <img
                        src={CollarIcon}
                        alt=""
                        className="w-full h-auto md:max-w-[125px] lg:max-w-[125px] xl:max-w-[145px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gsap-scale">
              <span className="mb-4 text-2xl font-medium">Head Cap</span>
              <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle">
                <div className="flex items-center justify-center  border-black rounded-full bg-[#e0b2cd] first-circle">
                  <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#ca66a4]">
                    <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#bc4d9a]">
                      <img
                        src={HeadCapIcon}
                        alt=""
                        className="w-full md:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          <div className="flex flex-col items-center">
            <span className="mb-4 text-2xl font-medium">Goggles</span>
            <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle">
              <div className="flex items-center justify-center  border-black rounded-full bg-[#f5b1c6] first-circle">
                <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#ee6694]">
                  <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#e53e77]">
                    <img
                      src={GoogleIcon}
                      alt=""
                      className="md:max-w-[120px] lg:max-w-[150px] xl:max-w-[170px] w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-4 text-2xl font-medium">Absorb</span>
            <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294]  border-circle">
              <div className="flex items-center justify-center  border-black rounded-full bg-[#e7e4e6] first-circle">
                <div className="flex items-center justify-center  border-black rounded-full  bg-[#cacaca] second-circle">
                  <div className=" border-black rounded-full  flex items-center justify-center bg-[#bbbaba] third-circle">
                    <img
                      src={AbsorbIcon}
                      alt=""
                      className="w-full h-auto max-w-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-4 text-2xl font-medium">Thyroid Collar</span>
            <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle ">
              <div className="flex items-center justify-center  border-black rounded-full bg-[#b5d6ec] first-circle">
                <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#67b7e3]">
                  <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#4da0d4]">
                    <img
                      src={CollarIcon}
                      alt=""
                      className="w-full h-auto md:max-w-[125px] lg:max-w-[125px] xl:max-w-[145px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-4 text-2xl font-medium">Head Cap</span>
            <div className="flex items-center justify-center rounded-full border-2 border-[#cab000] bg-[#c9c294] border-circle">
              <div className="flex items-center justify-center  border-black rounded-full bg-[#e0b2cd] first-circle">
                <div className="flex items-center justify-center  border-black rounded-full second-circle bg-[#ca66a4]">
                  <div className=" border-black rounded-full third-circle flex items-center justify-center bg-[#bc4d9a]">
                    <img
                      src={HeadCapIcon}
                      alt=""
                      className="w-full md:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

            <div className="w-full max-w-[620px] mx-auto xl:max-w-full hidden sm:block">
              <div className="relative h-[600px] flex items-center justify-center ">
                {/* Center Apron Card */}
                <div
                  ref={centerRefDesktop}
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <div className="relative animate-float">
                    <div
                      className={`flex items-center justify-center border shadow-2xl ${
                        width >= 1440
                          ? 'w-64 h-80'
                          : 'xl:w-56 xl:h-72 sm:w-64 sm:h-80 w-40 h-52'
                      } bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-3xl backdrop-blur-xl border-white/20`}
                    >
                      <div className="text-center">
                        <img
                          src={MainApronIcon}
                          alt="Innvoshield Apron"
                          // width={200}
                          // height={250}
                          className={`object-contain mx-auto mb-4 ${
                            width >= 1440
                              ? 'w-[200px] h-[450px]'
                              : 'xl:w-[180px] xl:h-[400px] sm:w-[200px] sm:h-[450px] w-[140px] h-[300px]'
                          }`}
                        />
                        <p className="text-lg font-semibold text-slate-700">
                          Innvoshield Apron
                        </p>
                        <p className="text-sm text-slate-500">
                          Premium Protection
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>

                {/* Top Left - Thyroid Collar */}
                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="absolute left-0 z-20 sm:top-8 sm:left-8 top-8"
                >
                  <div className="relative">
                    <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-green-200/40 to-emerald-200/40 backdrop-blur-xl border-white/30">
                      <img
                        src={CollarIcon}
                        alt="Thyroid Collar"
                        // width={80}
                        // height={80}
                        className="object-contain w-[60px] sm:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/30 blur-lg -z-10" />
                    <div className="absolute text-center -translate-x-1/2 -bottom-8 left-1/2">
                      <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        Thyroid Collar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Right - Head Cap */}
                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="absolute right-0 z-20 sm:top-8 sm:right-8 top-8"
                >
                  <div className="relative">
                    <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 backdrop-blur-xl border-white/30">
                      <img
                        src={HeadCapIcon}
                        alt="Head Cap"
                        // width={80}
                        // height={80}
                        className="object-contain w-[60px] sm:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-lg -z-10" />
                    <div className="absolute text-center -translate-x-1/2 -bottom-8 left-1/2">
                      <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        Head Cap
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Left - Goggles */}
                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="absolute left-0 z-20 sm:bottom-8 sm:left-8 bottom-8"
                >
                  <div className="relative">
                    <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-orange-200/40 to-red-200/40 backdrop-blur-xl border-white/30">
                      <img
                        src={GoogleIcon}
                        alt="Head Cap"
                        // width={80}
                        // height={80}
                        className="object-contain w-[60px] sm:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/30 to-red-400/30 blur-lg -z-10" />
                    <div className="absolute text-center -translate-x-1/2 -bottom-8 left-1/2">
                      <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        Goggles
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Drapes */}
                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="absolute right-0 z-20 sm:bottom-8 sm:right-8 bottom-8"
                >
                  <div className="relative">
                    <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 backdrop-blur-xl border-white/30">
                      <img
                        src={AbsorbIcon}
                        alt="Drapes"
                        // width={80}
                        // height={80}
                        className="object-contain w-[60px] sm:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-lg -z-10" />
                    <div className="absolute text-center -translate-x-1/2 -bottom-8 left-1/2">
                      <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        Drapes
                      </p>
                    </div>
                  </div>
                </div>

                {/* SVG Gradient Lines */}
                <svg
                  ref={svgRefDesktop}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 5, opacity: 0 }}
                >
                  <path
                    ref={(el) => el && lineRefsDesktop.current.push(el)}
                    d="M 120 120 Q 300 200 480 120"
                    stroke="url(#gradient1-desktop)"
                    strokeWidth="2"
                    fill="none"
                    // pathLength={1}
                    // strokeDashoffset="0px"
                    // strokeDasharray="1px 1px"
                  />
                  <path
                    ref={(el) => el && lineRefsDesktop.current.push(el)}
                    d="M 120 480 Q 300 400 480 480"
                    stroke="url(#gradient2-desktop)"
                    strokeWidth="2"
                    fill="none"
                    // pathLength={1}
                    // strokeDashoffset="0px"
                    // strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1-desktop"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8b7cf8" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                    <linearGradient
                      id="gradient2-desktop"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#8b7cf8"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex flex-col w-full gap-12 sm:hidden ">
              <div className="h-[400px] relative">
                <div
                  ref={centerRefMobile}
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <div className="relative animate-float">
                    <div
                      className={`flex items-center justify-center border shadow-2xl ${
                        width >= 1440
                          ? 'w-64 h-80'
                          : 'xl:w-56 xl:h-72 sm:w-64 sm:h-80 w-40 h-52'
                      } bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-3xl backdrop-blur-xl border-white/20`}
                    >
                      <div className="text-center">
                        <img
                          src={MainApronIcon}
                          alt="Innvoshield Apron"
                          // width={200}
                          // height={250}
                          className={`object-contain mx-auto mb-4 ${
                            width >= 1440
                              ? 'w-[200px] h-[450px]'
                              : 'xl:w-[180px] xl:h-[400px] sm:w-[200px] sm:h-[450px] w-[140px] h-[300px]'
                          }`}
                        />
                        <p className="text-lg font-semibold text-slate-700">
                          Innvoshield Apron
                        </p>
                        <p className="text-sm text-slate-500">
                          Premium Protection
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4 sm:hidden">
                {/* Top Left - Thyroid Collar */}

                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="relative z-50 flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-green-200/40 to-emerald-200/40 backdrop-blur-xl border-white/30">
                    <img
                      src={CollarIcon}
                      alt="Thyroid Collar"
                      className="object-contain w-[60px] sm:w-[80px] h-auto"
                    />
                  </div>
                  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/30 blur-lg -z-10" /> */}
                  <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Thyroid Collar
                  </p>
                </div>

                {/* Top Right - Head Cap */}

                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="relative z-50 flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 backdrop-blur-xl border-white/30">
                    <img
                      src={HeadCapIcon}
                      alt="Head Cap"
                      // width={80}
                      // height={80}
                      className="object-contain w-[60px] sm:w-[80px] h-auto"
                    />
                  </div>
                  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-lg -z-10" /> */}
                  <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Head Cap
                  </p>
                </div>

                {/* Bottom Left - Goggles */}

                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="relative z-50 flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-orange-200/40 to-red-200/40 backdrop-blur-xl border-white/30">
                    <img
                      src={GoogleIcon}
                      alt="Head Cap"
                      // width={80}
                      // height={80}
                      className="object-contain w-[60px] sm:w-[80px] h-auto"
                    />
                  </div>
                  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/30 to-red-400/30 blur-lg -z-10" /> */}
                  <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Goggles
                  </p>
                </div>

                {/* Bottom Right - Drapes */}

                <div
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="relative z-50 flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex items-center justify-center border rounded-full shadow-xl h-28 w-28 sm:h-32 sm:w-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 backdrop-blur-xl border-white/30">
                    <img
                      src={AbsorbIcon}
                      alt="Drapes"
                      // width={80}
                      // height={80}
                      className="object-contain w-[60px] sm:w-[80px] h-auto"
                    />
                  </div>
                  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-lg -z-10" /> */}
                  <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Drapes
                  </p>
                </div>

                {/* SVG Gradient Lines */}
                <svg
                  ref={svgRefMobile}
                  className="absolute top-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 5, opacity: 0 }}
                  viewBox="0 0 400 300"
                >
                  <path
                    ref={(el) => el && lineRefsMobile.current.push(el)}
                    d="M 80 70 Q 200 120 320 70"
                    stroke="url(#gradient1-mobile)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    ref={(el) => el && lineRefsMobile.current.push(el)}
                    d="M 80 230 Q 200 180 320 230"
                    stroke="url(#gradient2-mobile)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1-mobile"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8b7cf8" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                    <linearGradient
                      id="gradient2-mobile"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#8b7cf8"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnvoShieldBanner
