import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import Section from "./Section-1/Section-1";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_category, web_data } from "../Store/action";
const LOGIN_URL = "/token/";
const CATEGORY_URL = "/category/";
const WEB_URL = "/site/";

function IntexWebsite() {

	const dispatch = useDispatch();
		
	// useEffect(() => {
		const gets = async () => {
			const response = await axios.post(LOGIN_URL, JSON.stringify({ username: "admin", password: "admin" }), {
			   headers: { "Content-Type": "application/json" },
			});
			console.log(response);
			//  console.log(JSON.stringify(response?.data));
			localStorage.setItem("AuthToken", JSON.stringify(response.data));
			const tokenGet = JSON.parse(window.localStorage.getItem("AuthToken")).access;


			axios
			   .get(CATEGORY_URL, {
				  headers: {
					 Authorization: `Bearer ${tokenGet}`,
				  },
			   })
			   .then((res) => {
				   console.log("resdata", res.data);
				   dispatch(add_category(res.data));

			   })
			   .catch((error) => {
				  console.error(error);
			   });			

			   axios
			   .get(WEB_URL, {
				  headers: {
					 Authorization: `Bearer ${tokenGet}`,
				  },
			   })
			   .then((res) => {
				  dispatch(web_data(res.data[0]));
				  // console.log("resdata", res.data[0]);
			   })
			   .catch((error) => {
				  // console.error(error);
			   });

		 };
					  
		 gets();

		// }, [])

   return (
      <>
         <Header />
         <Main />
         <Section />
         <Footer />
      </>
   );
}

export default IntexWebsite;
