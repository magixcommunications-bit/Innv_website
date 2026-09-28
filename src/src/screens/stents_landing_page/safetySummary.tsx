import React from 'react'

interface DownloadButtonProps {
  fileLink: string
  fileName: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileLink,
  fileName,
}) => {
  return (
    <a href={fileLink} download={fileName}>
      <button className="rounded-md border border-orange py-4 px-4 text-lg font-bold text-white hover:bg-orange">
        Download Now
      </button>
    </a>
  )
}

export default function SafetySummary() {
  return (
    <div className="blade-top-padding-sm blade-bottom-padding dark-background-gradient flex flex-col items-center justify-center text-center">
      <h4 className="blade-bottom-padding-sm font-medium text-white">
        Summary of Safety and Clinical Performance (SSCP)
        <br className="" /> of Everolimus Eluting Coronary Stent System.
      </h4>
      <div>
        <DownloadButton
          fileLink="/brochures/SOCP.pdf"
          fileName="Summary of Safety and Clinical Performance"
        />
      </div>
    </div>
  )
}
