import { type } from "@testing-library/user-event/dist/type";

export const AddCategory = (state = { data: [], info: [], product: [] }, action) => {
   if (action.type === "ADD_CATEGORY") {
      return {
         ...state,
         ...action,
      };
   } else if (action.type === "ADD_CATEGORY_ONE") {
      return {
         ...state,
         data: [...state.data, action.data],
      };
   } else if (action.type === "DELETE_CATEGORY") {
      return {
         ...state,
         data: state.data.filter((item) => item.id != action.payload),
      };
   } else if (action.type === "EDIT_CATEGORY") {
      return {
         ...state,
         data: state.data.map((item, i) => {
            if (item.id === action.data.id) {
               return action.data;
            }
            return item;
         }),
      };
   } else if (action.type === "WEB_DATA") {
      return {
         ...state,
         info: action.info,
      };
   } else if (action.type === "EDIT_WEB_DATA") {
      return {
         ...state,
         info: action.newInfo,
      };
   } else if (action.type === "PRODUCT_DATA") {
      return {
         ...state,
         product: action.product,
      };
   } else if (action.type === "PRODUCT_DATA_POST") {
      return {
         ...state,
         product: [...state.product, action.product],
      };
   } else if (action.type === "PRODUCT_DATA_DELETE") {
      return {
         ...state,
         product: state.product.filter((item) => item.id != action.payload),
      };
   } else if (action.type === "PRODUCT_DATA_PUT") {
      return {
         ...state,
         product: state.product.map((item, i) => {
            if (item.id === action.newProduct.id) {
               return action.newProduct;
            }
            return item;
         }),
      };
   }

   return state;
};
