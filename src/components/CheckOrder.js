import React, { Component } from 'react';
export default class CheckOrder extends Component {
    render() {
        return (
                <div id="checkdiv">
                    <form className="form" action="#" id="check">
                        <i className="fa fa-times-circle img" aria-hidden="true" id="cancel"></i>
                        <h3>Kiểm tra đơn hàng</h3>
                        <br />
                        <label>Mã đơn hàng </label>
                        <br />
                        <input type="text" id="code" placeholder="Ex -john123" /><br />
                        <br />
                        <label>Di động</label>
                        <br />
                        <input type="text" id="telphone" placeholder="01244 545 455" /><br />
                        <br />
                        <input type="button" id="loginbtn" value="Xem" />
                        <input type="button" id="cancel" value="Hủy bỏ" />
                        <br />

                    </form>

                </div>
        )
    }
}