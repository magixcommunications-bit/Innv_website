import React from 'react'

type GraphData = {
  bgGrad?: string
  bgClasses?: string
  bgImage?: string
  title: string
  subTitle: JSX.Element
  graph: string
  extraJSX?: JSX.Element
}

const KineticsGraph = ({
  bgGrad,
  bgClasses,
  bgImage,
  title,
  subTitle,
  graph,
  extraJSX,
}: GraphData) => {
  return (
    <section
      style={{
        backgroundImage: bgGrad ? bgGrad : 'none',
      }}
    >
      <div className={`${bgClasses}`}>
        <div className="blade-top-padding blade-bottom-padding-lg w-container relative">
          {bgImage && (
            <img
              className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={bgImage}
              alt="Background element"
            />
          )}
          <h3 className="font-medium text-center max-w-md mx-auto lg:max-w-2xl 2xl:max-w-[850px] leading-tight">
            {title}
          </h3>
          <div className="flex justify-center">{subTitle}</div>
          <div className="flex justify-center mt-8 lg:mt-14">
            <img
              className="border-[1.5px] border-[#56565633] rounded-md"
              src={graph}
              alt="Chart for drug release in gradual fashion resulting in superior clinical outcomes."
            />
          </div>
          {extraJSX && extraJSX}
        </div>
      </div>
    </section>
  )
}

export default KineticsGraph
