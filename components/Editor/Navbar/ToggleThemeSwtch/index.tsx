import { useState } from "react"

import Moon from "./Moon"
import Sun from "./Sun"

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light")
  const isLightMode = theme === "light"

  const onToggleTheme = () => {
    isLightMode ? setTheme("dark") : setTheme("light")
  }

  return (
    <button className="w-8 h-8 grid place-items-center" onClick={onToggleTheme}>
      {isLightMode ? <Sun /> : <Moon />}
    </button>
  )
}

export default ToggleTheme
