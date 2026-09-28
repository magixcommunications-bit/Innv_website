interface Props {
  width?: string | number
  height?: string | number
}

export default function OrangeRadialGradientDot({
  width = '12px',
  height = '12px',
}: Props) {
  return (
    <div
      style={{ width: width, height: height }}
      className="mt-1 bg-black rounded-full bg-[radial-gradient(circle_at_center,#ffb066_0%,#ff9a3c_35%,#f58220_70%,#e86e0f_100%)]"
    />
  )
}
