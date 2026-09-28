import { MasterBtn } from 'atoms/buttons'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ihpl from 'assets/ihpl.svg'
import iitpl from 'assets/iitpl.svg'
import bgb from 'assets/our-investors.jpeg'
import PDFViewerComponent from './pdfViewer'
import { PDFSlick } from '@pdfslick/react'
import IHPL_Secured from 'assets/merger/IHPL Secured Creditors.pdf'
import IHPL_Unsecured from 'assets/merger/IHPL Unsecured Trade Creditors.pdf'
import IITPL_Secured from 'assets/merger/IITPL Secured Creditors.pdf'
import IITPL_Unsecured from 'assets/merger/IITPL Unsecured Trade Creditors.pdf'
import PdfViewer from './reactPDF'
// import './g-drive.css'
import ReactPDFRenderer from './reactPDFRenderer'

export default function OurInvestors() {
  const [pdfIndex, setpdfIndex] = useState(0)
  const [IsModalOpen, setIsModalOpen] = useState(false)

  const pdfSlickRef = useRef(null)
  const data = [
    {
      icon: ihpl,
      title: 'IHPL Secured Creditors',
      // link: IHPL_Secured,
      link: 'merger/IHPL_Secured_Creditors.pdf',
    },
    {
      icon: ihpl,
      title: 'IHPL Unsecured Trade Creditors',
      // link: IHPL_Unsecured,
      link: 'merger/IHPL Unsecured Trade Creditors.pdf',
    },
    {
      icon: ihpl,
      title: 'Notice of Final Hearing IHPL',
      // link: IITPL_Unsecured,
      link: 'merger/Notice of Final Hearing IHPL.pdf',
    },
    {
      icon: iitpl,
      title: 'IITPL Secured Creditors',
      // link: IITPL_Secured,
      link: 'merger/IITPL Secured Creditors.pdf',
    },
    {
      icon: iitpl,
      title: 'IITPL Unsecured Trade Creditors',
      // link: IITPL_Unsecured,
      link: 'merger/IITPL Unsecured Trade Creditors.pdf',
    },

    {
      icon: iitpl,
      title: 'Notice of Final Hearing IITPL',
      // link: IITPL_Unsecured,
      link: 'merger/Notice of Final Hearing IITPL.pdf',
    },
  ]

  const pdfPreview = (
    fileLink: string | undefined,
    fileName: string | undefined,
  ) => {
    if (!fileLink) {
      return
    }
    // console.log(fileLink, fileName)
    const downloadLink = document.createElement('a')
    downloadLink.href = fileLink + '#toolbar=0&navpanes=0'
    downloadLink.target = '_blank'
    // downloadLink.download = fileName || ''
    downloadLink.click()
    const dl = document.querySelector('#icon') as HTMLElement
    dl.style.display = 'none'
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [pdfIndex])

  const disableRightClick = (e: any) => {
    e.preventDefault()
  }
  useEffect(() => {
    document.addEventListener('contextmenu', disableRightClick)
    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
    }
  }, [])

  const classes = {
    'ndfHFb-c4YZDc-Wrql6b': {
      display: 'none',
    },
  }
  return (
    <>
      <section className="home-banner-main overflow-hidden h-screen  relative md:min-h-[700px] min-h-[400px] max-h-[600px] lg:max-h-[700px] xl:max-h-[none]">
        <section
          style={{
            backgroundImage: `url(${bgb})`,
          }}
          className={`sm:bg-[0px_-100px] bg-cover md:bg-[60%_0%] lg:bg-center bg-right bg-no-repeat h-full relative overflow-hidden flex flex-col justify-center`}
        >
          <div className="flex items-center flex-col-reverse md:flex-row min-[1800px]:gap-28">
            <div className="w-container pb-12 md:max-w-[19rem] mx-auto lg:max-w-sm xl:max-w-md 2xl:max-w-[30rem] md:ml-6 lg:ml-[10%] xsl:ml-[12%] 2xl:ml-[15%]">
              <h2 className="text-appear-anim-delayed font-medium mt-2 xl:mt-3 w-full">
                Investors
              </h2>
            </div>
          </div>
        </section>
      </section>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-container 2xl:px-[4%] px-4 blade-top-padding-lg blade-bottom-padding-lg 2xl:gap-14 gap-10 flex-wrap">
        {data.map((elem, index) => {
          return (
            <ActionCard
              target=""
              targetText="Read More"
              isNav={false}
              title={elem.title}
              link={elem.link}
              onClick={() => {
                pdfPreview(elem.link, elem.title)
                // downloadBrochure(elem.link, elem.title)
                // setIsModalOpen(true)
                // setpdfIndex(index)
              }}
              icon={elem.icon}
            />
          )
        })}

        {IsModalOpen ? (
          <div className="fixed z-[9999] bg-black bg-opacity-60 inset-0 pdfSlick">
            <div className="">
              <button
                type="button"
                className="absolute p-2 md:right-10 right-0 md:left-auto left-0 w-fit mx-auto md:top-10 top-auto md:bottom-auto bottom-5 z-[999999] cursor-pointer bg-orange rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  className="h-5 w-5 "
                  stroke="#fff"
                  fill="#fff"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>

            <ReactPDFRenderer url={data[pdfIndex].link} />
            {/* <ReactPDFRenderer url={'/brochures/Pinnacle.pdf'} /> */}

            {/* <PdfViewer url={data[pdfIndex].link} /> */}
            {/* class for the: ndfHFb-c4YZDc-Wrql6b */}
            {/* <iframe
              src="https://drive.google.com/file/d/1tuwD4wJxQb5gsKM6nORG7q8LIw8-EX1T/preview"
              width="600"
              height="780"
              style={{ border: 'none' }}
              title="PDF Viewer"
              onContextMenu={(e) => e.preventDefault()}
            ></iframe> */}
            {/* <PDFViewers pdfURL={data[pdfIndex].link} /> */}
            {/* <PdfViewer pdfUrl={data[pdfIndex].link} /> */}
            {/* <PDFViewerComponent pdfFilePath={data[pdfIndex].link} /> */}
            {/* <PDFSlick ref={pdfSlickRef} /> */}
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

type IProps = {
  title: string
  target: string
  onClick: () => void
  isNav: boolean
  link?: string
  icon?: string
  targetText: string
}

function ActionCard<T extends boolean>({
  title,
  icon,
  isNav,
  target,
  targetText,
  link,
  onClick,
}: IProps) {
  return (
    <article className=" bg-white shadow-sm shadow-orange md:odd:last-of-type:col-span-2 xl:odd:last-of-type:col-span-1 cursor-pointer rounded-[5px] p-5 md:p-6 lg:p-8 xl:px-6 xl:gap-y-5 flex items-start gap-3 flex-col justify-between max-w-md mx-auto w-full hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange">
      <div>
        <div className="gap-4 ">
          <img src={icon} alt={title} className="w-auto h-10 text-left" />
        </div>
        <h5 className="font-medium mt-2">{title}</h5>
      </div>
      <div className="h-auto">
        <button
          aria-label={title}
          type="button"
          onClick={() => {
            onClick()
          }}
          className="outline-none gap-2 hover:stroke-orange fill-black focus-visible:stroke-orange group focus:text-orange hover:text-orange font-medium text-base underline decoration-from-font underline-offset-4  transition-all duration-300 ease-in-out flex items-center flex-0 rounded-full py-2"
        >
          {targetText}
        </button>
      </div>
    </article>
  )
}

// {IsModalOpen ? (
//   <div className="fixed z-[9999] bg-black bg-opacity-60 inset-0 pdfSlick">
//     <div className="">
//       <button
//         type="button"
//         className="absolute p-2 md:right-10 right-0 md:left-auto left-0 w-fit mx-auto md:top-10 top-auto md:bottom-auto bottom-5 z-[999999] cursor-pointer bg-orange rounded-full"
//         onClick={() => setIsModalOpen(false)}
//       >
//         <svg
//           className="h-5 w-5 "
//           stroke="#fff"
//           fill="#fff"
//           strokeWidth="0"
//           viewBox="0 0 15 15"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
//             fill="white"
//           ></path>
//         </svg>
//       </button>
//     </div>
//     <PDFViewerComponent pdfFilePath={data[pdfIndex].link} />
//     {/* <PDFSlick ref={pdfSlickRef} /> */}
//   </div>
// ) : (
//   ''
// )}
