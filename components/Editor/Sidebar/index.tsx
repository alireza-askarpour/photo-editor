import { useState } from "react"

import Tabs from "components/Tabs"

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <aside className="fixed top-0 bottom-0 left-0 w-96 h-[calc(100vh-5rem)] bg-white">
      <div className="bg-white flex">
        <div className="w-20 flex justify-center items-start py-4">
          <img src="/assets/images/logo.png" className="w-9 mt-1 rounded-lg" />
        </div>
        <div className="bg-[#fafafe] flex-1 border-b border-b-[#e9e9e7]">
          <div className="flex items-center px-4 py-3">
            <div className="border-[3px] border-[#1f61fb] rounded-full">
              <img
                src="/assets/images/profile.jpeg"
                className="w-11 h-11 rounded-full border-2 border-yellow-50"
              />
            </div>
            <div className="grid place-items-start ml-2 text-gray-400">
              <span className="text-gray-600 text-sm font-medium">Alireza Askarpour</span>
              <span className="text-[11px]">My Account</span>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        activeIndex={activeTab}
        onChange={setActiveTab}
        items={[
          {
            name: "brightness",
            title: "Brightness",
            content: <span>Brightness</span>,
            icon: "sunny",
          },
          {
            name: "resize",
            title: "Resize",
            content: <span>Resize</span>,
            icon: "mmaximize-4",
          },
          {
            name: "crop",
            title: "Crop",
            content: <span>Crop</span>,
            icon: "crop",
          },
          {
            name: "rota",
            title: "Rota",
            content: <span>Rota</span>,
            icon: "refresh-2",
          },
          {
            name: "add-text",
            title: "Add Text",
            content: <span>Add Text</span>,
            icon: "text",
          },
        ]}
      />
    </aside>
  )
}

export default Sidebar
