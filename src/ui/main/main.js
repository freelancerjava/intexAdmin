import React from "react";
import "./main.css";
import "../MediaQuarey/MediaQuarey.css";
import { useSelector } from "react-redux";

const Main = () => {
   const state = useSelector((state) => state);

   return (
      <div className="Main">
         {state.data.map((item) => {
            return (
               <div key={item.id} className="Category">
                  <h1 className="Category_name">{item.categoryname}</h1>

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
            );
         })}

         {/* <div className="Category_2">
            <h1 className="Category_name_2">JPEX baseyn</h1>
         </div> */}

         {/* <div className="Catagory_2Product">
            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del>7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>

            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del>7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>

            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del>7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>

            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del>7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>

            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del>7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>

            <div className="Card_pruduct">
               <div className="btn_card">
                  <button className="btn_cardRecomendet">Chegirma</button>
               </div>
               <img className="card2_img" src="./image/JPX baseyn.png" />
               <p className="skidka">
                  <del className="delskidka">7.000.000 so'm</del>
               </p>
               <div className="value_card">
                  <p className="org_value">5.000.000 so'm</p>
                  <button className="btn_buyurtma">Buyurtma qilish</button>
               </div>
            </div>
         </div> */}
      </div>
   );
};

export default Main;
