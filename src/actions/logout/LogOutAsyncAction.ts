import * as toastr from 'toastr';
import 'whatwg-fetch';
import { Promise } from 'es6-promise';

import { LogOutRequestAction } from './LogOutRequestAction';
import { LogOutSuccessAction } from './LogOutSuccessAction';
import { LogOutFailAction } from './LogOutFailAction';

export function LogOutAsyncAction(username?, api?) {
    return dispatch => {
        return Promise.resolve(dispatch)
            .then(() => {
                let fetch = api || (window as any).fetch;

                dispatch(LogOutRequestAction());

                let fetch_Parm = {
                    headers: { "Content-Type": 'application/json' },
                    method: 'GET',
                    mode: 'cors'
                };

                return fetch(`http://localhost:3004/Members`, fetch_Parm)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        dispatch(LogOutSuccessAction());
                    })
                    .catch(err => {
                        dispatch(LogOutFailAction(err));
                    });
            })

    }
}