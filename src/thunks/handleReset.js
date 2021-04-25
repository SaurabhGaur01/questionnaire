import { clearAddress } from '../ducks/userInput/inputAddress';
import { clearName } from '../ducks/userInput/inputName';
import { clearOccupation } from '../ducks/userInput/inputOccupation';
import { clearEmail } from '../ducks/userInput/inputEmail';
import { clearChildren } from '../ducks/userInput/inputChildren';
import { setChildrenNotPresent } from '../ducks/userInput/hasChildren';
import { clearStepAsCompleted } from '../ducks/completedSteps';
import { setActiveStep } from '../ducks/activeStep';

const handleReset = () => (dispatch) => {
    dispatch(clearAddress());
    dispatch(clearName());
    dispatch(clearOccupation());
    dispatch(clearEmail());
    dispatch(clearChildren());
    dispatch(setChildrenNotPresent());
    dispatch(clearStepAsCompleted());
    dispatch(setActiveStep(0));
};

export default handleReset;