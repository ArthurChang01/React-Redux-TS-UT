import React = require('react');

import Header from './layout/Header';
import Footer from './layout/Footer';

const {Component} = React;

export interface AppProperties{}

export interface AppState{}

export class App extends Component<AppProperties,AppState>{
    render(){
        return (
            <div>
                <Header />
                <div className="container body-content">
                    {this.props.children}
                    <hr />
                    <Footer />
                </div>
            </div>
        );
    }
}