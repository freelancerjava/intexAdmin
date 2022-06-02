// import React, { useState, useEffect } from "react";
// import Header from "../Header/AdminHeader";
// import Menus from "../Menus/AdminMenu";
// import Modal from "react-modal";
// import "./ModalWeb.css";
// import "./Web.css";
// import axios from "axios";

// const Web = () => {
//    ///////////////////////Modal///
//    const [openModal, setOpenModal] = useState(false);
//    const [setModal, setShowModal] = useState(false);
//    const [newTime, setNewTime] = useState(false);
//    const [telEgram, setTelEgram] = useState(false);
//    const [insTagram, setInsTagram] = useState(false);
//    //////////////////////Get input value
//    const [numBer, setNumber] = useState("");

//    const Generate = {
//       number: "99898390232",
//       email: "muhriddinxusniddinov57@gmail.com",
//       password: "902153301",
//    };

//    const handleSumbit = (e) => {
//       e.preventDefault();
//       console.log(numBer);
//       setNumber("");
//    };
//    //////////////////////Get input value

//    const ModalClose = (e) => {
//       setOpenModal(false);
//       handleSumbit(e);
//    };

//    return (
//       <div className="wrapperWeb">
//          <Header />
//          <div className="WebContent">
//             <div className="Webmenus">
//                <Menus />
//             </div>
//             <div className="WebMainContent">
//                <div className="containerWeb">
//                   <div className="main-content-web">
//                      <ul className="ul-body">
//                         <li>Телефонный номер</li>
//                         <li id="number">{Generate.number}</li>
//                         <li className="edit-icons">
//                            <button id="edit-btn" onClick={() => setOpenModal(true)}>
//                               <i className="fa-solid fa-pencil"></i>
//                            </button>
//                         </li>
//                      </ul>

//                      <Modal
//                         className="ModalWeb"
//                         isOpen={openModal}
//                         appElement={document.getElementById("root") || undefined}
//                         style={{
//                            overlay: {
//                               position: "fixed",
//                               left: "0",
//                               top: "0",
//                               bottom: "0",
//                               right: "0",
//                               width: "100%",
//                               height: "100%",
//                               backgroundColor: " rgb(0,0,0,0.5)",
//                            },
//                            content: {
//                               position: "absolute",
//                               top: "180px",
//                               left: "300px",
//                               right: "290px",
//                               bottom: "180px",
//                               border: "1px solid #ccc",
//                               background: "#fff",
//                               overflow: "auto",
//                               WebkitOverflowScrolling: "touch",
//                               borderRadius: "25px",
//                               outline: "none",
//                               padding: "20px",
//                               boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
//                            },
//                         }}
//                      >
//                         <div className="Modal_navbar">
//                            <h2 className="Modal_h1">Телефонный номер</h2>
//                            <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setOpenModal(false)}></i>
//                         </div>
//                         <div className="Modal_Content">
//                            <form onSubmit={handleSumbit}>
//                               <p className="ModalP">Номер</p>
//                               {/* <i className="fa-thin fa-code-simple"></i> */}
//                               <input className="ModalInput" value={numBer} onChange={(e) => setNumber(e.target.value)} />
//                               <button className="ModalBtn" onClick={ModalClose}>
//                                  изменить
//                               </button>
//                            </form>
//                         </div>
//                      </Modal>
//                      <Modal
//                         className="ModalWeb2"
//                         isOpen={setModal}
//                         appElement={document.getElementById("root") || undefined}
//                         style={{
//                            overlay: {
//                               position: "fixed",
//                               left: "0",
//                               top: "0",
//                               bottom: "0",
//                               right: "0",
//                               width: "100%",
//                               height: "100%",
//                               backgroundColor: " rgb(0,0,0,0.5)",
//                            },
//                            content: {
//                               position: "absolute",
//                               top: "180px",
//                               left: "300px",
//                               right: "290px",
//                               bottom: "180px",
//                               border: "1px solid #ccc",
//                               background: "#fff",
//                               overflow: "auto",
//                               WebkitOverflowScrolling: "touch",
//                               borderRadius: "25px",
//                               outline: "none",
//                               padding: "20px",
//                               boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
//                            },
//                         }}
//                      >
//                         <div className="Modal_navbar">
//                            <h2 className="Modal_h1_2">Адрес</h2>

//                            <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setShowModal(false)}></i>
//                            <form className="Modal_2_form">
//                               <label className="ModalLabel2">
//                                  <p className="ModalP1">rus</p>
//                                  <input className="Modal_2Input" />
//                               </label>
//                               <label className="ModalLabel2">
//                                  <p className="ModalP2">uzb</p>
//                                  <input className="Modal_2Input" />
//                               </label>
//                            </form>
//                            <button className="ModalBtn-2" onClick={() => setShowModal(false)}>
//                               изменить
//                            </button>
//                         </div>
//                      </Modal>
//                      <Modal
//                         className="ModalWeb3"
//                         isOpen={newTime}
//                         appElement={document.getElementById("root") || undefined}
//                         style={{
//                            overlay: {
//                               position: "fixed",
//                               left: "0",
//                               top: "0",
//                               bottom: "0",
//                               right: "0",
//                               width: "100%",
//                               height: "100%",
//                               backgroundColor: " rgb(0,0,0,0.5)",
//                            },
//                            content: {
//                               position: "absolute",
//                               top: "180px",
//                               left: "300px",
//                               right: "290px",
//                               bottom: "180px",
//                               border: "1px solid #ccc",
//                               background: "#fff",
//                               overflow: "auto",
//                               WebkitOverflowScrolling: "touch",
//                               borderRadius: "25px",
//                               outline: "none",
//                               padding: "20px",
//                               boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
//                            },
//                         }}
//                      >
//                         <div className="Modal_navbar">
//                            <h2 className="Modal_h1_3">Рабочее время</h2>

//                            <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setNewTime(false)}></i>
//                            <form className="Modal_2_form">
//                               <label className="ModalLabel2">
//                                  <p className="ModalP1">uzb</p>
//                                  <input className="Modal_2Input" />
//                               </label>
//                               <label className="ModalLabel2">
//                                  <p className="ModalP2">rus</p>
//                                  <input className="Modal_2Input" />
//                               </label>
//                            </form>

//                            <button className="ModalBtn-2" onClick={() => setNewTime(false)}>
//                               изменить
//                            </button>
//                         </div>
//                      </Modal>
//                      <Modal
//                         className="ModalWeb3"
//                         isOpen={telEgram}
//                         appElement={document.getElementById("root") || undefined}
//                         style={{
//                            overlay: {
//                               position: "fixed",
//                               left: "0",
//                               top: "0",
//                               bottom: "0",
//                               right: "0",
//                               width: "100%",
//                               height: "100%",
//                               backgroundColor: " rgb(0,0,0,0.5)",
//                            },
//                            content: {
//                               position: "absolute",
//                               top: "180px",
//                               left: "300px",
//                               right: "290px",
//                               bottom: "180px",
//                               border: "1px solid #ccc",
//                               background: "#fff",
//                               overflow: "auto",
//                               WebkitOverflowScrolling: "touch",
//                               borderRadius: "25px",
//                               outline: "none",
//                               padding: "20px",
//                               boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
//                            },
//                         }}
//                      >
//                         <div className="Modal_navbar">
//                            <h2 className="Modal_h1_5">Телеграм</h2>
//                            <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setTelEgram(false)}></i>
//                         </div>
//                         <div className="Modal_Content">
//                            <form>
//                               <p className="ModalP">Номер</p>
//                               <i className="fa-thin fa-code-simple"></i>
//                               <input className="ModalInput" />
//                            </form>
//                            <button className="ModalBtn" onClick={() => setTelEgram(false)}>
//                               изменить
//                            </button>
//                         </div>
//                      </Modal>
//                      <Modal
//                         className="ModalWeb3"
//                         isOpen={insTagram}
//                         appElement={document.getElementById("root") || undefined}
//                         style={{
//                            overlay: {
//                               position: "fixed",
//                               left: "0",
//                               top: "0",
//                               bottom: "0",
//                               right: "0",
//                               width: "100%",
//                               height: "100%",
//                               backgroundColor: " rgb(0,0,0,0.5)",
//                            },
//                            content: {
//                               position: "absolute",
//                               top: "180px",
//                               left: "300px",
//                               right: "290px",
//                               bottom: "180px",
//                               border: "1px solid #ccc",
//                               background: "#fff",
//                               overflow: "auto",
//                               WebkitOverflowScrolling: "touch",
//                               borderRadius: "25px",
//                               outline: "none",
//                               padding: "20px",
//                               boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
//                            },
//                         }}
//                      >
//                         <div className="Modal_navbar">
//                            <h2 className="Modal_h1_5">Инстаграм</h2>

//                            <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setInsTagram(false)}></i>
//                         </div>
//                         <div className="Modal_Content">
//                            <form>
//                               <p className="ModalP">Номер</p>
//                               <i className="fa-thin fa-code-simple"></i>
//                               <input className="ModalInput" />
//                            </form>
//                            <button className="ModalBtn" onClick={() => setInsTagram(false)}>
//                               изменить
//                            </button>
//                         </div>
//                      </Modal>
//                      <ul className="ul-body">
//                         <li>Адрес</li>
//                         <li>Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент</li>
//                         <li className="edit-icons">
//                            <button id="edit-btn" onClick={() => setShowModal(true)}>
//                               <i className="fa-solid fa-pencil"></i>
//                            </button>
//                         </li>
//                      </ul>
//                      <ul className="ul-body">
//                         <li>Рабочее время</li>
//                         <li>Будние дни: 10:00 - 22:00 Без выходных</li>
//                         <li className="edit-icons">
//                            <button id="edit-btn" onClick={() => setNewTime(true)}>
//                               <i className="fa-solid fa-pencil"></i>
//                            </button>
//                         </li>
//                      </ul>
//                      <ul className="ul-body">
//                         <li>Телеграм</li>
//                         <li>https://www.instagram.com/intex-market_uz/</li>
//                         <li className="edit-icons">
//                            <button id="edit-btn" onClick={() => setTelEgram(true)}>
//                               <i className="fa-solid fa-pencil"></i>
//                            </button>
//                         </li>
//                      </ul>
//                      <ul className="ul-body">
//                         <li>Инстаграм</li>
//                         <li>https://www.telegram.com/intex-market_uz/</li>
//                         <li className="edit-icons">
//                            <button id="edit-btn" onClick={() => setInsTagram(true)}>
//                               <i className="fa-solid fa-pencil"></i>
//                            </button>
//                         </li>
//                      </ul>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };


