import ComplianceChartOrganism, {
  ComplienceData,
} from 'organisms/complianceChart'

const chartData: ComplienceData = {
  th: ['Pressure (atm)', 'Balloon diameter (Ø mm)'],
  tableWidth: '',
  columnWidths: ['w-[15rem]', ''],
  columnSpanStructure: [1, 3],
  td: [
    {
      text: ['', '1.0', '1.25', '1.5'],
      textColor: ['text-black', 'text-white', 'text-white', 'text-white'],
      bgColor: ['bg-black', 'bg-black', 'bg-black', 'bg-black'],
    },
    {
      text: ['2', '0.94', '1.18', '1.42'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-white', 'bg-white', 'bg-white', 'bg-white'],
    },
    {
      text: ['4', '0.97', '1.22', '1.46'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]'],
    },
    {
      text: ['6 NOM*', '1.00', '1.25', '1.50'],
      textColor: ['text-white', 'text-white', 'text-white', 'text-white'],
      bgColor: ['bg-black', 'bg-black', 'bg-black', 'bg-black'],
    },
    {
      text: ['8', '1.03', '1.28', '1.54'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]'],
    },
    {
      text: ['10', '1.06', '1.32', '1.58'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-white', 'bg-white', 'bg-white', 'bg-white'],
    },
    {
      text: ['12', '1.09', '1.35', '1.62'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]'],
    },
    {
      text: ['14', '1.12', '1.38', '1.66'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-white', 'bg-white', 'bg-white', 'bg-white'],
    },
    {
      text: ['16 RBP**', '1.15', '1.42', '1.70'],
      textColor: ['text-white', 'text-white', 'text-white', 'text-white'],
      bgColor: ['bg-black', 'bg-black', 'bg-black', 'bg-black'],
    },
    {
      text: ['18', '1.18', '1.45', '1.74'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-white', 'bg-white', 'bg-white', 'bg-white'],
    },
    {
      text: ['20', '1.21', '1.48', '1.78'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]', 'bg-[#DADFE0]'],
    },
    {
      text: ['22', '1.24', '1.52', '1.82'],
      textColor: ['text-black', 'text-black', 'text-black', 'text-black'],
      bgColor: ['bg-white', 'bg-white', 'bg-white', 'bg-white'],
    },
  ],
}

export function ComplianceChart() {
  return (
    <ComplianceChartOrganism
      heading="Compliance chart"
      bgColor="bg-[#F0F4F5]"
      bgGradient="bg-[url(assets/bg-overlay/green-ellipse-bg.webp)]"
      complience={chartData}
    />
  )
}
