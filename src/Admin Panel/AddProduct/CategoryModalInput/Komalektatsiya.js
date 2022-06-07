import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../../AddProduct/ProductAdd.css";
import { color } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};

const names = ["Лестиниция ", "Тент ", "Подсытылка ", "Фильтр"];

const Komalektatsiya = (props) => {
   const [personName, setPersonName] = React.useState([]);

//    console.log(props);

   const handleChange = (event) => {
      const {
         target: { value },
      } = event;
      setPersonName(
         // On autofill we get a stringified value.
         typeof value === "string" ? value.split(",") : value
      );
   };

   return (
      <div>
         <FormControl sx={{ m: 1, width: 800, marginTop: 7 }}>
            <InputLabel id="demo-multiple-checkbox-label">Комалекация на Ру </InputLabel>
            <Select
               labelId="demo-multiple-checkbox-label"
               id="demo-multiple-checkbox"
               onChange={handleChange}
               value={personName}
               input={<OutlinedInput label="Tag" />}
               renderValue={(selected) => selected.join(",")}
               MenuProps={MenuProps}
                 {...props}
               multiple
            >
               {names.map((name) => (
                  <MenuItem key={name} value={name}>
                     <Checkbox checked={personName.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
};
export default Komalektatsiya;
