import React, { useCallback, useRef } from 'react'
import Banner from './banner'
import './index.css'
import Vision from './vision'
import Life from './life'
import Form from './form'
import ContactDetails from 'organisms/contactDetails'

import JoinUs from './joinUs'
import useFetchCareer from 'hooks/useFetchCareer'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const Careers = () => {
  const formRef = useRef<HTMLDivElement>(null)
  useFetchCareer()
  useFetchMail()
  useGSAP('.careers-master')

  const formIntoView = useCallback(() => {
    formRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <main className="careers-master careers-wrapper">
      <Banner />
      <Life />
      <JoinUs formIntoView={formIntoView} />
      <Vision />
      <div ref={formRef} className="flex flex-col-reverse lg:flex-row">
        <ContactDetails />
        <Form />
      </div>
    </main>
  )
}

export default Careers
