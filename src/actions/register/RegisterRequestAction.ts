import * as toastr from 'toastr';

import {REGISTER_BEGIN} from '../../Constants';

export function RegisterRequestAction(){
    return {
        type: REGISTER_BEGIN
    };
}