import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Grid, Button, MenuItem, FormControl, TextField, } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { Box, AppBar, Toolbar } from '@material-ui/core';
import history from '../Navigation/history';
import landing from '../Landing'
import Link from '@material-ui/core/Link';
import NavBar from '../Navigation/Nav';

const serverURL = ""; //enable for dev mode


const fetch = require("node-fetch");

const opacityValue = 0.9;

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#000000"
    },
    primary: {
      main: "#FFFFAA",
    },
    secondary: {
      main: "#E4B429",
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
  
const Landing = () => {
    return (
        <div>
          
          <MuiThemeProvider theme = {theme}>

            <NavBar></NavBar>
            
<CssBaseline />
           
            

            <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
            <Typography variant="h3" component={"h3"} gutterbottom>
                UWaterloo Facilities 
            </Typography>
            <Typography variant="h4" component="h4" gutterBottom>
          The place to get all your information around UW! 
        </Typography>
        
            </Grid>
            </MuiThemeProvider>
        </div>
    )
}
export default Landing;