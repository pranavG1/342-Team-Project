import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"
import React from "react"; 
import NavBar from "../Navigation/Nav";
 
const serverURL = ''
 export default function Facilities(){

React.useEffect(() => {
  loadFacilities();
})

const loadFacilities = () => {
    
  callApiLoadFacilities()
  .then(res => {
      var parsed = JSON.parse(res.express);
      console.log(parsed)
      DisplayUpdates(parsed)
    }
  ).then(console.log())
}

const callApiLoadFacilities = async (props) => {
  
  const url = serverURL + "/api/loadFacilityInfo";
  const response = await fetch(url, {method: "POST"

  }
  )
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  console.log(body)
  return body;
}

const DisplayUpdates = (facilityList) =>{
  return(
    <div>

      {facilityList.facilityID}
    </div>
  )
  }


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
          <MenuItem value={10}>PAC - Athletics facility at the right side of the campus </MenuItem>
          <MenuItem value={20}>CIF - Athletics facility at southwest side of the campus </MenuItem>
          <MenuItem value={20}>SLC - Student life centre towards the west side of campus </MenuItem>
          <MenuItem value={20}>DC - library at the north west side of the campus </MenuItem>
          <MenuItem value={20}>DP - library located at the centre of the campus </MenuItem>
          <MenuItem value={30}>E7 - Engineering building at the north west side of the campus </MenuItem>
        </Select>
        <FormHelperText error>{props.Error ? "Please select a facility" : ""}</FormHelperText>
      </FormControl>
  )
  }



  const OpenHouseSports = (props) =>{
    return(
    <FormControl style={{marginBottom: "100px", width: "30%"}}>
          <InputLabel id="movieValue">Select A Open House Sport</InputLabel>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Basketball</MenuItem>
            <MenuItem value={20}>Badminton</MenuItem>
            <MenuItem value ={30}>Soccer</MenuItem>
          </Select>
          <FormHelperText error>{props.Error ? "Please select a Open House Sport" : ""}</FormHelperText>
        </FormControl>
    )
   
 


  
}

///////ACTUAL DISPLAY
return (




<div><NavBar></NavBar>
    <div><FacilitySelection></FacilitySelection>
    <OpenHouseSports></OpenHouseSports>
    <DisplayUpdates>
      </DisplayUpdates></div>
   
    </div>
  )







 




 }