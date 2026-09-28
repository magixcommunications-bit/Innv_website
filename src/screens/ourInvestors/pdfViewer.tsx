import React, { useEffect } from 'react'
import { PDFSlickViewer, usePDFSlick } from '@pdfslick/react'
import { create, PDFSlick } from '@pdfslick/core'

import '@pdfslick/react/dist/pdf_viewer.css'

type PDFViewerComponentProps = {
  pdfFilePath: string
}

const PDFViewerComponent = ({ pdfFilePath }: { pdfFilePath: string }) => {
  const { viewerRef, usePDFSlickStore, PDFSlickViewer } = usePDFSlick(
    pdfFilePath,
    {
      // options
    },
  )

  useEffect(() => {
    console.log(pdfFilePath)
  }, [pdfFilePath])

  // const scale = usePDFSlickStore((s) => s.scale)
  // const numPages = usePDFSlickStore((s) => s.numPages)
  // const pageNumber = usePDFSlickStore((s) => s.pageNumber)

  return (
    <div className="relative h-full w-full">
      <PDFSlickViewer {...{ usePDFSlickStore, viewerRef }} />
    </div>
  )
}

export default PDFViewerComponent
