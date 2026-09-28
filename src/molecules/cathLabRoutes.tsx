import React from 'react'
import PopOption from './popOptions'
import { useNavigate } from 'react-router-dom'

const CathLabRoutes = ({
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
          Cath Labs
        </span>
      )}
      <div
        className={`${
          isColumnView
            ? 'grid grid-cols-2 gap-x-6'
            : 'flex flex-col items-start pt-3 md:pt-0'
        }`}
      >
        <PopOption
          text="Cath Labs family"
          callback={() => {
            navigate('/products/cath-labs')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Premier Elite Sharp"
          callback={() => {
            navigate('/products/cath-labs/premier-elite-sharp')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Premier Elite"
          callback={() => {
            navigate('/products/cath-labs/premier-elite')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />

        <PopOption
          text="Premier Select"
          callback={() => {
            navigate('/products/cath-labs/premier-select')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Pinnacle Agile"
          callback={() => {
            navigate('/products/cath-labs/pinnacle-agile')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Pinnacle"
          callback={() => {
            navigate('/products/cath-labs/pinnacle')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Pinnacle Pro"
          callback={() => {
            navigate('/products/cath-labs/pinnacle-pro')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default CathLabRoutes
