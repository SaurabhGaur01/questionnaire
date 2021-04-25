export const SET_OCCUPATION = 'modules/questionnaire-app/SET_OCCUPATION';
export const CLEAR_OCCUPATION = 'modules/questionnaire-app/CLEAR_OCCUPATION';

export const setOccupation = value => ({
    type: SET_OCCUPATION,
    value,
});

export const clearOccupation = () => ({
    type: CLEAR_OCCUPATION,
});

export const inputOccupationReducer = (state = "", action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_OCCUPATION:
            return action.value;
        case CLEAR_OCCUPATION:
            return "";
        default:
            return state;               
    }
};