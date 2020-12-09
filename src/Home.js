import React from 'react';
import {Grid} from '@material-ui/core';

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
        </Grid>
    );
}
