import DocumentUpload from "./Icons/DocumentUpload"
import ArrowDown from "./Icons/ArrowDown"
import Notification from "./Icons/Notification"
import Setting2 from "./Icons/Setting2"
import Crop from "./Icons/Crop"
import TextBlock from "./Icons/TextBlock"

export const icons = {
  "document-upload": DocumentUpload,
  "arrow-down": ArrowDown,
  notification: Notification,
  "setting-2": Setting2,
  crop: Crop,
  "text-block": TextBlock,
}

export type IconName = keyof typeof icons
