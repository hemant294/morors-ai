import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Hero.css";
import lance from "../assets/Google_Lens.png"
import micro from "../assets/microphone.png"
import { IoMdNavigate } from "react-icons/io";
import img1 from "../assets/Rectangle 14869.png"
import img2 from "../assets/Rectangle 14872.png"
import img3 from "../assets/Rectangle 14874.png"
import img4 from "../assets/Rectangle 14876.png"
import img5 from "../assets/Rectangle 14878.png"
import img6 from "../assets/Rectangle 14880.png"
import robot from "../assets/Ellipse 1180.png"
import group from "../assets/Group 1000009390.png"

const Hero = () => {
    return (
        <div className=''>
            <div className="">
                <div className='row hero-image-group'>
                    <div className='col hero-images-head'>
                        <img src={img1} alt="" className='hero-images' />
                    </div>
                    <div className='col hero-images-head'>
                        <img src={img2} alt="" className='hero-images' style={{ marginBottom: "40px" }} />
                        <img src={img3} alt="" className='hero-images' />
                    </div>
                    <div className='col hero-images-head'>
                        <img src={img4} alt="" className='hero-images' style={{ marginTop: "-25px", marginBottom: '30px' }} />
                        <img src={robot} alt="" className='hero-robot' />
                    </div>
                    <div className='col hero-images-head'>
                        <img src={img5} alt="" className='hero-images' style={{ marginTop: "30px", marginBottom: "30px" }} />
                        <img src={img6} alt="" className='hero-images' />
                    </div>
                    <div className='col hero-images-head'>
                        <img src={img1} alt="" className='hero-images' />
                    </div>
                </div>
                <h1 className='hero-text mt-5'>Find Your Motor with AI-Powered Agent</h1>
                <div className='d-flex justify-content-between head-input-create rounded-pill'>
                    <p className='input-text'><span style={{ color: "#F800C0", paddingBottom: "5px" }}>|</span> Ask me anything about motors...</p>
                    <div className='d-flex align-items-center'>
                        <img src={lance} className='google-lance-logo me-3' />
                        <img src={micro} className='micke-icon me-3' />
                        <p className='submit-icon-head rounded-circle'>
                            <IoMdNavigate className='submit-icon' />
                        </p>
                    </div>
                </div>
                <div className='text-center pt-3'>
                    <img src={group} alt="" style={{ width: "35px", height: "35px" }} />
                    <span className='ps-2' style={{ fontSize: "16px", color: "#F800C0" }}>Register with Motors</span>
                </div>
            </div>
        </div>
    )
}

export default Hero