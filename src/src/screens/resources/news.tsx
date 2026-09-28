import React from 'react'

import News from 'organisms/news'

const NewsResource = () => {
  return (
    <News
      title="News & insights"
      desc="Stay up to date with the latest in cardiovascular technology and healthcare."
      margin="blade-bottom-padding-lg"
      // bgGrad="radial-gradient(50% 25% at 50% 40%, rgba(13, 40, 120, 0.2), transparent)"
      bgGrad="#E9E9E9"
      gridClasses="grid xl:grid-cols-3 xsl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-10 xsl:gap-8 2xl:gap-10 "
      extraClasses="text-black"
      isGrid={true}
    />
  )
}

export default NewsResource
