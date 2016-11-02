import React = require('react');

const {Component} = React;

export interface AboutProperties{}

export interface AboutState { }

export default class About extends Component<AboutProperties,AboutState> {
    render() {
        return <div>
            <h2> About.</h2>
            <h3> Your application description page.</h3>

            <p>Use this area to provide additional information.</p>
        </div>
    }
}