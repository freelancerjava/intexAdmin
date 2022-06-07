import React, { useState } from "react";
import "./main.css";
import "../MediaQuarey/MediaQuarey.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Modals from "./Modal";

const Main = (props) => {
  const state = useSelector((state) => state);
  const [modalActive, setModalActive] = useState(false);


  return (
    <div className="Main">
      {state.data.map((item) => {
        return (
          <div className="Category">
            <div className="Category__title" key={item.id} id="category_title">
              <div className="Category_name_Parend">
                <h1 className="Category_name" id={`${item.categoryname}`}>
                  {item.categoryname}
                </h1>
              </div>
              <div className="Category_product">
                <div className="product">
                  <div className="recomendent_product">
                    <button className="btn_recomendent">Tavsiya qilamiz</button>
                  </div>
                  <div className="product_img">
                    <img src="./image/orgbaseyn.png" />
                  </div>
                  <div className="value_product">
                    <p className="number_value">3.000.000 sum</p>
                    <button className="btn_buyurtma" onClick={() => setModalActive(true)} >Buyurtma qilish</button>
                    {     modalActive && <Modals closeModal={setModalActive} />}

                  </div>
                </div>

                <div className="product">
                  <div className="recomendent_product">
                    <button className="btn_recomendent">Tavsiya qilamiz</button>
                  </div>
                  <div className="product_img">
                    <img src="./image/orgbaseyn.png" />
                  </div>
                  <div className="value_product">
                    <p className="number_value">3.000.000 sum</p>
                    <button className="btn_buyurtma">Buyurtma qilish</button>
                  </div>
                </div>

                <div className="product">
                  <div className="recomendent_product">
                    <button className="btn_recomendent">Tavsiya qilamiz</button>
                  </div>
                  <div className="product_img">
                    <img src="./image/orgbaseyn.png" />
                  </div>
                  <div className="value_product">
                    <p className="number_value">3.000.000 sum</p>
                    <button className="btn_buyurtma">Buyurtma qilish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
