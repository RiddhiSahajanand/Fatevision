import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Blogs.css";
import Blog1 from "../../assets/Images/Blogs/Blog1.png";
import Blog2 from "../../assets/Images/Blogs/Blog2.png";
import Blog3 from "../../assets/Images/Blogs/Blog3.png";
import Date from "../../assets/Images/Date.png";
import { Axios } from '../../helper/Axios';

const Blogs = () => {

    const navigate = useNavigate();
    const [blogList, setBlogList] = useState([]);

    const handleBlogDetails = (id) => {
        navigate(`/blog-details/${id}`);
    }

    const getBlogList = async () => {
        try {
            const res = await Axios.get("/blog/list");

            console.log("blogList", res);

            if (res.data.status === true) {
                setBlogList(res?.data?.data);
            }
            else {
                console.error("Error++");
            }
        } catch (e) {
            console.error("error", e);
        }
    }

    useEffect(() => {
        getBlogList();
    }, [])

    return (
        <>

            {/* -------- Blogs-Banner Start -------- */}
            <div className="blogs-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Blogs
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
            {/* -------- Blogs-Banner End -------- */}


            {/* -------- Blogs Start -------- */}
            <div className="blogs pd">
                <div className="row g-4">
                    {blogList?.map((item, index) => {
                        return (
                            <>
                                <div className="col-lg-6">
                                    <div className="box d-sm-flex align-items-sm-center cursor-pointer" >
                                        <div className=''>
                                            <img src={item?.image} alt="" className='' style={{ width: '222px', height: '222px', borderRadius: '17px' }} />
                                        </div>
                                        <div className='info'>
                                            <h4>{item?.title}</h4>
                                            <p>{item?.description}</p>
                                            <div className='date d-flex align-items-center'>
                                                <img src={Date} alt="" className='img-fluid' />
                                                <span className='ms-2'>{item?.date}</span>
                                            </div>
                                            <button className='main-btn' onClick={() => handleBlogDetails(item?.id)}>
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div >
                                {/* <div className="col-lg-6">
                                    <div className="box d-sm-flex align-items-sm-center">
                                        <div className='info'>
                                            <h4>{item?.title}</h4>
                                            <p>
                                                {item?.description}
                                            </p>
                                            <div className='date d-flex align-items-center'>
                                                <img src={Date} alt="" className='img-fluid' />
                                                <span className='ms-2'>{item?.date}</span>
                                            </div>
                                            <button className='main-btn' onClick={() => handleBlogDetails(item?.id)}>
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        )
                    })}
                    {/* <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='info'>
                                <h4>Wolf Moon January 2025: Astrology Predictions, Spiritual Meaning & Rituals</h4>
                                <p>
                                    The January 2025 Wolf Moon is a celestial event that has captivated stargazers, astrologers, and spiritual seekers for centuries. As the first full moon of 2025, it carries profound symbolism, marking a time of introspection, renewal, and spiritual awakening. But what does the Wolf Moon mean in astrology? How can you harness its energy to align with your goals and intentions? Let’s dive deep into the mystical significance of the January 2025 Wolf Moon and explore how it influences the zodiac signs.
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>11 Feb, 2025</span>
                                </div>
                                <button className='main-btn' onClick={() => handleBlogDetails(item?.id)}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='info'>
                                <h4>Planetary Alignment 2025: Astrological Significance & Meaning</h4>
                                <p>
                                    The universe is constantly in motion, and in 2025, we are set to witness some fascinating planetary alignments that will shape the cosmic energy around us. Whether you are a seasoned astrologer or just beginning to explore the wonders of the stars, understanding these celestial events can help you harness their power and navigate the year with clarity.
                                    In this blog, we will dive into the planetary alignments of 2025, their astrological significance, and how they may impact your personal and collective experiences. So, if you’re ready to embrace the magic of the cosmos, let’s explore what the planets have in store for us!
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>12 Feb, 2025</span>
                                </div>
                                <button className='main-btn' onClick={() => handleBlogDetails("Planetary Alignment 2025")}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box d-sm-flex align-items-sm-center">
                            <div className='info'>
                                <h4>Axe Astrology 2025: A Complete Guide to Navigating Your Future</h4>
                                <p>
                                    Astrology has always fascinated humanity, offering a unique way to understand ourselves, our relationships, and our place in the universe. As we approach 2025, the world of Axe Astrology promises exciting new insights, deeper connections with the cosmos, and even more opportunities for personal growth. Whether you're a seasoned astrology enthusiast or new to the world of celestial guidance, Axe Astrology in 2025 offers valuable wisdom that can help you make empowered decisions and live in alignment with your true self.
                                </p>
                                <div className='date d-flex align-items-center'>
                                    <img src={Date} alt="" className='img-fluid' />
                                    <span className='ms-2'>12 Feb, 2025</span>
                                </div>
                                <button className='main-btn' onClick={() => handleBlogDetails("Axe Astrology 2025")}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* -------- Blogs End -------- */}

        </>
    )
}

export default Blogs;