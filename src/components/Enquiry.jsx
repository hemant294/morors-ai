import React from 'react'
import "./Enquiry.css";
import robot from "../assets/Ellipse 1180.png"
import micro from "../assets/microphone.png"
import { IoMdNavigate } from "react-icons/io";

const Enquiry = () => {
    return (
        <div className='text-center queary-ai-first'>
            <img src={robot} alt="" className='robot-img'/>
            <h2 className='text-light pt-4'>Hey, I'am Lina</h2>
            <h4 className='text-light'>Your Personal AI Motor Agent</h4>
            <div className='d-flex mt-4 justify-content-between head-input-create-home rounded-pill'>
                <p className='input-text-home'><span style={{ color: "#F800C0", paddingBottom: "5px" }}>|</span> Ask me anything about motors...</p>
                <div className='d-flex align-items-center'>
                    <img src={micro} className='micke-icon-home' />
                    <p className='submit-icon-head-home rounded-circle'>
                        <IoMdNavigate className='submit-icon-home' />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Enquiry