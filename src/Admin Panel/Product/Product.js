import AdminSearch from "../Search/AdminSearch";
import ProductAdd from "../AddProduct/ProductAdd";
import Header from "../Header/AdminHeader";
import Menus from "../Menus/AdminMenu";

//styling
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../api/axios";
import { add_category } from "../../Store/action";



const Product = () => {
	const state = useSelector((state) => state);
	
	console.log(state);

   return (
      <div className="wrapperProduct">
         <Header />
         <div className="ProductContent">
            <div className="Productmenus">
               <Menus />
            </div>
            <div className="ProductMainContent">
               <div className="containerProduct">
                  <div className="search-and-btn">
                     <AdminSearch />
                     <ProductAdd />
                  </div>
                  <div className="main-content">
                     <div className="head-title">
							   { state.data.map((item, i) => {
							console.log(item.categoryname)
                           return (
                              <span key={item.id}>
                                 <h1>{item.categoryname}</h1>
                              </span>
                           );
                        })}
                     </div>
                     <div className="main-content-product">
                        <ul className="ul-head">
                           <li>Изображение</li>
                           <li>Цена(сум)</li>
                           <li>Количество</li>
                           <li>Рамка</li>
                           <li>Размер(м)</li>
                           <li>Глубина(см)</li>
                           <li>Действия</li>
                        </ul>
                        <ul className="ul-body">
                           <li>
                              <img src="../../img.png" alt="img" />
                           </li>
                           <li>
                              <p>1.800.000 сум</p>
                              <h4>1.520.000 сум</h4>
                           </li>
                           <li>10</li>
                           <li>Металлический</li>
                           <li>2,7</li>
                           <li>60</li>
                           <li className="edit-icons">
                              <button id="edit-btn">
                                 <i className="fa-solid fa-pencil"></i>
                              </button>
                              <button id="delete-btn">
                                 <i className="fa-regular fa-trash-can"></i>
                              </button>
                           </li>
                        </ul>
                        <ul className="ul-body">
                           <li>
                              <img src="../../img.png" alt="img" />
                           </li>
                           <li>
                              <p>1.800.000 сум</p>
                              <h4>1.520.000 сум</h4>
                           </li>
                           <li>10</li>
                           <li>Металлический</li>
                           <li>2,7</li>
                           <li>60</li>
                           <li className="edit-icons">
                              <button id="edit-btn">
                                 <i className="fa-solid fa-pencil"></i>
                              </button>
                              <button id="delete-btn">
                                 <i className="fa-regular fa-trash-can"></i>
                              </button>
                           </li>
                        </ul>
                        <ul className="ul-body">
                           <li>
                              <img src="../../img.png" alt="img" />
                           </li>
                           <li>
                              <p>1.800.000 сум</p>
                              <h4>1.520.000 сум</h4>
                           </li>
                           <li>10</li>
                           <li>Металлический</li>
                           <li>2,7</li>
                           <li>60</li>
                           <li className="edit-icons">
                              <button id="edit-btn">
                                 <i className="fa-solid fa-pencil"></i>
                              </button>
                              <button id="delete-btn">
                                 <i className="fa-regular fa-trash-can"></i>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
