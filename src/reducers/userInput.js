import { combineReducers } from 'redux';
import { inputNameReducer as firstName } from '../ducks/userInput/inputName';
import { inputAddressReducer as address } from '../ducks/userInput/inputAddress';
import { inputOccupationReducer as occupation } from '../ducks/userInput/inputOccupation';
import { inputChildrenReducer as numberOfChildren } from '../ducks/userInput/inputChildren';
import { inputEmailReducer as email } from '../ducks/userInput/inputEmail';

export default combineReducers({
    firstName,
    address,
    occupation,
    numberOfChildren,
    email,
});