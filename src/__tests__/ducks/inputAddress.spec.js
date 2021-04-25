import {
    setAddress,
    clearAddress,
    inputAddressReducer,
} from '../../ducks/userInput/inputAddress';

describe('inputAddress Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setAddress should match the snapshot' , () => {
            expect(setAddress(mockObject)).toMatchSnapshot();
        });
        it('clearAddress should match the snapshot' , () => {
            expect(clearAddress()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(inputAddressReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(inputAddressReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(inputAddressReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(inputAddressReducer('', setAddress(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearAddress' , () => {
            expect(inputAddressReducer('', clearAddress())).toEqual("");
        });
    });
});