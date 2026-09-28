import { useNavigate } from 'react-router-dom'
import PopOption from './popOptions'

const IsailedgealignRoutes = ({
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
          iSail Edge Align
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
          text="iSail Edge Align"
          symbol="TM"
          callback={() => {
            navigate('/products/isailedgealign')
            onClose()
            onCloseMob && onCloseMob()
          }}
        />
      </div>
    </>
  )
}

export default IsailedgealignRoutes
