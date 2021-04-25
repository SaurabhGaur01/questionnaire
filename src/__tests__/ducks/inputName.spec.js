import {
    setName,
    clearName,
    inputNameReducer,
} from '../../ducks/userInput/inputName';

describe('inputName Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setName should match the snapshot' , () => {
            expect(setName(mockObject)).toMatchSnapshot();
        });
        it('clearName should match the snapshot' , () => {
            expect(clearName()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(inputNameReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(inputNameReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(inputNameReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(inputNameReducer('', setName(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearName' , () => {
            expect(inputNameReducer('', clearName())).toEqual("");
        });
    });
});