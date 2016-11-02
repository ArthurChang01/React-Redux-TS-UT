import 'mocha';
import chai = require('chai');
import { LoginRequestAction } from '../../../src/actions/login/LoginRequestAction';
import { LOGIN_BEGIN } from '../../../src/constants';

const expect = chai.expect;

describe('Login Request Action', () => {

    it('should create an action to Login request', () => {
        //Arrange
        const expectionAction = {
            type: LOGIN_BEGIN
        };

        //Act
        const actualAction = LoginRequestAction();

        //Assert
        expect(actualAction).be.eql(expectionAction);
    });

});