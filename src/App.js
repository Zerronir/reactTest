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

    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            infoToServer: {
              email: '',
              password: ''
            },
            user:{
                name: ''
            }
        }

        this.valueToState = ({name, value, checked, type}) => {
            this.setState(() => {
                return {[name]: type === "checkbox" ? checked : value};
            });
        };

        this.handleLogin = this.handleLogin.bind(this);

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

    doLogin(){
        axios.post()
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePassChange(e){
        this.setState({password: e.target.value});
    }

    handleLogin() {
        /*this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        })*/

        axios.get("http://127.0.0.1:8000/api/doLogin", {
            email: this.state.email,
            pass: this.state.password
        })
            .then(response => {
                console.log(response)
            })

    }

    componentDidMount() {
        this.checkLoginStatus();
    }

  render(){
    return(
        <div className="FormContainer">
            <Grid container direction={"column"} justify={"space-evenly"} alignItems={"center"}>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <form action="http://127.0.0.1:8000/api/doLogin">
                    <FormControl>
                        <TextField
                            label={"Nombre"}
                            name="email"
                            defaultValue={""}
                            size={"small"}
                            onChange={event => this.valueToState(event.target)}
                        />
                        <TextField
                            label={"Contraseña"}
                            name="password"
                            defaultValue={""}
                            size={"small"}
                            onChange={event => this.valueToState(event.target)}
                        />
                        <Button variant="contained" color="primary" onClick={this.handleLogin}>
                            Iniciar sesión
                        </Button>
                    </FormControl>
                </form>
            </Grid>
        </div>
    )
  }

}
