import "../styles/global.css";
import "../styles/ButtonType01.css";
import React, { Children, useState } from "react";
import Button01 from "../components/ButtonType01";
import Modal from "./Modal";
// import Mock from "./Mock.json"

export default function PasswordModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>모달 열기</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>{`<M`}</h2>
        <h3> 권한이 필요해요!</h3>
        <input id="password" className="passowrd"></input>
        <Button01></Button01>
      </Modal>
    </>
  );
}
