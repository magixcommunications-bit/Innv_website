import React from 'react'
import { useNavigate } from 'react-router-dom'
import PopOption from './popOptions'

const ResourceRoutes = ({
  onClose,
  onCloseMob,
}: {
  onClose: any
  onCloseMob?: any
}) => {
  const navigate = useNavigate()

  const downloadBrochure = (
    fileLink: string | undefined,
    fileName: string | undefined,
  ) => {
    if (!fileLink) {
      return
    }
    // console.log(fileLink, fileName)

    const downloadLink = document.createElement('a')
    downloadLink.href = fileLink
    downloadLink.download = fileName || ''

    downloadLink.click()
  }
  return (
    <>
      <PopOption
        text="Awards & recognitions"
        callback={() => {
          navigate('/awards-and-recognitions')
          onClose()
          onCloseMob && onCloseMob()
        }}
      />
      <PopOption
        text="Investors"
        callback={() => {
          navigate('/investors')
          onClose()
          onCloseMob && onCloseMob()
        }}
      />
      <PopOption
        text="News & articles"
        callback={() => {
          navigate('/resources')
          onClose()
          onCloseMob && onCloseMob()
        }}
      />
      <PopOption
        text="Careers"
        callback={() => {
          navigate('/careers')
          onClose()
          onCloseMob && onCloseMob()
        }}
      />
      <PopOption
        text="Services & support"
        callback={() => {
          navigate('/services-and-support')
          onClose()
          onCloseMob && onCloseMob()
        }}
      />
    </>
  )
}

export default ResourceRoutes
