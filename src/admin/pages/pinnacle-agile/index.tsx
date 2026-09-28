import React from 'react'
import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Stats from './stat'
import useFetchAgile from 'hooks/useFetchAgile'

const Pinnacle_Agile = () => {
  useFetchAgile()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Pinnacle Agile</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <Stats />
      </div>
    </AuthWrapperHOC>
  )
}

export default Pinnacle_Agile
