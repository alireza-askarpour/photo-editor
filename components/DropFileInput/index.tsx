import { useState } from "react"

import { classNames } from "utils/classNames"
import { IDropFileInput } from "../../types/components/DropFileInput"

const DropFileInput = ({ onFileChange }: IDropFileInput) => {
  const [file, setFile] = useState<any>({ name: "", size: null, src: "" })
  const [dragover, setDragover] = useState(false)

  const onDragEnter = () => setDragover(true)
  const onDragLeave = () => setDragover(false)
  const onDrop = () => setDragover(false)

  const onFileDrop = (event: any) => {
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"]
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()

      reader.onloadend = () => {
        const file = {
          name: selected.name,
          size: selected.size,
          src: reader.result,
        }

        setFile(file)
        onFileChange(file)
      }

      return reader.readAsDataURL(selected)
    }
  }

  return (
    <div>
      <div className="px-6 pb-12 bg-white w-[500px] rounded-2xl overflow-hidden border border-[#e5e9ee]">
        <div className="mt-8 mb-6 grid place-items-center">
          <h3 className="text-2xl font-medium text-blue-500">Upload your images</h3>
          <span className="text-[#5e768f] text-sm mt-1">
            PNG, JPG and JPEG files are allowed
          </span>
        </div>
        <div
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={classNames(
            "relative py-5 bg-white border border-dashed hover:border-colo rounded-xl grid place-items-center overflow-hidden cursor-pointer transition hover:border-blue-600",
            dragover ? "border-blue-600" : "border-blue-300",
          )}
        >
          <img src="/assets/images/file.png" className="w-16 object-cover" />
          <span className="text-[#5e768f] text-sm mt-4">
            Drag and drop or browse to choose a file
          </span>
          <input
            type="file"
            title=""
            onChange={onFileDrop}
            accept=".png,.jpg,.jpeg"
            className="absolute inset-0 opacity-0 cursor-pointer before:content-[''] before:absolute before:inset-0 before:cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default DropFileInput
