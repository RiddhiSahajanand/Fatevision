import React, { useEffect, useState } from 'react';
import "./EventDetails.css";
import EventDetails1 from "../../assets/Images/Events/EventDetails1.png";
import RatingStar from "../../assets/Images/Astrologer/RatingStar.png";
import Date2 from "../../assets/Images/Date2.png";
import Location2 from "../../assets/Images/Location2.png";
import EventImages1 from "../../assets/Images/Events/EventImages1.png";
import EventImages2 from "../../assets/Images/Events/EventImages2.png";
import EventImages3 from "../../assets/Images/Events/EventImages3.png";
import EventImages4 from "../../assets/Images/Events/EventImages4.png";
import EventAstrologerDetail from "../../assets/Images/Events/EventAstrologerDetail.png";
import { useLocation } from 'react-router-dom';
import { Axios } from '../../helper/Axios';

const EventDetails = () => {
    const state = useLocation();
    const eventId = state?.state;
    const [data, setData] = useState({});

    const eventDetails = async () => {
        try {
            const res = await Axios.get(`/events/detail/${eventId}`);

            console.log("eventDetail", res);

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
        eventDetails();
    }, [state]);

    return (
        <>

            {/* -------- Event-Details-Banner Start -------- */}
            <div className="events-details-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Event Details
                            </h3>
                            <p>
                                This transformative event brings together astrology <br className='d-none d-sm-block' />
                                enthusiasts, experts, and seekers to explore the <br className='d-none d-sm-block' />
                                celestial forces shaping our lives.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
            {/* -------- Event-Details-Banner End -------- */}


            {/* -------- Event-Details Start -------- */}
            <div className="event-details pd">
                <img src={EventDetails1} alt="" className='img-fluid event-img' />

                <h1>{data?.event?.name}</h1>

                <div className='date d-flex align-items-center'>
                    <img src={Date2} alt="" className='date-img' />
                    <span className='ms-2 ms-sm-2 ms-xl-3'>{data?.event?.date}/ {data?.event?.time}</span>
                </div>

                <div className='date d-flex align-items-center'>
                    <img src={Location2} alt="" className='date-img' />
                    <span className='ms-2 ms-sm-2 ms-xl-3'>{data?.event?.location}</span>
                </div>

                <p className='mb-3 mb-xl-3 mb-xxl-4'>
                    {data?.event?.description}
                </p>

                <div className="event-images">
                    <h5>Event Images</h5>

                    <div className='row g-5'>
                        {data?.images?.map((item, index) => {
                            return (
                                <>
                                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                        <div className="box">
                                            <img src={item?.image} alt="" className='w-100' style={{ height: '280px' }} />
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        {/* <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={EventImages1} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={EventImages2} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={EventImages3} alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <img src={EventImages4} alt="" className='w-100' />
                            </div>
                        </div> */}

                    </div>
                </div>

                <div className="event-astrologer">
                    <h5>Event Astrologer Detail</h5>

                    <div className='row g-5'>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <div className="box d-md-flex align-items-md-center">
                                <div className="event-astrologer-img">
                                    <img src={EventAstrologerDetail} alt="" className='' />
                                </div>
                                <div className="info">
                                    <div className='d-flex align-items-center mb-2'>
                                        <h4 className=''>Krishna Joshi</h4>

                                        <div className='review ms-2 ms-md-4 d-flex align-items-center'>
                                            <img src={RatingStar} alt="" className='review-img' />
                                            <span className='ms-2 ms-sm-2 ms-xl-3'>4.8 (5,000 reviews)</span>
                                        </div>
                                    </div>

                                    <p>Vasthu consultation, Vedic .. </p>
                                    <p>English, Hindi</p>
                                    <p>Exp: 8 Years</p>

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries,
                                    </p>

                                    <button className='main-btn'>
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* -------- Event-Details End -------- */}

        </>
    )
}

export default EventDetails;