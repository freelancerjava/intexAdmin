import React from 'react';
import { Link } from "react-router-dom";

// styling 
import './AdminMenu.css';

    const AdminMenu = () => {
            return(
                <div className="a-menu">
                    <ul>
                        <Link to='/' className='MenuLink'><li>Продукты</li></Link>
                        <Link to='/order' className='MenuLink'><li>Заказы</li></Link>
                        <Link to='/category' className='MenuLink'><li>Категории</li></Link>
                        <Link to='/web' className='MenuLink'><li>Сайт</li></Link>
                        <Link to='/check' className='MenuLink'><li>To Do</li></Link>                        
                    </ul>
                </div>
            )
        }

export default AdminMenu;