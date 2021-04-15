import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(5),
        },
        field: {
            width: "200px"
        }
    },
    headtext: {
        border: "2px solid blue",
        padding: 10
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    btns: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    stepper: {
        padding: 20
    },
    stepperroot: {
        width: '100%',
    },
    containclass: {
        border: "3px solid blue",
        margin: "50px auto"
    },
}));

export default useStyles;