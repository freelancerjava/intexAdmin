import React from 'react';
import { Link } from "react-router-dom";

// styling 
import './AdminMenu.css';

    const AdminMenu = () => {
            return(
                <div className="a-menu">
                    <ul>
                        <Link to='/' className='MenuLink'><li  className='actived' id='1'>Продукты</li></Link>
                        <Link to='/order' className='MenuLink'><li id='2'>Заказы</li></Link>
                        <Link to='/category' className='MenuLink'><li id='3'>Категории</li></Link>
                        <Link to='/web' className='MenuLink'><li id='4'>Сайт</li></Link>
                    </ul>
                </div>
            )
        }

export default AdminMenu;