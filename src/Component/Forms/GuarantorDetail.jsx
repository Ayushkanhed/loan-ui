// Personal Detail Form
import React, { useState } from 'react';
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


const name = [
    { name: "Mr" },
    { name: "Mrs" }
]

const emp = [
    { name: "Job" },
    { name: "Business" },
    { name: "Industry" }
]

const Residence = [
    { name: "Self-Owned (No Mortgages Anywhere)" },
    { name: "Self-Owned (Mortgaged)" },
    { name: "On Rent" }
]

const LoanRepay = [
    { name: "Salary Deduction Guarantee" },
    { name: "Daily Deduction Type" },
    { name: "Monthly Deduction Type" }
]
const gur = [
    { id: 1 },
    { id: 2 },
]

function GuarantorDetails() {
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
                        <Typography variant="h5" className={classes.headtext}>Guarantor Details Details</Typography>
                    </Grid>
                    {/* main heading */}

                    {gur.map((data) =>

                        <>

                            <Typography align="center" variant="h5" style={{ border: "1px solid blue", padding: "10px" }}>Details of Guarantor {data.id}</Typography>
                            <HeaderTitle name={"Guarantor Name"} />
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>

                                <Grid item xs={4} md={2}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel >Select</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Mr/Mrs">
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

                            <HeaderTitle name={"Guarantor Address"} />
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

                            <HeaderTitle name={"Work Status"} />
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>

                                <Grid item xs={8} md={6}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel >Select</InputLabel>
                                        <Select
                                            required
                                            fullWidth
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Work">
                                            {emp.map((mapname) =>
                                                <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}></Grid>
                            </Grid>

                            <HeaderTitle name={"Annual Income"} />
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>

                                <Grid item >
                                    <TextField
                                        required
                                        fullWidth
                                        label="Annual Income"
                                        id="outlined-start-adornment"
                                        // className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            {/* Business address */}
                            <HeaderTitle name={"Workspace Address"} />
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

                            <HeaderTitle name={"Information of share holding of a Credit Union"} />
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>

                                <Grid item >
                                    <TextField fullWidth color="primary" label="Member No." type="string" variant="outlined" />
                                </Grid>

                                <Grid item>
                                    <TextField color="primary" label="Amount of Shares" type="string" variant="outlined" />
                                </Grid>
                            </Grid>

                            <HeaderTitle name={"Signing Date"} />
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center" spacing={3}>
                                <Grid item >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        id="date"
                                        label="Signing Date"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </Grid>
                            </Grid>
                        </>

                    )}

                </form>
            </Container>
        </>
    );
}

export default GuarantorDetails;