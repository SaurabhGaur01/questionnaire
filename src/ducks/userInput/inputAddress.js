export const SET_ADDRESS = 'modules/questionnaire-app/SET_ADDRESS';
export const CLEAR_ADDRESS = 'modules/questionnaire-app/CLEAR_ADDRESS';

export const setAddress = value => ({
    type: SET_ADDRESS,
    value,
});

export const clearAddress = () => ({
    type: CLEAR_ADDRESS,
});

export const inputAddressReducer = (state = "", action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_ADDRESS:
            return action.value;
        case CLEAR_ADDRESS:
            return "";
        default:
            return state;               
    }
};