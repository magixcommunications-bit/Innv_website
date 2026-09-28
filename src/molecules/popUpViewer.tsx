import React, { useRef, useState } from 'react'
import popup from 'assets/home/popup.jpeg'
import { useAdmin } from 'store/store'

const PopUpViewer = () => {
  const [isToggled, setIsToggled] = useState(false)
  const popUpRef = useRef<any>(null)
  const { homeData } = useAdmin()

  function toggleHandler() {
    setIsToggled(false)
  }

  return (
    <aside
      ref={popUpRef}
      className={`fixed bg-black bg-opacity-40 h-full w-full z-[1000] top-0 left-0 select-none transition-all duration-500 ${
        isToggled ? 'scale-100' : 'scale-0'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid place-content-center">
        <div className="relative lg:static">
          <img
            onClick={(e) => {
              e.stopPropagation()
            }}
            onLoad={() => {
              setIsToggled(true)
            }}
            src={homeData.EVENTPOPUP[0].image}
            alt="First ever demonstration of a Cath Lab at Arab Health"
            className={`aspect-squ object-contain w-[75vmin] max-h-[500px] 2xl:max-h-[700px] m-auto`}
          />

          <button
            onClick={toggleHandler}
            className="bg-black bg-opacity-40 outline-white w-fit rounded-full 2xl:p-2 p-1 lg:hover:bg-opacity-70 
            transition-colors absolute right-10 left-1/2 lg:left-auto -translate-x-1/2 top-[102%] lg:top-10 lg:bg-opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default PopUpViewer
