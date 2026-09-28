import BalloonTable from './BalloonTable'

interface ballonDataType {
  label: string
  value: string[] | string
}

const balloonData: ballonDataType[] = [
  {
    label: 'Available Balloon lengths (mm)',
    value: [
      '08',
      '12',
      '16',
      '20',
      '24',
      '28',
      '32',
      '36',
      '40',
      '44',
      '48',
      '52',
    ],
  },
  {
    label: 'Available Balloon Diameters (mm)',
    value: ['2.00', '2.25', '2.50', '2.75', '3.00', '3.50', '4.00', '4.50'],
  },
  { label: 'Drug Dose', value: '2.30 µg/mm²' },
  { label: 'Balloon Material', value: 'Polyamide' },
  { label: 'Catheter Design', value: 'Rapid Exchange Delivery System' },
  { label: 'Usable Catheter Length (cm)', value: '140' },
  { label: 'Guidewire Compatibility', value: '0.014"' },
]

const balloonTechnicalData: ballonDataType[] = [
  {
    label: 'Guiding Catheter Compatibility',
    value: ['5 Fr (Ø2.00 – 4.00 mm)', '6 Fr (Ø4.50 mm)'],
  },
  {
    label: 'Catheter Shaft Diameter',
    value: '1.95 Fr Proximal, 2.70 Fr Distal',
  },
  {
    label: 'Balloon Folds',
    value: '3 Folds',
  },
  {
    label: 'Coating on Delivery System',
    value: 'Hydrophilic Coating',
  },
  {
    label: 'Balloon Nominal Pressure (NP)',
    value: '8 atm',
  },
  {
    label: 'Rated Burst Pressure (RBP)',
    value: ['16 atm (Ø2.00 – 4.00 mm)', '14 atm (Ø4.50 mm)'],
  },
]

const TechnicalTable = ({ data }: { data: ballonDataType[] }) => {
  return (
    <div className="flex flex-col gap-1 lg:h-[400px] xl:h-[350px] 2xl:h-[330px]">
      {data.map((val, ind) => {
        return (
          <div key={ind} className="grid h-full grid-cols-2 gap-1">
            <div className="flex items-center justify-start bg-[#daddeb] px-4 py-2">
              <p className="text-sm sm:text-base">{val.label}</p>
            </div>
            <div className="flex items-center justify-start bg-[#daddeb] px-4 py-2">
              <p className="text-sm sm:text-base">
                {Array.isArray(val.value) ? val.value.join(', ') : val.value}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ProductOverview() {
  return (
    <div className="bg-slate-50">
      <div className="relative z-10 max-w-[1440px] mx-auto h-auto py-20  px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold text-left sm:text-3xl md:text-4xl text-[#12498e] gsap-opacity-trans-appear">
              Product Overview
            </h2>
          </div>
          <div className="gsap-opacity-trans-appear">
            <h3 className="text-[#ee8132] font-bold text-2xl mb-3">
              Ordering Matrix
            </h3>
            <BalloonTable />
          </div>
          <div>
            <h3 className="text-[#ee8132] font-bold text-2xl mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 gsap-stagger-bounce-parent">
              <div className="gsap-stagger-bounce">
                <TechnicalTable data={balloonData} />
                <span>Fr - French; atm - Atmospheric Pressure</span>
              </div>
              <div className="gsap-stagger-bounce">
                <TechnicalTable data={balloonTechnicalData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
