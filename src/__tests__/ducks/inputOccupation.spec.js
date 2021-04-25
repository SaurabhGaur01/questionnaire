import {
    setOccupation,
    clearOccupation,
    inputOccupationReducer,
} from '../../ducks/userInput/inputOccupation';

describe('inputOccupation Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setOccupation should match the snapshot' , () => {
            expect(setOccupation(mockObject)).toMatchSnapshot();
        });
        it('clearOccupation should match the snapshot' , () => {
            expect(clearOccupation()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(inputOccupationReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(inputOccupationReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(inputOccupationReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(inputOccupationReducer('', setOccupation(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearOccupation' , () => {
            expect(inputOccupationReducer('', clearOccupation())).toEqual("");
        });
    });
});