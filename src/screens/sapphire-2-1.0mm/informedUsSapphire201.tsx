import InformedUs, { FeatureCardsList } from 'organisms/informedUs'
import balloon from 'assets/globals/balloon.svg'

const actionCardsList = {
  showReadMore: false,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList: FeatureCardsList[] = [
  {
    title: '',
    desc: '',
  },
]

export const InformedUsSapphire = () => {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about our{' '}
          <br className="min-[500px]:block hidden" />{' '}
          <span className="text-[#F69A4D]">
            Sapphire II Pro (1.0mm - 1.5mm)
          </span>
          ?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/Sapphire II Pro 1_0 mm - 1_5 mm.pdf"
      fileName="Sapphire II Pro 1_0mm-1_5mm"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
