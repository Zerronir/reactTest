import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";


// Estilos
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Notas() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid container direction={"row"} justify={"space-evenly"} alignItems={"center"} >
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Título de la nota
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
