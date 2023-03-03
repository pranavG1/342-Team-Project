import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"
import React from "react"; 
import NavBar from "../Navigation/Nav";
 
 
 export default function Facilities(){



const FacilitySelection = (props) =>{
  return(
    
    <FormControl style={{marginBottom: "50px", width: "30%"}}>
        <InputLabel id="movieValue">Select A Facility</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pac!</MenuItem>
          <MenuItem value={20}>CIF</MenuItem>
          <MenuItem value={20}>SLC</MenuItem>
          <MenuItem value={20}>DC</MenuItem>
          <MenuItem value={20}>DP</MenuItem>
          <MenuItem value={30}>E7</MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
  )


  
}

///////ACTUAL DISPLAY
return (



    <div><NavBar></NavBar>
    <FacilitySelection></FacilitySelection>
    </div>
  )




 }






