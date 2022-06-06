import { IIcon } from "../../types/components/Icon"
import { icons } from "./icons"

const colors: any = {
  red: "#FF6161",
  gray: "#60637B",
  blue: "#1f61fb",
  white: "#ffffff",
  green: "#21A73F",
  black: "#171923",
  orange: "#F6AD55",
  purple: "#3346F8",
  yellow: "##facc34",
}

const Icon = ({ name, size = 24, color = "gray", className }: IIcon) => {
  const IconElement = icons[name]

  if (!icons[name]) {
    throw new Error(`Icon ${name} not found`)
  }

  const fill = colors?.[color]

  return (
    <svg
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
    >
      <IconElement stroke={color} />
    </svg>
  )
}

export default Icon
