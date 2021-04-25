export const SET_SEARCH_RESULTS = 'modules/questionnaire-app/SET_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'modules/questionnaire-app/CLEAR_SEARCH_RESULTS';

export const setSearchResults = data => ({
    type: SET_SEARCH_RESULTS,
    data
});

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS,
});

export const searchResultsReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_SEARCH_RESULTS:
            return action.data;
        case CLEAR_SEARCH_RESULTS:
            return [];    
        default:
            return state;  
    }
}