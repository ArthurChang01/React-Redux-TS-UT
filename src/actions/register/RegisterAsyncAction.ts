import * as toastr from 'toastr';
import 'whatwg-fetch';
import { Promise } from 'es6-promise';

import { RegisterRequestAction } from './RegisterRequestAction';
import { RegisterSuccessAction } from './RegisterSuccessAction';
import { RegisterFailAction } from './RegisterFailAction';
import { LoginAsyncAction } from '../login/LoginAsyncAction';

export function RegisterAsyncAction(username, email, password, confirmed_password, api?) {
    return dispatch => {
        return Promise.resolve(dispatch)
            .then(() => {
                let fetch = api || (window as any).fetch;

                if (password !== confirmed_password) {
                    dispatch(RegisterFailAction("password is not matched with confirmed_password"));
                    return;
                }

                if (!username || !email || !password || !confirmed_password) {
                    toastr.error("username, email, password and confirmed_password can't be empty!");
                    return;
                }

                dispatch(RegisterRequestAction());

                let fetch_Parm = {
                    headers: { "Content-Type": 'application/json' },
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({ email: email, "password": password })
                };

                return fetch('http://localhost:3004/Members', fetch_Parm)
                    .then(resp => resp.json())
                    .then(data => {
                        dispatch(RegisterSuccessAction(data));
                        dispatch(LoginAsyncAction(email, password));
                    })
                    .catch(err => {
                        dispatch(RegisterFailAction(err));
                    });
            })
    }
}