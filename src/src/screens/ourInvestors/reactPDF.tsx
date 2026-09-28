// PdfViewer.tsx
import React, { useEffect, useRef } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import {
  PDFDocumentProxy,
  PDFPageProxy,
} from 'pdfjs-dist/types/src/display/api'

// Configure the worker for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.js'

interface PdfViewerProps {
  url: string
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const loadPdf = async () => {
      try {
        // Get the PDF document
        const pdf: PDFDocumentProxy = await pdfjsLib.getDocument(url).promise
        const page: PDFPageProxy = await pdf.getPage(1)

        // Set up the viewport
        const scale = 1.5
        const viewport = page.getViewport({ scale })

        // Set up the canvas
        const canvas = canvasRef.current
        if (canvas) {
          const context = canvas.getContext('2d')
          if (context) {
            canvas.height = viewport.height
            canvas.width = viewport.width

            // Render the page into the canvas context
            const renderContext = {
              canvasContext: context,
              viewport,
            }
            await page.render(renderContext).promise
          }
        }
      } catch (error) {
        console.error('Error loading PDF:', error)
      }
    }

    loadPdf()
  }, [url])

  return <canvas ref={canvasRef} />
}

export default PdfViewer
