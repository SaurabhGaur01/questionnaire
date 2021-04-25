export const SET_NAME = 'modules/questionnaire-app/SET_NAME';
export const CLEAR_NAME = 'modules/questionnaire-app/CLEAR_NAME';

export const setName = value => ({
    type: SET_NAME,
    value,
});

export const clearName = () => ({
    type: CLEAR_NAME,
});

export const inputNameReducer = (state = "", action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_NAME:
            return action.value;
        case CLEAR_NAME:
            return "";
        default:
            return state;               
    }
};