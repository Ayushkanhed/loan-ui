// Personal Detail Form
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Grid, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
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

const LoanRepay = [
    { name: "Salary Deduction Guarantee" },
    { name: "Daily Deduction Type" },
    { name: "Monthly Deduction Type" }
]


function LoanDetails() {
    const classes = useStyles();
    const [bank, setbank] = useState();
    return (
        <>
            <Container className={classes.containclass} maxWidth={"md"}>
                <form className={classes.root} autoComplete="off" style={{ padding: "20px" }}>

                    {/* main heading */}
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" spacing={3}>
                        <Typography variant="h5" className={classes.headtext}>Loan Details</Typography>
                    </Grid>
                    {/* main heading */}

                    {/* subject */}
                    <HeaderTitle name={"Previous Loan Details taken from BankName"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item>
                            <TextField
                                required
                                label="Total Loans"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Number</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    {/*map number*/}
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item md={6}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="date"
                                label="Date of Borrowing Loan"
                                type="date"
                                defaultValue=""
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                required
                                fullWidth
                                label="Loan Amount"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Loan Repayment Information"
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>


                    <HeaderTitle name={"Loan Repayment Details"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item xs={12} md={8}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>Select Type</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Loan Repayment"
                                >{LoanRepay.map((mapname) =>
                                    <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                label="Daily Deduction Amount"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                fullWidth
                                label="Monthly Deduction Amount"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <HeaderTitle name={"if Recommendation by Director/Distinguished Person"} />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center" spacing={3}>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                color="primary" label="Name" type="string" variant="outlined" />
                        </Grid>
                    </Grid>

                    {/* subject end*/}
                </form>
            </Container>
        </>
    );
}

export default LoanDetails;