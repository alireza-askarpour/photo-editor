import RangeSlider from "components/RangeSlider"
import { useEditor, useEditorActions } from "providers/EditorProvider"

import { types } from "types/utils/Context"

const Brightness = () => {
  const { brightness } = useEditor()
  const dispatch = useEditorActions()
  
  const handleSliderChange = (value: number, property: string) => {
    dispatch({ type: types.BRIGHTNESS_CHANGE, value, property })
  }

  return (
    <div className="px-4 w-full h-full overflow-y-auto">
      {brightness.options.length > 0 &&
        brightness.options.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <span className="text-sm -mb-2">{item.name}</span>
              <span className="text-sm -mb-2">{item.value + item.unit}</span>
            </div>
            <RangeSlider
              min={item.range.min}
              max={item.range.max}
              step={item.step}
              name={item.property}
              value={item.value}
              onChange={(value) => handleSliderChange(value, item.property)}
            />
          </div>
        ))}
    </div>
  )
}

export default Brightness
