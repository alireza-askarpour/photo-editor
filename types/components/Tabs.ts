import { ReactNode } from "react"
import { IconName } from "components/Icon/icons"

export interface ITabs {
  activeIndex: number
  items: ITabsItem[]
  onChange: (index: number) => void
}

export interface ITabsItem {
  name: string
  title: string
  icon: IconName
  content: ReactNode
}
