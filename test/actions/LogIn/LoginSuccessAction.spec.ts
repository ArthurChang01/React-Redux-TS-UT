import 'mocha';
import chai = require('chai');
import { browserHistory } from 'react-router';
import * as sinon from 'sinon';
import storageMock from '../../mockObjs/sessionStorageMock';

import { LoginSuccessAction } from '../../../src/actions/login/LoginSuccessAction';
import { LOGIN_SUCCESS } from '../../../src/constants';

const expect = chai.expect;

describe('Login Request Action', () => {

    let sandBox = null;
    let browserHistoryMock = null;

    before(() => {
        sandBox = sinon.sandbox.create();
        browserHistoryMock = sandBox.stub(browserHistory);
    });

    after(() => {
        sandBox.restore();
    });

    it('should create an action to Login success request', () => {
        //Arrange
        let storage = storageMock();

        const token = 'zaq1@WSX';
        const expectionAction = {
            type: LOGIN_SUCCESS,
            data: token
        };

        //Act
        const actualAction = LoginSuccessAction(token, browserHistoryMock, storage);

        //Assert
        expect(actualAction).be.eql(expectionAction);
    });

});