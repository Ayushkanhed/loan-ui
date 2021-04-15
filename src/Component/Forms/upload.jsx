import { Button, Container, Grid, Typography } from "@material-ui/core";


function Upload(props) {
    return (
        <>
            <Grid container direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={4}>
                    <Typography variant="p" >{props.desc}</Typography>
                </Grid>

                <Grid item xs={8}>
                    <Button variant="contained" color="primary"> Upload</Button>
                </Grid>
            </Grid>

        </>
    )
}

export default Upload;