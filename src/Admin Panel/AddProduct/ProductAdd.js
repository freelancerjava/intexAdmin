import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
//  import {Box, TextField, MenuItem} from '@mui/material'
import SelectVariants from "./CategoryModalInput/MUIcategory";
import CustomizedSelects from "./CategoryModalInput/StartayaTsena";
import RamkaNaRu from "./CategoryModalInput/RamakNaRu";
import Razmer from "./CategoryModalInput/Razmer";
import RecommendRu from "./CategoryModalInput/RecommendRu";
import Kolichstva from "./CategoryModalInput/Kolichstva";
import StartayaTsena from "./CategoryModalInput/StartayaTsena";
import TsenaSkidkoy from "./CategoryModalInput/TsenaSkidkoy";
import RamkaNaUz from "./CategoryModalInput/RamkaNaUz";
import Glubina from "./CategoryModalInput/Glubina";
import RecommendUz from "./CategoryModalInput/RecomendUz";
import Komalektatsiya from "./CategoryModalInput/Komalektatsiya";
import KomalektatsiyaUz from "./CategoryModalInput/KomalekatsiyaUz";
import { BiCategory } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { ImListNumbered } from "react-icons/im";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import axios from "../../api/axios";

//styling
import "./ProductAdd.css";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { product_data, product_data_post } from "../../Store/action";
const ProductAdd = () => {
   const [product, setProduct] = useState(false);

   const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         selectVariants: "",
         RecommendUz: "",
         RecommendRu: "",
         glubina: "",
         Kolichstva: "",
         StartayaTsena: "",
         TsenaSkidkoy: "",
         RamkaNaUz: "",
         RamkaNaRu: "",
         Razmer: "",
         Komalektatsiya: [],
         KomalektatsiyaUz: [],
         images: null,
         //  name: "Jasur",
      },
   });

   const [baseImage, setBaseImage] = useState("");
   const [fileImg, setFileImg] = useState("");

   const uploadImage = async (e) => {
      const file = e.target.files[0];
      setFileImg(file);
      const base64 = await convertBase64(file);
      setBaseImage(base64);
    //   console.log(file);
   };
//    console.log(fileImg);
   const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();
         fileReader.readAsDataURL(file);

         fileReader.onload = () => {
            resolve(fileReader.result);
         };

         fileReader.onerror = (error) => {
            reject(error);
         };
      });
   };

   const PRODUCT_URL = "/product/";

   const ModalClose = async (e) => {
    //   console.log("e", e);
      setProduct(false);

      const token = JSON.parse(window.localStorage.getItem("AuthToken")).access;

      let axios = require("axios");
      let FormData = require("form-data");
      let data = new FormData();

      data.append("category", e.selectVariants);
      data.append("name", e.name);
      data.append("price", e.TsenaSkidkoy);
      data.append("narx", e.StartayaTsena);
      data.append("quantity", e.Kolichstva);
      data.append("ramka_ru", e.RamkaNaRu);
      data.append("ramka_uz", e.RamkaNaUz);
      data.append("razmer", e.Razmer);
      data.append("depth", e.glubina);
      data.append("recommend_ru", e.RecommendRu);
      data.append("recommend_uz", e.RecommendUz);
      data.append("complectation_uz", e.KomalektatsiyaUz.toString());
      data.append("complectation_ru", e.Komalektatsiya.toString());
      data.append("image", fileImg);

      let config = {
         method: "post",
         url: `https://figmasupport.pythonanywhere.com${PRODUCT_URL}`,
         headers: {
            Authorization: `Bearer ${token}`,
            // ...data.getHeaders(),
         },
         data: data,
      };

      axios(config)
         .then(function (response) {
            // console.log(response.data);
            dispatch(product_data_post(response.data));
         })
         .catch(function (error) {
            console.log(error);
         });
   };

   //  men yozganim
   const dispatch = useDispatch();
   const tokenGet = JSON.parse(window.localStorage.getItem("AuthToken")).access;
   const state = useSelector((state) => state);
   //    console.log(state);

   useEffect(() => {
      axios
         .get(`${PRODUCT_URL}`, {
            headers: {
               Authorization: `Bearer ${tokenGet}`,
            },
         })
         .then((res) => {
            dispatch(product_data(res.data));
            // console.log("resdata", res.data);
         })
         .catch((error) => {
            //  console.error(error);
         });
   }, []);

   return (
      <div className="p-add">
         <button onClick={() => setProduct(true)}>+ Добавить продукт</button>
         <Modal
            className="ProductAdd"
            isOpen={product}
            appElement={document.getElementById("root") || undefined}
            style={{
               overlay: {
                  //   position: 'fixed',
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
                  top: "50px",
                  left: "230px",
                  right: "220px",
                  bottom: "50px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "20px",
                  outline: "none",
                  padding: "20px",
                  boxShadow: "-1px 6px 8px 0px rgba(34, 60, 80, 0.2)",
               },
            }}
         >
            <div className="Modal_navbar">
               <h2 className="ModalProduct">Добавить Категория </h2>
               <i className="fa-solid fa-close btn-closeIcon fa-3x " onClick={() => setProduct(false)}></i>
               <form onSubmit={handleSubmit(ModalClose)}>
                  <section className="ProductAddSection">
                     <label className="Label_Product">
                        <p className="Pruduct_Add_P">+Add image</p>
                        <br />
                        <input
                           type="file"
                           //    name="images"
                           onChange={uploadImage}
                           accept="image/png, image/jpeg. image/webp"
                           className="ProductAddInput"
                        />
                        <div className="images">
                           <img src={baseImage} width="200px" className="Product_Img" />
                        </div>
                     </label>
                  </section>

                  <div className="inputWrapper">
                     <div className="boxInput">
                        <BiCategory size="35" className="iconInput" />

                        <Controller name="selectVariants" control={control} rules={{ required: true }} render={({ field }) => <SelectVariants {...field} />} />
                     </div>

                     <div className="boxInput">
                        <ImListNumbered size="32" className="iconInput" />
                        <Controller name="Kolichstva" control={control} render={({ field }) => <Kolichstva {...field} />} />
                     </div>

                     <div className="boxInput">
                        <AiOutlineDollarCircle size="32" className="iconInput" />
                        <Controller name="StartayaTsena" control={control} render={({ field }) => <StartayaTsena {...field} />} />
                     </div>

                     <div className="boxInput">
                        <AiOutlineDollarCircle size="32" className="iconInput" />
                        <Controller name="TsenaSkidkoy" control={control} render={({ field }) => <TsenaSkidkoy {...field} />} />
                     </div>

                     <div className="boxInput">
                        <FaExpandArrowsAlt size="30" className="iconInput" />
                        <Controller name="RamkaNaUz" control={control} render={({ field }) => <RamkaNaUz {...field} />} />
                     </div>

                     <div className="boxInput">
                        <FaExpandArrowsAlt size="30" className="iconInput" />
                        <Controller name="RamkaNaRu" control={control} render={({ field }) => <RamkaNaRu {...field} />} />
                     </div>

                     <div className="boxInput">
                        <GiResize size="30" className="iconInput" />
                        <Controller name="Razmer" control={control} render={({ field }) => <Razmer {...field} />} />
                     </div>
                     <div className="boxInput">
                        <GiResize size="30" className="iconInput" />

                        <Controller name="glubina" control={control} render={({ field }) => <Glubina {...field} />} />
                     </div>

                     <div className="boxInput">
                        <Controller name="RecommendRu" control={control} rules={{ required: true }} render={({ field }) => <RecommendRu {...field} />} />
                     </div>
                     <div className="boxInput">
                        <Controller name="RecommendUz" control={control} rules={{ required: true }} render={({ field }) => <RecommendUz {...field} />} />
                     </div>

                     <Controller
                        name="Komalektatsiya"
                        control={control}
                        // rules={{ required: true }}
                        render={({ field }) => <Komalektatsiya {...field} />}
                     />
                     <Controller
                        name="KomalektatsiyaUz"
                        control={control}
                        // rules={{ required: true }}
                        render={({ field }) => <KomalektatsiyaUz {...field} />}
                     />
                  </div>

                  <button type="submit" className="ProductAddBtn" onClick={() => ModalClose}>
                     изменить
                  </button>
               </form>
               <div className="div_footer"></div>
            </div>
         </Modal>
      </div>
   );
};

export default ProductAdd;
