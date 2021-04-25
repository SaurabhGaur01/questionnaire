export const SET_EMAIL = 'modules/questionnaire-app/SET_EMAIL';
export const CLEAR_EMAIL = 'modules/questionnaire-app/CLEAR_EMAIL';

export const setEmail = value => ({
    type: SET_EMAIL,
    value,
});

export const clearEmail = () => ({
    type: CLEAR_EMAIL,
});

export const inputEmailReducer = (state = "", action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_EMAIL:
            return action.value;
        case CLEAR_EMAIL:
            return "";
        default:
            return state;               
    }
};