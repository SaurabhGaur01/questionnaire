import {
    setSearchResults,
    clearSearchResults,
    searchResultsReducer,
} from '../../ducks/searchResults';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('searchResults Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setSearchResults should match the snapshot' , () => {
            expect(setSearchResults(mockObject)).toMatchSnapshot();
        });
        it('clearSearchResults should match the snapshot' , () => {
            expect(clearSearchResults()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(searchResultsReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(searchResultsReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(searchResultsReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of the API call' , () => {
            expect(searchResultsReducer('', setSearchResults(mockObject))).toEqual(mockObject);
        });
        it('should clear the store when called with clearSearchResults' , () => {
            expect(searchResultsReducer(mockObject, clearSearchResults())).toEqual([]);
        });
    });
});