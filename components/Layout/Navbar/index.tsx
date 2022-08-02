import Icon from "components/Icon"
import ToggleThemeSwtch from "./ToggleThemeSwtch"

const Navbar = () => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 left-96 h-16 border-b border-b-[#e7e7e5] flex items-center justify-between px-7">
        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 grid place-items-center">
            <Icon size={20} name="document-upload" color="gray" />
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <ToggleThemeSwtch />
          <button className="w-8 h-8 grid place-items-center">
            <Icon size={20} name="document-download" color="gray" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
