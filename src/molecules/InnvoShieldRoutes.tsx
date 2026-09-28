import React from 'react'
import { useNavigate } from 'react-router-dom'
import PopOption from './popOptions'

const InnvoShieldRoutes = ({
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
        <span className="block pb-1 text-base font-medium text-black font-regular lg:text-base">
          Radiation Protection Solution
        </span>
      )}
      <div
        className={`${
          isColumnView
            ? 'grid grid-cols-2  gap-x-6'
            : 'flex flex-col items-start md:mt-0 -mt-1'
        }`}
      >
        <PopOption
          text="InnvoShield"
          symbol="®"
          callback={() => {
            navigate('/products/innvoshield')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default InnvoShieldRoutes
