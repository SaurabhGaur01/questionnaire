export const SET_STEP_AS_COMPLETED = 'modules/questionnaire-app/SET_STEP_AS_COMPLETED';
export const CLEAR_STEP_AS_COMPLETED = 'modules/questionnaire-app/CLEAR_STEP_AS_COMPLETED';

export const setStepAsCompleted = data => ({
    type: SET_STEP_AS_COMPLETED,
    data
});

export const clearStepAsCompleted = () => ({
    type: CLEAR_STEP_AS_COMPLETED,
});

export const completedStepsReducer = (state = {}, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_STEP_AS_COMPLETED:
            return action.data;
        case CLEAR_STEP_AS_COMPLETED:
            return {};    
        default:
            return state;  
    }
}