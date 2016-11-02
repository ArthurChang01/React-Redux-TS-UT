import React = require('react');
import {Link} from 'react-router';

const {Component} = React;

export interface LoginStateProperties {
    name:string;
    isAuth:boolean;
    LogOut:()=>{};
}

export interface LoginStateState { }

export class LoginState extends Component<LoginStateProperties, LoginStateState> {
    render(){
        let rightSide = this.props.isAuth ?
        (
            <form id="logoutForm" className="navbar-right">
                <ul className="nav navbar-nav navbar-right">
                    <li><a title="Manage">Hello {this.props.name}!</a></li>
                    <li><a href="javascript:void(0);" onClick={this.props.LogOut}>登出</a></li>
                </ul>
            </form>
        ) :
        (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/register">註冊</Link></li>
                <li><Link to="/login">登入</Link></li>
            </ul>
        );
        
        return rightSide;
    }
}