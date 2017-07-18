import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="top-bar">
                        <div className="breadcrumbs">
                            <ul>
                                <li className="home">
                                    <Link to="/" title="Đến trang chủ">
                                        <span itemProp="title">Home</span>
                                    </Link>
                                    <div className="clear"></div>
                                </li>
                                <li className="category17 icon-li">
                                    <strong>Thời Trang Nữ</strong>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/product"><img src="src/images/product-1.jpg" width="100%" /></Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/product"><img src="src/images/product-1.jpg" width="100%" /></Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/product"><img src="src/images/product-1.jpg" width="100%" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
