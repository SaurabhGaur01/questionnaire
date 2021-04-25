export const SET_CHILDREN = 'modules/questionnaire-app/SET_CHILDREN';
export const CLEAR_CHILDREN = 'modules/questionnaire-app/CLEAR_CHILDREN';

export const setChildren = value => ({
    type: SET_CHILDREN,
    value,
});

export const clearChildren = () => ({
    type: CLEAR_CHILDREN,
});

export const inputChildrenReducer = (state = 0, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_CHILDREN:
            return action.value;
        case CLEAR_CHILDREN:
            return 0;
        default:
            return state;               
    }
};