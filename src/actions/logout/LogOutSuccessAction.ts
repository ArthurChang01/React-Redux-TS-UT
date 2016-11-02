import {LOGOUT_SUCCESS} from '../../Constants';
import * as toastr from 'toastr';

export function LogOutSuccessAction() {
    toastr.success("Logout success!");

    return {
        type: LOGOUT_SUCCESS
    };
}