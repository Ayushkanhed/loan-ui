// Personal Detail Form
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Navbar from "../Helpers/Navbar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Upload from '../Helpers/upload'
import HeaderTitle from '../Helpers/Header'
import useStyles from "../Styles/FormStyle";

const docu = [
    { name: "Upload Your Passport Size latest Photo" },
    { name: "Upload Your Aadhar Copy" },

]

function UploadDetails() {
    const classes = useStyles();
    const [bank, setbank] = useState();
    return (
        <>
            <Container className={classes.containclass} maxWidth={"md"} >
                <form className={classes.root} autoComplete="off" style={{ padding: "20px" }}>

                    {/* main heading */}
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" spacing={3}>
                        <Typography variant="h5" className={classes.headtext}>Upload Documents</Typography>
                    </Grid>
                    {/* main heading */}

                    {docu.map((data) =>
                        <>
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>

                                <Grid item>
                                    <Upload desc={data.name} />
                                </Grid>

                            </Grid>
                        </>
                    )}

                </form>

            </Container>
        </>
    );
}

export default UploadDetails;