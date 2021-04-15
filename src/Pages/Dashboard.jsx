import { Container, Grid, Typography, CssBaseline } from "@material-ui/core";
import Navbar from "../Component/Helpers/Navbar";
import LoanRequest from "./Loanrequest";
import MediaCard from "../Component/Helpers/Cards";
import useStyle from "../Component/Styles/DashboardStyle";

function Dashboard() {
    const classes = useStyle();

    return (
        <>
            <Navbar />
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
                        <MediaCard link={"/loanrequest"} />
                    </Grid>

                    <Grid item alignItems="center">
                        <MediaCard />
                    </Grid>

                    <Grid item alignItems="center">
                        <MediaCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Dashboard;