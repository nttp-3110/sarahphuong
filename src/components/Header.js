import React, { Component } from 'react';
import Nav from './Nav';
import PopUp from './Popup';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <header id="header">
                        <div className="header-block">
                            <div className="container">
                                <div className="phone">
                                    SHOP THỜI TRANG ONLINE - Hotline: <span className="number">1900.2702</span> (08h00 - 22h00)
                            </div>
                                <div className="box-right-header">
                                    <div className="box-right-navigation hdCart">
                                        <a href="#" title="Giỏ hàng">
                                            <span className="countcart">2 SP</span>
                                            <span className="titlecart">Giỏ hàng</span>
                                            <span className="nav-down-arrow nav-sprite">&nbsp</span>
                                        </a>
                                        <div className="hdCart_box" style={{ display: 'none' }}></div>
                                    </div>
                                </div>
                                <div className="box-mid-header">
                                    <div className="dropdown">
                                        <a className="btn dropdown-toggle" type="button" data-toggle="dropdown">TÀI KHOẢN
                                <span className="caret"></span></a>
                                        <ul className="dropdown-menu" id="popup">
                                            <li><a href="#" id="onclick_login">Đăng nhập</a></li>
                                            <li><a href="#" id="onclick">Đăng ký</a></li>
                                            <li><a href="#" id="onclick_check">Kiểm tra đơn hàng</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Thanh toán trực tuyến</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-search">
                                    <fieldset className="field-container">
                                        <input type="text" placeholder="Search..." className="field" />
                                        <div className="icons-container">
                                            <div className="icon-search"></div>
                                            <div className="icon-close">
                                                <div className="x-up"></div>
                                                <div className="x-down"></div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <Nav />
                    </header>
                </div>
                 <PopUp />
            </div>
        )
    }
}