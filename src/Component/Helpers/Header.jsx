import { Button, Container, Grid, Typography } from "@material-ui/core";

function HeaderTitle(props) {
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" spacing={3}>
            <Typography variant="h6" align="left">{props.name}</Typography>
        </Grid>
    );
}

export default HeaderTitle;