import {
    setChildren,
    clearChildren,
    inputChildrenReducer,
} from '../../ducks/userInput/inputChildren';

describe('inputChildren Duck Tests', () => {
    const mockObject = 1;

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setChildren should match the snapshot' , () => {
            expect(setChildren(mockObject)).toMatchSnapshot();
        });
        it('clearChildren should match the snapshot' , () => {
            expect(clearChildren()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(inputChildrenReducer()).toEqual(0);
        });
        it('should return the passed state if called with no action' , () => {
            expect(inputChildrenReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(inputChildrenReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value which is passed' , () => {
            expect(inputChildrenReducer('', setChildren(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearChildren' , () => {
            expect(inputChildrenReducer('', clearChildren())).toEqual(0);
        });
    });
});