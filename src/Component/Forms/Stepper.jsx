import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalDetails from "./PersonalDetails";
import { Container, Grid } from '@material-ui/core';
import BusinessDetails from "./BusinessDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
    }
}));

function getSteps() {
    return ['Your Personal Details', 'Business Details', 'Loan details', "Guarante Details", 'Documents Upload'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<PersonalDetails />);
        case 1:
            return (<BusinessDetails />);
        case 2:
            return (<PersonalDetails />);
        case 3:
            return (<PersonalDetails />);
        case 4:
            return (<PersonalDetails />);
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Container maxWidth={"md"} justify="center" alignItems="center">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Container>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <Grid container justify="center" alignItems="center">
                        <div >
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div className={classes.btns}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}>
                                    Back
                            </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    </Grid>
                )}
            </div>
        </div>
    );
}
