import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import JoinUs from './joinUs'
import useFetchCareer from 'hooks/useFetchCareer'

const Home = () => {
  useFetchCareer()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Careers</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <JoinUs />
      </div>
    </AuthWrapperHOC>
  )
}

export default Home
