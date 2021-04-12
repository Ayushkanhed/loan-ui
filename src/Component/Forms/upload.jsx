import { Button, Container, Grid, Typography } from "@material-ui/core";


function Upload(props) {
    return (
        <>
            <Grid container direction="row"
                justify="flex-start"
                alignItems="center">

                <Grid item>
                    <Button variant="contained" color="primary"> Upload</Button>
                </Grid>
                <Grid item>
                    <Typography variant="p" align="left">{props.desc}</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Upload;