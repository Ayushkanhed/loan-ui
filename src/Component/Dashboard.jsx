import {Container, Grid, Typography, CssBaseline} from "@material-ui/core";
import Navbar from "./Styles/Navbar";
import LoanRequest from "./Forms/Loanrequest";
import MediaCard from "./Cards";
import useStyle from "./Styles/DashboardStyle";

function Dashboard(){
    const classes = useStyle();

    return(
        <>
        <Navbar/>
        <Container maxWidth="xl">
            <Grid container justify="center" className={classes.margin}>
                <Typography variant="h4" >Bank Name - API</Typography>
            </Grid>
            <Grid container
                  alignItems="center"
                  direction="row"
                  justify="center"
                  spacing={3}
                  className={classes.margin}
                  >
                <Grid item alignItems="center">
                    <MediaCard link={"/loanrequest"}/>
                </Grid>

                <Grid item alignItems="center">
                    <MediaCard/>
                </Grid>

                <Grid item alignItems="center">
                    <MediaCard/>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Dashboard;