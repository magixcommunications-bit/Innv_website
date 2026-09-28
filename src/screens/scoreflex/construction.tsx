import React from 'react'
import construction from 'assets/scoreflex/construction/construction.png'
import bg from 'assets/scoreflex/construction/bg.svg'
import Construction, { CardData } from 'organisms/construction'

const cardData: CardData[] = [
  {
    title: 'Tip',
    desc: 'A short rapid exchange tip with the guidewire exit port proximal to the tip',
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
const ConstructionFlex = () => {
  return (
    <Construction
      title="Scoreflex construction"
      bgGrad="linear-gradient(180deg, #10171D 0%, #272E38 100%), #FFF"
      image={construction}
      bgClasses="text-white bg-[url(assets/scoreflex/construction/background.webp)] bg-center bg-cover"
      imageDesc="The (conventional) guidewire exits proximal to the tip and acts as the second scoring element"
      cardData={cardData}
      imageBg={bg}
    />
  )
}

export default ConstructionFlex
