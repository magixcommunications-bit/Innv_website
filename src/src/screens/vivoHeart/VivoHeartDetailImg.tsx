// import React, { useState, useEffect } from 'react'
// import MainProductImg from 'assets/vivoHeart/ProductImg.png'
// import ProductImg1 from 'assets/vivoHeart/ProductImg1.png'
// import ProductImg2 from 'assets/vivoHeart/ProductImg2.png'
// import ProductImg3 from 'assets/vivoHeart/ProductImg3.png'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

// const VivoHeartDetailImg = () => {
//   const [width, setWidth] = useState(window.innerWidth)

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const productImages = [
//     {
//       src: ProductImg1,
//       className: `absolute ${
//         375 > width && width >= 320 ? 'top-[0%]' : 'top-[8%]'
//       } left-[0%] w-[80px] sm:top-[20%] sm:left-[0%] sm:w-[125px] md:top-[22%] md:left-[1%] md:w-[140px] lg:top-[20%] lg:left-[-4%] lg:w-[200px] gsap-scale`,
//       alt: '',
//       text: 'Transducer',
//     },
//     {
//       src: ProductImg2,
//       className:
//         'hidden sm:absolute sm:block sm:top-[19%] sm:right-[0%] sm:w-[145px] md:top-[18%] md:right-[6%] md:w-[160px] lg:top-[20%] lg:right-[0%] lg:w-[200px] gsap-scale',
//       alt: '',
//     },
//     {
//       src: ProductImg3,
//       className:
//         'hidden sm:absolute sm:block sm:bottom-[5%] sm:left-[38%] sm:w-[145px] md:bottom-[4%] md:left-[38%] md:w-[160px] lg:bottom-[3%] lg:left-[40%] lg:w-[200px] gsap-scale',
//       alt: '',
//     },
//   ]

//   return (
//     <div className="relative bg-gradient-to-r from-[#972d8ecb] to-[#123978] flex items-center justify-center w-full h-full">
//       <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
//         <div className="flex flex-col w-full ">
//           <div className="flex items-center justify-center w-full h-full">
//             <div className="relative h-full max-h-[900px] w-full max-w-[900px]">
//               <img
//                 src={MainProductImg}
//                 className="block object-contain w-full h-full gsap-opacity-trans-appear"
//                 alt=""
//               />
//               <div
//                 className={`absolute ${
//                   width <= 475 && width > 376
//                     ? '-bottom-1'
//                     : width <= 375 && width >= 320
//                     ? '-bottom-2'
//                     : 'sm:bottom-3 md:bottom-[17px] lg:bottom-16'
//                 }  md:left-0 lg:-left-[33px]`}
//               >
//                 <div className="flex justify-center w-full ">
//                   <ArrowRightAltIcon
//                     sx={{
//                       transform: 'rotate(270deg)',
//                       fontSize:
//                         width > 640
//                           ? '70px'
//                           : width <= 350 && width >= 320
//                           ? '30px'
//                           : '40px',
//                     }}
//                   />
//                 </div>
//                 <span
//                   className={`block ${
//                     width <= 355 && width >= 320
//                       ? 'text-[12px]'
//                       : 'text-sm sm:text-2xl'
//                   }  text-center text-white`}
//                 >
//                   Tapered
//                 </span>
//                 <span
//                   className={`block text-center text-white ${
//                     width <= 355 && width >= 320
//                       ? 'text-[12px]'
//                       : 'text-sm sm:text-2xl'
//                   }`}
//                 >
//                   Catheter Design
//                 </span>
//               </div>
//               {productImages.map((image, index) => {
//                 return (
//                   <div key={index} className={image.className}>
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="w-full h-full"
//                     />
//                     {image.text && (
//                       <span className="block mx-auto mr-5 text-sm text-center text-white sm:text-xl font-regular">
//                         {image.text}
//                       </span>
//                     )}
//                     {index === 0 && (
//                       <ArrowRightAltIcon
//                         className={`absolute ${
//                           373 >= width && width <= 320
//                             ? 'right-5 top-[95px]'
//                             : 500 > width && width >= 374
//                             ? 'right-0 top-[90px]'
//                             : ' sm:top-[105px] sm:right-2 md:top-[110px] md:-right-2 lg:top-[150px] lg:-right-5 lg:!text-[70px]'
//                         } `}
//                         sx={{
//                           transform:
//                             500 > width ? 'rotate(30deg)' : 'rotate(0deg)',
//                           fontSize:
//                             768 >= width && width > 640
//                               ? '60px'
//                               : width <= 350 && width >= 320
//                               ? '30px'
//                               : '40px',
//                         }}
//                       />
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//           <div className="flex justify-center w-full mt-5 sm:hidden">
//             <img
//               src={ProductImg2}
//               className={'w-full max-w-[200px] gsap-scale'}
//               alt={''}
//             />
//           </div>
//           <div className="flex justify-center w-full mt-8 sm:hidden">
//             <img
//               src={ProductImg3}
//               className={'w-full max-w-[200px] gsap-scale'}
//               alt={''}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default VivoHeartDetailImg

import React, { useState, useEffect } from 'react'
import MainProductImg from 'assets/vivoHeart/ProductImg.png'
import ProductImg1 from 'assets/vivoHeart/ProductImg1.png'
import ProductImg2 from 'assets/vivoHeart/ProductImg2.png'
import ProductImg3 from 'assets/vivoHeart/ProductImg3.png'
import ArrowBlack from 'assets/vivoHeart/Arrow1.png'
import ArrowWhite from 'assets/vivoHeart/Arrow2.png'

const VivoHeartDetailImg = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const productImages = [
    {
      src: ProductImg1,
      className: `absolute ${
        375 > width && width >= 320 ? 'top-[0%]' : 'top-[8%]'
      } left-[0%] w-[80px] sm:top-[20%] sm:left-[0%] sm:w-[125px] md:top-[22%] md:left-[1%] md:w-[140px] lg:top-[20%] lg:left-[-4%] lg:w-[200px] gsap-scale`,
      alt: '',
      text: 'Transducer',
    },
    {
      src: ProductImg2,
      className:
        'hidden sm:absolute sm:block sm:top-[19%] sm:right-[0%] sm:w-[145px] md:top-[18%] md:right-[6%] md:w-[160px] lg:top-[20%] lg:right-[0%] lg:w-[200px] gsap-scale',
      alt: '',
    },
    {
      src: ProductImg3,
      className:
        'hidden sm:absolute sm:block sm:bottom-[5%] sm:left-[38%] sm:w-[145px] md:bottom-[4%] md:left-[38%] md:w-[160px] lg:bottom-[3%] lg:left-[40%] lg:w-[200px] gsap-scale',
      alt: '',
    },
  ]

  return (
    <div className="relative bg-gradient-to-r from-[#972d8ecb] to-[#123978] flex items-center justify-center w-full h-full">
      <div className="relative w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative h-full max-h-[900px] w-full max-w-[900px]">
              <img
                src={MainProductImg}
                className="block object-contain w-full h-full gsap-opacity-trans-appear"
                alt=""
              />
              <div
                className={`absolute ${
                  width <= 475 && width > 376
                    ? '-bottom-3'
                    : width <= 375 && width >= 320
                    ? '-bottom-4'
                    : 'sm:bottom-3 md:bottom-[4px] lg:bottom-16'
                }  md:left-0 lg:-left-[35px]`}
              >
                <div className="flex justify-center w-full ">
                  <img
                    src={ArrowWhite}
                    style={{
                      transform: 'rotate(360deg)',
                      height:
                        width > 640
                          ? '70px'
                          : width <= 350 && width >= 320
                          ? '30px'
                          : '40px',
                    }}
                  />
                </div>
                <span
                  className={`block ${
                    width <= 355 && width >= 320
                      ? 'text-[12px]'
                      : 'text-sm sm:text-2xl'
                  }  text-center text-white`}
                >
                  Tapered
                </span>
                <span
                  className={`block text-center text-white ${
                    width <= 355 && width >= 320
                      ? 'text-[12px]'
                      : 'text-sm sm:text-2xl'
                  }`}
                >
                  Catheter Design
                </span>
              </div>
              {productImages.map((image, index) => {
                return (
                  <div key={index} className={image.className}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full"
                    />
                    {image.text && (
                      <span className="block mx-auto mr-5 text-sm text-center text-white sm:text-xl font-regular">
                        {image.text}
                      </span>
                    )}
                    {index === 0 && (
                      <img
                        src={ArrowBlack}
                        //   className={`absolute ${
                        //   width <= 475 && width >= 375
                        //     ? 'right-5 top-[95px]'
                        //     : width <= 375 && width >= 320
                        //     ? 'right-8 top-[95px]'
                        //     : ' sm:top-[95px] sm:right-6 md:top-[115px] md:right-5 lg:top-[160px] lg:right-2 lg:!text-[70px]'
                        // } `}
                        className={`absolute ${
                          width <= 475 && width >= 400
                            ? 'right-3 top-[105px]'
                            : width <= 399 && width >= 376
                            ? 'right-5 top-[95px]'
                            : 375 >= width && width >= 320
                            ? 'right-8 top-[95px]'
                            : ' sm:top-[95px] sm:right-6 md:top-[115px] md:right-5 lg:top-[160px] lg:right-2 lg:!text-[70px]'
                        } `}
                        style={{
                          transform:
                            500 > width ? 'rotate(130deg)' : 'rotate(90deg)',
                          height:
                            768 >= width && width > 640
                              ? '60px'
                              : width <= 350 && width >= 320
                              ? '30px'
                              : width <= 639 && width >= 351
                              ? '30px'
                              : '70px',
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex justify-center w-full mt-5 sm:hidden">
            <img
              src={ProductImg2}
              className={'w-full max-w-[200px] gsap-scale'}
              alt={''}
            />
          </div>
          <div className="flex justify-center w-full mt-8 sm:hidden">
            <img
              src={ProductImg3}
              className={'w-full max-w-[200px] gsap-scale'}
              alt={''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VivoHeartDetailImg
