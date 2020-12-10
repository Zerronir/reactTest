import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

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
                            <Button>
                                <Link to={'/viewNote/' + task.ID}>Ver nota</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </Grid>
        )
    }

}