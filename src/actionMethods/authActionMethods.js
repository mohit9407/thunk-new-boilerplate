import {LOGOUT,LOGIN} from '../reducers/auth';
import {SHOW_MODAL} from '../reducers/alertModal';

export const LoginMethod = (credentials) => {
    return (dispatch) => {
        /*api call for login will be here, its static checking for now*/
        if (credentials.email === 'admin@admin.com' && credentials.password === 'password') {
            localStorage.setItem('user', JSON.stringify(credentials));
            dispatch({type:LOGIN,payload:credentials});
        }
        else{
            dispatch({
                type: SHOW_MODAL,
                payload: {header: 'Login', message: 'email or password is wrong'}
            });
        }
    }

};

export const LogoutMethod = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch({type:LOGOUT});
    }
};