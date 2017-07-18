import React, { Component } from 'react';
export default class Register extends Component {
    render() {
        return (
                <div id="registerdiv">
                    <form className="form" action="#" id="contact">
                        <i className="fa fa-times-circle img" aria-hidden="true" id="cancel"></i>
                        <h3>Đăng kí</h3>
                        <br />
                        <label>Tên: <span>*</span></label>
                        <br />
                        <input type="text" id="name" placeholder="Name" /><br />
                        <br />
                        <label>Email: <span>*</span></label>
                        <br />
                        <input type="text" id="email" placeholder="Email" /><br />
                        <br />
                        <label>Mật khẩu : <span>*</span></label>
                        <br />
                        <input type="text" id="password" placeholder="************" /><br />
                        <br />
                        <input type="button" id="send" value="Send" />
                        <input type="button" id="cancel" value="Cancel" />
                        <br />
                    </form>
                </div>
        )
    }
}