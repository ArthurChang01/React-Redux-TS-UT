import React = require('react');

const {Component} = React;

export interface ContactProperties{}

export interface ContactState { }

export default class Contact extends Component<ContactProperties,ContactState> {
    render() {
        return <div>
            <h2> Contact.</h2>
            <h3> Your contact page.</h3>

            <address>
                One Microsoft Way<br />
                Redmond, WA 98052-6399<br />
                <abbr title="Phone">P: </abbr>
                425.555.0100
            </address>

            <address>
                <strong>Support: </strong>   <a href="mailto:Support@example.com">Support @example.com</a><br />
                <strong>Marketing: </strong> <a href="mailto:Marketing@example.com">Marketing @example.com</a>
            </address>
        </div>;
    }
}