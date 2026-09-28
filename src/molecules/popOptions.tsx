import { MouseEventHandler } from 'react'

export default function PopOption({
  callback,
  text,
  symbol,
}: {
  text: string
  callback: MouseEventHandler<HTMLButtonElement>
  symbol?: string
}) {
  console.log('symbol', symbol)
  return (
    <button
      type="button"
      onClick={callback}
      className="flex items-center gap-1 py-1 font-light outline-none flex-nowrap group stroke-violet fill-violet focus:outline-none"
    >
      <span className="group-hover:text-orange group-hover:underline underline-offset-4 text-left text-sm lg:text-[0.9rem] group-focus-visible:text-orange group-focus-visible:underline text-opacity-60 font-regular  transition-colors duration-150 ease-in-out text-black  group-focus:text-orange group-focus:underline block">
        {text}
      </span>
      <sup className="group-hover:text-orange text-left text-sm lg:text-[0.9rem] group-focus-visible:text-orange text-opacity-60 font-regular  transition-colors duration-150 ease-in-out text-black  group-focus:text-orange block">
        {symbol}
      </sup>
    </button>
  )
}
