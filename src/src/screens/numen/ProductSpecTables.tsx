import React from 'react'
import MFillIcon from 'assets/numen/MicroFillIcon.png'
import MFrameIcon from 'assets/numen/MicroFrameIcon.png'
import MFinishIcon from 'assets/numen/MicroFinishIcon.png'

const ProductSpecTables = () => {
  // Product data in arrays
  const productData = {
    microFrame: {
      title: 'MicroFrame',
      symbol: 'ƒ§',
      color: 'purple',
      bgColor: 'bg-[#7f87b6]',
      bgColorLight: 'bg-[#7f87b6] bg-opacity-[0.3]',
      borderColor: 'border-[#7f87b6]',
      textColor: 'text-[#7f87b6]',
      textColorLight: 'text-purple-500',
      items: [
        {
          catalog: {
            catalog1: '3DO4O6FR',
            catalog2: '3DO4O8FR',
            catalog3: '3DO4O10FR',
            catalog4: '3DO4O15FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 4,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D4H08FR',
            catalog2: '3D4H10FR',
            catalog3: '3D4H14FR',
            catalog4: '3D4H18FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 4.5,
          coilLength: {
            coilLength1: 8,
            coilLength2: 10,
            coilLength3: 14,
            coilLength4: 18,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D0508FR',
            catalog2: '3D0510FR',
            catalog3: '3D0515FR',
            catalog4: '3D0520FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 5,
          coilLength: {
            coilLength1: 8,
            coilLength2: 10,
            coilLength3: 15,
            coilLength4: 20,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.012 inch',
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0610FR',
            catalog2: '3D0615FR',
            catalog3: '3D0620FR',
            catalog4: '3D0625FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 6,
          coilLength: {
            coilLength1: 10,
            coilLength2: 15,
            coilLength3: 20,
            coilLength4: 25,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: true,
          bgcolorbox: false,
        },

        {
          catalog: {
            catalog1: '3D0712FR',
            catalog2: '3D0718FR',
            catalog3: '3D0724FR',
            catalog4: '3D0730FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 7,
          coilLength: {
            coilLength1: 12,
            coilLength2: 18,
            coilLength3: 24,
            coilLength4: 30,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0815FR',
            catalog2: '3D0820FR',
            catalog3: '3D0826FR',
            catalog4: '3D0835FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 8,
          coilLength: {
            coilLength1: 15,
            coilLength2: 20,
            coilLength3: 26,
            coilLength4: 35,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
        },
        {
          catalog: {
            catalog1: '3D0916FR',
            catalog2: '3D0922FR',
            catalog3: '3D0928FR',
            catalog4: '3D0935FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 9,
          coilLength: {
            coilLength1: 16,
            coilLength2: 22,
            coilLength3: 28,
            coilLength4: 35,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.013 inch',
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D1026FR',
            catalog2: '3D1026FR',
            catalog3: '3D1032FR',
            catalog4: '3D1040FR',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 10,
          coilLength: {
            coilLength1: 20,
            coilLength2: 26,
            coilLength3: 32,
            coilLength4: 40,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: true,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D1127FR',
            catalog2: '3D1132FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 11,
          coilLength: {
            coilLength1: 27,
            coilLength2: 32,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D1229FR',
            catalog2: '3D12234FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 12,
          coilLength: {
            coilLength1: 29,
            coilLength2: 34,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D1332FR',
            catalog2: '3D1337FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 13,
          coilLength: {
            coilLength1: 32,
            coilLength2: 37,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D1435FR',
            catalog2: '3D1441FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 14,
          coilLength: {
            coilLength1: 35,
            coilLength2: 41,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D1538FR',
            catalog2: '3D1543FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 15,
          coilLength: {
            coilLength1: 38,
            coilLength2: 43,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.014 inch',
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D1640FR',
            catalog2: '3D1646FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 16,
          coilLength: {
            coilLength1: 40,
            coilLength2: 46,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D1844FR',
            catalog2: '3D1851FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 18,
          coilLength: {
            coilLength1: 44,
            coilLength2: 51,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D2050FR',
            catalog2: '3D2058FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 20,
          coilLength: {
            coilLength1: 50,
            coilLength2: 58,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D2256FR',
            catalog2: '3D2264FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 22,
          coilLength: {
            coilLength1: 56,
            coilLength2: 64,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D2461FR',
            catalog2: '3D2470FR',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 24,
          coilLength: {
            coilLength1: 61,
            coilLength2: 70,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
      ],
    },
    microFill: {
      title: 'MicroFill',
      symbol: '™',
      color: 'teal',
      bgColor: 'bg-[#70aeb8]',
      bgColorLight: 'bg-[#70aeb8] bg-opacity-[0.3]',
      borderColor: 'border-[#70aeb8]',
      textColor: 'text-[#70aeb8]',
      textColorLight: 'text-teal-500',
      items: [
        {
          catalog: {
            catalog1: '1D0101HL',
            catalog2: '1D0102HL',
            catalog3: '1D0103HL',
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 1,
          coilLength: {
            coilLength1: 1,
            coilLength2: 2,
            coilLength3: 3,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },

        {
          catalog: {
            catalog1: '1D1H01HL',
            catalog2: '1D1H02HL',
            catalog3: '1D1H03HL',
            catalog4: '1D1H04HL',
            catalog5: '1D1H06HL',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 1.5,
          coilLength: {
            coilLength1: 1,
            coilLength2: 2,
            coilLength3: 3,
            coilLength4: 4,
            coilLength5: 6,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D0201HL',
            catalog2: '1D0202HL',
            catalog3: '1D0203HL',
            catalog4: '1D0204HL',
            catalog5: '1D0206HL',
            catalog6: '1D0208HL',
            catalog7: null,
          },
          cutLength: 2,
          coilLength: {
            coilLength1: 1,
            coilLength2: 2,
            coilLength3: 3,
            coilLength4: 4,
            coilLength5: 6,
            coilLength6: 8,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D2H03HL',
            catalog2: '1D2H04HL',
            catalog3: '1D2H06HL',
            catalog4: '1D2H08HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 2.5,
          coilLength: {
            coilLength1: 3,
            coilLength2: 4,
            coilLength3: 6,
            coilLength4: 8,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.010 inch',
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D0304HL',
            catalog2: '1D0306HL',
            catalog3: '1D0308HL',
            catalog4: '1D0310HL',
            catalog5: '1D0315HL',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 3,
          coilLength: {
            coilLength1: 4,
            coilLength2: 6,
            coilLength3: 8,
            coilLength4: 10,
            coilLength5: 15,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D3H04HL',
            catalog2: '1D3H06HL',
            catalog3: '1D3H08HL',
            catalog4: '1D3H10HL',
            catalog5: '1D3H15HL',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 3.5,
          coilLength: {
            coilLength1: 4,
            coilLength2: 6,
            coilLength3: 8,
            coilLength4: 10,
            coilLength5: 15,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: true,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D0406HL',
            catalog2: '1D0408HL',
            catalog3: '1D0410HL',
            catalog4: '1D0415HL',
            catalog5: '1D0420HL',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 4,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: 20,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D0506HL',
            catalog2: '1D0508HL',
            catalog3: '1D0510HL',
            catalog4: '1D0515HL',
            catalog5: '1D0520HL',
            catalog6: '1D0525HL',
            catalog7: null,
          },
          cutLength: 5,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: 20,
            coilLength6: 25,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D0606HL',
            catalog2: '1D0608HL',
            catalog3: '1D0610HL',
            catalog4: '1D0615HL',
            catalog5: '1D0620HL',
            catalog6: '1D0625HL',
            catalog7: '1D0630HL',
          },
          cutLength: 6,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: 20,
            coilLength6: 25,
            coilLength7: 30,
          },
          emptyVolume: '0.012 incH',
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D0715HL',
            catalog2: '1D0720HL',
            catalog3: '1D0730HL',
            catalog4: '1D0740HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 7,
          coilLength: {
            coilLength1: 15,
            coilLength2: 20,
            coilLength3: 30,
            coilLength4: 40,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D0820HL',
            catalog2: '1D0830HL',
            catalog3: '1D0840HL',
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 8,
          coilLength: {
            coilLength1: 20,
            coilLength2: 30,
            coilLength3: 40,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D0930HL',
            catalog2: '1D0940HL',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 9,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D1030HL',
            catalog2: '1D1040HL',
            catalog3: '1D1045HL',
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 10,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 45,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: true,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D1230HL',
            catalog2: '1D1240HL',
            catalog3: '1D1250HL',
            catalog4: '1D1255HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 12,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 50,
            coilLength4: 55,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D1430HL',
            catalog2: '1D1440HL',
            catalog3: '1D1450HL',
            catalog4: '1D1455HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 14,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 50,
            coilLength4: 55,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D1630HL',
            catalog2: '1D1640HL',
            catalog3: '1D1650HL',
            catalog4: '1D1655HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 16,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 50,
            coilLength4: 55,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.014 inch',
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '1D1830HL',
            catalog2: '1D1840HL',
            catalog3: '1D1850HL',
            catalog4: '1D1855HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 18,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 50,
            coilLength4: 55,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '1D2030HL',
            catalog2: '1D2040HL',
            catalog3: '1D2050HL',
            catalog4: '1D2055HL',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 20,
          coilLength: {
            coilLength1: 30,
            coilLength2: 40,
            coilLength3: 50,
            coilLength4: 55,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
      ],
    },
    microFinish: {
      title: 'MicroFinish',
      symbol: 'Ω',
      color: 'green',
      bgColor: 'bg-[#609c40]',
      bgColorLight: 'bg-[#609c40] bg-opacity-[0.3]',
      borderColor: 'border-[#609c40]',
      textColor: 'text-[#609c40]',
      textColorLight: 'text-green-500',
      items: [
        {
          catalog: {
            catalog1: '3D01402FN',
            catalog2: '3D01403FN',
            catalog3: null,
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 1,
          coilLength: {
            coilLength1: 2,
            coilLength2: 3,
            coilLength3: null,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D1H02FN',
            catalog2: '3D1H03FN',
            catalog3: '3D1H04FN',
            catalog4: null,
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 1.5,
          coilLength: {
            coilLength1: 2,
            coilLength2: 3,
            coilLength3: 4,
            coilLength4: null,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D0202FN',
            catalog2: '3D0203FN',
            catalog3: '3D0204FN',
            catalog4: '3D0206FN',
            catalog5: '3D0208FN',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 2,
          coilLength: {
            coilLength1: 2,
            coilLength2: 3,
            coilLength3: 4,
            coilLength4: 6,
            coilLength5: 8,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0304FN',
            catalog2: '3D0306FN',
            catalog3: '3D0308FN',
            catalog4: '3D0310FN',
            catalog5: '3D0315FN',
            catalog6: null,
            catalog7: null,
          },
          cutLength: 3,
          coilLength: {
            coilLength1: 4,
            coilLength2: 6,
            coilLength3: 8,
            coilLength4: 10,
            coilLength5: 15,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D3H06FN',
            catalog2: '3D3H08FN',
            catalog3: '3D3H10FN',
            catalog4: '3D3H15FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 3.5,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0406FN',
            catalog2: '3D0408FN',
            catalog3: '3D0410FN',
            catalog4: '3D0415FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 4,
          coilLength: {
            coilLength1: 6,
            coilLength2: 8,
            coilLength3: 10,
            coilLength4: 15,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: '0.010 inch',
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D4H08FN',
            catalog2: '3D4H10FN',
            catalog3: '3D4H14FN',
            catalog4: '3D4H18FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 4.5,
          coilLength: {
            coilLength1: 8,
            coilLength2: 10,
            coilLength3: 14,
            coilLength4: 18,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0508FN',
            catalog2: '3D0510FN',
            catalog3: '3D0515FN',
            catalog4: '3D0520FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 5,
          coilLength: {
            coilLength1: 8,
            coilLength2: 10,
            coilLength3: 15,
            coilLength4: 20,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D0610FN',
            catalog2: '3D0615FN',
            catalog3: '3D0620FN',
            catalog4: '3D0625FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 6,
          coilLength: {
            coilLength1: 10,
            coilLength2: 15,
            coilLength3: 20,
            coilLength4: 25,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
        {
          catalog: {
            catalog1: '3D0712FN',
            catalog2: '3D0718FN',
            catalog3: '3D0724FN',
            catalog4: '3D0730FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 7,
          coilLength: {
            coilLength1: 12,
            coilLength2: 18,
            coilLength3: 24,
            coilLength4: 30,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: false,
        },
        {
          catalog: {
            catalog1: '3D0815FN',
            catalog2: '3D0820FN',
            catalog3: '3D0826FN',
            catalog4: '3D0835FN',
            catalog5: null,
            catalog6: null,
            catalog7: null,
          },
          cutLength: 8,
          coilLength: {
            coilLength1: 15,
            coilLength2: 20,
            coilLength3: 26,
            coilLength4: 35,
            coilLength5: null,
            coilLength6: null,
            coilLength7: null,
          },
          emptyVolume: null,
          borderBottom: false,
          bgcolorbox: true,
        },
      ],
    },
  }

  // NumenFR Data

  // Component for product tables with similar structure
  type ProductData = {
    title: any
    symbol: any
    color: any
    bgColor: string
    bgColorLight: string
    borderColor: string
    textColor: string
    textColorLight: string
    items: {
      catalog: {
        catalog1: any
        catalog2: any
        catalog3: any
        catalog4: any
        catalog5: any
        catalog6: any
        catalog7: any
      }
      cutLength: any
      coilLength: {
        coilLength1: any
        coilLength2: any
        coilLength3: any
        coilLength4: any
        coilLength5: any
        coilLength6: any
        coilLength7: any
      }
      emptyVolume: any | null
      borderBottom?: boolean
      bgcolorbox?: boolean
    }[]
  }

  const ProductTable = ({
    data,
    type,
    icon,
  }: {
    data: ProductData
    type: any
    icon: any
  }) => {
    const {
      title,
      symbol,
      color,
      bgColor,
      bgColorLight,
      borderColor,
      textColor,
      textColorLight,
      items,
    } = data

    return (
      <div className="md:flex-none md:max-w-md lg:flex-1">
        <div
          className={`p-2 text-center font-bold text-[32px] ${textColor} flex items-center justify-center gap-2`}
        >
          <img src={icon} className="w-auto h-auto " alt="" />
          {title}
        </div>
        <div
          className={` text-white font-bold  grid grid-cols-4 rounded-xl ${bgColor}`}
        >
          <div className="p-1 text-[16px] text-center border-r border-white">
            {' '}
            Product
            <br />
            Catalog
            <br />
            Number
          </div>
          <div className="p-1 text-[16px]  text-center border-r border-white">
            Coil
            <br />
            diameter
            <br />
            (mm)
          </div>
          <div className="p-1 text-[16px]  text-center border-r border-white">
            Coil
            <br />
            length
            <br />
            (mm)
          </div>
          <div className="p-1 text-[16px]  text-center">
            Primary
            <br />
            Coil OD
            <br />
            (inch)
          </div>
        </div>
        <div
          className={`h-auto font-regular overflow-y-auto mt-3 border rounded-xl ${borderColor}`}
        >
          {items.map((item, i) => (
            <div key={`${type}-${i}`} className="grid grid-cols-4 ">
              <div
                className={`text-xs  border-r border-b ${borderColor} ${
                  item.bgcolorbox ? '' : bgColorLight
                }`}
              >
                {item.catalog.catalog1 !== null && (
                  <>
                    <p className={`px-1  block h-0 text-center`}>
                      {item.catalog.catalog1}
                    </p>
                  </>
                )}
                {item.catalog.catalog2 !== null && (
                  <>
                    <br />
                    <p
                      className={`px-1 text-center  border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog2}
                    </p>
                  </>
                )}

                {item.catalog.catalog3 !== null && (
                  <>
                    <br />
                    <p
                      className={`border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog3}
                    </p>
                  </>
                )}

                {item.catalog.catalog4 !== null && (
                  <>
                    <br />
                    <p
                      className={`border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog4}
                    </p>
                  </>
                )}

                {item.catalog.catalog5 !== null && (
                  <>
                    <br />
                    <p
                      className={`border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog5}
                    </p>
                  </>
                )}

                {item.catalog.catalog6 !== null && (
                  <>
                    <br />
                    <p
                      className={`border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog6}
                    </p>
                  </>
                )}

                {item.catalog.catalog7 !== null && (
                  <>
                    <br />
                    <p
                      className={`border-t ${borderColor}  px-1  block h-0 text-center`}
                    >
                      {item.catalog.catalog7}
                    </p>
                  </>
                )}
              </div>
              <div
                className={` text-xs text-center flex items-center justify-center border-r border-b ${borderColor} ${
                  item.bgcolorbox ? '' : bgColorLight
                }`}
              >
                {item.cutLength}
              </div>
              <div
                className={`text-xs text-center border-r border-b ${borderColor} ${
                  item.bgcolorbox ? '' : bgColorLight
                }`}
              >
                {item.coilLength.coilLength1 !== null && (
                  <>
                    <p className={`px-1 block text-center `}>
                      {item.coilLength.coilLength1}
                    </p>
                  </>
                )}
                {item.coilLength.coilLength2 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength2}
                    </p>
                  </>
                )}

                {item.coilLength.coilLength3 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength3}
                    </p>
                  </>
                )}

                {item.coilLength.coilLength4 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength4}
                    </p>
                  </>
                )}

                {item.coilLength.coilLength5 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength5}
                    </p>
                  </>
                )}

                {item.coilLength.coilLength6 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength6}
                    </p>
                  </>
                )}

                {item.coilLength.coilLength7 !== null && (
                  <>
                    <p
                      className={`px-1 block text-center border-t ${borderColor}`}
                    >
                      {item.coilLength.coilLength7}
                    </p>
                  </>
                )}
              </div>
              <div
                className={`p-1 text-xs font-bold ${textColor} text-center ${
                  item.borderBottom ? `border-b ${borderColor}` : ''
                } `}
              >
                {item.emptyVolume}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-[100%] bg-[url(assets/numen/TableBG.png)] bg-center bg-no-repeat bg-cover">
      <div className="flex justify-center w-full mt-8">
        <h3 className="text-[48px] font-bold text-[#00568f]">Specification</h3>
      </div>
      <div className="flex flex-col flex-wrap justify-center w-full gap-4 pt-[12px] px-4 pb-8 mx-auto max-w-7xl md:flex-row">
        <ProductTable
          data={productData.microFrame}
          type="mf"
          icon={MFrameIcon}
        />
        <ProductTable
          data={productData.microFill}
          type="mfill"
          icon={MFillIcon}
        />
        <ProductTable
          data={productData.microFinish}
          type="mfn"
          icon={MFinishIcon}
        />
      </div>
    </div>
  )
}

export default ProductSpecTables
