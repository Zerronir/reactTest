import React from 'react';
import {Grid} from '@material-ui/core';
import Tasks from './Tasks'

export default function Home() {
    return(
        <Grid container direction={"column"} justify={"space-evenly"} alignItems={"center"}>
            <Grid container direction={"row"} justify={"space-evenly"} alignItems={"center"}>
                <div>
                    Hello
                </div>
                <div>
                    Material
                </div>
                <div>
                    World
                </div>
            </Grid>

            <Grid container direction={"column"} justify={"space-evenly"} alignItems={"center"}>
                <Tasks />
            </Grid>

        </Grid>
    );
}
