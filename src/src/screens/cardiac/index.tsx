import useGSAP from 'hooks/useGSAP'
import React, { useEffect, useRef, useState } from 'react'
import './cardiac.css'
import CardiacBanner from './CardiacBanner'
import Cardiac_IConnect from './Cardiac_IConnect'
import Cardiac_IFlate from './Cardiac_IFlate'
import Cardiac_IRac from './Cardiac_IRac'
import Cardiac_IAccess from './Cardiac_IAccess'
import Cardiac_IMan from './Cardiac_IMan'
import Cardiac_ISheath from './Cardiac_ISheath'
import { useLocation, useNavigate } from 'react-router-dom'
import CardiacMainBanner from './CardiacMainBanner'
import InformedUs from 'organisms/informedUs'
import SubFooter from 'organisms/subFooter'

const index = () => {
  const location = useLocation()
  const [isFirstRender, setIsFirstRender] = useState(false)
  const [isReload, setIsReload] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  useGSAP('.cardiac-master')

  // original code

  // useEffect(() => {
  //   const pathParts = location.pathname.split('/')
  //   if (isFirstRender && pathParts.length > 2 && pathParts[1] === 'cardiac') {
  //     console.log('section path remove fn called')
  //     setIsFirstRender(false)
  //     navigate('/cardiac', { replace: true })
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   }
  // }, [location.pathname, isFirstRender, navigate])

  useEffect(() => {
    setIsLoaded(true)
    return () => {
      setIsLoaded(false)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    const path = location.pathname.split('/')[3]
    console.log('path', path)
    console.log('location', location.pathname)
    if (path) {
      const scrollTimer = setTimeout(() => {
        const section = document.getElementById(path)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)

      return () => clearTimeout(scrollTimer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, isLoaded])

  // original code

  // useEffect(() => {
  //   console.log('isFirstRender before', isFirstRender)
  // }, [isFirstRender])

  // useEffect(() => {
  //   console.log('isReload before', isReload)
  // }, [isReload])

  // useEffect(() => {
  //   const navEntry = performance.getEntriesByType(
  //     'navigation',
  //   )[0] as PerformanceNavigationTiming
  //   const isRefresh =
  //     navEntry?.type === 'reload' ||
  //     !document.referrer.includes(window.location.origin)

  //   const paths = location.pathname.split('/')

  //   if (paths[1] === 'cardiac' && paths[2]) {
  //     console.log('inCardiacPath')
  //     if (isRefresh) {
  //       setIsFirstRender(true)
  //       setIsReload(true)
  //       setTimeout(() => {
  //         setIsFirstRender(false)
  //         setIsReload(false)
  //       }, 50)
  //       console.log('Page got refresh')
  //     } else {
  //       setIsFirstRender(false)
  //       setIsReload(false)
  //       console.log('!Page got refresh')
  //     }
  //   } else {
  //     console.log('not In cardiac path')
  //   }
  // }, [])

  // useEffect(() => {
  //   const pathParts = location.pathname.split('/')
  //   if (isReload && pathParts.length > 2 && pathParts[1] === 'cardiac') {
  //     console.log('section path remove fn called')
  //     setIsFirstRender(false)
  //     setIsReload(false)
  //     navigate('/cardiac', { replace: true })
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   }
  // }, [location.pathname, isReload, navigate])

  // useEffect(() => {
  //   setIsLoaded(true)
  //   return () => {
  //     setIsLoaded(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!isLoaded) return

  //   const path = location.pathname.split('/')[2]

  //   if (path) {
  //     const scrollTimer = setTimeout(() => {
  //       const section = document.getElementById(path)
  //       if (section) {
  //         section.scrollIntoView({ behavior: 'smooth' })
  //       }
  //     }, 300)

  //     return () => clearTimeout(scrollTimer)
  //   } else {
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   }
  // }, [location.pathname, isLoaded])

  // useEffect(() => {
  //   console.log('isFirstRender after', isFirstRender)
  // }, [isFirstRender])

  // useEffect(() => {
  //   console.log('isReload after', isReload)
  // }, [isReload])

  return (
    <main className="cardiac-master">
      <CardiacBanner />
      <section id="i-connect">
        <Cardiac_IConnect />
      </section>
      <section id="i-flate">
        <Cardiac_IFlate />
      </section>
      <section id="i-rac">
        <Cardiac_IRac />
      </section>
      <section id="i-access">
        <Cardiac_IAccess />
      </section>
      <section id="i-man">
        <Cardiac_IMan />
      </section>
      <section id="i-sheath">
        <Cardiac_ISheath />
      </section>
      <InformedUs
        featureCardsList={[]}
        columnClasses=" md:max-w-xl lg:max-w-3xl 2xl:max-w-4xl"
        actionCardsList={{
          showReadMore: false,
          showDownload: true,
          showContact: true,
          showFindMore: false,
        }}
        title={
          <span className="text-white">
            Want to get informed about <br className="hidden md:block" />
            <span className="font-bold text-orange">Cardiac Accessories</span>?
          </span>
        }
        bgGrad="linear-gradient(180deg, #0b161f 0%, #272d36 100%)"
        fileLink="/brochures/CardiacAccessories.pdf"
        fileName="CardiacAccessories"
        productTarget="/products/cardiac"
      />
      <SubFooter />
    </main>
  )
}

export default index
