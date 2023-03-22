import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"
import React from "react"; 
import NavBar from "../Navigation/Nav";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

 
 export default function ReviewFacility(){

  const opacityValue = 0.9;

  const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: "#000000"
      },
      primary: {
        main: "#52f1ff",
      },
      secondary: {
        main: "#b552f7",
      },
    },
  });
  
  const styles = theme => ({
    root: {
      body: {
        backgroundColor: "#000000",
        opacity: opacityValue,
        overflow: "hidden",
      },
    },
    mainMessage: {
      opacity: opacityValue,
    },
  
    mainMessageContainer: {
      marginTop: "20vh",
      marginLeft: theme.spacing(20),
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(4),
      },
    },
    paper: {
      overflow: "hidden",
    },
    message: {
      opacity: opacityValue,
      maxWidth: 250,
      paddingBottom: theme.spacing(2),
    },
  
  });

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
          <MenuItem value={10}>PAC  </MenuItem>
          <MenuItem value={20}>CIF </MenuItem>
          <MenuItem value={20}>SLC  </MenuItem>
          <MenuItem value={20}>DC  </MenuItem>
          <MenuItem value={20}>DP  </MenuItem>
          <MenuItem value={30}>E7  </MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
  )
  }




  const FacilityFilter = (props) => {
    return(

      <TextField
        id="outlined-multiline-static"
        label="Enter Your Review"
        variant="outlined"
        error={props.Error ? true : false}
        helperText={props.Error ? "Please enter your review" : "Up to 200 Characters"}
      />
    )
  }


  


///////ACTUAL DISPLAY
return (




<div><NavBar></NavBar>
    <div>
    <Grid
    container
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
  style={{margin: "100px"}}
  >
    <FacilitySelection></FacilitySelection>
    <FacilityFilter></FacilityFilter>
  </Grid>
    
    </div>
   
    </div>
  )



 }







 