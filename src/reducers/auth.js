
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || null
};

export default (state=initialState,action) => {
    switch (action.type){
        case LOGIN:
            return {...state,user:action.payload};
        case LOGOUT:
            return {...state,user:null};
        default:
            return {...state};
    }
}