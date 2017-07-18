import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
            <div className="header-top">
                <div className="container">
                    <div className="col-md-2">
                        <Link className="logo" to="/" title="Men Fashion"><img src="src/images/logo.png" alt="menshop" width="180" /></Link>
                    </div>
                    <div className="col-md-10">
                        <div className="example">
                            <div className="menuholder">
                                <ul className="menu slide">
                                    <li><Link to="/about" className="hvr-overline-from-left">Về SarahShop </Link></li>
                                    <li><Link to="/news" className="hvr-overline-from-left">Tin tức</Link></li>
                                    <li><Link to="/promotion" className="hvr-overline-from-left">Khuyến mãi</Link></li>
                                    <li><Link to="/brand" className="hvr-overline-from-left">Thương hiệu</Link></li>
                                    <li><Link to="/product" className="hvr-overline-from-left">Thời trang nam <span className="caret"></span></Link>
                                        <div className="subs">
                                            <dl>
                                                <dt>Quần áo nam</dt>
                                                <dd><Link to="/thoitrangnam">Quần nam</Link></dd>
                                                <dd><Link to="/thoitrangnam">Áo nam</Link></dd>
                                            </dl>
                                            <dl>
                                                <dt>Đồng hồ nam</dt>
                                                <dd><Link to="/thoitrangnam">Đồng hồ kim</Link></dd>
                                                <dd><Link to="/thoitrangnam">Đồng hồ điện tử</Link></dd>
                                            </dl>
                                            <dl>
                                                <dt>Áo khoác</dt>
                                                <dd><a href="product.html">Áo khoác da</a></dd>
                                                <dd><a href="product.html">Áo khoác nỉ</a></dd>
                                            </dl>
                                            <dl>
                                                <dt>Phụ kiện nam</dt>
                                                <dd><a href="product.html">Dây nịt</a></dd>
                                                <dd><a href="product.html">Mũ nam</a></dd>
                                                <dd><a href="product.html">Mắt kính nam</a></dd>
                                            </dl>
                                            <dl className="category-thumbnail">
                                                <div >
                                                    <img src="src/images/slide-menu-quan-nam-slide-1.png" alt="" width="100%" />
                                                </div>
                                                <div >
                                                    <img src="src/images/slide-menu-ao-nam-slide-2.png" alt="" width="100%" />
                                                </div>
                                                <div >
                                                    <img src="src/images/slide-menu-quan-nam-slide-2.png" alt="" width="100%" />
                                                </div>
                                            </dl>
                                        </div>
                                    </li>
                                    <li><Link to="/product" className="hvr-overline-from-left">Thời trang nữ <span className="caret"></span></Link>
                                        <div className="subs">
                                            <dl>
                                                <dt>Quần áo nữ</dt>
                                                <dd><a href="product.html">Áo nữ</a></dd>
                                                <dd><a href="product.html">Quần nữ</a></dd>
                                                <dd><a href="product.html">Đồ bộ ngủ</a></dd>
                                                <dd><a href="product.html">Đồ trang sức nữ</a></dd>
                                            </dl>
                                            <dl>
                                                <dt>Váy đầm nữ</dt>
                                                <dd><a href="product.html">Váy</a></dd>
                                                <dd><a href="product.html">Đầm</a></dd>
                                            </dl>
                                            <dl>
                                                <dt>Đồng hồ nữ</dt>
                                                <dd><a href="product.html">Đồng hồ kim</a></dd>
                                                <dd><a href="product.html">Đồng hồ điện tử</a></dd>
                                            </dl>
                                            <dl>
                                                <dt>Giày dép nữ</dt>
                                                <dd><a href="product.html">Giày nữ</a></dd>
                                                <dd><a href="product.html">Dép nữ</a></dd>
                                            </dl>
                                            <dl className="category-thumbnail">
                                                <div >
                                                    <img src="src/images/slide-menu-ao-nam-slide-1.jpg" alt="" width="100%" />
                                                </div>
                                                <div >
                                                    <img src="src/images/slide-menu-ao-nam-slide-2.png" alt="" width="100%" />
                                                </div>
                                                <div >
                                                    <img src="src/images/slide-menu-ao-nam-slide-3.png" alt="" width="100%" />
                                                </div>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                                <div className="back"></div>
                                <div className="shadow"></div>

                                <nav className="pushy pushy-left" data-focus="#first-link">
                                    <div className="pushy-content">
                                        <ul>
                                            <li className="pushy-submenu">
                                                <button id="first-link">Submenu 1</button>
                                                <ul>
                                                    <li className="pushy-link"><a href="#">Item 1</a></li>
                                                    <li className="pushy-link"><a href="#">Item 2</a></li>
                                                    <li className="pushy-link"><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="pushy-submenu">
                                                <button>Submenu 2</button>
                                                <ul>
                                                    <li className="pushy-link"><a href="#">Item 1</a></li>
                                                    <li className="pushy-link"><a href="#">Item 2</a></li>
                                                    <li className="pushy-link"><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="pushy-submenu">
                                                <button>Submenu 3</button>
                                                <ul>
                                                    <li className="pushy-link"><a href="#">Item 1</a></li>
                                                    <li className="pushy-link"><a href="#">Item 2</a></li>
                                                    <li className="pushy-link"><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="pushy-submenu">
                                                <button>Submenu 4</button>
                                                <ul>
                                                    <li className="pushy-link"><a href="#">Item 1</a></li>
                                                    <li className="pushy-link"><a href="#">Item 2</a></li>
                                                    <li className="pushy-link"><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="pushy-link"><a href="#">Item 1</a></li>
                                            <li className="pushy-link"><a href="#">Item 2</a></li>
                                            <li className="pushy-link"><a href="#">Item 3</a></li>
                                            <li className="pushy-link"><a href="#">Item 4</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        )
    }
}