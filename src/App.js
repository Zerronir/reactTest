import React from 'react';
import {Grid} from '@material-ui/core';
import './index.css';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



export default class App extends React.Component {

    state = {
        task: {
            Name: '',
            Content: ''
        }
    }

    checkLoginStatus() {
        axios.get("http://127.0.0.1:8000/api/doLogin", {withCredentials: true})
            .then(response => {
                if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
                    this.setState({
                        loggedStatus: "LOGGED_IN",
                        user: response.data.user
                    })
                } else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
                    this.setState({
                        loggedStatus: "NOT_LOGGED_IN",
                        user: {}
                    })
                }
        }).catch(error => {
            console.log("Error, comprueba los errores", error)
        })
    }

    createTask(){
        axios.post("")
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

  render(){
    return(
        <div className="FormContainer">
            <Grid container direction={"column"} justify={"space-evenly"} alignItems={"center"}>
                <form action="http://127.0.0.1:8000/api/doLogin">
                    <FormControl>
                        <TextField
                            label={"Name"}
                            name="Name"
                            defaultValue={""}
                            size={"small"}
                        />
                        <TextField
                            label={"Content"}
                            name="Content"
                            defaultValue={""}
                            size={"small"}
                        />
                        <Button variant="contained" color="primary" onClick={this.createTask}>
                            Iniciar sesión
                        </Button>
                    </FormControl>
                </form>
            </Grid>
        </div>
    )
  }

}
