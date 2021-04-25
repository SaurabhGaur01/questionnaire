import {
    setStepAsCompleted,
    clearStepAsCompleted,
    completedStepsReducer,
} from '../../ducks/completedSteps';

const mockObject = {
    mockVariable: 'mockValue',
};

describe('completedSteps Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setStepAsCompleted should match the snapshot' , () => {
            expect(setStepAsCompleted(mockObject)).toMatchSnapshot();
        });
        it('clearStepAsCompleted should match the snapshot' , () => {
            expect(clearStepAsCompleted()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(completedStepsReducer()).toEqual({});
        });
        it('should return the passed state if called with no action' , () => {
            expect(completedStepsReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(completedStepsReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(completedStepsReducer('', setStepAsCompleted(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearStepAsCompleted' , () => {
            expect(completedStepsReducer(mockObject, clearStepAsCompleted())).toEqual({});
        });
    });
});