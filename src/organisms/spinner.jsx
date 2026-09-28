import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className="fixed h-full w-full bg-black bg-opacity-50 backdrop-blur-md top-0 left-0 grid place-content-center z-[9999]">
      {/* <div className="loadingspinner ">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div> */}
      <div className="loading scale-150">
        <svg width="64px" height="48px">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          ></polyline>
        </svg>
      </div>
    </div>
  )
}

export default Spinner
