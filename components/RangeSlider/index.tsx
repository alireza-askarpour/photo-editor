import { useEffect, useRef, ChangeEvent } from "react"
import { IRangeSlider } from "types/components/RangeSlider"
import styles from "./RangeSlider.module.css"

const setBackgroundSlider = (value: number, max: number, inputRef: any) => {
  const valPercent = (+value / max) * 100
  const background = `linear-gradient(to right, #1f61fb ${valPercent}%, #d5d5d5 ${valPercent}%)`
  inputRef.current.style.background = background
}

const RangeSlider = ({ min, max, value, onChange }: IRangeSlider) => {
  const inputRef = useRef<any>(null)

  const handleSliderChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    onChange(+value)
    setBackgroundSlider(+value, max, inputRef)
  }

  useEffect(() => {
    setBackgroundSlider(+value, max, inputRef)
  }, [])

  return (
    <div className={styles.Container}>
      <input
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        value={value}
        onInput={handleSliderChange}
        className={styles.RangeSlider}
      />
    </div>
  )
}

export default RangeSlider
