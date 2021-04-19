import Navbar from '../Component/Helpers/Navbar'
import HorizontalLabelPositionBelowStepper from '../Component/Forms/HorizontalStepper'
import HorizontalNonLinearStepper from '../Component/Forms/StepperClick';
import CustomStepper from "../Component/Forms/CustomStepper";
import {Container} from "@material-ui/core";
function LoanRequest() {
    return (
        <>
            <Navbar />
            <HorizontalNonLinearStepper />
        </>
    )
}

export default LoanRequest;