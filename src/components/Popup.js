import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import CheckOrder from './CheckOrder';


export default class PopUp extends Component {
    render() {
        return (
            <div>
                <Register />
                <Login />
                <CheckOrder />
            </div>
        )
    }
}