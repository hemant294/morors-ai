import React from 'react'
import agentImg from "../assets/agent.png";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

const AgentInfoCard = () => {
    return (
        <div>
            <div className='company-info-card-head '>
                <img src={agentImg} alt="" className='company-logo rounded-circle' />
                <div className=''>
                    <div className='company-info-card-header '>
                        <h2>Agent Name</h2>
                        <p>Active Listing <span>/ 5</span></p>
                        <p>Experience since <span>/ 2022</span></p>
                        <p>Company <span>/ Royal Car</span></p>
                        <p>Review <span>/ 643</span></p>
                        <div className='company-info-card-icon'>
                            <span className='px-1'><FcLike /></span>
                            <span className='px-1'><CiLocationOn /></span>
                            <span className='px-1'><IoShareSocialSharp /></span>
                        </div>
                    </div>
                    <p className='comapny-info-card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.</p>
                </div>
            </div>
            <p className='comapny-info-card-description-mob'>Lot tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.</p>
        </div>
    )
}

export default AgentInfoCard