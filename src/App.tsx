import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import routes from './router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useFetchContact from 'hooks/useFetchContact'
import useFetchMail from 'hooks/useFetchMail'
gsap.registerPlugin(ScrollTrigger)

const RenderRoutes = () => {
  useFetchContact()
  useFetchMail()
  const routeTree = useRoutes(routes())
  return routeTree
}

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  )
}

export default App
