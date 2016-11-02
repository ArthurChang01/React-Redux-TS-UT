import 'mocha';
import chai = require('chai');
import { LoginFailAction } from '../../../src/actions/login/LoginFailAction';
import { LOGIN_FAIL } from '../../../src/constants';

const expect = chai.expect;

describe('Login Request Action', () => {

    it('should create an action to Login fail request', () => {
        //Arrange
        const msg = 'fail';
        const expectionAction = {
            type: LOGIN_FAIL,
            error_message: msg
        };

        //Act
        const actualAction = LoginFailAction(msg);

        //Assert
        expect(actualAction).be.eql(expectionAction);
    });

});