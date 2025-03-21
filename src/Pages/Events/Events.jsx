import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Events.css";
import Blog1 from "../../assets/Images/Blogs/Blog1.png";
import Blog2 from "../../assets/Images/Blogs/Blog2.png";
import Blog3 from "../../assets/Images/Blogs/Blog3.png";
import Date from "../../assets/Images/Date.png";
import Location from "../../assets/Images/Location.png";
import Events1 from "../../assets/Images/Events/Events1.png";
import Events2 from "../../assets/Images/Events/Events2.png";
import Events3 from "../../assets/Images/Events/Events3.png";
import Events4 from "../../assets/Images/Events/Events4.png";
import { Axios } from '../../helper/Axios';

const Events = () => {

    const navigate = useNavigate();
    const [eventList, setEventList] = useState([]);

    const handleEventDetails = (id) => {
        navigate("/event-details", { state: id });
    }

    const getEventList = async () => {
        try {
            const res = await Axios.get("/events/list");

            console.log("blogList", res);

            if (res?.data?.status === true) {
                setEventList(res?.data?.data);
            }
            else {
                console.error("Error++");
            }
        } catch (e) {
            console.error("error", e);
        }
    }

    useEffect(() => {
        getEventList();
    }, [])

    return (
        <>
            {/* -------- Events-Banner Start -------- */}
            <div className="events-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Events
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
            {/* -------- Events-Banner End -------- */}


            {/* -------- Events Start -------- */}
            <div className="events pd">
                <div className="row g-4">
                    {eventList.length === 0 ?
                        <p className='py-4 nodata-text'>No Data Found</p>
                        :
                        eventList?.map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-6">
                                        <div className="box d-sm-flex align-items-sm-center">
                                            <div className='events-img'>
                                                <img src={item?.thumbnail} alt="" className='' style={{ width: '202px', height: '202px', borderRadius: '17px' }} />
                                            </div>
                                            <div className='info'>
                                                <h4>{item?.name}</h4>
                                                <p>
                                                    {item?.description}
                                                </p>
                                                <div className='date d-flex align-items-center'>
                                                    <img src={Date} alt="" className='img-fluid' />
                                                    <span className='ms-2'>{item?.date}/{item?.time}</span>
                                                </div>
                                                <div className='date d-flex align-items-center mt-2'>
                                                    <img src={Location} alt="" className='img-fluid' />
                                                    <span className='ms-2'>{item?.location}</span>
                                                </div>
                                                <button className='main-btn' onClick={() => handleEventDetails(item?.id)}>
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    {/* <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='events-img'>
                                <img src={Events2} alt="" className='' />
                            </div>
                            <div className='info'>
                                <h4>Stargazers’ Summit</h4>
                                <p>
                                    A spell is magical formula
                                    indented  to trigger a magical
                                    effect on a person or objects...
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>01 Feb, 2025 / 5:30 pm</span>
                                </div>
                                <div className='date d-flex align-items-center mt-2'>
                                    <img src={Location} alt="" className='img-fluid' />
                                    <span className='ms-2'>Sector 17, Noida, Uttar Pradesh</span>
                                </div>
                                <button className='main-btn' onClick={handleEventDetails}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='events-img'>
                                <img src={Events3} alt="" className='' />
                            </div>
                            <div className='info'>
                                <h4>Celestial Insights</h4>
                                <p>
                                    A spell is magical formula
                                    indented to trigger a magical
                                    effect on a person or objects...
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>01 Feb, 2025 / 5:30 pm</span>
                                </div>
                                <div className='date d-flex align-items-center mt-2'>
                                    <img src={Location} alt="" className='img-fluid' />
                                    <span className='ms-2'>Sector 17, Noida, Uttar Pradesh</span>
                                </div>
                                <button className='main-btn' onClick={handleEventDetails}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='events-img'>
                                <img src={Events4} alt="" className='' />
                            </div>
                            <div className='info'>
                                <h4>The Zodiac Experience</h4>
                                <p>
                                    A spell is magical formula
                                    indented to trigger a magical
                                    effect on a person or objects...
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>01 Feb, 2025 / 5:30 pm</span>
                                </div>
                                <div className='date d-flex align-items-center mt-2'>
                                    <img src={Location} alt="" className='img-fluid' />
                                    <span className='ms-2'>Sector 17, Noida, Uttar Pradesh</span>
                                </div>
                                <button className='main-btn' onClick={handleEventDetails}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* -------- Events End -------- */}

        </>
    )
}

export default Events;