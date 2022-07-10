import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <footer className="footer__container">
                <nav>
                    <ul className="footer__container-menu">
                        <li>
                            <Link to="/favorites">
                                <i className="fa fa-heart"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-home"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/comments">
                                <i className="fa fa-comment"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Layout;
