import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {

    const navigate= useNavigate();

    return (
        <>

            {/* -------- Register-Banner Start -------- */}
            <div className="register-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Join Us Our Expert <br />
                                Astrologer Team
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
            {/* -------- Register-Banner End -------- */}


            {/* -------- Register-Form Start -------- */}
            <div className="register-form md">
                <div className="title">
                    Please Fill-out Below Details For Join Us
                </div>

                <div className="">
                    <form className='row'>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder='Please Enter Name'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <select
                                name="gender"
                                id="gender"
                                className="form-select custom-select"
                                autoComplete='off'
                                required
                            >
                                <option selected>Please Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                name="vedas"
                                id="vedas"
                                className="form-control"
                                placeholder='Please Enter Vedas'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <select
                                name="language"
                                id="language"
                                className="form-select custom-select"
                                autoComplete='off'
                                required
                            >
                                <option selected>Please Select Language</option>
                                <option value="english">English</option>
                                <option value="gujarati">Gujarati</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                name="experience"
                                id="experience"
                                className="form-control"
                                placeholder='Please Enter Experience'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                pattern="\d*"
                                name="price"
                                id="price"
                                className="form-control"
                                placeholder='Please Enter Price'
                                autoComplete='off'
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                required
                            />
                        </div>
                        <div className="col-lg-12 mb-4">
                            <textarea
                                type="text"
                                name="about"
                                id="about"
                                className="form-control"
                                placeholder='Please Enter About Yourself'
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='text-end mt-4'>
                            <button type='button' className='main-btn mb-0 mb-lg-0 me-3 me-lg-3' onClick={()=> navigate(-1)}>
                                Cancel
                            </button>
                            <button type='submit' className='main-btn'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* -------- Register-Form End -------- */}

        </>
    )
}

export default Register;        