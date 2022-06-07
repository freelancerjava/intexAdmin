import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

//  *************************************************
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  *************************************************

import "./LoginStyle/Login.css";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { add_category } from "../Store/action";
import { GetCats } from "./query";
const LOGIN_URL = "/token/";
// const LOGIN_URL = "/auth-token/";

const CATEGORY_URL = "/category/";
const Login = () => {
   const { setAuth } = useAuth();
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   //  *************************************************
   const [open, setOpen] = useState(false);
   const handleClose = () => {
      setOpen(false);
   };
   const handleToggle = () => {
      setOpen(!open);
   };

   const notifyError = () =>
      toast.error("User not defined", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
      });
   const notifySuccess = () =>
      toast.success("Logined", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
      });

   //  *************************************************

   const [user, setUser] = useState("");
   const [pwd, setPwd] = useState("");

   //    useEffect(()=>{
   //        userRef.current.focus();
   //    },[]);

   //    useEffect(()=>{
   //        setErrMsg('')
   //    }, [user, pwd]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(LOGIN_URL, JSON.stringify({ username: user, password: pwd }), {
            headers: { "Content-Type": "application/json" },
            //    withCredentials: true
         });
         //  console.log(response);
         //  console.log(JSON.stringify(response?.data));
         //  console.log(JSON.stringify(response));
         const accessToken = response?.data?.access;
         localStorage.setItem("AuthToken", JSON.stringify(response.data));

         const tokenGet = JSON.parse(window.localStorage.getItem("AuthToken")).access;

         //  GetCats(tokenGet);

         axios
            .get(CATEGORY_URL, {
               headers: {
                  Authorization: `Bearer ${tokenGet}`,
               },
            })
            .then((res) => {
               dispatch(add_category(res.data));
               //    console.log("resdata", res.data);
            })
            .catch((error) => {
               //  console.error(error);
            });

         setAuth({ user, pwd, accessToken });
         notifySuccess();
         setUser("");
         setPwd("");
         handleClose();
         navigate(from, { replace: true });
         //  alert('You have succesfully logged in')
      } catch (err) {
         if (err.response?.status === 401) {
            handleClose();
            //    alert('Login or password is incorrect')
            notifyError();
            setUser("");
            setPwd("");
         }
         return err;
      }
   };

   return (
      <section className="Container">
         <div className="background">
            <h1>INTEX-MARKET.UZ</h1>
            <p>Введите имя и пароль, если у вас есть доступ к панели администратора</p>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  placeholder="имя пользователя"
                  className="inputName"
               />
               <input type="password" onChange={(e) => setPwd(e.target.value)} value={pwd} className="inputPassword" placeholder="пароль" />
               <button className="btn_voyti" onClick={handleToggle}>
                  Sign In
               </button>
               {/* <button onClick={notifyError}>Notify!</button>                      */}
               <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
               />
               <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                  <CircularProgress color="inherit" />
               </Backdrop>
            </form>
         </div>
      </section>
   );
};

export default Login;

/*
import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

// styling
import './Login.css';

  export const baseURL = "https://2ulugbekerkinovich.pythonanywhere.com/";
  export const baseURL2 = 'https://figmauz.herokuapp.com/';

  
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();  
    // const response = await axios.post(`${baseURL}auth-token/`, {
    //   username, password
    // })
    const {data} = await axios.post(`${baseURL2}token/`, {
      username, password
    }) // data => accsess token no bizda acces+refr
    
    // console.log(response);
    // localStorage.setItem('AuthToken', JSON.stringify(response.data));
    
        localStorage.setItem('AuthToken', JSON.stringify(data));
        setNavigate(true);
        console.log(data);
        const AuthToken= JSON.parse(window.localStorage.getItem("AuthToken")).refresh;
       console.log('authtoken', AuthToken.toString());
    

    // await axios.post(`${baseURL}auth-token/`, {
    //     username, password
    //   }).then(function (response) {
    //           console.log(response);
    //           localStorage.setItem('AuthToken', JSON.stringify(response.data));

    //           const AuthToken = window.localStorage.getItem("AuthToken");
    //           if (AuthToken) {
    //             console.log('acsess');  
    //             setNavigate(true);
    //           }
    //         }).catch(function (response) {
    //           console.log(response);
    //           console.log('xato');           
    //         });
    //      setUsername("");
    //      setPassword("");   


          // await  axios({
          //     method: "post",
          //     url: `${baseURL}auth-token/`,
          //     data: this.state,
          //     headers: { "Content-Type": "multipart/form-data" },
          //   }).then(function (response) {
          //       console.log(response);
          //       localStorage.setItem('AuthToken', JSON.stringify(response.data));

          //       const AuthToken = window.localStorage.getItem("AuthToken");
          //       if (AuthToken) {
          //         console.log('acsess');   
          //       }
          //     }).catch(function (response) {
          //       console.log(response);
          //       console.log('xato');              
          //     });
  
  }

      if(navigate){
          return <Navigate to='/product' /> 
      }

    return (
      <div className='Container'>
           <div className="background">
           <h1>INTEX-MARKET.UZ</h1>
           <p>Введите имя и пароль, если у вас есть доступ к панели администратора</p>
      <form onSubmit={handleSubmit}>
          <input className='inputName' type="text" placeholder='имя пользователя' value={username}  onChange={e => setUsername(e.target.value)} />
          <input className='inputPassword' type="password"  placeholder='пароль' value={password}  onChange={e => setPassword(e.target.value)}/>
          <input className='btn_voyti' type="submit" value="войти" onSubmit={handleSubmit} />
      </form>
     </div>
      </div>   
    );
  
}


export default Login;
*/
