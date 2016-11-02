import 'mocha';
import 'whatwg-fetch';
import {Promise} from 'es6-promise';
import * as sinon from 'sinon';
import chai = require('chai');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

import {LoginAsyncAction} from '../../../src/actions/login/LoginAsyncAction';
import storageMock from '../../mockObjs/sessionStorageMock';
import {LOGIN_BEGIN, LOGIN_SUCCESS} from '../../../src/constants';

var expect = chai.expect;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function jsonOk(body) {
    var mockResponse = new (window as any).Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.resolve(mockResponse);
}

function jsonError(status, body) {
    var mockResponse = new (window as any).Response(JSON.stringify(body), {
        status: status,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.reject(mockResponse);
}

describe('Login Request Action', () =>{
    let sandBox = null;
    let fetchMock = null;
    let browserHistoryMock = null;

    before(() => {
        sandBox = sinon.sandbox.create();
        fetchMock = sandBox.stub(window, 'fetch');
        browserHistoryMock = sandBox.stub(browserHistory);
    });

    after(() => {
        sandBox.restore();
    });

    it('should emit a Login request', () => {
        //Arrange
        let username = 'a@b.c';
        let password = '1234';
        let token = '1qazXSW@';

        let expected = [
            { type: LOGIN_BEGIN },
            { type: LOGIN_SUCCESS, data: { "result": token } }
        ];
        fetchMock.returns(jsonOk({ result: token }));
        const store = mockStore({});

        //Act
        return store.dispatch(LoginAsyncAction(username, password, fetchMock, browserHistoryMock, storageMock()))
            .then(() => { // 回傳非同步的 action
                //Assert
                let result = store.getActions();
                expect(result).be.eql(expected);
            })
    });
});