import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_BEGIN,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_BEGIN,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../Constants';
import {InitialState, State} from '../utilities/InitialState';
import * as objectAssign from 'object-assign';

export function MainReducer(
    state:State=InitialState,
    action )
{
    switch(action.type){
        case LOGIN_BEGIN:
            return objectAssign({},state,{
                isFetch:true
            });
        case LOGIN_SUCCESS:
            return objectAssign({}, state, {
                isFetching: false,
                isAuth: true
            });
        case LOGIN_FAIL:
            return objectAssign({}, state, {
                isFetching: false,
                isAuth: false,
                error_message: action.error_message
            });
        case LOGOUT_BEGIN: //LogOut
            return objectAssign({}, state, {
                isFetching: true
            });
        case LOGOUT_SUCCESS:
            return objectAssign({}, state, {
                isFetching: false,
                isAuth: false
            });
        case LOGOUT_FAIL:
            return objectAssign({}, state, {
                isFetching: false,
                isAuth: true,
                error_message: action.error_message
            });
        case REGISTER_BEGIN: //Register
            return objectAssign({}, state, {
                isFetching: true
            });
        case REGISTER_SUCCESS:
            return objectAssign({}, state, {
                isFetching: false
            });
        case REGISTER_FAIL:
            return objectAssign({}, state, {
                isFetching: false,
                error_message: action.error_message
            });
        default:
            return state;
    }
}