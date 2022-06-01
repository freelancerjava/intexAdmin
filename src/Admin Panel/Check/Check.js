import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from '../../api/axios';
import {useDispatch} from 'react-redux';
import {add_category } from '../../Store/action';


const CATEGORY_URL = '/category/';
const Check = () => {    
    const [nameUz, setNameUz] = useState('');
    const [nameRu, setNameRu] = useState('');  

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
    const token =JSON.parse(window.localStorage.getItem("AuthToken")).access;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(CATEGORY_URL, 
    {category_uz:nameUz, category_ru:nameRu},
    config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

   

  //   try{
  //     const response =await axios.post('https://figmauz.herokuapp.com/category/', 
  //       JSON.stringify({categoryname: 'name' , category_uz:nameUz, category_ru:nameRu}),
  //       config
  //         );
  //         console.log(response);
  // } catch(err){
  //   return err;
  // }
  }

//    const tokenGet =JSON.parse(window.localStorage.getItem("AuthToken")).access;
//       axios.get(CATEGORY_URL, {
//         headers: {
//             'Authorization': `Bearer ${tokenGet}`
//         }
//         })
//         .then((res) => {
//          console.log('res', res);
// 			console.log('resdata', res.data); 
// 			// debugger;
//          dispatch(add_category(res.data));  
//         })
//         .catch((error) => {
//             console.error(error);
//           })
        
    return (
      <div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="UsernameUz" variant="outlined"  onChange={(e) => setNameUz(e.target.value)} />
              <TextField id="outlined-basic" label="UsernameRu" variant="outlined"  onChange={(e) => setNameRu(e.target.value)} />
              <button>Add Category</button>
            </Box>
            {/* <form onSubmit={handleSubmit}> */}
                {/* <input type="text" placeholder='Category uz' onChange={(e) => setNameUz(e.target.value)}/> */}
                {/* <input type="text" placeholder='Category ru' onChange={(e) => setNameRu(e.target.value)}/> */}
            {/* </form> */}
    </div>
  )
}

export default Check;