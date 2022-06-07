import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RecommendUz(props) {


  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 300, marginLeft: 5 }}>
        <InputLabel id="select-label">РекомендоумУз </InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          className="RecommendUz"
          {...props}
   
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={"Tavsiya qilamiz"}>Tavsiya qilamiz </MenuItem>
          <MenuItem value={"Chegirma"}>Chegirma </MenuItem>
          <MenuItem value={"Sotuvda emas"}>Sotuvda emas </MenuItem>
          <MenuItem value={"Yo'q"}>Yo'q</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
