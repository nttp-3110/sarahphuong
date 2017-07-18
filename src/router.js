import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import Header from './components/Header';
import Home from './components/Home';
import FasionW from './components/FasionW';
import FasionM from './components/FasionM';
import Promotion from './components/Promotion';
import About from './components/About';
import Brand from './components/Brand';
import News from './components/News';
import Product from './components/Product';


export default class Router extends Component {
    render() {
        return (
            <div className="container-fluid">
            <HashRouter>
                <div>
                    <Header />
                    <div className="content">
                        <Route path="/" exact component={Home} />
                        <Route path="/thoitrangnu" component={FasionW} />
                        <Route path="/thoitrangnam" component={FasionM} />
                        <Route path="/promotion" component={Promotion} />
                        <Route path="/news" component={News} />
                        <Route path="/brand" component={Brand} />
                        <Route path="/about" component={About} />
                        <Route path="/product" component={Product} />
                        
                    </div>
                </div>
            </HashRouter >
        </div>
        );
    }
}

