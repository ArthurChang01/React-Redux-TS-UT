import React = require('react');

const {Component} = React;

export interface FooterProperties{}

export interface FooterState{}

export default class Footer extends Component<FooterProperties,FooterState>{
    render(){
        return <footer id="footer">
            <div className="copyright">
                &copy; ArthurChang Design: <a href="https://github.com/ArthurChang01/React-Redux-Practice">Arthur GitHub</a>.
            </div>
        </footer>;
    }
}