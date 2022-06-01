import React from "react";
import AdminSearch from '../Search/AdminSearch';
import Header from '../Header/AdminHeader';
import Menus from '../Menus/AdminMenu';

// styling
import './Order.css';

const Order = () =>{
    return(
        <div className="wrapperOrder">
        <Header/>
        <div className="OrderContent">
            <div className="Ordermenus">
              <Menus />
            </div>
            <div className="OrderMainContent">
            <div className="containerOrder">
                <div className="search-bar">
                    <AdminSearch />
                </div>
                <div className="main-content">
                    <div className="head-title">
                        <span><h1>Заказы</h1></span>
                        <span><h1>Консультации</h1></span>
                    </div>
                    <div className="main-content-order">
                        <ul className='ul-head'>
                                    <li>Имя клиента</li>
                                    <li>Телефон</li>
                                    <li>Изображение</li>
                                    <li>Размер(м)/ <br /> Глубина(см)</li>
                                    <li>Цена(сум)</li>
                                    <li>Адрес</li>
                                    <li>Время</li>
                                    <li>Действия</li>
                        </ul>           
                        <ul className="ul-body">
                                    <li>Nodir</li>
                                    <li>99 6071899</li>
                                    <li><img src="../../img.png" alt="img" /></li>
                                    <li>2,7/60</li>
                                    <li>1.520.000</li>
                                    <li>Yunusobod 15 Bog’ishamol ko’chasi  5-uy</li>
                                    <li>14:32  25.04.22 </li>
                                    <li className='action-icons'>
                                        <button id='check-btn'><i className="fa-solid fa-check"></i></button>
                                        <button id='delete-btn'><i className="fa-regular fa-trash-can"></i></button>
                                    </li>
                        </ul>
                        <ul className="ul-body">
                                    <li>Otabek</li>
                                    <li>99 6071899</li>
                                    <li><img src="../../img.png" alt="img" /></li>
                                    <li>2,7/60</li>
                                    <li>1.520.000</li>
                                    <li>Yunusobod 15 Bog’ishamol ko’chasi  5-uy</li>
                                    <li>14:32  25.04.22 </li>
                                    <li className='action-icons'>
                                        <button id='check-btn'><i className="fa-solid fa-check"></i></button>
                                        <button id='delete-btn'><i className="fa-regular fa-trash-can"></i></button>
                                    </li>
                        </ul>
                        <ul className="ul-body">
                                    <li>Humoyun</li>
                                    <li>99 6071899</li>
                                    <li><img src="../../img.png" alt="img" /></li>
                                    <li>2,7/60</li>
                                    <li>1.520.000</li>
                                    <li>Yunusobod 15 Bog’ishamol ko’chasi  5-uy</li>
                                    <li>14:32  25.04.22 </li>
                                    <li className='action-icons'>
                                        <button id='check-btn'><i className="fa-solid fa-check"></i></button>
                                        <button id='delete-btn'><i className="fa-regular fa-trash-can"></i></button>
                                    </li>
                        </ul>
                                          
                    </div>
                </div>
        </div>
            </div>
        </div>    
     </div> 
        
    )
}

export default Order;