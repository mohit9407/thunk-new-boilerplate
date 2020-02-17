import {LOGOUT} from './auth';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
    isAlert: false,
    header: '',
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                isAlert:true,
                header:action.payload.header,
                message:action.payload.message
            };
        case HIDE_MODAL:
            return {
                ...state,
                isAlert:false,
                header:'',
                message:''
            };
        case LOGOUT:
            return initialState;
        default:
            return {...state};
    }
}