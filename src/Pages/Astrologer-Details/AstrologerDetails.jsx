import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

import "./AstrologerDetails.css";

import AstrologerDetails1 from "../../assets/Images/Astrologer/AstrologerDetails1.png";
import RatingStar from "../../assets/Images/Astrologer/RatingStar.png";
import CustomerReview from "../../assets/Images/Astrologer/CustomerReview.png";
import Spell1 from "../../assets/Images/Astrologer/Spell1.png";
import Spell2 from "../../assets/Images/Astrologer/Spell2.png";
import Spell3 from "../../assets/Images/Astrologer/Spell3.png";
import Spell4 from "../../assets/Images/Astrologer/Spell4.png";
import Service1 from "../../assets/Images/Astrologer/Service1.png";
import Service2 from "../../assets/Images/Astrologer/Service2.png";
import Service12 from "../../assets/Images/Astrologer/Service1-2.png";
import Service22 from "../../assets/Images/Astrologer/Service2-2.png";
import { Axios } from '../../helper/Axios';

const AstrologerDetails = () => {
    const state = useLocation();
    const AstrologerId = state?.state;

    const navigate = useNavigate();

    const [data, setData] = useState({})

    const handleBooking = () => {
        navigate("/booking");
    }

    const AstrologerDetails = async () => {
        try {
            const res = await Axios.get(`/astrologers/detail/${AstrologerId}`);

            console.log("astrologersDetail", res);

            if (res.data.status === true) {
                setData(res?.data?.data);
            }
            else {
                console.error("error", e);
            }
        } catch (e) {
            console.error("error", e);
        }
    }

    useEffect(() => {
        AstrologerDetails();
    }, [state]);

    const options = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 }
        }
    };

    const serviceOptions = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1.3 },
            1000: { items: 2 },
            1200: { items: 2.2 }
        }
    };

    return (
        <>

            {/* -------- Astrologer-Details-Banner Start -------- */}
            <div className="astrologer-details-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                {/* Talk with Our Expert <br /> */}
                                Astrologer Details
                            </h3>
                            <p>
                                Find clarity in love, career, and life. Connect with a <br className='d-none d-sm-block' />
                                professional astrologer today!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
            {/* -------- Astrologer-Details-Banner End -------- */}


            {/* -------- Astrologer-Details Start -------- */}
            <div className="astrologer-details ">
                <div className="pd">
                    <img src={data?.image} alt="" className='img-fluid astrologer-img' />

                    <div className='astrologer-title d-flex align-items-center mt-4'>
                        <h1>{data?.name}</h1>

                        <div className='review ms-5 d-flex align-items-center'>
                            <img src={RatingStar} alt="" className='review-img' />
                            <span className='ms-2 ms-sm-2 ms-xl-3'>4.8 (5,000 reviews)</span>
                        </div>
                    </div>

                    <h4>{data?.aboutYourself}</h4>
                    <h4>{data?.language}</h4>
                    <h4>Exp:{data?.experience}</h4>
                    <h4>₹ {data?.price ? data?.price : 0}</h4>

                    <h5>About the {data?.name}</h5>

                    <p className='mb-4 mb-lg-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <p>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>


                <div className='customer-review'>
                    <h5 className='pd'>Customer Review</h5>

                    <OwlCarousel className='owl-theme' {...serviceOptions}>
                        <div className="box d-sm-flex">
                            <div className='customer-img'>
                                <img src={CustomerReview} alt="" className='' />
                            </div>
                            <div className="info">
                                <div className='d-flex'>
                                    <h5>Vensia henry</h5>

                                    <Rating
                                        initialValue={4}
                                        readonly
                                        size={26}
                                        fillColor="#FFC403"
                                        emptyColor="#D9D9D9"
                                        className="star-spacing"
                                    />
                                </div>
                                <p className='date'>2 hours ago</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                            </div>
                        </div>
                        <div className="box d-sm-flex">
                            <div className='customer-img'>
                                <img src={CustomerReview} alt="" className='' />
                            </div>
                            <div className="info">
                                <div className='d-flex'>
                                    <h5>Vensia henry</h5>

                                    <Rating
                                        initialValue={4}
                                        readonly
                                        size={26}
                                        fillColor="#FFC403"
                                        emptyColor="#D9D9D9"
                                        className="star-spacing"
                                    />
                                </div>
                                <p className='date'>2 hours ago</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>


                <div className='spell'>
                    <h5 className='pd'>Spell</h5>

                    <OwlCarousel className='owl-theme' {...options}>
                        {[Spell1, Spell2, Spell3, Spell4].map((spell, index) => (
                            <div className="box" key={index}>
                                <img src={spell} alt="Spell" className='w-100' />
                                <h4>{index % 2 === 0 ? "Love Honey" : "Protection"}</h4>
                                <p>Celestial Insights, Zodiac Revelations</p>
                            </div>
                        ))}
                    </OwlCarousel>

                    {/* <div className='row g-5'>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={Spell1} alt="" className='w-100' />

                                <h4>Love Honey</h4>
                                <p>
                                    Celestial Insights, Zodiac
                                    Revelations
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={Spell2} alt="" className='w-100' />

                                <h4>Protection</h4>
                                <p>
                                    Celestial Insights, Zodiac
                                    Revelations
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={Spell3} alt="" className='w-100' />

                                <h4>Love Honey</h4>
                                <p>
                                    Celestial Insights, Zodiac
                                    Revelations
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={Spell4} alt="" className='w-100' />

                                <h4>Protection</h4>
                                <p>
                                    Celestial Insights, Zodiac
                                    Revelations
                                </p>
                            </div>
                        </div>

                    </div> */}
                </div>


                <div className='service'>
                    <h5 className='pd'>Service</h5>

                    <OwlCarousel className='owl-theme' {...serviceOptions}>
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='service-img'>
                                <img src={Service12} alt="" className='im' />
                            </div>
                            <div className="info">
                                <h5>Daily Horoscope</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                            </div>
                        </div>
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='service-img'>
                                <img src={Service22} alt="" className='im' />
                            </div>
                            <div className="info">
                                <h5>Daily Horoscope</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>


                <div className='text-end mt-2 mt-lg-4 pd'>
                    <button className='main-btn' onClick={handleBooking}>
                        Book Now
                    </button>
                </div>
            </div>
            {/* -------- Astrologer-Details End -------- */}


        </>
    )
}

export default AstrologerDetails;