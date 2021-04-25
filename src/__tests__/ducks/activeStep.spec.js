import {
    setActiveStep,
    activeStepReducer
} from '../../ducks/activeStep';

describe('activeStep Duck Tests', () => {
    const mockState = 1;

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setActiveStep should match the snapshot' , () => {
            expect(setActiveStep(mockState)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(activeStepReducer()).toEqual(0);
        });
        it('should return the passed state if called with no action' , () => {
            expect(activeStepReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(activeStepReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value which is passed' , () => {
            expect(activeStepReducer('', setActiveStep(mockState)))
            .toEqual(mockState);
        });
    });

})