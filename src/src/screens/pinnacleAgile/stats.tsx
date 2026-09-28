import React from 'react'

import Stats from 'organisms/stats'
import { useAdmin } from 'store/store'

export default function StatsAgile() {
  const { agileData } = useAdmin()
  return (
    <>
      {agileData.SECTION_5.length === 0 ? null : (
        <>
          <Stats
            title="Enhanced interventional mobility"
            subTitle="Pinnacle Agile gives interventionalists the freedom to do any Cardiovascular, Neurovascular, and Peripheral Vascular Procedure with Ease."
            bgGrad="linear-gradient(180deg, #10171D 0%, #272E38 100%)"
            bgClasses="bg-[url(assets/bg-overlay/ellipse-bg.webp)] "
            isCenterAligned={false}
            toShowButton={true}
            statsList={agileData.SECTION_5}
          />
        </>
      )}
    </>
  )
}
