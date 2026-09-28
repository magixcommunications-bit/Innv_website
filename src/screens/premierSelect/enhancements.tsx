import React from 'react'

import Enhancements from 'organisms/enhancements'
import EnhancementsMobile from 'organisms/enhancementsMobile'
import { useAdmin } from 'store/store'

const Gallery = () => {
  const { selectData } = useAdmin()
  return (
    <>
      <div className="md:block hidden">
        <Enhancements
          title="Enhancements tailored to suit your needs"
          subTitle="Explore a multitude of improvements that can further elevate your practice."
          enhancements={selectData.SECTION_8}
        />
      </div>
      <div className="block md:hidden">
        <EnhancementsMobile
          title="Enhancements tailored to suit your needs"
          subTitle="Explore a multitude of improvements that can further elevate your practice."
          enhancements={selectData.SECTION_8}
        />
      </div>
    </>
  )
}

export default Gallery
