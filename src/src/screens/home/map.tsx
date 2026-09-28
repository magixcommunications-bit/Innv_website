import React, { useEffect, useRef, useState } from 'react'
// import bg from 'assets/home/map/map-bg.png'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { markerData } from './utils/markers'
import countries from './utils/globe-data-min.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import {
  africa,
  easterns,
  india,
  westerns,
} from './utils/highlighted-countries'

const defaultColor = 'rgba(0, 0, 0, 0.4)'
const highlightedColor = 'rgb(235, 131, 52)'
let Globe: any, scene: any, controls: any

const cards = [
  {
    text: 'Export to 20 countries in Southeast Asia, Western Europe, Latin America, Africa, Middle East',
    id: 'one',
    svgPath:
      'M46.1981 13.1291V28.5896H43.0176V18.717C42.8189 18.8053 42.5317 18.8274 42.1783 18.8274H39.5942V16.1991H41.9133C42.2888 16.1991 42.5759 16.0666 42.7747 15.7574C42.9735 15.4482 43.0839 15.0727 43.0839 14.631V13.1291H46.1981Z',
  },
  {
    text: 'Subsidiaries in Indonesia, Brazil, Russia, and Singapore',
    id: 'two',
    svgPath:
      'M44.0923 20.9304C44.8433 20.3341 45.3954 19.7819 45.7488 19.2739C46.1022 18.788 46.2789 18.2359 46.2789 17.6395C46.2789 16.8886 46.0359 16.3143 45.5942 15.9168C45.1525 15.5192 44.5562 15.2984 43.8052 15.2984C43.0764 15.2984 42.48 15.5413 42.0383 16.0272C41.5966 16.5131 41.3757 17.1757 41.3757 17.9929V18.2359H38.1732V17.8162C38.1732 16.8444 38.394 15.961 38.8578 15.1658C39.3217 14.3707 39.9843 13.7523 40.8456 13.3106C41.6849 12.8689 42.6788 12.6259 43.8052 12.6259C45.6163 12.6259 47.0077 13.0676 48.0016 13.9511C48.9955 14.8346 49.5035 16.0272 49.5035 17.507C49.5035 18.5672 49.2385 19.4948 48.7084 20.2678C48.1783 21.0408 47.3832 21.858 46.301 22.7415L42.8334 25.5686H49.5698V28.241H38.2394V25.7894L44.0923 20.9304Z',
  },
  {
    text: 'Manufacturing in Asia and Europe',
    id: 'three',
    svgPath:
      'M48.4494 22.1339C49.0678 22.7524 49.3991 23.5696 49.3991 24.5855C49.3991 25.469 49.1341 26.2641 48.6481 26.9267C48.1622 27.5893 47.4555 28.1194 46.5499 28.4728C45.6223 28.8482 44.5622 29.0249 43.3695 29.0249C41.5142 29.0249 40.0565 28.5611 38.9964 27.6335C37.9141 26.7058 37.3841 25.4027 37.3841 23.7463H40.5424C40.5424 24.6076 40.8295 25.2923 41.4038 25.7782C41.956 26.2862 42.6627 26.5291 43.5462 26.5291C44.2971 26.5291 44.9155 26.3304 45.4014 25.9328C45.8873 25.5353 46.1524 25.0052 46.1524 24.3205C46.1524 23.7021 45.9094 23.2162 45.4235 22.8628C44.9376 22.5094 44.2309 22.3327 43.3253 22.3327H41.8013V19.7928H43.1486C43.9879 19.7928 44.6505 19.6161 45.1143 19.2406C45.5781 18.8651 45.8211 18.3572 45.8211 17.7167C45.8211 17.1203 45.6002 16.6565 45.1806 16.3031C44.7388 15.9718 44.1867 15.7951 43.502 15.7951C42.7511 15.7951 42.1326 16.016 41.6467 16.4136C41.1608 16.8332 40.8958 17.3854 40.8958 18.0921H37.7816C37.7816 16.6123 38.2896 15.4417 39.3056 14.5804C40.3216 13.7411 41.6688 13.2994 43.3695 13.2994C45.1364 13.2994 46.5278 13.6748 47.5217 14.4258C48.5156 15.1767 49.0236 16.1927 49.0236 17.4295C49.0236 18.3572 48.7365 19.086 48.1843 19.6603C47.6322 20.2345 46.9033 20.6321 45.9978 20.8529C46.9917 21.0959 47.8089 21.5155 48.4494 22.1339Z',
  },
]

gsap.registerPlugin(ScrollTrigger)

export default function Map() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currCountry, setCurrCountry] = useState({ country: india, id: 0 })

  const wrapper = useRef<any>()

  useEffect(() => {
    gsap.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 50%',
        onEnter: () => {
          wrapper.current?.classList.add('map-title-active')
        },
      },
    })
  }, [])

  useEffect(() => {
    // Sizes
    let width = window.innerWidth / 2.5

    const sizes = {
      width: 600,
      height: 600,
    }

    // Create Globe
    Globe = new ThreeGlobe()
      .showAtmosphere(false)
      .ringsData(markerData)
      .ringColor('ringColor')
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod')
      .ringResolution(64)
      .pointsData(markerData)
      .pointAltitude(0.002)
      .pointColor('color')
      .pointRadius('radius')
      .pointResolution(64)
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(0)
      .hexPolygonMargin(0.5)
      .hexPolygonColor((e: any) => {
        if (india.includes(e.properties.ISO_A3)) {
          return highlightedColor
        } else return defaultColor
      })

    const globeMaterial = Globe.globeMaterial()
    globeMaterial.color = new THREE.Color(0xf4f4f4)
    globeMaterial.transparent = true
    globeMaterial.opacity = 0.3

    Globe.rotation.x = 0.3
    Globe.rotation.y = -1.35

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      alpha: true,
    })

    renderer.setSize(width, width)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    scene = new THREE.Scene()
    // scene.background = new THREE.Color('transparent')
    scene.add(Globe)

    scene.add(new THREE.AmbientLight(0xbbbbbb, 1.3))

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      300,
    )
    camera.position.z = 270
    camera.updateProjectionMatrix()

    controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enableDamping = true
    controls.dynamicDampingFactor = 0.01
    controls.enablePan = true
    controls.minDistance = 101
    controls.maxDistance = 370
    controls.zoomSpeed = 1
    controls.enableZoom = false
    controls.minPolarAngle = Math.PI / 3.5
    controls.maxPolarAngle = Math.PI - Math.PI / 3

    setTimeout(() => {
      Globe.hexPolygonResolution(3)
    }, 2000)

    const animate = () => {
      controls.update()

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', () => {
      renderer.setSize(width, width)
    })
  }, [])

  useEffect(() => {
    Globe.hexPolygonColor((e: any) => {
      if (currCountry.country.includes(e.properties.ISO_A3)) {
        return highlightedColor
      } else return defaultColor
    })

    if (currCountry.id === -1) {
      Globe.hexPolygonColor((e: any) => {
        if (india.includes(e.properties.ISO_A3)) {
          return highlightedColor
        } else return defaultColor
      })
      return
    }

    controls.reset()

    switch (currCountry.id) {
      case 0:
        Globe.rotation.x = 0.1
        Globe.rotation.y = -0.5
        break

      case 1:
        Globe.rotation.x = 0
        Globe.rotation.y = 1
        break

      case 2:
        Globe.rotation.x = 0.3
        Globe.rotation.y = -1.5
        break

      default:
        break
    }
  }, [currCountry])

  function hoverHandler(id: number) {
    switch (id) {
      case 0:
        setCurrCountry({ country: africa, id })
        break

      case 1:
        setCurrCountry({ country: westerns, id })
        break

      case 2:
        setCurrCountry({ country: easterns, id })
        break

      default:
        setCurrCountry({ country: india, id })
        break
    }
  }

  return (
    <section className="map-section relative blade-top-padding blade-bottom-padding-lg ">
      <section className="flex w-container-lg items-center">
        <section className="lg:w-container-lg z-100" ref={wrapper}>
          <SectionHeader isShown={'lg'} />
          <div className="border-b-1 border-t-1 pt-10 lg:pt-0 border-solid border-gray lg:border-none ">
            <div className="wcontainer-lg max-w-sm mxauto border-l-1 border-r-1 border-solid border-gray lg:border-none">
              <div className="grid grid-cols-1 gap-y-8 overflow-hidden">
                {cards.map((elem, index) => {
                  const { id, text, svgPath } = elem
                  return (
                    <Card
                      id={id}
                      key={id}
                      text={text}
                      index={index}
                      svgPath={svgPath}
                      onHover={hoverHandler}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="z-100">
          <SectionHeader isShown={'sm'} />
          <div className="globe grid place-content-center pt-5 flex-shrink-0">
            <canvas ref={canvasRef}></canvas>
          </div>
        </section>
      </section>
    </section>
  )
}

function SectionHeader({ isShown }: { isShown: string }) {
  return (
    <div
      className={`${
        isShown === 'lg' ? 'hidden lg:block' : 'lg:hidden'
      }  w-containersm lg:py-8 `}
    >
      <h3
        style={{
          backgroundImage: 'linear-gradient(152deg, #4D4D4D 15.8%, #000 82.7%)',
        }}
        className="textcenter text-transparent bg-clip-text font-medium text-black pb-4 opacity-0 translate-y-4"
      >
        Made in India for the world
      </h3>
      <h6 className="text-black textcenter text-opacity-80 pb-6 font-regular mauto max-w-md xl:max-w-xl leading-tight opacity-0 translate-y-4 ">
        A step towards global footprint of excellence
      </h6>
      <h5 className="map-text max-w-max mxauto !bg-clip-text leading-5 text-[#f69a4d !text-transparent font-regular font-bold textcenter mb-4 opacity-0 translate-y-4">
        Vision 2023-30
      </h5>
    </div>
  )
}

function Card({
  id,
  text,
  index,
  svgPath,
  onHover,
}: {
  index: number
  id: string
  text: string
  svgPath: string
  onHover: (id: number) => void
}) {
  return (
    <article
      className="appear-card-gsap p-3 group card-hover-=effect cursor-pointer relative md:p-6 lg:p-0 lg:pt-0 overflow-hidden "
      onMouseEnter={() => {
        onHover(index)
      }}
      onMouseLeave={() => {
        onHover(-1)
      }}
    >
      <div id={id} className="pb-16 pt-2 lg:pb-5 w-fit">
        <svg
          width="87"
          height="40"
          viewBox="0 0 87 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="43.5671"
            cy="19.8107"
            r="18.9243"
            fill="#FFD1AB"
            stroke="#F69A4D"
            strokeWidth="0.724335"
          />
          <circle
            opacity="0.5"
            cx="67.0383"
            cy="19.8107"
            r="18.9243"
            stroke="#F69A4D"
            strokeWidth="0.724335"
          />
          <circle
            opacity="0.5"
            cx="20.0873"
            cy="19.8096"
            r="18.9243"
            stroke="#F69A4D"
            strokeWidth="0.724335"
          />
          <path d={svgPath} fill="#4E2300" />
        </svg>
      </div>

      <h5 className="font-medium text-lg leading-snug md:text-xl group-hover:text-orange transition-all duration-300 textcenter text-black opacity-0 translate-y-4">
        {text}{' '}
      </h5>
    </article>
  )
}
