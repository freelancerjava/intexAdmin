export const add_category = (data) => {
   return {
      type: "ADD_CATEGORY",
      data,
   };
};

export const add_category_one = (data) => {
   return {
      type: "ADD_CATEGORY_ONE",
      data,
   };
};

export const delete_category = (id) => {
   return {
      type: "DELETE_CATEGORY",
      payload: id,
   };
};

export const edit_category = (data) => {
   return {
      type: "EDIT_CATEGORY",
      data,
   };
};
export const web_data = (info) => {
   return {
      type: "WEB_DATA",
      info,
   };
};

export const edit_web_data = (newInfo) => {
   return {
      type: "EDIT_WEB_DATA",
      newInfo,
   };
};
export const product_data = (product) => {
   return {
      type: "PRODUCT_DATA",
      product,
   };
};
export const product_data_post = (product) => {
   return {
      type: "PRODUCT_DATA_POST",
      product,
   };
};
export const product_data_delete = (id) => {
   return {
      type: "PRODUCT_DATA_DELETE",
      payload: id,
   };
};
export const product_data_put = (newProduct) => {
   return {
      type: "PRODUCT_DATA_PUT",
      newProduct,
   };
};
// console.log(add_category())
