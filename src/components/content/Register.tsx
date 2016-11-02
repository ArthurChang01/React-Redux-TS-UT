import React = require('react');

const {Component} = React;

export interface RegisterProperties extends LoginState.State{
    isFetching:boolean;
    onSubmit(username, email, password, confirm_password);
}

export interface RegisterState { }

import {connect} from 'react-redux';

import {RegisterAsyncAction} from '../../actions/Register/RegisterAsyncAction';
import {Validator} from '../../utilities/Validator';

//Component: RegisterComponent
export class Register extends Component<RegisterProperties,RegisterState> {
    private frm:HTMLFormElement;
    private username:HTMLInputElement;
    private email:HTMLInputElement;
    private password:HTMLInputElement;
    private confirm_password:HTMLInputElement;

    componentDidMount() {
        let rules = {
            username: { required: true },
            email: { required: true },
            password: { required: true },
            confirm_password: { required: true }
        };
        
        Validator(rules);
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if (!$(this.frm).valid()) {
            return false;
        }

        let username = this.username.value,
            email = this.email.value,
            password = this.password.value,
            confirm_password = this.confirm_password.value;

        this.props.onSubmit(username, email, password, confirm_password);
    }

    render() {
        return <div>
            <h2> 註冊.</h2>
            <div className="row">
                <div className="col-md-8">
                    <section id="loginForm">
                        <form method="post" className="form-horizontal" role="form" noValidate ref={node=>this.frm=node} onSubmit={this.onSubmit}>
                            <h4>建立新的帳戶。</h4>
                            <hr />
                            <div className="form-group">
                                <label className="col-md-2 control-label">帳戶</label>
                                <div className="col-md-10">
                                    <input type="text" name="username" className="form-control" ref={node=>this.username=node} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">電子郵件</label>
                                <div className="col-md-10">
                                    <input type="email" name="email" className="form-control" ref={node=>this.email=node} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">密碼</label>
                                <div className="col-md-10">
                                    <input type="password" name="password" className="form-control" ref={node=>this.password=node} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">確認密碼</label>
                                <div className="col-md-10">
                                    <input type="password" name="confirm_password" className="form-control" ref={node=>this.confirm_password=node} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-offset-2 col-md-10">
                                    <input type="submit" value="註冊" disabled={this.props.isFetching} className="btn btn-default" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>;
    }
}


//for connect
const mapStateToProps = (state) => {
    return {
        isFetching: state ? state.isFetching : false
    };
};

//for connect
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (username, email, password, confirm_password) => {
            dispatch(RegisterAsyncAction(username, email, password, confirm_password));
        }
    };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(Register);