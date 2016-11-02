import * as toastr from 'toastr';

import {REGISTER_SUCCESS} from '../../Constants';

export function RegisterSuccessAction(err_msg) {
    toastr.success(err_msg, "Register success!");

    return {
        type: REGISTER_SUCCESS,
        error_message: err_msg
    };
}