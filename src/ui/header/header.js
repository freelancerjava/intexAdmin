import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import "../MediaQuarey/MediaQuarey.css";
import { useSelector } from "react-redux";
import {HashLink as Link} from "react-router-hash-link";

const Header = () => {
  const state = useSelector((state) => state); // state.date

  return (
    <>
      <div className="header">
        <div className="navbar hidden">
          <h1 className="navbar_h1">INTEX-MARKET.UZ</h1>
          <ul className="nav_ul">
            {state.data.map((item) => {
              return (
                <li key={item.id} className="nav_li" > 
                <Link smooth to={`#${item.categoryname}`}className="hashLink"  style={{ textDecoration: 'none', listStyle:"none", color:"none",}}>
                  <span className="span_li">
                      {item.categoryname}
                  </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="navbar_media">
            <p className="nav_p">{state.info?.tel}</p>
            <a href={state.info?.telegram} target="_blank">
              <img className="header_img" src="./image/navbarImg1.svg" />
            </a>
            <a href={state.info?.instagram} target="_blank">
              <img className="header_img1" src="./image/navbarImg2.svg" />
            </a>
            <div className="nav_language">
              <p className="header_UZ_P">UZ</p>
            </div>
          </div>
        </div>

        <div className="headerImgSection">
          <img className="header_imgBig" src="./image/basseyn.png" />
        </div>
      </div>
    </>
  );
};

export default Header;
