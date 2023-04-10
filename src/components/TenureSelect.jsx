import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const TenureSelect = ({data, setData}) => {

  const handleChange = (event) => {
    setData({...data, loanTerm: event.target.value});
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        defaultValue={5}
        onChange={handleChange}
      >
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Years</MenuItem>
        <MenuItem value={15}>15 Years</MenuItem>
        <MenuItem value={20}>20 Years</MenuItem>
        <MenuItem value={25}>25 Years</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;