import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";


export default class Tasks extends Component{


    state = {
        task: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/tareas")
            .then(res => {
                const task = res.data;
                this.setState({task});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <Grid container direction={"row"} justify={"space-evenly"} alignItems={"center"}>
                { this.state.task.map(task =>
                    <Card key={task.ID}>
                        <CardContent>
                            <h3>{task.Name}</h3>
                            <p>{task.Content}</p>
                        </CardContent>
                    </Card>
                )}
            </Grid>
        )
    }

}