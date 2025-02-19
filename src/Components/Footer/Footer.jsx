import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/Images/Logo.png';

const Footer = () => {

    return (
        <>

            {/* -------- Footer Start -------- */}
            <footer className='pd'>
                <div className='top d-flex justify-content-between align-items-center flex-column flex-lg-row'>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="" className='img-fluid' />
                    </Link>

                    <div className="menu d-flex">
                        <ul className="d-flex">
                            <li className="mb-2 mb-lg-0">
                                <Link to="/" className="">Home</Link>
                            </li>
                            <li className="mb-2 mb-lg-0">
                                <Link to="/#service" className="">Services</Link>
                            </li>
                            <li className="mb-2 mb-lg-0">
                                <Link to="/events" className="">Events</Link>
                            </li>
                            <li className="mb-2 mb-lg-0">
                                <Link to="/blogs" className="">Blogs</Link>
                            </li>
                            <li className="mb-2 mb-lg-0">
                                <Link to="/register" className="">Join Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className='text-center mt-4 mt-sm-5'>
                    © Copyright 2025 - Fatevision
                </p>
            </footer>
            {/* -------- Footer End -------- */}

        </>
    )
}

export default Footer