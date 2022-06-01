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
		type: 'DELETE_CATEGORY',
		payload:id
	}
}

// console.log(add_category())
