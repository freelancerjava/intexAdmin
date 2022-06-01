import React from 'react';
import Header from '../Header/AdminHeader';
import Menus from '../Menus/AdminMenu';

//styling
import './Web.css';

        const Web = () => {
            return(
         <div className="wrapperWeb">
              <Header/>
        <div className="WebContent">
            <div className="Webmenus">
              <Menus />
            </div>
            <div className="WebMainContent">
            <div className="containerWeb">
                    <div className="main-content-web">           
                        <ul className="ul-body">
                                    <li>Телефонный номер</li>
                                    <li>(998) 99 911 02 04</li>
                                    <li className='edit-icons'>
                                        <button id='edit-btn'><i className="fa-solid fa-pencil"></i></button>
                                    </li>
                        </ul>
                        <ul className="ul-body">
                                    <li>Адрес</li>
                                    <li>Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент</li>
                                    <li className='edit-icons'>
                                        <button id='edit-btn'><i className="fa-solid fa-pencil"></i></button>
                                    </li>
                        </ul>
                         <ul className="ul-body">
                                    <li>Рабочее время</li>
                                    <li>Будние дни: 10:00 - 22:00  Без выходных</li>
                                    <li className='edit-icons'>
                                        <button id='edit-btn'><i className="fa-solid fa-pencil"></i></button>
                                    </li>
                        </ul>
                        <ul className="ul-body">
                                    <li>Телеграм</li>
                                    <li>https://www.instagram.com/intex-market_uz/</li>
                                    <li className='edit-icons'>
                                        <button id='edit-btn'><i className="fa-solid fa-pencil"></i></button>
                                    </li>
                        </ul>
                        <ul className="ul-body">
                                    <li>Инстаграм</li>
                                    <li>https://www.telegram.com/intex-market_uz/</li>
                                    <li className='edit-icons'>
                                        <button id='edit-btn'><i className="fa-solid fa-pencil"></i></button>
                                    </li>
                        </ul>
                </div>
                </div>
            </div>
        </div>    
     </div> 
               
            )
        }

    export default Web;