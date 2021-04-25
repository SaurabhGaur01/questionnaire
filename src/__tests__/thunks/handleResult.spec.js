import handleResult from '../../thunks/handleResult';
import { setLoadingError, setLoadingInProgress, setLoadingSuccess } from '../../ducks/loadingStatus';
import { setSearchResults } from '../../ducks/searchResults';
import axios from 'axios';

const mockDataForJwt = {
    data: {
        jwt: 'mockDataForJwt',
    }
};

const mockDataForResponse = {
    data: [{
        key: 'mockValue',
    }]
};

jest.mock('axios', () => ({
    post: jest.fn(() => (mockDataForJwt)),
    get: jest.fn(() => (mockDataForResponse)),
}));

jest.mock('../../ducks/loadingStatus', () => ({
    setLoadingError: jest.fn(),
    setLoadingInProgress: jest.fn(),
    setLoadingSuccess: jest.fn(),
}));

jest.mock('../../ducks/searchResults', () => ({
    setSearchResults: jest.fn(),
}));

const mockState = () => ({
    userInput: { mockKey: 'mockValue' }
});

describe('The Thunk handleResult', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
    });

    it('should call APIs successfully', async () => {
        axios.post.mockImplementation(() => Promise.resolve(mockDataForJwt));
        axios.get.mockImplementationOnce(() => Promise.resolve(mockDataForResponse));
        await handleResult() (dispatch, mockState);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingInProgress());
        expect(dispatch).toHaveBeenNthCalledWith(2, setSearchResults());
        expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingSuccess());
        
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('should call setLoadingError() when any API fails', async () => {
        axios.post.mockImplementation(() => Promise.reject());
        await handleResult() (dispatch, mockState);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingInProgress());
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(2, setLoadingError());       
    });
})
