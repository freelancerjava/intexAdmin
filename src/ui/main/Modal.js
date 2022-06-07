import React, { useState } from "react";
import "../Section-1/Modal.css";
import { FcAssistant } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import "../main/Modal.css";

function Modals({ closeModal }) {
  return (
    <>
      <div className="modalWrapperMain">
        <div className="modal_contentsMain">
          <div className="modal_contents_headerMain">
            <div className="navbarModalMain">
              <span className="close_spanMain">
                <GrClose
                  className="close_iconMain"
                  size="25px"
                  onClick={() => closeModal(false)}
                />
              </span>
          </div>
          </div>
         <div className="wrapperImgandGetValue">
              <div className="imgUload"></div>
              <div className="getValue">
                <input type="text" className="input_text" />
                <input type="number" className="input_text" />
                <input type="text" className="input_text" />
                <button className="btn_modalBuyurtma">Buyurtma berish</button>

              </div>
              </div>
        </div>
      </div>
    </>
  );
}
export default Modals;
