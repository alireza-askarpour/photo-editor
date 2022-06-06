import { IconName } from "components/Icon/icons"

export interface IIcon {
  size?: number
  className?: string
  color?: "black" | "white" | "red" | "green" | "blue" | "gray" | "orange" | "purple"
  name: IconName
}

export interface IIcons {
  stroke?: string
}
