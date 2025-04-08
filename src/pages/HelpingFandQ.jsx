import React from 'react'
import "./HelpingFandQ.css";
import { MdOutlineEmail, MdWhatsapp, MdPeopleAlt } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import EnquiryBanner from '../components/EnquiryBanner';
import FaqSection from '../components/FaqSection';
import buyThumbnail from '../assets/buyThumbnall.png';
import VideoCard from '../components/VideoCard';

const HelpingFandQ = () => {
    return (
        <>
            <div className='help-FQ-head mt-5'>
                <div className='help-head'>
                    <h2>Help Center</h2>
                    <div className='help-center-desktop'>
                        <div className='d-flex help-dilog-head'>
                            <div className='icon-head'>
                                <MdOutlineEmail className='icon-main' />
                            </div>
                            <div className='help-text-head ps-3'>
                                <h6>Email Support</h6>
                                <h5>arihant@zmediostech.com</h5>
                            </div>
                        </div>
                        <div className='d-flex help-dilog-head'>
                            <div className='icon-head'>
                                <MdWhatsapp className='icon-main' />
                            </div>
                            <div className='help-text-head ps-3'>
                                <h6>WhatsApp Supportt</h6>
                                <h5>+91 8561073404</h5>
                            </div>
                        </div>
                        <div className='d-flex help-dilog-head '>
                            <div className='icon-head'>
                                <MdPeopleAlt className='icon-main' />
                            </div>
                            <div className='help-text-head ps-3'>
                                <h6>Help us make your experience better.</h6>
                                <h5>Leave Feedback</h5>
                            </div>
                        </div>
                        <div className='d-flex help-dilog-head '>
                            <div className='icon-head'>
                                <FaWpforms className='icon-main' />
                            </div>
                            <div className='help-text-head ps-3'>
                                <h6>Fill a Form</h6>
                                <h5>Get Quick Solution</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='horizantal'></div>
                <div className="video-explain-head">
                    <VideoCard title="How to Buy" thumbnail={buyThumbnail} videoUrl="https://www.youtube.com/watch?v=aqz-KE-bpKQ" />
                    <VideoCard title="How to Sell" thumbnail={buyThumbnail} videoUrl="https://www.youtube.com/watch?v=aqz-KE-bpKQ" />
                    <VideoCard title="How to Rent" thumbnail={buyThumbnail} videoUrl="https://www.youtube.com/watch?v=aqz-KE-bpKQ" />
                </div>  

                <div className='horizantal'></div>
                <FaqSection />
            </div>
            <EnquiryBanner />
        </>
    )
}

export default HelpingFandQ