import React from 'react'
import { ResourceBanner } from 'organisms/resourceBanner'

export const Banner = () => {
  return (
    <ResourceBanner
      title="Reach out to us!"
      bgClasses="bg-[url(assets/contact/banner-mobileoverlay.webp)] md:bg-[url(assets/contact/banner-image.webp)]"
      subTitleClasses=""
    />
  )
}
