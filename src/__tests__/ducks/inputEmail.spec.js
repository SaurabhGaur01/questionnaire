import {
    setEmail,
    clearEmail,
    inputEmailReducer,
} from '../../ducks/userInput/inputEmail';

describe('inputEmail Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setEmail should match the snapshot' , () => {
            expect(setEmail(mockObject)).toMatchSnapshot();
        });
        it('clearEmail should match the snapshot' , () => {
            expect(clearEmail()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(inputEmailReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(inputEmailReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(inputEmailReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(inputEmailReducer('', setEmail(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearEmail' , () => {
            expect(inputEmailReducer('', clearEmail())).toEqual("");
        });
    });
});