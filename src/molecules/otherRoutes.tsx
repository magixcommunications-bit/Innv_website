import React from 'react'
import PopOption from './popOptions'
import { useNavigate } from 'react-router-dom'

const OtherRoutes = ({
  onClose,
  onCloseMob,
  isColumnView,
  hideTitle,
}: {
  onClose: any
  onCloseMob?: any
  isColumnView?: boolean
  hideTitle?: boolean
}) => {
  const navigate = useNavigate()

  return (
    <>
      {!hideTitle && (
        <span className="text-black  font-regular text-base lg:text-base font-medium block pb-1">
          Other products
        </span>
      )}
      <div
        className={`${
          isColumnView
            ? 'grid grid-cols-2  gap-x-6'
            : 'flex flex-col items-start md:mt-0 -mt-1'
        }`}
      >
        {/* <PopOption
          text="Diamondback 360"
          callback={() => {
            navigate('/diamond-back-360')
            onClose()
            onCloseMob && onCloseMob()
          }}
        /> */}

        <PopOption
          text="Teleport Microcatheter"
          callback={() => {
            navigate('/teleport-microcatheter')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default OtherRoutes
