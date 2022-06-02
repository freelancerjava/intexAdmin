import React from "react";
import "./header.css";
import "../MediaQuarey/MediaQuarey.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {

	const state = useSelector((state) => state);

   return (
      <>
         <header className="header">
            <div className="navbar hidden">
               <h1 className="navbar_h1">INTEX-MARKET.UZ</h1>

				   <ul className="nav_ul">
					   {
						   state.data.map((item) => {
							   return (
								   <li key={item.id} className="nav_li">{item.categoryname}</li>
								   )
						   })
					   }
               </ul>

				   <p className="nav_p">{state.info.tel}</p>
				   <a href={state.info.telegram} target='_blank'>
               			<img className="header_img" src="./image/navbarImg1.svg" />
				   </a>
				   <a href={state.info.instagram} target='_blank'>
               			<img className="header_img1" src="./image/navbarImg2.svg" />
				   </a>
               <div className="nav_language">
                  <p 	 className="header_UZ_P">UZ</p>
               </div>
            </div>
            <div className="heaerImgSection">
               <img className="header_imgBig" src="./image/basseyn.png" />
            </div>
         </header>
      </>
   );
};

export default Header;
