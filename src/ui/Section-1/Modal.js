import React, { useState } from "react";
import "../Section-1/Modal.css";
import {FcAssistant} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import {AiOutlineClose} from 'react-icons/ai'

function Modals({closeModal}) {
  return (
    <>
      <div className="modalWrapper">

          <div className="modal_contents">
            <div className="modal_contents_header">
              <div className="navbarModal">
                <span className="close_span">  <GrClose className="close_icon" size="25px"  onClick={()=>closeModal(false)}/></span>
              </div>
              <FcAssistant  size="140px" />
              <h2 className="Konsultatsiya_h1">Konsultatsiya olish</h2>
            </div>
            <div className="form">
              <input type="text" id="email"  className="form__input" autocomplete="off" placeholder="Ismingiz"/>              
              <input type="text" id="email"  className="form__input" autocomplete="off" placeholder="Familyangiz"/>  
              <button className="btn_buyurtmaModal"  onClick={()=>closeModal(false)}><p className="btn-p">Buyurtma berish</p></button>            
            </div>
          </div>


      </div>
    </>
  );
}
export default Modals;
