import React, { Component } from 'react';
export default class Login extends Component {
    render() {
        return (
                <div id="logindiv">
                    <form className="form" action="#" id="login">
                        <i className="fa fa-times-circle img" aria-hidden="true" id="cancel"></i>
                        <h3>Đăng nhập</h3>
                        <br />
                        <label>Tên đăng nhập/ Email: </label>
                        <br />
                        <input type="text" id="username" placeholder="Ex -john123" /><br />
                        <br />
                        <label>Mật khẩu : </label>
                        <br />
                        <input type="text" id="password" placeholder="************" /><br />
                        <br />
                        <input type="button" id="loginbtn" value="Đăng nhập" />
                        <input type="button" id="cancel" value="Hủy bỏ" />
                        <br />
                    </form>
                </div>
        )
    }
}