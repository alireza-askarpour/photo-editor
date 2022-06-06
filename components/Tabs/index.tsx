import Icon from "components/Icon"
import { ITabs } from "types/components/Tabs"

const Tabs = ({ activeIndex, onChange, items }: ITabs) => {
  return (
    <div className="flex h-full">
      <ul role="tablist" className="bg-white w-20 h-full">
        {items.map(({ name, icon }, index) => {
          return (
            <li
              key={name}
              className="p-3 w-20 rounded-2xl cursor-pointer relative flex items-start justify-center"
              onClick={() => onChange(index)}
            >
              <Icon
                name={icon}
                size={21}
                color={activeIndex === index ? "orange" : "gray"}
              />
              {activeIndex === index && (
                <i className="bg-[#F6AD55] absolute inset-0 left-0 w-1 rounded-r"></i>
              )}
            </li>
          )
        })}
      </ul>

      {items.map(({ content, name }, index) => (
        <div key={name} hidden={activeIndex !== index} className="bg-yellow-50 flex-1">
          {content}
        </div>
      ))}
    </div>
  )
}

export default Tabs
