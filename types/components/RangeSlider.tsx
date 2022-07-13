export interface IRangeSlider {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}
