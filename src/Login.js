import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '1140px',
        marginRight: '30px',
        marginLeft: '30px'
    }
});

export default class Login extends Component {
    render() {
        return (
            <main className={styles.main}>
                <p>Login</p>
            </main>
        )
    }
}