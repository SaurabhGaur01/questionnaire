import handleReset from '../../thunks/handleReset';
import { clearAddress } from '../../ducks/userInput/inputAddress';
import { clearName } from '../../ducks/userInput/inputName';
import { clearOccupation } from '../../ducks/userInput/inputOccupation';
import { clearEmail } from '../../ducks/userInput/inputEmail';
import { clearChildren } from '../../ducks/userInput/inputChildren';
import { setChildrenNotPresent } from '../../ducks/userInput/hasChildren';
import { clearStepAsCompleted } from '../../ducks/completedSteps';
import { setActiveStep } from '../../ducks/activeStep';

let dispatch;

describe('The Thunk handleResult', () => {
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should clear all states stored', () => {
        handleReset() (dispatch);
        expect(dispatch).toHaveBeenCalledTimes(8);
        expect(dispatch).toHaveBeenNthCalledWith(1, clearAddress());
        expect(dispatch).toHaveBeenNthCalledWith(2, clearName());
        expect(dispatch).toHaveBeenNthCalledWith(3, clearOccupation());
        expect(dispatch).toHaveBeenNthCalledWith(4, clearEmail());
        expect(dispatch).toHaveBeenNthCalledWith(5, clearChildren());
        expect(dispatch).toHaveBeenNthCalledWith(6, setChildrenNotPresent());
        expect(dispatch).toHaveBeenNthCalledWith(7, clearStepAsCompleted());
        expect(dispatch).toHaveBeenNthCalledWith(8, setActiveStep(0));
    });
})
