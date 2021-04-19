import Button from "@material-ui/core/Button";
import {Container, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "../Styles/FormStyle";
const data =[{name:'Your Personal Details'},{name: 'Business Details'},{name:'Loan details'},{name:"Guarante Details"},{name:'Documents Upload'}]
function CustomStepper(){
    const classes = useStyles();
    return(
        <>
            <Container maxWidth={"md"} className={classes.btns}>
        <Grid container direction="row" justify={"center"} spacing={2}>
            {data.map( (data)=>
                <Grid xs={2}>
                    <Button color="primary" variant="contained" size="small">1</Button>
                    <Typography variant="subtitle1">{data.name}</Typography>
                </Grid>
            )}
            </Grid>
            </Container>
        </>
    )
}

export default CustomStepper;