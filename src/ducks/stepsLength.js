import { QUESTIONNAIRE_STEPS } from '../constants/steps';

export const SET_STEPS_LENGTH = 'modules/questionnaire-app/SET_STEPS_LENGTH';

export const setStepsLength = () => ({
    type: SET_STEPS_LENGTH
});

export const stepsLengthReducer = (state = 0, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_STEPS_LENGTH:
            return QUESTIONNAIRE_STEPS.length;
        default:
            return state;  
    }
}