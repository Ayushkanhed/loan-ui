// Personal Detail Form
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

const Education = [
    { name: "Graduate" },
    { name: "Diploma" },
    { name: "10th/12th or Below" }
]

const job = [
    { name: "Government/Semi-Government" },
    { name: "Private" },
]

const jobtitle = [
    { name: "Executive Officer" },
    { name: "Supervisor" },
    {name: "Worker"},
    {name: "Other"}
]

const business = [
    { name: "Owned" },
    { name: "Partnership" },
    {name: "Other"}
]

const offdetail=[
    { name: "Owned" },
    { name: "On Rent" }
]

const income=[
    { name: "Salary / Business Income" },
    { name: "Other Income" },
    { name: "Income of Son" },
    { name: "Total Annual Income" },
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
    headtext: {
        border: "1px solid blue",
        padding: 10
    }
}));

function BusinessDetails() {
    const classes = useStyles();
    const [bank, setbank] = useState();
    return (
        <>
            <Container maxWidth={"md"} style={{ border: "1px solid blue", margin: "50px auto" }}>
                <form className={classes.root} autoComplete="off" style={{ padding: "20px" }}>

                    {/* main heading */}
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" spacing={3}>
                        <Typography variant="h5" className={classes.headtext}>Business Details</Typography>
                    </Grid>
                    {/* main heading */}

                    {/* subject */}
                    <HeaderTitle name={"Work Status"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={8}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Select</InputLabel>
                                <Select
                                    required
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
                    {/* subject end*/}

                    {/* name */}
                    <HeaderTitle name={"Experience in "} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={8}>
                            <TextField required type="number" color="primary" label="Experience(if busi)" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                    {/* name */}

                    {/* contact detail */}
                    <HeaderTitle name={"Time left for Retirement(if job)"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item>
                            <TextField
                                required
                                label="Years Left"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Years</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    {/* contact detail */}

                    {/* Business address */}
                    <HeaderTitle name={"if job -- JOB Details"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>

                        <Grid item xs={8}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Job Status</InputLabel>
                                <Select
                                    fullWidth
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Job Type">
                                    {job.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}></Grid>


                        <Grid item xs={8}>
                            <TextField fullWidth color="primary" label="Job Location Details" type="string" variant="outlined" />
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

                        <Grid item xs={8}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Job Title Status</InputLabel>
                                <Select
                                    required
                                    fullWidth
                                    variant="outlined"
                                    label="Job Type">
                                    {jobtitle.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>


                    <HeaderTitle name={"if business-- Business/Industry Details"} />
                    <Grid container
                          direction="row"
                          justify="flex-start"
                          alignItems="center" spacing={3}>

                        <Grid item xs={8}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Details of Owenership</InputLabel>
                                <Select
                                    fullWidth
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Job Type">
                                    {business.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={8}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Details of Business Workspace</InputLabel>
                                <Select
                                    fullWidth
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="WorkSpace">
                                    {offdetail.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={8}>
                            <TextField fullWidth color="primary" label="if rent- Years" type="string" variant="outlined" />
                        </Grid>
                    </Grid>

                    <HeaderTitle name={"Details of Income"} />
                    <Grid container
                          direction="row"
                          justify="flex-start"
                          alignItems="center" spacing={3}>

                        {income.map( (name) =>
                            <>
                            <Grid item sm={4}>
                                <TextField
                                    disabled
                                    id="outlined-read-only-input"
                                    defaultValue={name.name}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={4}>
                                <TextField color="primary"
                                label="Last Year's Income"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">RS.</InputAdornment>,
                                    }} variant="outlined" />
                            </Grid>
                            <Grid item sm={4}>
                            <TextField color="primary"
                            label="Current Year's Income"
                            id="outlined-start-adornment"
                            InputProps={{
                            startAdornment: <InputAdornment position="start">RS.</InputAdornment>,
                        }} variant="outlined" />
                            </Grid>
                            </>
                        )}

                    </Grid>


                </form>

            </Container>
        </>
    );
}

export default BusinessDetails;