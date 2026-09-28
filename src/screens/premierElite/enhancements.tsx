import React from 'react'

import Enhancements from 'organisms/enhancements'
import EnhancementsMobile from 'organisms/enhancementsMobile'
import { useAdmin } from 'store/store'

const Gallery = () => {
  const { eliteData } = useAdmin()
  return (
    <>
      <div className="md:block hidden">
        <Enhancements
          title="Choose your enhancements"
          subTitle="Discover a plethora of enhancements that take heart care practice to even greater heights."
          enhancements={eliteData.SECTION_8}
        />
      </div>
      <div className="block md:hidden">
        <EnhancementsMobile
          title="Choose your enhancements"
          subTitle="Discover a plethora of enhancements that take heart care practice to even greater heights."
          enhancements={eliteData.SECTION_8}
        />
      </div>
    </>
  )
}

export default Gallery
