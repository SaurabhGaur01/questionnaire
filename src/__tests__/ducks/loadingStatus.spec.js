import {
    setLoadingSuccess,
    setLoadingInProgress,
    setLoadingError,
    loadingStatusReducer,
} from '../../ducks/loadingStatus';

import { 
    LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS
} from '../../constants/steps';

describe('loadingStatus Duck Tests', () => {
    const mockState = 'mockKey';

    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setLoadingSuccess should match the snapshot' , () => {
            expect(setLoadingSuccess()).toMatchSnapshot();
        });
        it('setLoadingInProgress should match the snapshot' , () => {
            expect(setLoadingInProgress()).toMatchSnapshot();
        });
        it('setLoadingError should match the snapshot' , () => {
            expect(setLoadingError()).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(loadingStatusReducer()).toEqual("");
        });
        it('should return the passed state if called with no action' , () => {
            expect(loadingStatusReducer(mockState)).toBe(mockState);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(loadingStatusReducer(mockState, unknownAction)).toBe(mockState);
        });
    });

    describe('when called with a particular action', () => {
        it('should return the value of the constant LOADING_SUCCESS' , () => {
            expect(loadingStatusReducer(mockState, setLoadingSuccess()))
            .toEqual(LOADING_SUCCESS);
        });
        it('should return the value of the constant LOADING_IN_PROGRESS' , () => {
            expect(loadingStatusReducer(mockState, setLoadingInProgress()))
            .toEqual(LOADING_IN_PROGRESS);
        });
        it('should return the value of the constant LOADING_ERROR' , () => {
            expect(loadingStatusReducer(mockState, setLoadingError()))
            .toEqual(LOADING_ERROR);
        });
    });

})