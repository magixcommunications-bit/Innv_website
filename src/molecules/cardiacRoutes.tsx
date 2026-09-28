import React from 'react'
import { useNavigate } from 'react-router-dom'
import PopOption from './popOptions'

const CardiacRoutes = ({
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
        <span
          onClick={() => {
            navigate('/products/cardiac')
            onClose()
            onCloseMob && onCloseMob()
          }}
          className="block pb-1 text-base font-medium text-black font-regular lg:text-base hover:cursor-pointer"
        >
          Cardiac Accessories
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
          text="I-Connect"
          callback={() => {
            navigate('/products/cardiac/i-connect')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="I-Flate"
          callback={() => {
            navigate('/products/cardiac/i-flate')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="I-Rac"
          callback={() => {
            navigate('/products/cardiac/i-rac')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="I-Access"
          callback={() => {
            navigate('/products/cardiac/i-access')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="I-Man"
          callback={() => {
            navigate('/products/cardiac/i-man')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="I-Sheath"
          callback={() => {
            navigate('/products/cardiac/i-sheath')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default CardiacRoutes
