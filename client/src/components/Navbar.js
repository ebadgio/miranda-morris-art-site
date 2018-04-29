import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div className="nav w-full row center">
                <div className="h-full w-full row between" style={{maxWidth: '1200px'}}>
                    <div id="title">MIRANDA MORRIS</div>
                    <div className="row between h-full" style={{marginRight: '20px'}}>
                        <Link style={{height: '100%'}} to="/">
                            <div className="nav-item row center">
                                HOME
                            </div>
                        </Link>
                        <Link style={{height: '100%'}} to="/gallery">
                            <div className="nav-item row center">
                                GALLERY
                            </div>
                        </Link>
                        <a style={{height: '100%'}} target="_blank" href="https://www.society6.com/mirandaxmorris">
                            <div className="nav-item row center">
                                SHOP
                            </div>
                        </a>
                        <Link style={{height: '100%'}} to="/about">
                            <div className="nav-item row center">
                                ABOUT
                            </div>
                        </Link>
                        <Link style={{height: '100%'}} to="/contact">
                            <div className="nav-item row center">
                                CONTACT
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


}

export default Navbar;