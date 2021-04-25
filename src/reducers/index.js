import { combineReducers } from 'redux';
import { stepsLengthReducer as stepsLength } from '../ducks/stepsLength';
import { completedStepsReducer as completedSteps } from '../ducks/completedSteps';
import { activeStepReducer as activeStep } from '../ducks/activeStep';
import { hasChildrenReducer as hasChildren } from '../ducks/userInput/hasChildren';
import { loadingStatusReducer as loadingStatus } from '../ducks/loadingStatus';
import { searchResultsReducer as searchResults } from '../ducks/searchResults';
import userInput from './userInput';

export default combineReducers({
    stepsLength,
    completedSteps,
    activeStep,
    userInput,
    hasChildren,
    loadingStatus,
    searchResults,
})