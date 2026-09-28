import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const sizeMap = {
  small: 'text-sm',
  base: ' text-sm md:text-base',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
}

const colorMap = {
  dark: 'text-black',
  light: 'text-white',
}
type MasterAnchorProps = {
  size?: keyof typeof sizeMap
  text: string
  href: string
  target?: '_self' | '_blank'
  className?: string
}

export function TextAnchor({
  text,
  className,
  target,
  href,
  color = 'dark',
  size = 'small',
  ...rest
}: MasterAnchorProps & { color?: 'dark' | 'light' }) {
  const sizeClass: string = sizeMap[size]
  const colorClass: string = colorMap[color]
  return (
    <Link
      aria-label={text}
      target={target}
      to={href}
      {...rest}
      className={`${className} hover:underline hover:text-orange font-regular outline-none focus-visible:underline focus-visible:text-orange underline-offset-4 decoration-from-font text-opacity-80 transition-colors duration-300 ease-in-out focus-visible:text-opacity-100 hover:text-opacity-100 ${sizeClass}  ${colorClass} `}
    >
      {text}
    </Link>
  )
}
export function TextNavAnchor({
  text,
  target,
  href,
  color = 'dark',
  size = 'base',
  className,
  ...rest
}: MasterAnchorProps & { color?: 'dark' | 'light' }) {
  const sizeClass: string = sizeMap[size]
  const colorClass: string = colorMap[color]
  return (
    <NavLink
      aria-label={text}
      target={target}
      to={href}
      {...rest}
      className={(navData) => {
        return `${
          navData.isActive
            ? 'text-orange underline text-opacity-100'
            : 'text-black'
        } ${className}  hover:underline font-regular outline-none whitespace-nowrap focus-visible:underline underline-offset-4 decoration-from-font text-opacity-80 transition-colors duration-300 ease-in-out focus-visible:text-opacity-100 hover:text-opacity-100 ${sizeClass}  ${colorClass}`
      }}
    >
      {text}
    </NavLink>
  )
}

export function MasterAnchor({
  text,
  size = 'base',
  href,
  target,
  ...rest
}: MasterAnchorProps) {
  const sizeClass: string = sizeMap[size]
  return (
    <Link to={href} target={target} {...rest} className={`${sizeClass} `}>
      {text}
    </Link>
  )
}
