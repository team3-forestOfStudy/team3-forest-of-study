import "../styles/global.css"
import { MESSAGE_COUNT } from "../mock/Points"
export default function ToastMessage() {
  return (
    <container>
      🎉 `{MESSAGE_COUNT}`포인트를 획득했습니다!
    </container>
  )
}