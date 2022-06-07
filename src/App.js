import React, { useEffect } from "react";
import Layout from "./Admin Panel/Layout";

import Login from "./LoginPage/Login";
import Product from "./Admin Panel/Product/Product";
import Order from "./Admin Panel/Order/Order";
import Category from "./Admin Panel/Category/Category";
import Web from "./Admin Panel/Web/Web";
import Check from "./Admin Panel/Check/Check";
import RequireAuth from "./Admin Panel/RequireAuth";
import Missing from "./Admin Panel/Missing";
import { Routes, Route } from "react-router-dom";
import IntexWebsite from "./ui/IntexWebsite";

// styling
import "./App.css";
import axios from "./api/axios";
import { useDispatch } from "react-redux";
import { add_category } from "./Store/action";

const App = () => {
   return (
        <div className="ContainerApp">
      <Routes>
         <Route path="/" element={<Layout />}>
            {/* public routes  */}
            <Route path="intex" element={<IntexWebsite />} />
            <Route path="login" element={<Login />} />
            <Route path="check" element={<Check />} />
            {/* <Route path="category" element={<Category />} /> */}

            {/* we want to protect this routes  */}
            <Route element={<RequireAuth />}>
               <Route path="/" element={<Product />} />
            </Route>
            <Route element={<RequireAuth />}>
               <Route path="order" element={<Order />} />
            </Route>
            <Route element={<RequireAuth />}>
               <Route path="category" element={<Category />} />
            </Route>
            <Route element={<RequireAuth />}>
               <Route path="web" element={<Web />} />
            </Route>

            {/* catch all  */}
            <Route path="*" element={<Missing />} />
         </Route>
      </Routes>
      </div>
   );
};

export default App;
