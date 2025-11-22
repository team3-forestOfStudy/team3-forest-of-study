import "../styles/global.css"
import { MESSAGE_COUNT } from "../mock/Points"
import { useState } from "react"

export default function ToastMessage() {
  
  const [mode, setMode] = useState("succes");

  const count = mode === "fail" ? MESSAGE_COUNT.fail : MESSAGE_COUNT.succes;
  
  return (
    <div>
      <span className="count-message bg_mint_100 g_sub_text09 fw_m green_700"> 🎉 {count}포인트를 획득했습니다!</span>
    </div>
  )
}







// 🚨 집중이 중단되었습니다.
// succes: 50,
//   fail: 15,