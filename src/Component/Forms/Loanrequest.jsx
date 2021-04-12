import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Grid, Typography} from "@material-ui/core";
import Navbar from "../Styles/Navbar";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(5),
        },
        field: {
            width : "200px"
        }
    },
}));

 function LoanRequest() {
    const classes = useStyles();
    const [subject, setSubject] = useState("");

    return (
        <>
            <Navbar/>
            <Container maxWidth="lg">
                <Typography align="center" variant="h4">Loan Request Form</Typography>
        <form className={classes.root} autoComplete="off">
            <Grid container alignItems="center" justify="center" spacing={3}>
                <Typography variant="h6" align="left">Subject</Typography>
            </Grid>
            <Grid container alignItems="center" justify="center" spacing={3}>
                <Grid item>
                    <TextField className={classes.field} color="primary" label="Name" type="string" variant="outlined" />
                </Grid>
                <Grid item >
                    <TextField color="primary" label="Amount" variant="outlined" />
                </Grid>
                <Grid item >
                    <TextField color="primary" label="Time (yrs.)" type="number" variant="outlined" />
                </Grid>
            </Grid>
        </form>
            </Container>
        </>
    );
}

export default LoanRequest;
