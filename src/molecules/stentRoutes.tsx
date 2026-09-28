import React from 'react'
import PopOption from './popOptions'
import { useNavigate } from 'react-router-dom'

const StentRoutes = ({
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
        <span className="text-black font-regular text-base lg:text-base font-medium block pb-1">
          Stents
        </span>
      )}
      <div
        className={`${
          isColumnView
            ? 'grid grid-cols-2  gap-x-6 '
            : 'flex flex-col items-start pt-3 md:pt-0'
        }`}
      >
        <PopOption
          text="Stents family"
          callback={() => {
            navigate('/products/stents')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/eternia')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Eternia"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/eternia-nexa')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Eternia Nexa"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/eternia-brio')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Eterniabrio"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/eternia-select')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Eternia Select"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/siroflex')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Siroflex"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/siroflex-curve')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Siroflex Curve"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/siroflex-plus')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Siroflex Plus"
        />
        <PopOption
          callback={() => {
            navigate('/products/stents/insignia')
            onClose()
            onCloseMob && onCloseMob()
          }}
          text="Insignia"
        />
      </div>
    </>
  )
}

export default StentRoutes
