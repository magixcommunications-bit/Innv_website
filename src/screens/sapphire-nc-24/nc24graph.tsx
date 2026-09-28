import GraphStats from 'organisms/graphStats'
import image1 from 'assets/sapphire-nc-24/graph/graph-1.png'
import image2 from 'assets/sapphire-nc-24/graph/graph-2.png'
import React from 'react'

const Nc24graph = () => {
  const Nc24Data = [
    {
      image: image1,
      title: 'Lowest % Circumferential Growth (Nom to RBP)',
    },
    {
      image: image2,
      title: 'Lowest % Longitudinal Growth (Nom to RBP)',
    },
  ]

  return (
    <GraphStats
      title={'True Controlled Balloon Compliance'}
      bg={'bg-[url(assets/sapphireIINC/product/bg.png)]'}
      data={Nc24Data}
    />
  )
}

export default Nc24graph
