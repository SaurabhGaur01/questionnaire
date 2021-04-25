import {
    setChildrenPresent,
    setChildrenNotPresent,
    hasChildrenReducer,
} from '../../ducks/userInput/hasChildren';

describe('hasChildren Duck Tests', () => {
    const mockObject = "mockValue";

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setChildrenNotPresent should match the snapshot' , () => {
            expect(setChildrenNotPresent()).toMatchSnapshot();
        });
        it('setChildrenPresent should match the snapshot' , () => {
            expect(setChildrenPresent(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(hasChildrenReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(hasChildrenReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(hasChildrenReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(hasChildrenReducer('', setChildrenPresent(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with setChildrenNotPresent' , () => {
            expect(hasChildrenReducer('', setChildrenNotPresent())).toEqual("");
        });
    });
});