import React from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Productos extends React.Component {
  state = {
    productos : [],
      user: []
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/listProducts")
        .then(res => {
          const productos = res.data;
          this.setState(productos);
        })
  }

  render(){
    return(
        <Button color="primary">Hello World</Button>
    )
  }

}