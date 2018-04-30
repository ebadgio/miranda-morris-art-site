import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {

        const close = () => {

            document.getElementById("menu").style.width = "0";
            document.getElementById('main-wrapper').removeEventListener('click', close);
        };

        const open = () => {

            document.getElementById("menu").style.width = "200px";
            setTimeout(() => {
                if (document.getElementById("menu").style.width === '200px') {
                    document.getElementById('main-wrapper').addEventListener('click', close);
                }
            }, 100);

        };

        document.getElementById('menu-btn').addEventListener('click', open);

        setInterval(() => {
            if (window.innerWidth > 750) {
                document.getElementById('nav-item-wrapper').style.display = 'inherit';
                document.getElementById('menu-btn').style.display = 'none';
                document.getElementById("menu").style.width = "0";
                // close();
                // this.setState({open: true});
            } else {
                document.getElementById('nav-item-wrapper').style.display = 'none';
                document.getElementById('menu-btn').style.display = 'flex';
            }
        }, 50);

        document.addEventListener('scroll', () => {
            document.getElementById("menu").style.width = "0";
        });
    }

    render() {
        return (
            <div className="nav w-full row center">
                <div className="h-full w-full row between" style={{maxWidth: '1200px'}}>
                    <div id="title">MIRANDA MORRIS</div>
                    <div id="menu-btn">
                        <i className="fas fa-bars" id="menu-icon" />
                    </div>
                    <div className="row between h-full" id="nav-item-wrapper" style={{marginRight: '20px'}}>
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
                    <div className="sidenav flex-col" id="menu">
                        <Link to="/">
                            <div className="nav-item-side">
                                HOME
                            </div>
                        </Link>
                        <Link to="/gallery">
                            <div className="nav-item-side">
                                GALLERY
                            </div>
                        </Link>
                        <a target="_blank" href="https://www.society6.com/mirandaxmorris">
                            <div className="nav-item-side">
                                SHOP
                            </div>
                        </a>
                        <Link to="/about">
                            <div className="nav-item-side">
                                ABOUT
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="nav-item-side">
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