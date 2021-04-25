import axios from 'axios';
import { setLoadingError, setLoadingInProgress, setLoadingSuccess } from '../ducks/loadingStatus';
import { setSearchResults } from '../ducks/searchResults';
import { BASE_URL } from '../constants/steps';

const handleResult = () => async (dispatch, getState) => {
    dispatch(setLoadingInProgress());
    try {
        // first call to get the JWT token
        const { data: { jwt: token}} = await axios.post(
            BASE_URL+'/user', getState().userInput,
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

        // second call to get the data
        const { data } = await axios.get(
            BASE_URL+'/recommendation',
            {  
                headers: { Authorization: `Bearer ${token}` } 
            }
        );
        dispatch(setSearchResults(data));
        dispatch(setLoadingSuccess());
    } catch (error) {
        // handling errors gracefully if any api fails so that UI will remain clean for endusers
        dispatch(setLoadingError());
    }
}

export default handleResult;