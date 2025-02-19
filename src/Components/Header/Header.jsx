import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Images/Logo.png';

const Header = () => {

    return (
        <>

            {/* -------- Header Start -------- */}
            <header className='pd'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-0">
                        <div className='navbar-brand me-0'>
                            <Link to="/">
                                <img src={Logo} alt="" className='img-fluid' />
                            </Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <div className='navbar-brand'>
                                    <Link to="/">
                                        <img src={Logo} alt="" className='img-fluid' />
                                    </Link>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav mb-0 mb-lg-0 ms-auto">
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/#service" className="nav-link">Services</Link>
                                    </li>
                                    <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/events" className="nav-link">Events</Link>
                                    </li>
                                    <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/blogs" className="nav-link">Blogs</Link>
                                    </li>
                                    <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                        <Link to="/register" className="nav-link">Join Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* -------- Header End -------- */}

        </>
    )
}

export default Header