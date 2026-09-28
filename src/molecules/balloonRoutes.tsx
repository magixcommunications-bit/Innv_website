import React from 'react'
import PopOption from './popOptions'
import { useNavigate } from 'react-router-dom'

const BalloonRoutes = ({
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
        <span className="text-black  font-regular  text-base lg:text-base font-medium block pb-1">
          Balloon Catheters
        </span>
      )}

      <div>
        <div
          className={`${
            isColumnView
              ? 'grid grid-cols-2 gap-x-6'
              : 'flex flex-col items-start pt-3 md:pt-0'
          }`}
        >
          <PopOption
            text="Balloon Catheters family"
            callback={() => {
              navigate('/products/balloon-catheters')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />

          <PopOption
            text="Scoreflex"
            callback={() => {
              navigate('/products/balloon-catheters/scoreflex')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />
          <PopOption
            text="Scoreflex NC"
            callback={() => {
              navigate('/products/balloon-catheters/scoreflex-nc')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />
          <PopOption
            text="Sapphire II NC"
            callback={() => {
              navigate('/products/balloon-catheters/sapphire-ii-nc')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />
        </div>
        <PopOption
          text="Sapphire II Pro (1.75 mm - 4 mm)"
          callback={() => {
            navigate('/products/balloon-catheters/sapphire-2-pro-1.75mm-4mm')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Sapphire II Pro (1.0 mm - 1.5 mm)"
          callback={() => {
            navigate('/products/balloon-catheters/sapphire-2-pro-1mm-1.5mm')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Sapphire 3 (1.5 mm - 4 mm)"
          callback={() => {
            navigate('/products/balloon-catheters/sapphire-3-1.5mm-4mm')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Sapphire 3 (0.85 mm - 1.25 mm)"
          callback={() => {
            navigate('/products/balloon-catheters/sapphire-3-0.85mm-1.25mm')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <div
          className={`${
            isColumnView
              ? 'grid grid-cols-2 gap-x-6'
              : 'flex flex-col items-start '
          }`}
        >
          <PopOption
            text="Sapphire NC 24"
            callback={() => {
              navigate('/products/balloon-catheters/sapphire-nc-24')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />
          <PopOption
            text="JADE"
            callback={() => {
              navigate('/products/balloon-catheters/jade')
              onClose()
              onCloseMob && onCloseMob()
            }}
          />
        </div>
      </div>
    </>
  )
}

export default BalloonRoutes
