import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RecommendRu(props) {

  return (
    <div>
      <FormControl variant="standard" sx={{  minWidth:200, marginLeft:5 }}> 
        <InputLabel id="select-label">РекомендоумРу </InputLabel>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          labelId="select-label"
          id="select-label"
          className='SelectMUI'
          {...props}
        >
         <MenuItem value=""></MenuItem>
          <MenuItem value={"Рекомендеюм"}>Рекомендеюм </MenuItem>
          <MenuItem value={"Скидка"}>Скидка </MenuItem>
          <MenuItem value={"Нет в наличии "}>Нет в наличии </MenuItem>
          <MenuItem value={"Нет"}>Нет</MenuItem>

        </Select> 
      </FormControl>
 
    </div>
  );
}
