import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles( (theme) => (
    {
        margin: {
            marginTop: theme.spacing(10),
        },
        marginform: {
            marginTop: theme.spacing(4),
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        }
    }
));

export default useStyle;