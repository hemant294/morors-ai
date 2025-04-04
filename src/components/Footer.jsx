import React from 'react'
import "./Footer.css";
import { TiSocialLinkedin, TiSocialYoutube, TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='d-flex justify-content-between align-items-center footer-head fixed-bottom mb-3'>
        <h5 className='footer-text'>© 2025  Copyright motorsfinder.ai / All Rights Reserved.</h5>
        <div className='head-social-media-icon'>
            <TiSocialLinkedin className='social-media-icon'/>
            <TiSocialYoutube className='social-media-icon'/>
            <TiSocialFacebook className='social-media-icon'/>
            <SlSocialInstagram className='social-media-icon'/>
            <RiTwitterXFill className='social-media-icon'/>
        </div>
        <div className='d-flex justify-content-between align-items-end'>
            <h5 className='footer-tag'>Language: <span className=''>English</span></h5>
            <h5 className='footer-tag'>Country: <span>UAE</span></h5>
            <h5 className='footer-tag'>About</h5>
            <h5 className='footer-tag'>Privacy</h5>
            <h5 className='footer-tag'>Help Center</h5>
        </div>
    </div>
  )
}

export default Footer