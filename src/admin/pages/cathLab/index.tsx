import React from 'react'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Certificate from './certificate'
import Features from './features'
import useFetchCathLab from 'hooks/useFetchCathLab'

const CathLab = () => {
  useFetchCathLab()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3 ">
        Cath labs family page
      </h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <Features />
        <Certificate />
      </div>
    </AuthWrapperHOC>
  )
}

export default CathLab
