import React from 'react'
import backImg from "../assets/EnquiryCar.png";
import enquiryText from "../assets/EnquiryText.png";
import "./EnquiryBanner.css";
import playStore from "../assets/play-store.png";
import appleStore from "../assets/apple-store.png";
import appStore from "../assets/app-gallery.png";
import shadow from "../assets/EnquiryBackImgShadow.png";

const EnquiryBanner = () => {
    return (
        <div className='mt-5 mb-3'>
            <div className='banner-head'>
                <img src={enquiryText} alt="" className='enquiry-text' />
                <div className='enquiry-btn-head'>
                    <button
                        type="button"
                        className="btn rounded-pill enquiry-btn"
                    >
                        Enquiry Now
                    </button>
                </div>
                <img src={shadow} alt="" className='enquiry-shadow'/>
                <img src={backImg} alt="" className='backimg-enquiry' />
            </div>
            <div className='sub-banner mt-3'>
                <img src={appleStore} alt="" />
                <img src={playStore} alt="" />
                <img src={appStore} alt="" />
            </div>
        </div>
    )
}

export default EnquiryBanner