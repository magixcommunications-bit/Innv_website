import React, { useEffect, useState } from 'react'
import chartOcclusionRate from '../../assets/numen/Asset 18.png'
import chartPackingDensity from '../../assets/numen/Asset 19.png'
import chartRecanalizationRate from '../../assets/numen/Asset 20.png'
import angiogramImage1 from '../../assets/numen/NTBNCE23-05.png'
import angiogramImage2 from '../../assets/numen/NTBNCE23-04.png'
import angiogramImage3 from '../../assets/numen/NTBNCE23-03.png'
import angiogramImage4 from '../../assets/numen/NTBNCE23-02.png'
import angiogramImage5 from '../../assets/numen/NTBNCE23-01.png'
import angiogramImage6 from '../../assets/numen/NTBNCE23-06.png'

const CatchTrialPoster = () => {
  const caseData = [
    {
      id: 1,
      title: 'CASE 1',
      packingDensity: '61%',
      images: [
        {
          id: 1,
          url: angiogramImage1,
          alt: 'Angiogram of ruptured right P-Com aneurysm',
          description:
            'A 68-year-old female presented with a ruptured right P-Com aneurysm. The wide-neck aneurysm measured 7.3×9.5mm.',
        },
        {
          id: 2,
          url: angiogramImage2,
          alt: 'Treatment using MicroFill and MicroFinish coils',
          description:
            'MicroFrame: 12×29, 8×30 MicroFill: 10×40, 8×30,  MicroFinish: 8×35, 5×20,5×20, 4×10, 4×10, 4×10, 3×10 Enterprise: 4.5×22',
        },
        {
          id: 3,
          url: angiogramImage3,
          alt: '6-month follow-up angiogram',
          description:
            '6-month follow-up shows complete neck coverage and complete occlusion of aneurysm.',
        },
      ],
    },
    {
      id: 2,
      title: 'CASE 2',
      packingDensity: '43%',
      images: [
        {
          id: 1,
          url: angiogramImage4,
          alt: 'Angiogram of ruptured right P-Com aneurysm',
          description:
            'A 80-year-old female presented with a ruptured right P-Com aneurysm. The wide-neck aneurysm measured 4.5×3.5mm.',
        },
        {
          id: 2,
          url: angiogramImage5,
          alt: 'Treatment using MicroFinish and MicroFill coils',
          description: 'MicroFinish: 4×8, 2×6, 1.5×3 MicroFill: 2×6, 2×6',
        },
        {
          id: 3,
          url: angiogramImage6,
          alt: '6-month follow-up angiogram',
          description:
            '6-month follow-up shows complete occlusion of aneurysm and P-Com patency.',
        },
      ],
    },
  ]

  const SectionHeading: React.FC<{
    children: React.ReactNode
    color?: string
  }> = ({ children, color = 'text-[#00568f]' }) => (
    <h4 className={`font-medium ${color} mb-[12px]`}>{children}</h4>
  )

  interface CircularChartProps {
    image: string
    alt: string
    description: string
    textColor: string
    bgColor: string
    borderColor: string
    index: number
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // useEffect(() => {
  //   console.log('widthInCatch', width)
  // }, [width])

  const CircularChart: React.FC<CircularChartProps> = ({
    image,
    alt,
    description,
    textColor,
    bgColor,
    borderColor,
    index,
  }) => (
    <div
      className={`h-96 flex rounded-lg max-w-[350px] w-full stagger-child gsap-opacity-trans-appear-animation flex-col items-center justify-center ${bgColor} p-4 ${borderColor}`}
    >
      <div className="flex items-center justify-center w-40 h-40 md:w-48 md:h-48 ">
        <img src={image} alt={alt} className="w-full h-auto " />
      </div>
      <div
        className={`text-[20px] text-center font-regular max-w-48 mt-4 ${textColor}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )

  const chartData = [
    {
      image: chartOcclusionRate,
      alt: 'Occlusion Rate Chart',
      description:
        "6 MO. SUCCESSFUL OCCLUSION RATE*<br><span class='text-[#603711]'>6 MO. COMPLETE OCCLUSION RATE**</span>",
      textColor: 'text-[#B3282E] font-bold',
      bgColor: 'bg-[#FEE2E2]',
      borderColor: 'border border-[2px] border-[#d2292e]',
    },
    {
      image: chartPackingDensity,
      alt: 'Packing Density Chart',
      description: 'MEAN PACKING DENSITY*',
      textColor: 'text-[#2D2F55] font-bold',
      bgColor: 'bg-[#BFDBFE]',
      borderColor: 'border border-[2px] border-[#2e2f56]',
    },
    {
      image: chartRecanalizationRate,
      alt: 'Recanalization Rate Chart',
      description:
        "6 MO. RECANALIZATION RATE*<br><span class='text-[#1e6936]'>6 MO. RETREATMENT RATE*</span>",
      textColor: 'text-[#e8e400] font-bold',
      bgColor: 'bg-[#FFFBEB]',
      borderColor: 'border border-[2px] border-[#e8e400]',
    },
  ]

  interface CaseItem {
    id: number
    title: string
    packingDensity: string
    images: {
      id: number
      url: string
      alt: string
      description: string
    }[]
  }

  const CaseCard: React.FC<{ caseItem: CaseItem; index: number }> = ({
    caseItem,
    index,
  }) => (
    <div
      className={`w-full md:w-[49%] border border-black rounded-lg overflow-hidden bg-white shadow-md mb-4 gsap-scale`}
    >
      <div className="flex items-center justify-between bg-[#a7d1ee] px-[12px] py-[8px] border-b border-black">
        <div className="flex items-center">
          <span className="pl-1 font-bold text-[18px]">CASE {caseItem.id}</span>
        </div>
        <div className="flex items-center">
          <div className="text-sm font-medium">
            Packing density: {caseItem.packingDensity}
          </div>
        </div>
      </div>

      <div className="p-3 bg-white">
        <div className="grid grid-cols-1 gap-2 mb-4 sm:grid-cols-3">
          {caseItem.images.map((image) => (
            <div key={image.id} className="flex flex-col">
              <div className="flex items-center justify-center mb-1 overflow-hidden bg-gray-200 rounded aspect-square">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs text-gray-700 font-regular">
                {image.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-[#dff2fd] w-full">
      <article className="w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        {/* Header */}
        <header className="w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#00568f] ">
            CATCH{' '}
            <span className="text-xl text-[#00568f] md:text-2xl">TRIAL</span>
          </h1>
        </header>

        {/* Trial Information */}
        <div className="bg-[#a7d1ee] w-full p-2 mb-4 text-black text-lg">
          <p className="text-center  text-[20px] font-regular">
            <span className="text-lg font-bold">C</span>oil{' '}
            <span className="text-lg font-bold">A</span>pplication{' '}
            <span className="text-lg font-bold">T</span>rial in{' '}
            <span className="text-lg font-bold">CH</span>ronic
            (ClinicalTrials.gov identifier: NCTO2990156)
          </p>
        </div>

        {/* Study Design */}
        <section className="p-3 mb-6 text-lg text-black">
          <ul className="space-y-1 text-lg sm:text-[20px] font-regular">
            <li>• Prospective, multicenter, randomized, controlled trial</li>
            <li>
              • <span className="font-bold">134</span> patients enrolled and
              allocated to control arm and Numen ™ arm
            </li>
            <li>
              • <span className="font-bold">18</span> centers enrolled
            </li>
          </ul>
        </section>

        {/* Safety & Efficacy Section */}
        <section className="flex flex-col w-full mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#00568f] mb-[12px] text-center">
            Safety & Efficacy
          </h2>

          {/* Circular Charts */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
            {/* <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:justify-between md:gap-2"> */}
            {chartData.map((chart, index) => (
              <CircularChart
                key={index}
                index={index}
                image={chart.image}
                alt={chart.alt}
                description={chart.description}
                textColor={chart.textColor}
                bgColor={chart.bgColor}
                borderColor={chart.borderColor}
              />
            ))}
          </div>
        </section>

        {/* Objectives Section */}
        <section className="p-3 mb-4">
          <SectionHeading>Objectives</SectionHeading>
          <p className=" text-black text-[20px] font-regular">
            To evaluate the safety and efficacy of Numen™ Coil Embolization
            System for the treatment of intracranial aneurysm.
          </p>
        </section>

        {/* Results Section */}
        <section className="p-3 mb-4">
          <SectionHeading>Results</SectionHeading>
          <ul className="space-y-1 text-[20px] font-regular text-black">
            <li>
              • Achieved 91.2% successful occlusion rate and 60.3% complete
              occlusion rate at 6-month follow-up
            </li>
            <li>• Mean packing density was 44.9%</li>
            <li>
              • Overall recanalization rate and retreatment rate are 8.8% and
              0.0% respectively
            </li>
          </ul>
        </section>

        {/* Conclusions Section */}
        <section className="p-3 mb-6">
          <SectionHeading>Conclusions</SectionHeading>
          <p className="text-[20px] font-regular text-black">
            The CATCH Trial showed that Numen™ Coil Embolization System is safe
            and effective for the treatment of the intracranial aneurysms.
          </p>
        </section>

        {/* Cases Section */}
        <section className="w-full p-2">
          <div className="flex flex-wrap justify-between w-full gap-2">
            {caseData.map((caseItem, index) => (
              <CaseCard key={caseItem.id} index={index} caseItem={caseItem} />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}

export default CatchTrialPoster
