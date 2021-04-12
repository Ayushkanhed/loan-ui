import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Navbar from "../Styles/Navbar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Upload from './upload'
import HeaderTitle from './Header'

const name = [
    { name: "Mr" },
    { name: "Mrs" }
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(5),
        },
        field: {
            width: "200px"
        }
    },
}));

function LoanRequest() {
    const classes = useStyles();
    const [subject, setSubject] = useState("");
    const [mr, setMr] = useState("");

    function handleMortgaged() {
        return (
            <Grid container>
                <Grid item >
                    <TextField required color="primary" label="Middle Name" variant="outlined" />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Navbar />
            <Container maxWidth="md">
                <form className={classes.root} autoComplete="off">
                    {/* main heading */}
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Typography variant="h3" >Loan Request</Typography>
                    </Grid>
                    {/* main heading */}


                    {/* subject */}
                    <HeaderTitle name={"Subject"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item>
                            <TextField color="primary" label="Name" type="string" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField color="primary" label="Amount" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField color="primary" label="Time (yrs.)" type="number" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Upload desc={"Upload Photo"} />
                    {/* subject end*/}


                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Typography variant="h4" align="left">Details</Typography>
                    </Grid>


                    {/* name */}
                    <HeaderTitle name={"Name"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item >
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >.</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={mr}
                                    onChange={(e) => setMr(e.target.value)}
                                    label="Mr/Mrs"
                                >

                                    {name.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item >
                            <TextField required color="primary" label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField required color="primary" label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField required color="primary" label="Middle Name" variant="outlined" />
                        </Grid>


                    </Grid>
                    <Upload desc={"Upload Aadhar Copy"} />
                    {/* name */}

                    {/* contact detail */}
                    <HeaderTitle name={"Contact"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item>
                            <TextField
                                required
                                label="Mobile Number 1"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Mobile Number 2"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item>
                            <TextField required color="primary" label="Email" variant="outlined" type="email" />
                        </Grid>


                    </Grid>

                    {/* contact detail */}

                    {/* Business address */}
                    <HeaderTitle name={"Business Address"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item xs={8}>
                            <TextField fullWidth color="primary" label="Address" type="string" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField color="primary" label="City" type="string" variant="outlined" />
                        </Grid>

                        <Grid item >
                            <TextField required color="primary" label="Country" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField required color="primary" label="Pincode" variant="outlined" />
                        </Grid>


                    </Grid>
                    <Upload desc={"Upload Address proof"} />

                    {/* Home address */}
                    <HeaderTitle name={"Residence Address"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item xs={8}>
                            <TextField fullWidth color="primary" label="Address" type="string" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField color="primary" label="City" type="string" variant="outlined" />
                        </Grid>

                        <Grid item >
                            <TextField required color="primary" label="Country" variant="outlined" />
                        </Grid>
                        <Grid item >
                            <TextField required color="primary" label="Pincode" variant="outlined" />
                        </Grid>


                    </Grid>
                    <Upload desc={"Upload Address proof"} />

                    {/* status home */}
                    <HeaderTitle name={"Residence"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <FormControl component="fieldset">
                            <RadioGroup /*value={value} onChange={handleChange}*/>
                                <FormControlLabel value="Self-Owned (No Mortgages Anywhere)" control={<Radio />} label="Self-Owned (No Mortgages Anywhere)" />
                                <FormControlLabel value="Self-Owned (Mortgaged)" control={<Radio />} label="Self-Owned (Mortgaged)" onClick={handleMortgaged} />
                                {handleMortgaged}
                                <FormControlLabel value="On Rent" control={<Radio />} label="On Rent" />
                            </RadioGroup>
                        </FormControl>

                    </Grid>
                    <Upload desc={"Upload Lease"} />


                    {/* date of birth */}
                    <HeaderTitle name={"Date of Birth"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item >
                            <TextField
                                variant="outlined"
                                id="date"
                                label="Date of Birth"
                                type="date"
                                defaultValue=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item >
                            <TextField
                                variant="outlined"
                                label="Age"
                                type="Number"
                            />
                        </Grid>

                    </Grid>

                    {/* education */}
                    <HeaderTitle name={"Education"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <FormControl component="fieldset">
                            <RadioGroup /*value={value} onChange={handleChange}*/>
                                <FormControlLabel value="" control={<Radio />} label="Graduate" />
                                <FormControlLabel value="" control={<Radio />} label="Diploma" />
                                <FormControlLabel value="On Rent" control={<Radio />} label="10th/12th or Below" />
                            </RadioGroup>
                        </FormControl>

                    </Grid>
                    <Upload desc={"Upload Shop act License copy"} />

                </form>

            </Container>
        </>
    );
}

export default LoanRequest;
