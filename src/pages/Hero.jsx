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
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='main-home'>
                <div className='hero-image-group'>
                    <motion.div
                        className='hero-images-head'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div>
                        <p className='card-tag'>SUVs</p>
                        <img src={img1} alt="" className='hero-images' />
                        </div>
                    </motion.div>
                    <motion.div
                        className='hero-images-head'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img2} alt="" className='hero-images' style={{ marginBottom: "40px" }} />
                        <img src={img3} alt="" className='hero-images' />
                    </motion.div>
                    <motion.div
                        className='hero-images-head'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img4} alt="" className='hero-images' style={{ marginTop: "-25px", marginBottom: '30px' }} />
                        <img src={robot} alt="" className='hero-robot' />
                    </motion.div>
                    <motion.div
                        className='hero-images-head'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img5} alt="" className='hero-images' style={{ marginTop: "60px", marginBottom: "40px" }} />
                        <img src={img6} alt="" className='hero-images' />
                    </motion.div>
                    <motion.div
                        className='hero-images-head'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img1} alt="" className='hero-images' />
                    </motion.div>
                </div>
                <div className='hero-image-group-mobile'>
                    <motion.div
                        className='hero-images-head-mobile'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img2} alt="" className='hero-images-mobile' style={{marginTop: "-35px"}}/>
                        <img src={img3} alt="" className='hero-images-mobile' />
                    </motion.div>
                    <motion.div
                        className='hero-images-head-mobile'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img1} alt="" className='hero-images-mobile' />
                        <img src={img4} alt="" className='hero-images-mobile' />
                        {/* <img src={robot} alt="" className='hero-images-mobile' /> */}
                    <img src={img1} alt="" className='hero-images-mobile' />
                    </motion.div>
                    <motion.div
                        className='hero-images-head-mobile'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <img src={img5} alt="" className='hero-images-mobile' style={{marginTop: "35px"}}/>
                        <img src={img6} alt="" className='hero-images-mobile' />
                    </motion.div>
                </div>
                <div className='mobile-view-robot-head mt-4'>
                <img src={robot} alt="" srcset="" className='mobile-view-robot'/>
                </div>
                <h1 className='hero-text mt-1'>Find Your Motor with AI-Powered Agent</h1>
                <div className='d-flex justify-content-between head-input-create rounded-pill'>
                    <p className='input-text'><span style={{ color: "#F800C0", paddingBottom: "5px" }}>|</span> Ask me anything about motors...</p>
                    <div className='d-flex align-items-center'>
                        <img src={lance} className='google-lance-logo' />
                        <img src={micro} className='micke-icon' />
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
    )
}

export default Hero