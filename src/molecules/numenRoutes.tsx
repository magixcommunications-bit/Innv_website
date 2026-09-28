import { useNavigate } from 'react-router-dom'
import PopOption from './popOptions'

const NumenRoutes = ({
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
          Neurovascular Accessories
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
          text="Numen"
          callback={() => {
            navigate('/products/numen')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
        <PopOption
          text="Numen FR"
          callback={() => {
            navigate('/products/numen/numen-fr')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default NumenRoutes
