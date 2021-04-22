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
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import GridContain from "../Helpers/GridContain";

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
    { name: "Worker" },
    { name: "Other" }
]

const business = [
    { name: "Owned" },
    { name: "Partnership" },
    { name: "Other" }
]

const offdetail = [
    { name: "Owned" },
    { name: "On Rent" }
]

const income = [
    { name: "Salary / Business Income" },
    { name: "Other Income" },
    { name: "Income from Children" },
    { name: "Total Annual Income" },
]

const year = [ {id: 2000},{id: 2001},{id: 2002},{id: 2003},{id: 2004},{id: 2005},{id: 2006},
                {id: 2007},{id: 2008},{id: 2009},{id: 2010},{id: 2011},{id: 2012},{id: 2013},
    {id: 2014},{id: 2015},{id: 2016},{id: 2017},{id: 2018},{id: 2019},{id: 2020},{id: 2021}]

function BusinessDetails() {
    const classes = useStyles();
    const [work, setWork] = useState("");
    const [expr, setExpr] = useState(null);
    const [jobvalue, setJobvalue] = useState(
        {
            retyr: null,
            type: "",
            position: "",
            addrline1: "",
            addrline2: "",
            city:"",
            country: "India",
            pincode: ""
        });
    const [BusinessDetail, setBusinessDetail] = useState({
        Ownership: "",
        workspace: "",
        rentyrs: null
    });

    const [incomeList, setIncomeList] = useState(
        [
            { Income: null, OtherIncome: null, fromchild: null, Total:null }
        ]);

    function incomeChange(event, index) {
        const {inputname, value} = event.target;
        const list = [...incomeList];
        list[index][inputname] = value;
        setIncomeList(list);
    }

    const familyRemove = (index) =>{
        const list = [...incomeList];
        list.splice(index, 1);
        setIncomeList(list);
    }
    const familyAdd = () =>{
        setIncomeList([...incomeList, {Income: null, OtherIncome: null, fromchild: null, Total:null}])
    }


    return (
        <>
            <Container className={classes.containclass} maxWidth={"md"}>
                <form className={classes.root} autoComplete="off" style={{ padding: "20px" }}>

                    {/* main heading */}
                    <Grid  container
                           direction="row"
                           justify="center"
                           alignItems="center" spacing={3}>
                        <Typography variant="h5" className={classes.headtext}>Business Details</Typography>
                    </Grid>
                    {/* main heading */}

                    {/* Work status */}
                    <HeaderTitle name={"Work Status"} />
                    <GridContain>
                        <Grid item xs={12} md={3}>
                            <FormControl
                                variant="outlined"
                                fullWidth
                                required>
                                <InputLabel >Select</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    label="Work"
                                    value={work}
                                    onChange={ (e)=> setWork(e.target.value)}
                                >
                                    {emp.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                    </GridContain>


                    {/* Business Expr */}
                    <HeaderTitle name={"Experience in "+work} />
                    <GridContain>
                        <Grid item xs={12} md={3}>
                            <TextField
                                required
                                type="number"
                                color="primary"
                                label="Experience"
                                variant="outlined"
                            value={expr}
                            onChange={ (event => setExpr(event.target.value))}/>
                        </Grid>
                    </GridContain>


                    {/* Retirement Job */}
                    { work === "Job" ?
                        <>
                            <HeaderTitle name={"Time left for Retirement"} />
                            <GridContain>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        required
                                        label="Years Left"
                                        id="outlined-start-adornment"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Years</InputAdornment>,
                                        }}
                                        variant="outlined"
                                        value={jobvalue.retyr}
                                        onChange={ (event => setJobvalue({...jobvalue, retyr: event.target.value}))}/>
                                </Grid>
                            </GridContain>

                            {/* Job Details */}
                            <HeaderTitle name={"JOB Details"} />
                            <GridContain>
                                <Grid item xs={12} md={3}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel>Job Status</InputLabel>
                                        <Select
                                            fullWidth
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Job Type"
                                            value={jobvalue.type}
                                            onChange={ (event => setJobvalue({...jobvalue, type: event.target.value}))}>
                                            {job.map((mapname) =>
                                                <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={0} md={9}></Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel >Position</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-outlined-label"
                                            // id="demo-simple-select-outlined"
                                            label="Job Type"
                                            value={jobvalue.position}
                                            onChange={ (event => setJobvalue({...jobvalue, position: event.target.value})) }
                                        >
                                            {jobtitle.map((mapname) =>
                                                <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {
                                    jobvalue.position ==="Other" ? <Grid item xs={12} md={3}>
                                        <TextField fullWidth color="primary" label="Other Jobtitle" type="string"
                                                   variant="outlined" />
                                    </Grid> : <></>
                                }

                                <Grid item xs={12}>
                                    <TextField fullWidth color="primary" label="Job Location Details" type="string"
                                               variant="outlined"
                                            value={jobvalue.addrline1}
                                            onChange={ (event => setJobvalue({...jobvalue, addrline1: event.target.value}))}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="primary" label="Job Location Details" type="string"
                                                variant="outlined"
                                                value={jobvalue.addrline2}
                                                onChange={ (event => setJobvalue({...jobvalue, addrline2: event.target.value}))}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                            color="primary"
                                            label="City"
                                            type="string"
                                            variant="outlined"
                                            value={jobvalue.city}
                                            onChange={ (event => setJobvalue({...jobvalue, city: event.target.value}))}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField required color="primary" label="Country" variant="outlined"
                                        value={jobvalue.country}
                                        onChange={ (event => setJobvalue({...jobvalue, country: event.target.value}))}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField required color="primary" label="Pincode" variant="outlined"
                                               value={jobvalue.pincode}
                                               onChange={ (event => setJobvalue({...jobvalue, pincode: event.target.value}))}/>
                                </Grid>
                            </GridContain>
                        </> : (work==="Business" || work==="Industry" ? <>
                            <HeaderTitle name={"Business/Industry Details"} />
                            <GridContain>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel >Owenership</InputLabel>
                                        <Select
                                            fullWidth
                                            label="Job Type"
                                        value={BusinessDetail.Ownership}
                                        onChange={ (event => setBusinessDetail({...BusinessDetail, Ownership: event.target.value}))}>
                                            {business.map((mapname) =>
                                                <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={0} md={6}></Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" fullWidth required>
                                        <InputLabel >Business Workspace</InputLabel>
                                        <Select
                                            fullWidth
                                            label="Workspace"
                                            value={BusinessDetail.workspace}
                                            onChange={ (event => setBusinessDetail({...BusinessDetail, workspace: event.target.value}))}>
                                            {offdetail.map((mapname) =>
                                                <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={0} md={6}></Grid>
                                {BusinessDetail.workspace === "On Rent" ? <>
                                    <Grid item xs={12} md={3}>
                                        <TextField
                                            fullWidth
                                            color="primary"
                                            label="Rent Years"
                                            variant="outlined"
                                            value={BusinessDetail.rentyrs}
                                            onChange={ (event => setBusinessDetail({...BusinessDetail, rentyrs: event.target.value}))}
                                        />
                                    </Grid>
                                </>:null}
                            </GridContain>
                        </>:<></>)
                    }


                    {/*Business*/}


                    <HeaderTitle name={"Details of Income"} />
                    <GridContain>
                        <Grid item xs={12}>
                            <Fab size="small" color="primary" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </Grid>
                        {income.map((name) =>
                            <>

                                <Grid item sm={3}>
                                    <HeaderTitle name={name.name} />
                                </Grid>
                            </>
                        )}

                        <Grid item xs={12} md={3} className={classes.field}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Year of Loan</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    // id="demo-simple-select-outlined"
                                    label="Year of Loan">
                                    {year.map((mapname) =>
                                        <MenuItem value={mapname.id}>{mapname.id}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <GridContain>
                        {income.map((name) =>
                            <>
                                <Grid item sm={3} className={classes.fieldmargin}>
                                    <TextField color="primary"
                                               label="Last Year's Income"
                                               id="outlined-start-adornment"
                                               InputProps={{
                                                   startAdornment: <InputAdornment
                                                       position="start">RS.</InputAdornment>,
                                               }} variant="outlined" />

                                    <TextField className={classes.fieldmargin}
                                                color="primary"
                                               label="Current Year's Income"
                                               id="outlined-start-adornment"
                                               InputProps={{
                                                   startAdornment: <InputAdornment
                                                       position="start">RS.</InputAdornment>,
                                               }} variant="outlined" />

                                </Grid>
                            </>
                        )}
                            </GridContain>
                        <Grid item xs={12}>
                            <Fab size="small" color="secondary" aria-label="add" >
                                <DeleteIcon />
                            </Fab>
                        </Grid>
                    </GridContain>
                </form>

            </Container>
        </>
    );
}

export default BusinessDetails;