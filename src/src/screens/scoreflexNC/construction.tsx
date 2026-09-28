import React from 'react'
import construction from 'assets/scoreflexNC/construction/construction.png'
import Construction, { CardData } from 'organisms/construction'

const cardData: CardData[] = [
  {
    title: 'Tip',
    desc: 'Short guidewire exchange tip',
  },
  {
    title: 'Wire',
    desc: 'A nitinol integral wire, welded from tip to hypotube, serving as one of the scoring elements',
  },
  {
    title: 'Markers',
    desc: 'Two radiopaque markers on the integral wire aligned to the balloon shoulders',
  },
]

const ConstructionNC = () => {
  return (
    <Construction
      title="Scoreflex NC construction"
      bgGrad="linear-gradient(0deg, #F2EBF4 0%, #F2EBF4 100%), #FFF"
      image={construction}
      bgClasses=""
      imageDesc="The (conventional) guidewire exits proximal to the tip and acts as the second scoring element"
      cardData={cardData}
    />
  )
}

export default ConstructionNC
