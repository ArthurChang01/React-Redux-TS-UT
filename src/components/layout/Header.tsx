import React = require('react');
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {LoginState} from '../widget/LoginState';
import {LogOutAsyncAction} from '../../actions/logout/LogOutAsyncAction';

const {Component} = React;

export interface HeaderProperties extends LoginState.State {}

export interface HeaderState { }

export class Header extends Component<HeaderProperties, HeaderState> {
    render(){
        return <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">應用程式名稱</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li> <Link to="/">首頁</Link> </li>
                        <li> <Link to="/about">關於</Link> </li>
                        <li> <Link to="/contact">連絡方式</Link> </li>
                    </ul>
                    <LoginState isAuth={this.props.isAuth} name={this.props.name} LogOut={this.props.LogOut}  />
                </div>
            </div>
        </div>;
    }
}

//for connect
const mapStateToProps = (state) => {
    return {
        isAuth: state? state.isAuth : false,
        name: state? state.name : ''
    };
};

//for connect
const mapDispatchToProps = (dispatch) => {
    return {
        LogOut: () => {
            dispatch(LogOutAsyncAction());
        }
    };
};

//connect
export default connect(mapStateToProps, mapDispatchToProps)(Header);