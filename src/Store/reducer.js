import { type } from "@testing-library/user-event/dist/type";

export const AddCategory = (state = { data: [], type: type }, action) => {
   if (action.type === "ADD_CATEGORY") {
      return {
         ...state,
         ...action,
      };
   } else if (action.type === "ADD_CATEGORY_ONE") {
      console.log("data", action.data);
      return {
         ...state,
         data: [...state.data, action.data],
      };
   } else if (action.type === "DELETE_CATEGORY") {
      return {
         ...state,
         data: state.data.filter((item) => item.id != action.payload),
      };
   }
   return state;
};
