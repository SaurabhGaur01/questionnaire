export const HAVE_CHILDREN = 'modules/questionnaire-app/HAVE_CHILDREN';
export const DONT_HAVE_CHILDREN = 'modules/questionnaire-app/DONT_HAVE_CHILDREN';

export const setChildrenPresent = value => ({
    type: HAVE_CHILDREN,
    value
});

export const setChildrenNotPresent = () => ({
    type: DONT_HAVE_CHILDREN,
});

export const hasChildrenReducer = (state = "", action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case HAVE_CHILDREN:
            return action.value;
        case DONT_HAVE_CHILDREN:
            return "";
        default:
            return state;               
    }
};