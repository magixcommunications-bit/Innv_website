interface Props {
  width?: string | number
  height?: string | number
}

export default function GradientDot({ width = '12px', height = '12px' }: Props) {
  return (
    <div
      style={{ width: width, height: height }}
      className="mt-2 bg-black rounded-full bg-gradient-to-t from-[#ee8132] via-[#66557a] to-[#1c498a]"
    />
  )
}
