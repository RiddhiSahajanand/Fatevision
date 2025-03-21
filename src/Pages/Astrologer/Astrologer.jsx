import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Astrologer.css";
import Book1 from "../../assets/Images/Astrologer/Book1.png";
import Book2 from "../../assets/Images/Astrologer/Book2.png";
import Book3 from "../../assets/Images/Astrologer/Book3.png";
import { Axios } from '../../helper/Axios';

const Astrologer = () => {

    const navigate = useNavigate();

    const [astrologersList, setAstrologersList] = useState([]);
    console.log('====================================');
    console.log("astrologersList", astrologersList);
    console.log('====================================');

    const handleAstrologerDetails = (id) => {
        navigate("/astrologer-details", { state: id });
    }
    const getAstrologerList = async () => {
        try {
            const res = await Axios.get("/astrologers/list");

            console.log("astrologersList", res);

            if (res.data.status === true) {
                setAstrologersList(res.data.data);
            }
            else {
                console.error("JobList-Error++", e);
            }
        } catch (e) {
            console.error("error", e);
        }
    }
    useEffect(() => {
        getAstrologerList();
    }, [])

    return (
        <>

            {/* -------- Astrologer-Banner Start -------- */}
            <div className="astrologer-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Talk with Our Expert <br />
                                Astrologers
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
            {/* -------- Astrologer-Banner End -------- */}


            {/* -------- Astrologer-Booking Start -------- */}
            <div className="astrologer-booking pd">
                <div className="row g-4">
                    {astrologersList.length === 0 ?
                        <p className='py-4 nodata-text'>No Data Found</p>
                        :
                        astrologersList?.map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-6">
                                        <div className="box d-sm-flex align-items-sm-center cursor-pointer" onClick={() => handleAstrologerDetails(item?.id)}>
                                            <div className='astrologer-img'>
                                                <img src={item?.image} alt="" className='' style={{ width: '222px', borderRadius: '17px' }} />
                                            </div>
                                            <div className='info'>
                                                <h4>{item?.name}</h4>
                                                <h5>{item?.tag}</h5>
                                                <h5>{item?.language}</h5>
                                                <h5>{item?.experience}</h5>
                                                <h5>₹ {item?.price ? item?.price : 0}</h5>
                                                {/* <button className='main-btn' onClick={handleAstrologerDetails}> Book Now </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div >
            {/* -------- Astrologer-Booking End -------- */}


        </>
    )
}

export default Astrologer;