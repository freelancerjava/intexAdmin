import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../ProductAdd.css";
import { useSelector } from "react-redux";

export default function SelectVariants(props) {
   const state = useSelector((state) => state);

   return (
      <div>
         <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="select-label">категория</InputLabel>
            <Select labelId="select-label" id="selectId" className="SelectMUI" {...props}>
               {state.data.map((item) => {
                  return (
                     <MenuItem key={item.id} value={item.id}>
						  {item.categoryname}
                     </MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </div>
   );
}
