import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import './style.css'

interface ReactPDFRendererProps {
  url: string
}

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const ReactPDFRenderer: React.FC<ReactPDFRendererProps> = ({ url }) => {
  const [totalPages, setTotalPages] = useState(0)

  const loadAndRenderPDF = async () => {
    try {
      const pdfDoc = await pdfjsLib.getDocument(url).promise
      setTotalPages(pdfDoc.numPages)

      const wrapper = document.getElementById('pdf-wrapper') as HTMLDivElement
      if (wrapper) {
        wrapper.innerHTML = ''
      }

      const renderPage = async (pageNumber: number) => {
        console.log(`Rendering page ${pageNumber}`)

        const page = await pdfDoc.getPage(pageNumber)
        const screen = window.innerWidth
        const scale = 1.5
        const viewport = page.getViewport({ scale })

        const canvas = document.createElement('canvas')
        // canvas.style.margin = '0 auto'
        // canvas.style.width = '0 auto'
        canvas.height = viewport.height
        canvas.width = 950

        const context = canvas.getContext('2d')
        if (context) {
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          }

          await page.render(renderContext).promise

          wrapper?.appendChild(canvas)
        }
      }

      for (let i = 1; i <= pdfDoc.numPages; i++) {
        await renderPage(i)
      }
    } catch (error) {
      console.error('Error rendering PDF:', error)
    }
  }

  useLayoutEffect(() => {
    loadAndRenderPDF()
  }, [totalPages])

  return (
    <div
      id="pdf-wrapper"
      className="w-[100%] h-[100dvh] overflow-y-auto mx-auto "
    />
  )
}

export default ReactPDFRenderer
