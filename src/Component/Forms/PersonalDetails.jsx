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

const name = [
    { name: "Mr" },
    { name: "Mrs" }
]

const Residence = [
    { name: "Self-Owned (No Mortgages Anywhere)" },
    { name: "Self-Owned (Mortgaged)" },
    { name: "On Rent" }
]

const Education = [
    { name: "Graduate" },
    { name: "Diploma" },
    { name: "10th/12th or Below" }
]


function PersonalDetails() {
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
                        <Typography variant="h5" className={classes.headtext}>Personal Details</Typography>
                    </Grid>
                    {/* main heading */}

                    {/* subject */}
                    <HeaderTitle name={"Subject"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item>
                            <TextField color="primary" label="Subject of Loan" type="string" variant="outlined" />
                        </Grid>

                        <Grid item >
                            <TextField color="primary" label="Amount" variant="outlined" />
                        </Grid>

                        <Grid item >
                            <TextField color="primary" label="Time (yrs.)" type="number" variant="outlined" />
                        </Grid>
                    </Grid>
                    {/* subject end*/}

                    {/* name */}
                    <HeaderTitle name={"Name"} />
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

                    {/* status home */}
                    <HeaderTitle name={"Residence"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item xs={12} md={8}>
                            <FormControl variant="outlined" required fullWidth>
                                <InputLabel >Residence</InputLabel>
                                <Select
                                    required
                                    labelWidth
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Residence">
                                    {Residence.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>


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
                        <Grid item xs={12} md={8}>
                            <FormControl variant="outlined" required fullWidth={4}>
                                <InputLabel >Education</InputLabel>
                                <Select
                                    required
                                    labelWidth
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Education"
                                >

                                    {Education.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* subject */}
                    <HeaderTitle name={"Pan Details"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={12} md={8}>
                            <TextField
                                autoCapitalize
                                type="string"
                                label="Pan Number"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">10 Character</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>
                    {/* subject end*/}

                    <HeaderTitle name={"Aadhar Details"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={12} md={8}>
                            <TextField
                                type="number"
                                label="Aadhar Number"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">12 Digit</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>
                    </Grid>


                    <HeaderTitle name={"Dependant Family Members"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={12} md={8}>
                            <TextField
                                type="number"
                                label="Children's"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Children's</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <TextField
                                type="number"
                                label="Salaried Members"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Salaried Member's</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <TextField
                                type="number"
                                label="Total Member's"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Total</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                    </Grid>

                    <HeaderTitle name={"Existing Bank Account's"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        {/*bank details*/}

                        <Grid item xs={5} md={3}>
                            <TextField
                                type="number"
                                label="Total Banks"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Number</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={7} md={9}>
                        </Grid>

                    </Grid>

                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        {/*map from here*/}
                        <Grid item xs={12} md={1}>
                            <TextField
                                type="number"
                                label="Sr.No"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField fullWidth color="primary" label="Bank Name" type="string" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth color="primary" label="Branch Name" type="string" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField fullWidth type="numbers" color="primary" label="Years" type="string" variant="outlined" />
                        </Grid>
                        {/*    map ends here*/}
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

                    <HeaderTitle name={"Family Member details"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        {/*bank details*/}

                        <Grid item xs={5} md={3}>
                            <TextField
                                type="number"
                                label="Total Members"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Number</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={7} md={9}>
                        </Grid>

                    </Grid>

                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        {/*map from here*/}
                        <Grid item xs={12} md={1}>
                            <TextField
                                type="number"
                                label="Sr.No"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField fullWidth color="primary" label="Name" type="string" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField fullWidth color="primary" label="Age" type="string" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField fullWidth type="numbers" color="primary" label="Relation" type="string" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField fullWidth type="numbers" color="primary" label="Occupation" type="string" variant="outlined" />
                        </Grid>
                        {/*    map ends here*/}
                    </Grid>


                </form>

            </Container>
        </>
    );
}

export default PersonalDetails;