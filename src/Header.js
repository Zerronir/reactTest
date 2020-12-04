import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import App from './App';
import Notas from './Notas';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    link: {
        color: "white",
        textDecoration: 'none',
        '&:hover': {
            color: 'yellow',
            transitionDuration: '0.5s',
        },
        '&:active': {
            color: "white",
        }
    }
}));

export default function Header() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Router>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to='/' className={classes.link}>Inicio</Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to='/misNotas' className={classes.link}>Mis notas</Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to='/login' className={classes.link}>Login</Link>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to='/miPerfil' className={classes.link}>Mi Perfil</Link>
                        </Typography>
                    </Router>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Busca la nota…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Busca la nota' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}