import React from 'react'

const sizeMap = {
  small: 'text-sm',
  base: 'text-sm md:text-base',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
}
const colorMap = {
  white: 'text-white bg-white',
  orange: 'text-white bg-orange',
  black: 'text-black bg-transparent border-black',
}

type IconType = {
  buttonType: 'edit' | 'add' | 'delete'
}

export type MasterBtnProps<T extends 'submit' | 'button'> = {
  text: string
  color: 'orange' | 'white' | 'black'
  size: keyof typeof sizeMap
  type: T
  isDisabled?: boolean
  extraClasses?: string
  onClick?: T extends 'submit' ? any : () => void
  removeIcon?: boolean
}

export function MasterBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  isDisabled,
  onClick,
  color,
  isOutline = true,
  extraClasses,
  removeIcon = false,
  ...rest
}: MasterBtnProps<T> & { isOutline?: boolean }) {
  const sizeClass: string = sizeMap[size]
  return (
    <button
      aria-label={text}
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={` disabled:opacity-60 disabled:cursor-not-allowed rounded-md border-1 fontmedium tracking-wider stroke-orange hover:stroke-white 
      focus-visible:stroke-white focus:outline-none focus-visible:text-white hover:fill-white focus-visible:fill-white
      active:outline-none fill-orange ${
        isOutline
          ? color !== 'white'
            ? 'border-black text-black hover:border-transparent focus-visible:border-transparent'
            : 'border-white text-white hover:border-transparent focus-visible:border-transparent'
          : 'border-transparent'
      }
      ${
        color === 'orange' &&
        'border-orange bg-white focus-visible:border-white hover:border-white'
      }
      border-solid hover:text-white outline-none px-5 py-2.5 flex items-center gap-3 hover:bg-orange
      focus-visible:bg-orange transition-colors duration-300 ease-in-out font-bold ${sizeClass} ${extraClasses}`}
    >
      {text}
      {removeIcon ? (
        ''
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="inherit"
          className="w-5 xl:w-6 xl:h-6 h-5"
        >
          <path
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </button>
  )
}
type MasterExtended = {
  extraClasses?: string
  isRotated?: boolean
  index: number
  activeIndex: number
}

export function CarouselBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  onClick,
  color,
  extraClasses,
  isRotated,
  activeIndex,
  index,
  ...rest
}: MasterBtnProps<T> & MasterExtended) {
  const sizeClass: string = sizeMap[size]

  return (
    <button
      aria-label={text}
      onClick={onClick}
      {...rest}
      type="button"
      disabled={activeIndex === index}
      className={`p-3 xl:p-4 rounded-md border-2 disabled:opacity-50 cursor-pointer transition-colors duration-200 ease-in-out ${sizeClass} ${extraClasses} ${
        isRotated && 'rotate-180'
      } ${
        color === 'black' &&
        '!fill-black !bg-transparent backdrop-blur-sm !border-black border-1 hover:!fill-white hover:!bg-orange hover:!border-white !rounded-xl'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 lg:h-[1.1rem] 2xl:h-5 ${
          color === 'black' && 'lg:!h-4'
        }`}
        viewBox="0 0 25 21"
        fill="inherit"
      >
        <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
      </svg>
    </button>
  )
}

// to be remove later
export function ContactPageBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  isDisabled,
  onClick,
  color,
  isOutline = true,
  ...rest
}: MasterBtnProps<T> & { isOutline?: boolean }) {
  const sizeClass: string = sizeMap[size]
  return (
    <button
      onClick={onClick}
      aria-label={text}
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={` disabled:opacity-60 disabled:cursor-not-allowed rounded-[5px] border-1 font-medium tracking-wider stroke-orange hover:stroke-white 
      focus-visible:stroke-white focus:outline-none focus-visible:text-white hover:fill-white focus-visible:fill-white
      active:outline-none fill-orange ${
        isOutline
          ? color !== 'white'
            ? 'border-black text-black hover:border-transparent focus-visible:border-transparent'
            : 'border-white text-white hover:border-transparent focus-visible:border-transparent'
          : 'border-transparent'
      } border-solid hover:text-white outline-none px-4 py-2 flex items-center gap-3 hover:bg-orange 
      focus-visible:bg-orange transition-colors duration-300 ease-in-out ${sizeClass}`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="inherit"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  )
}

export function FilledBtn<T extends 'submit' | 'button'>({
  buttonType,
  type,
  text,
  size,
  color = 'orange',
  isDisabled,
  extraClasses,
  onClick,
  ...rest
}: MasterBtnProps<T> & IconType) {
  const sizeClass: string = sizeMap[size]
  const colorClass = colorMap[color]
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={`py-1.5 px-4  font-light tracking-wide outline-none flex items-center gap-3 disabled:!opacity-50
      focus-visible:bg-blue rounded-md hover:bg-blue transition-colors dutation-300 ease-in-out ${colorClass} ${sizeClass} ${extraClasses} `}
    >
      <div className="-mx-1">
        {buttonType === 'add' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 256 256"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            >
              <circle cx="128" cy="128" r="112" />
              <path d="M 79.999992,128 H 176.0001" />
              <path d="m 128.00004,79.99995 v 96.0001" />
            </g>
          </svg>
        ) : null}
        {buttonType === 'delete' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
            />
          </svg>
        ) : null}
        {buttonType === 'edit' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m4.827 1.026a3.503 3.503 0 0 1 4.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.34 5.34 0 0 1-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 0 1-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107c.167-.35.372-.68.61-.987c.202-.26.435-.492.806-.863zm3.893 1.06a2.003 2.003 0 0 0-2.832 0l-.376.377c.022.096.054.21.098.338c.143.413.415.957.927 1.469a3.875 3.875 0 0 0 1.807 1.025l.376-.376a2.003 2.003 0 0 0 0-2.832m-1.558 4.391a5.397 5.397 0 0 1-1.686-1.146a5.395 5.395 0 0 1-1.146-1.686L11.218 9.95c-.417.417-.58.582-.72.76a3.84 3.84 0 0 0-.437.71c-.098.203-.172.423-.359.982l-.431 1.295l1.032 1.033l1.295-.432c.56-.187.779-.261.983-.358c.251-.12.49-.267.71-.439c.177-.139.342-.302.759-.718z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
      </div>
      {text}
    </button>
  )
}
