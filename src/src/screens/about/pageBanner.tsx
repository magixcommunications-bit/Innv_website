import { ResourceBanner } from 'organisms/resourceBanner'
import React from 'react'

export default function Banner() {
  return (
    <ResourceBanner
      bgClasses="bg-[url(assets/about/banner_mobile.png)] max-sm:bg-center sm:bg-[url(assets/about/banner.jpg)]"
      preTitle="A legacy of impact"
      title={
        <>
          Over a decade at the <br className="hidden sm:block" /> forefront of
          interventional <br className="hidden sm:block" /> cardiovascular
          technology
        </>
      }
      subTitleClasses=""
    />
  )
}
