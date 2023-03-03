import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {FormControl, MenuItem, Select, InputLabel, TextField, RadioGroup, FormLabel, Radio, FormControlLabel, Button, FormHelperText} from "@material-ui/core/"
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../Home';
import Facilities from '../Facilities';
import PrivateRoute from '../Navigation/PrivateRoute.js';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  componentDidMount() {
    //
  }


  componentWillUnmount() {
    this.listener();
  }


  render() {
    return (
	  <Router>
	    <div>
        <PrivateRoute exact path="/" component={Facilities}/>
	    </div>
	  </Router>
    );
  }
}

export default App;