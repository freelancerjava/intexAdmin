import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CategoryBtn from "../AddCategory/CategoryAdd";
import Header from "../Header/AdminHeader";
import Menus from "../Menus/AdminMenu";
import Modal from "react-modal";

// styling
import "./Category.css";
import axios from "../../api/axios";
import { delete_category } from "../../Store/action";

const CATEGORY_URL_DELETE = "/category/";

const CategoryPanel = (props) => {
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	

   const dispatch = useDispatch();

   const state = useSelector((state) => state);

   console.log(state);

   const [idItem, setIdItem] = useState(0);

   const onSubmit = (id) => {
      setDeleteModal(true);
      setIdItem(id);
   };

   const onDeletItem = (e) => {
      setDeleteModal(false);
      const tokenGet = JSON.parse(window.localStorage.getItem("AuthToken")).access;
      axios
         .delete(`${CATEGORY_URL_DELETE}${idItem}`, {
            headers: {
               Authorization: `Bearer ${tokenGet}`,
            },
         })
         .then((res) => {
            dispatch(delete_category(idItem));
         })
         .catch((error) => {
            //   console.error(error);
         });
   };

   return (
      <div className="wrapperCategory">
         <Header />
         <div className="CategoryContent">
            <div className="Categorymenus">
               <Menus />
            </div>
            <div className="CategoryMainContent">
               <div className="containerCategory">
                  <div className="btn-bar">
                     <CategoryBtn />
                  </div>
                  <div className="main-content">
                     <div className="main-content-category">
                        <ul className="ul-head">
                           <li>Название</li>
                           <li>На узбекском</li>
                           <li>Действия</li>
                        </ul>
                        {state.data.map((item, i) => {
                           return (
                              <ul key={item.id} className="ul-body">
                                 <li>{item.category_uz}</li>
                                 <li>{item.category_ru}</li>
                                 <li className="edit-icons">
                                    <button onClick={() => setEditModal(true)} id="edit-btn">
                                       <i className="fa-solid fa-pencil"></i>
                                    </button>
                                    <button onClick={() => onSubmit(item.id)} id="delete-btn">
                                       <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                 </li>
                              </ul>
                           );
                        })}
                        <Modal
                           className="Category_Modal"
                           isOpen={deleteModal}
                           appElement={document.getElementById("root") || undefined}
                           style={{
                              overlay: {
                                 position: "fixed",
                                 left: "0",
                                 top: "0",
                                 bottom: "0",
                                 right: "0",
                                 width: "100%",
                                 height: "100%",
                                 backgroundColor: " rgb(0,0,0,0.5)",
                              },
                              content: {
                                 position: "absolute",
                                 top: "350px",
                                 left: "300px",
                                 right: "290px",
                                 bottom: "350px",
                                 border: "1px solid #ccc",
                                 background: "#fff",
                                 overflow: "hidden",
                                 WebkitOverflowScrolling: "touch",
                                 borderRadius: "25px",
                                 outline: "none",
                                 padding: "20px",
                                 boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                              },
                           }}
                        >
                           <div className="Modal_navbar">
                              <h2>Are you sure delete item</h2>
                              <button id="yes_btn" onClick={() => onDeletItem()}>
                                 Yes
                              </button>
                              <button id="no_btn" onClick={() => setDeleteModal(false)}>
                                 No
                              </button>
                           </div>
                        </Modal>

                        <Modal
                           className="Category_Modal"
                           isOpen={editModal}
                           appElement={document.getElementById("root") || undefined}
                           style={{
                              overlay: {
                                 position: "fixed",
                                 left: "0",
                                 top: "0",
                                 bottom: "0",
                                 right: "0",
                                 width: "100%",
                                 height: "100%",
                                 backgroundColor: " rgb(0,0,0,0.5)",
                              },
                              content: {
                                 position: "absolute",
                                 top: "250px",
                                 left: "300px",
                                 right: "290px",
                                 bottom: "250px",
                                 border: "1px solid #ccc",
                                 background: "#fff",
                                 overflow: "hidden",
                                 WebkitOverflowScrolling: "touch",
                                 borderRadius: "25px",
                                 outline: "none",
                                 padding: "20px",
                                 boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                              },
                           }}
                        >
                           <div className="Modal_navbar">
                              <h2>Изменить категории</h2>
                              <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setEditModal(false)}></i>
                              <form className="ModalForm">
                                 <input type="text" placeholder="Category Name" />
                                 <br />
                                 <input type="text" placeholder="Category uz" />
                                 <input type="text" placeholder="Category ru" />
                                 <button className="CategoryBtn">Изменить</button>
                              </form>
                           </div>
                        </Modal>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CategoryPanel;
