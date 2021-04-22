// Personal Detail Form
import React, {useRef, useState} from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import GridContain from "../Helpers/GridContain";

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
    const [subject, setSubject] = useState({
        name : "",
        amount: null,
        time : null
    })
    const subjectname = (event) => {
        setSubject({...subject, name: event.target.value})
    }
    const subjectamount = (event) => {
        setSubject({...subject, amount: event.target.value})
    }
    const subjecttime = (event) => {
        setSubject({...subject, time: event.target.value})
    }

    const [namedetail, setNamedetail] = useState({
        tag: "",
        lastname: "",
        firstname:"",
        middlename:""
    })

    const namedetailtag= (event) =>{
        setNamedetail({...namedetail, tag: event.target.value})
    }

    const namedetaillname= (event) =>{
        setNamedetail({...namedetail, lastname: event.target.value})
    }

    const namedetailfname= (event) =>{
        setNamedetail({...namedetail, firstname: event.target.value})
    }
    const namedetailmname= (event) =>{
        setNamedetail({...namedetail, middlename: event.target.value})
    }

    const [contact, setContact] = useState({
        mob1:"",
        mob2:"",
        mail:""
    })

    const contactmob1 = (event) => {
        setContact({...contact , mob1: event.target.value})
    }

    const contactmob2 = (event) => {
        setContact({...contact , mob2: event.target.value})
    }

    const contactmail = (event) => {
        setContact({...contact , mail: event.target.value})
    }

    function handlesubmit(event){
        event.preventDefault();
    }


    const [resaddr, setresaddr] = useState(
        {
            addrline1: "",
            addrline2: "",
            city:"",
            country: "India",
            pincode: ""
        });
    const resaddrline1 = (event) => {
        setresaddr({...resaddr, addrline1: event.target.value})
    }
    const resaddrline2 = (event) => {
        setresaddr({...resaddr, addrline2: event.target.value})
    }
    const resaddrcity = (event) => {
        setresaddr({...resaddr, city: event.target.value})
    }
    const resaddrcountry = (event) => {
        setresaddr({...resaddr, country: event.target.value})
    }
    const resaddrpincode = (event) => {
        setresaddr({...resaddr, pincode: event.target.value})
    }

    const [busiaddr, setbusiaddr] = useState(
        {
            addrline1: "",
            addrline2: "",
            city:"",
            country: "India",
            pincode: ""
        });

    const busiaddrline1 = (event) => {
        setbusiaddr({...busiaddr, addrline1: event.target.value})
    }
    const busiaddrline2 = (event) => {
        setbusiaddr({...busiaddr, addrline2: event.target.value})
    }
    const busiaddrcity = (event) => {
        setbusiaddr({...busiaddr, city: event.target.value})
    }
    const busiaddrcountry = (event) => {
        setbusiaddr({...busiaddr, country: event.target.value})
    }
    const busiaddrpincode = (event) => {
        setbusiaddr({...busiaddr, pincode: event.target.value})
    }

    const [check ,setCheck] = useState(false);

    const [residence, setResidence] = useState("");
    const residencetype= (event) =>{
        setResidence(event.target.value);
    }

    const [dob, setDob] = useState({
        date: new Date(),
        age: null
    })
    const dobdate=(event)=>{
        setDob({...dob, date: event.target.value})
    }
    const dobage=(event)=>{
        setDob({...dob, age: event.target.value})
    }

    const [edu, setEdu] = useState( "" )
    const educ=(event)=>{
        setEdu(event.target.value)
    }

    const [number, setNumber] = useState({
        pan: null,
        aadhar3: null,
        aadhar6: null,
        aadhar9: null
    })

    const numberpan=(event)=>{
        setNumber({...number, pan : event.target.value})
    }

    const numberaadhar3=(event)=>{
        setNumber({...number, aadhar3 : event.target.value})
    }
    const numberaadhar6=(event)=>{
        setNumber({...number, aadhar6 : event.target.value})
    }
    const numberaadhar9=(event)=>{
        setNumber({...number, aadhar9 : event.target.value})
    }


    const [bankList, setBankList] = useState(
        [
            { BankName: "", BranchName: "", Years: null }
            ]);

    function handleChange(event, index) {
        const {inputname, value} = event.target;
        const list = [...bankList];
        list[index][inputname] = value;
        setBankList(list);
    }

    const handleRemove = (index) =>{
        const list = [...bankList];
        list.splice(index, 1);
        setBankList(list);
    }
    const handleAdd = () =>{
        setBankList([...bankList, {BankName: "", BranchName: "", Years: null}])
    }

    const [familyList, setFamilyList] = useState(
        [
            { Name: "", relation: "", Occupation: "", Age:null }
        ]);

    function familyChange(event, index) {
        const {inputname, value} = event.target;
        const list = [...familyList];
        list[index][inputname] = value;
        setFamilyList(list);
    }

    const familyRemove = (index) =>{
        const list = [...familyList];
        list.splice(index, 1);
        setFamilyList(list);
    }
    const familyAdd = () =>{
        setFamilyList([...familyList, {Name: "", relation: "", Occupation: "", Age: null}])
    }



    return (
        <>
            <Container className={classes.containclass} maxWidth={"md"} >
                <form className={classes.root} autoComplete="off" style={{ padding: "20px" }} >

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
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth
                                       color="primary"
                                       label="Subject of Loan"
                                       type="string"
                                       variant="outlined"
                                        value={subject.name}
                                        onChange={subjectname}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth
                                       color="primary"
                                       label="Amount"
                                       variant="outlined"
                                       value={subject.amount}
                                       onChange={subjectamount}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth color="primary" label="Time (yrs.)" type="number" variant="outlined"
                                       value={subject.time}
                                       onChange={subjecttime}/>
                        </Grid>

                        <Grid item xs={0} md={3}></Grid>
                        {console.log(subject.amount)}
                    </GridContain>
                    {/* subject end*/}

                    {/* name */}
                    <HeaderTitle name={"Name"} />
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel >Select </InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    label="Mr/Mrs"
                                value={namedetail.tag}
                                onChange={namedetailtag}>
                                    {name.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth required color="primary" label="Last Name" variant="outlined"
                                       value={namedetail.lastname}
                                       onChange={namedetaillname}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth required color="primary" label="First Name" variant="outlined"
                                       value={namedetail.firstname}
                                       onChange={namedetailfname}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth required color="primary" label="Middle Name" variant="outlined"
                                       value={namedetail.middlename}
                                       onChange={namedetailmname}/>
                        </Grid>
                    </GridContain>
                    {/* name */}

                    {/* contact detail */}
                    <HeaderTitle name={"Contact"} />
                    <GridContain>
                        <Grid item xs={12} md={3}>
                            <TextField
                                required
                                fullWidth
                                label="Mobile Number 1"
                                id="outlined-start-adornment"
                                value={contact.mob1}
                                onChange={contactmob1}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="Mobile Number 2"
                                id="outlined-start-adornment"
                                // className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                                variant="outlined"
                                value={contact.mob2}
                                onChange={contactmob1}
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                required color="primary" label="Email" variant="outlined" type="email"
                                value={contact.mail}
                                onChange={contactmail}/>
                        </Grid>

                        <Grid item xs={0} md={3}>

                        </Grid>

                    </GridContain>
                    {/* contact detail */}

                    {/* Business address */}
                    <HeaderTitle name={"Business Address"} />
                    <GridContain>

                        <Grid item xs={12}>
                            <TextField fullWidth color="primary" label="Address Line 1" type="string" variant="outlined"
                            value={busiaddr.addrline1}
                            onChange={busiaddrline1}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth color="primary" label="Address Line 2" type="string" variant="outlined"
                                       value={busiaddr.addrline2}
                                       onChange={busiaddrline2}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth color="primary" label="City" type="string" variant="outlined"
                                       value={busiaddr.city}
                                       onChange={busiaddrcity}/>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth required color="primary" label="Country" variant="outlined"
                                       value={busiaddr.country}
                                       onChange={busiaddrcountry}
                            />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth required color="primary" label="Pincode" variant="outlined"
                                       value={busiaddr.pincode}
                                       onChange={busiaddrpincode}/>
                        </Grid>

                    </GridContain>

                    {/* Home address */}
                    <HeaderTitle name={"Residence Address"} />

                    <GridContain>
                        <>
                        <Grid item xs={12}><Checkbox color="primary" value={check} onClick={() => setCheck(!check)}/> {check} Same as Business Address</Grid>

                        { check === true ?
                            <>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="primary" label="Address Line 1" type="string" variant="outlined"
                                               value={busiaddr.addrline1}
                                               onChange={resaddrline1}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth color="primary" label="Address Line 2" type="string" variant="outlined"
                                               value={busiaddr.addrline2}
                                               onChange={resaddrline2}/>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth color="primary" label="City" type="string" variant="outlined"
                                               value={ busiaddr.city}
                                               onChange={resaddrcity}/>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth required color="primary" label="Country" variant="outlined"
                                               value={busiaddr.country}
                                               onChange={resaddrcountry}
                                    />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth required color="primary" label="Pincode" variant="outlined"
                                               value={busiaddr.pincode}
                                               onChange={resaddrpincode}/>
                                </Grid>

                            </>
                            :
                            <>
                                <Grid item xs={12}>
                            <TextField fullWidth color="primary" label="Address Line 1" type="string" variant="outlined"
                            value={resaddr.addrline1}
                            onChange={resaddrline1}/>
                        </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth color="primary" label="Address Line 2" type="string" variant="outlined"
                                           value={resaddr.addrline2}
                                           onChange={resaddrline2}/>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <TextField fullWidth color="primary" label="City" type="string" variant="outlined" value={resaddr.city}
                                           onChange={resaddrcity}/>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <TextField fullWidth required color="primary" label="Country" variant="outlined"
                                           value={resaddr.country}
                                           onChange={resaddrcountry}/>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <TextField fullWidth required color="primary" label="Pincode" variant="outlined"
                                           value={resaddr.pincode}
                                           onChange={resaddrpincode}/>
                            </Grid>

                            </>}
                        </>


                    </GridContain>

                    {/* status home */}
                    <HeaderTitle name={"Residence"} />
                    <GridContain>
                        <Grid item xs={12} md={3}>
                            <FormControl variant="outlined" required fullWidth>
                                <InputLabel >Residence</InputLabel>
                                <Select
                                    fullWidth
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Residence">
                                    {Residence.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </GridContain>


                    {/* date of birth */}
                    <HeaderTitle name={"Date of Birth"} />
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="date"
                                label="Date of Birth"
                                type="date"
                                value={dob.date}
                                onChange={dobdate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Age"
                                type="Number"
                                value={dob.age}
                                onChange={dobage}
                            />
                        </Grid>
                    </GridContain>

                    {/* education */}
                    <HeaderTitle name={"Education"} />
                    <GridContain>
                        <Grid item xs={12} md={3}>
                            <FormControl variant="outlined" required fullWidth={4}>
                                <InputLabel >Education</InputLabel>
                                <Select
                                    fullWidth
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Education"
                                    value={edu}
                                    onChange={educ}
                                >
                                    {Education.map((mapname) =>
                                        <MenuItem value={mapname.name}>{mapname.name}</MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                        </Grid>
                    </GridContain>

                    {/* subject */}
                    <HeaderTitle name={"Pan Details"} />
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                autoCapitalize
                                type="string"
                                label="Pan Number"
                                id="outlined-start-adornment"
                                variant="outlined"
                                value={number.pan}
                                onChange={numberpan}
                            />
                        </Grid>

                    </GridContain>
                    {/* subject end*/}

                    <HeaderTitle name={"Aadhar Details"} />
                    <GridContain>

                        <Grid item xs={4} md={3}>
                            <TextField
                                label="4 Digit"
                                id="outlined-start-adornment"
                                variant="outlined"
                                value={number.aadhar3}
                                onChange={numberaadhar3}/>
                        </Grid>
                        <Grid item xs={4} md={3}>
                            <TextField
                                label="4 Digit"
                                id="outlined-start-adornment"
                                variant="outlined"
                                value={number.aadhar6}
                                onChange={numberaadhar6}/>
                        </Grid>
                        <Grid item xs={4} md={3}>
                            <TextField
                                label="4 Digit"
                                id="outlined-start-adornment"
                                variant="outlined"
                                value={number.aadhar9}
                                onChange={numberaadhar9}/>
                        </Grid>
                    </GridContain>


                    <HeaderTitle name={"Dependant Family Members"} />
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Children's"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Children's</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Salaried"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Salaried</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Total Member's"
                                id="outlined-start-adornment"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Total</InputAdornment>,
                                }}
                                variant="outlined" />
                        </Grid>

                    </GridContain>

                    <HeaderTitle name={"Existing Bank Account's"} />
                    <GridContain>

                        {/*bank details*/}

                        <Grid item xs={2}>
                            <Fab size="small" color="primary" aria-label="add"
                                 onClick={handleAdd}>
                                <AddIcon/>
                            </Fab>

                        </Grid>
                    </GridContain>

                    {bankList.map((field, idx) => {
                        return (
                            <div >
                                <GridContain>
                                    {/*map from here*/}

                                    <Grid item xs={12} md={3}>
                                        <TextField fullWidth color="primary" label="Bank Name" type="string" variant="outlined"
                                                   value={field.BankName}
                                                   onChange={event => handleChange(event, idx)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextField fullWidth color="primary" label="Branch Name" type="string" variant="outlined"
                                                   value={field.BranchName}
                                                   onChange={event => handleChange(event, idx)}/>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextField fullWidth type="numbers" color="primary" label="Years" type="string" variant="outlined"
                                                   value={field.Years}
                                                   onChange={event => handleChange(event, idx)}/>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <Fab size="small" color="secondary" aria-label="add" onClick={() => handleRemove(idx)}>
                                            <DeleteIcon />
                                        </Fab>
                                    </Grid>
                                    {/*    map ends here*/}
                                </GridContain>
                            </div>
                        );
                    })}



                    <HeaderTitle name={"Information of share holding of a Credit Union"} />
                    <GridContain>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth color="primary" label="Member No." type="string" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <TextField fullWidth color="primary" label="Amount of Shares" type="string" variant="outlined" />
                        </Grid>
                    </GridContain>

                    <HeaderTitle name={"Family Member details"} />
                    <GridContain>

                        {/*bank details*/}
                        <Grid item xs={2}>
                            <Fab size="small" color="primary" aria-label="add" onClick={familyAdd}>
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </GridContain>

                    {familyList.map ( (field, idx) =>{
                        return(
                            <GridContain>
                                {/*map from here*/}
                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth color="primary" label="Name" type="string" variant="outlined"
                                    value={field.Name} onChange={ (event => familyChange(event, idx))}/>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth type="numbers" color="primary" label="Relation" type="string" variant="outlined"
                                               value={field.relation} onChange={ (event => familyChange(event, idx))}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField fullWidth type="numbers" color="primary" label="Occupation" type="string" variant="outlined"
                                               value={field.Occupation} onChange={ (event => familyChange(event, idx))}/>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextField fullWidth color="primary" label="Age" type="string" variant="outlined"
                                               value={field.Age} onChange={(event => familyChange(event, idx))}/>
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    <Fab size="small" color="secondary" aria-label="add" onClick={() => familyRemove(idx)}>
                                        <DeleteIcon />
                                    </Fab>
                                </Grid>
                                {/*    map ends here*/}
                            </GridContain>
                        )
                    })}

                </form>

            </Container>
        </>
    );
}

export default PersonalDetails;