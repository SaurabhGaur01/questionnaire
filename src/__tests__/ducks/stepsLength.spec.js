import {
    setStepsLength,
    stepsLengthReducer
} from '../../ducks/stepsLength';

describe('stepsLength Duck Tests', () => {
    const mockState = 1;

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setStepsLength should match the snapshot' , () => {
            expect(setStepsLength()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(stepsLengthReducer()).toEqual(0);
        });
        it('should return the passed state if called with no action' , () => {
            expect(stepsLengthReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(stepsLengthReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value which is passed' , () => {
            expect(stepsLengthReducer('', setStepsLength()))
            .toEqual(5);
        });
    });

})