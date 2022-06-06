import DocumentUpload from "./Icons/DocumentUpload"
import ArrowDown from "./Icons/ArrowDown"
import Notification from "./Icons/Notification"
import Setting2 from "./Icons/Setting2"
import Crop from "./Icons/Crop"
import TextBlock from "./Icons/TextBlock"
import Sunny from "./Icons/Sunny"
import DocumentDownload from "./Icons/DocumentDownload"
import Refresh2 from "./Icons/Refresh2"
import Text from "./Icons/Text"
import Mmaximize4 from "./Icons/Mmaximize4"

export const icons = {
  "document-download": DocumentDownload,
  "document-upload": DocumentUpload,
  "mmaximize-4": Mmaximize4,
  "arrow-down": ArrowDown,
  "text-block": TextBlock,
  "setting-2": Setting2,
  "refresh-2": Refresh2,
  notification: Notification,
  sunny: Sunny,
  crop: Crop,
  text: Text,
}

export type IconName = keyof typeof icons
