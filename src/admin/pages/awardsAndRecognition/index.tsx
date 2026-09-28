import React from 'react'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Awards from './awards'
import useFetchAward from 'hooks/useFetchAward'

const AwardsAndRecognition = () => {
  useFetchAward()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">
        Awards & recognitions page
      </h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <Awards />
      </div>
    </AuthWrapperHOC>
  )
}

export default AwardsAndRecognition
