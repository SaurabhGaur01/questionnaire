export const SET_ACTIVE_STEP = 'modules/questionnaire-app/SET_ACTIVE_STEP';

export const setActiveStep = value => ({
    type: SET_ACTIVE_STEP,
    value,
});

export const activeStepReducer = (state = 0, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_ACTIVE_STEP:
            return action.value;
        default:
            return state;  
    }
}