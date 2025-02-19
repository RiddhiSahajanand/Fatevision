import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import BannerRight from '../../assets/Images/Home/banner-right.png';
import JoinlLeft from '../../assets/Images/Home/join-left.png';
import JoinRight from '../../assets/Images/Home/join-right.png';
import Join1 from '../../assets/Images/Home/join-1.png';
import Join2 from '../../assets/Images/Home/join-2.png';
import Join3 from '../../assets/Images/Home/join-3.png';
import Join4 from '../../assets/Images/Home/join-4.png';
import Guidance1 from '../../assets/Images/Home/guidance-1.png';
import Guidance2 from '../../assets/Images/Home/guidance-2.png';
import Guidance3 from '../../assets/Images/Home/guidance-3.png';
import Guidance4 from '../../assets/Images/Home/guidance-4.png';
import Guidance5 from '../../assets/Images/Home/guidance-5.png';
import GuidanceRight from '../../assets/Images/Home/guidance-right.png';
import line from '../../assets/Images/Home/line.png';
// import Logo from '../../ass/ets/Images/Home/Logo.png';


const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#service") {
            const section = document.getElementById("service");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            {/* -------- Home-Banner Start -------- */}
            <div className="home-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Get Personalized Astrology <br className='' />
                                Guidance from Expert <br className='' />
                                Astrologers
                            </h3>
                            <p>
                                Find clarity in love, career, and life. Connect with a <br />
                                professional astrologer today!
                            </p>

                            <div className='d-flex flex-wrap'>
                                <Link
                                    to="/astrologer"
                                    className='main-btn mb-lg-0 me-3 me-lg-2'
                                >
                                    Talk to an Astrologer
                                </Link>
                                <Link
                                    className='main-btn'
                                    to="/#service"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="right text-center text-lg-end">
                            <img src={BannerRight} alt="" className='img-fluid' />
                        </div>

                    </div>
                </div>
            </div>
            {/* -------- Home-Banner End -------- */}


            {/* -------- Join-Us Start -------- */}
            <div className="join-us pd">
                <div className="first">
                    <h3 className='text-center'>
                        Are You an Experienced Astrologer? <br />
                        Join Us!
                    </h3>
                    <div className='text-center line'>
                        <img src={line} alt="" className='img-fluid ' />
                    </div>
                    <p className='text-center'>
                        Connect with seekers, provide expert guidance, and grow your <br className='d-none d-sm-block' />
                        astrology practice on our trusted platform.
                    </p>
                </div>
                <div className="second">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mb-lg-0">
                            <div className="box h-100 d-flex flex-column">
                                <div className='d-flex justify-content-between'>
                                    <img src={JoinlLeft} alt="" className='img-fluid' />
                                    <img src={Join1} alt="" className='img-fluid' />
                                    <img src={JoinRight} alt="" className='img-fluid' />
                                </div>
                                <h5 className='mt-auto'>
                                    Access to a large <br />
                                    client base
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mb-lg-0">
                            <div className="box h-100 d-flex flex-column">
                                <div className='d-flex justify-content-between'>
                                    <img src={JoinlLeft} alt="" className='img-fluid' />
                                    <img src={Join2} alt="" className='img-fluid' />
                                    <img src={JoinRight} alt="" className='img-fluid' />
                                </div>
                                <h5 className='mt-auto'>
                                    Flexible consultation hours <br />
                                    (Chat, Call, Video)
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mb-lg-0">
                            <div className="box h-100 d-flex flex-column">
                                <div className='d-flex justify-content-between'>
                                    <img src={JoinlLeft} alt="" className='img-fluid' />
                                    <img src={Join3} alt="" className='img-fluid' />
                                    <img src={JoinRight} alt="" className='img-fluid' />
                                </div>
                                <h5 className='mt-auto'>
                                    Secure & hassle-free <br />
                                    payments
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mb-lg-0">
                            <div className="box h-100 d-flex flex-column">
                                <div className='d-flex justify-content-between'>
                                    <img src={JoinlLeft} alt="" className='img-fluid' />
                                    <img src={Join4} alt="" className='img-fluid' />
                                    <img src={JoinRight} alt="" className='img-fluid' />
                                </div>
                                <h5 className='mt-auto'>
                                    Build your brand and <br />
                                    credibility
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="third text-center">
                    <Link
                        to="/register"
                        className='main-btn'
                    >
                        Register Now
                    </Link>
                </div>
            </div>
            {/* -------- Join-Us End -------- */}


            {/* -------- Guidance Start -------- */}
            <div className="guidance pd" id="service">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="left">
                            <h3>
                                Find Guidance in Every Aspect <br />
                                of Life
                            </h3>

                            <div className='line'>
                                <img src={line} alt="" className='img-fluid ' />
                            </div>

                            <p>
                                Life is full of challenges, but with the right mindset and a clear <br /> vision, you can navigate every obstacle with confidence and <br /> turn every opportunity into a stepping stone for success
                            </p>

                            <div className='d-flex'>
                                <div className="box">
                                    <img src={Guidance1} alt="" className='img-fluid' />
                                    <h5>
                                        Love & Relationships
                                    </h5>
                                </div>
                                <div className="box">
                                    <img src={Guidance2} alt="" className='img-fluid' />
                                    <h5>
                                        Career & Finance
                                    </h5>
                                </div>
                                <div className="box">
                                    <img src={Guidance3} alt="" className='img-fluid' />
                                    <h5>
                                        Health & Wellness
                                    </h5>
                                </div>
                                <div className="box">
                                    <img src={Guidance4} alt="" className='img-fluid' />
                                    <h5>
                                        Tarot & Numerology
                                    </h5>
                                </div>
                                <div className="box">
                                    <img src={Guidance5} alt="" className='img-fluid' />
                                    <h5>
                                        Vedic & Western
                                        Astrology
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="right text-center text-lg-end">
                            <img src={GuidanceRight} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* -------- Guidance End -------- */}

        </>
    )
}

export default Home;

