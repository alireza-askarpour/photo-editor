export interface IRangeSlider {
  min: number
  max: number
  step: number
  name: string
  value: number
  onChange: (value: number) => void
}
