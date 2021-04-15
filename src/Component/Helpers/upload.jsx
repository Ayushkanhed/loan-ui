import { Button, Container, Grid, Typography } from "@material-ui/core";


function Upload(props) {
    return (
        <>
            <Grid container direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" >{props.desc}</Typography>

                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary"> Upload</Button>
                </Grid>
            </Grid>

        </>
    )
}

export default Upload;