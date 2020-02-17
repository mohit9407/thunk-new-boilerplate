import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import auth from './auth';
import alertModal from './alertModal';

export default combineReducers({
    router: routerReducer,
    auth,
    alertModal
});