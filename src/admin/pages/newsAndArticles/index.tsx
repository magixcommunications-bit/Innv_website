import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import News from './news'
import useFetchNews from 'hooks/useFetchNews'

const NewsAndArticles = () => {
  useFetchNews()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">News and articles</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <News />
      </div>
    </AuthWrapperHOC>
  )
}

export default NewsAndArticles
