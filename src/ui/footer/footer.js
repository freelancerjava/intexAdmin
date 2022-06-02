import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import { Modal } from "./Modal";

function Footer() {
   const state = useSelector((state) => state);

   return (
      <div className="footer_container">
         <div className="footer_container_1">
            <h1 className="footer_h1_yordam">Bepul konsultatsiya yordami uchun</h1>

            <input type="text" placeholder="Ismingiz" className="footer_input" />
            <input type="tel" placeholder="Telefon raqamingiz" className="footer_input" />
            <button className="footer_btn">Konsultatsiya olish</button>
         </div>

         <div className="footer_container_2">
            <div className="ishVaqti">
               <img src="./image/vector.svg" alt="telegram" />
               <p className="ishvaqtiP">Ish vaqti</p>
            </div>
            <p className="ish_kunlariP">
					{state.info.time_uz}
            </p>
            <div className="footerImg_wrapper">
				   <a href={state.info.tel} target='_blank' >
				  		 <img className="footerImgIcon1" src="./image/telegram.svg" />
				   </a>
              		<a href={state.info.telegram} target='_blank'>
               			<img className="header_img" src="./image/navbarImg1.svg" />
				   </a>
				   <a href={state.info.instagram} target='_blank'>
               			<img className="header_img1" src="./image/navbarImg2.svg" />
				   </a>
            </div>
         </div>
		   <div className="footer_container_3">
            <p className="footer_adress">
				   Internet-market.uz <br />
			   <p>{state.info.tel} </p>
			   <p>{state.info.address_uz}</p>
            </p>
            <p className="footer_adress">
               Разработано в Support Solutions <br /> Все права защищены.
            </p>
         </div>
      </div>
   );
}
export default Footer;
