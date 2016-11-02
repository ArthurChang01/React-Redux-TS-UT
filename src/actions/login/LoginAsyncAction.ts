import * as toastr from 'toastr';
import 'whatwg-fetch';
import { Promise } from 'es6-promise';

import { LoginRequestAction } from './LoginRequestAction';
import { LoginSuccessAction } from './LoginSuccessAction';
import { LoginFailAction } from './LoginFailAction';

export function LoginAsyncAction(username, password, api?, browserHistory?, storage?) {
    return dispatch => {
        return Promise.resolve(dispatch)
            .then(() => {
                let fetch = api || (window as any).fetch;

                if (!username || !password) {
                    toastr.error("username or password can't be empty!");
                    return;
                }

                dispatch(LoginRequestAction());

                let fetch_Parm = {
                    headers: { "Content-Type": 'application/json' },
                    method: 'GET',
                    mode: 'cors'
                };

                return fetch(`http://localhost:3004/Members?email=${username}&password=${password}`, fetch_Parm)
                    .then(resp => resp.json())
                    .then(data => dispatch(LoginSuccessAction(data, browserHistory, storage)))
                    .catch(err => {
                        dispatch(LoginFailAction(err));
                    });
            });
    };
}