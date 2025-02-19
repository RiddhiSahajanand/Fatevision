import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BookingForm.css";

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const countries = [
    { code: 'us', name: 'United States', dialCode: '+1', flag: '/assets/flags/us.png' },
    { code: 'uk', name: 'United Kingdom', dialCode: '+44', flag: '/assets/flags/uk.png' },
    { code: 'fr', name: 'France', dialCode: '+33', flag: '/assets/flags/fr.png' },
];

const BookingForm = () => {

    const navigate = useNavigate();

    // const phoneInputRef = useRef(null); // Reference to the phone input element
    // const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number

    // console.log("phoneNumber++", phoneNumber, phoneInputRef);

    // useEffect(() => {
    //     // Initialize intl-tel-input when the component mounts
    //     const iti = intlTelInput(phoneInputRef.current, {
    //         utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js', // Required utility script
    //         initialCountry: 'us', // Default country (you can change this)
    //         preferredCountries: ['us', 'gb', 'ca'], // Preferred countries
    //         separateDialCode: true,
    //     });

    //     // Cleanup on unmount
    //     return () => {
    //         iti.destroy();
    //     };
    // }, []);

    // const handlePhoneChange = () => {
    //     const iti = intlTelInput(phoneInputRef.current);
    //     setPhoneNumber(iti.getNumber()); // Get the full international number
    // };



    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };



    return (
        <>

            {/* -------- Booking-Banner Start -------- */}
            <div className="register-banner pd">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <h3>
                                Connect With Our Expert <br />
                                Astrologer
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
            {/* -------- Booking-Banner End -------- */}


            {/* -------- Booking-Form Start -------- */}
            <div className="register-form booking-form md">
                <div className="title">
                    Please Fill-out Below Details For Connect
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
                            {/* <input
                                type="number"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder='Mobile Number'
                                autoComplete='off'
                                required
                            /> */}

                            {/* <input
                                ref={phoneInputRef}
                                type="tel"
                                className="form-control w-100"
                                placeholder="Mobile Number"
                                autoComplete="off"
                                required
                                onChange={handlePhoneChange}
                            /> */}

                            {/* <div className="phone-input-container" style={{ width: '100%' }}>
                                <input
                                    ref={phoneInputRef}
                                    type="tel"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    autoComplete="off"
                                    required
                                    onChange={handlePhoneChange}
                                    style={{ width: '100%' }} 
                                />
                            </div> */}

                            <PhoneInput
                                placeholder="Mobile Number"
                                country={'in'}
                                inputClass="form-control contry"
                                specialLabel=""
                                enableSearch
                                maxLength="10"
                                inputProps={{
                                    required: true,
                                }}
                                separateDialCode={true}
                                // disableDropdown={true}  
                                // buttonClass="d-none"
                            />
                        </div>

                        {/* <div className="d-none col-lg-6 mb-4">
                            <div className="d-flex align-items-center"  style={{ position: 'relative' }}>
                                <select
                                    style={{
                                        position: 'absolute',
                                        // transform: 'translateY(-50%)',
                                        border: "0",
                                        color: '#6c757d',
                                        backgroundColor: "transparent",
                                        cursor: 'pointer',
                                        zIndex: "999",
                                        paddingLeft: "18px"
                                    }}
                                    value={selectedCountry.code}
                                    onChange={(e) =>
                                        handleCountryChange(countries.find((country) => country.code === e.target.value))
                                    }
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.dialCode}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder='Mobile Number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    autoComplete='off'
                                    required
                                />
                            </div>
                        </div>

                        <div className='d-none' style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                                <select
                                    value={selectedCountry.code}
                                    onChange={(e) =>
                                        handleCountryChange(countries.find((country) => country.code === e.target.value))
                                    }
                                    style={{ border: 'none', outline: 'none', marginRight: '10px' }}
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.dialCode}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    style={{ flex: 1, marginLeft: '10px', border: 'none', outline: 'none' }}
                                />
                            </div>
                        </div> */}

                        <div className="col-lg-6 mb-4">
                            <input
                                type="date"
                                name="minute"
                                id="minute"
                                className="form-control"
                                placeholder='Please Select Date'
                                autoComplete='off'
                                required
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="time"
                                name="time"
                                id="time"
                                className="form-control"
                                placeholder='Please Select Time'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                pattern="\d*"
                                name="minute"
                                id="minute"
                                className="form-control"
                                placeholder='Please Enter Minute'
                                autoComplete='off'
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                required
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                className="form-control"
                                placeholder='Please Enter City'
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className="col-lg-12 mb-4">
                            <textarea
                                type="text"
                                name="about"
                                id="about"
                                className="form-control"
                                placeholder='Please Enter Message'
                                autoComplete='off'
                                required
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className='text-end mt-4'>
                            <button type='button' className='main-btn mb-0 mb-lg-0 me-3 me-lg-3' onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type='submit' className='main-btn'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* -------- Booking-Form End -------- */}

        </>
    )
}

export default BookingForm;