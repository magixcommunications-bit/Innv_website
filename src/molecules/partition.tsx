import React from 'react'
import partitionIcon from 'assets/globals/partitionIcon.svg'

export default function Partition({
  text,
  title,
  color = 'dark',
}: {
  title?: string
  color: 'light' | 'dark'
  text: string
}) {
  return (
    <div>
      <div className="flex items-center gap-5 lg:gap-6">
        <div className="flex-0 flex items-center gap-3">
          <div className={color === 'light' ? 'fill-white' : 'fill-green'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={32}
              viewBox="0 0 28 32"
              fill="inherit"
            >
              <rect
                y="0.536377"
                width="10.4199"
                height="10.9161"
                fill="inherit"
              />
              <rect
                x="-0.000183105"
                y="20.3101"
                width="10.4199"
                height="10.9161"
                fill="inherit"
              />
              <rect
                x="11.442"
                y="12.1414"
                width="16.1252"
                height="7.48477"
                fill="inherit"
              />
            </svg>
          </div>
          <h6
            className={` ${
              color === 'light' ? 'text-white' : 'text-green'
            }  mb-[1px] `}
          >
            {text}
          </h6>
        </div>
        <div
          className={` ${
            color === 'light' ? 'bg-white' : 'bg-green'
          } flex-1 h-[2px]`}
        />
      </div>
      {title && (
        <div className="pt-3 md:pt-4 xl:pt-5 2xl:pt-6">
          <div>
            <h3 className="font-medium"> {title} </h3>
          </div>
        </div>
      )}
    </div>
  )
}
