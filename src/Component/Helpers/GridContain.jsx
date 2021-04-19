import {Grid} from "@material-ui/core";
import React from "react";

function GridContain(props){
    return(
        <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" spacing={3}>{props.children}</Grid>
    )
}

export default GridContain;