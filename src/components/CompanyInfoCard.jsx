import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import company from "../assets/company.png";
import "./CompanyInfoCard.css";

const CompanyInfoCard = () => {
    return (
        <div className='company-info-card-head align-items-center'>
            <img src={company} alt="" className='company-logo rounded-circle' />
            <div className=''>
                <div className='company-info-card-header align-items-center'>
                    <h2>Company Name</h2>
                    <p>Active Listing <span>/ 5</span></p>
                    <p>Agent <span>/ 3</span></p>
                    <p>Location <span>/ Dubai</span></p>
                    <p>Review <span>/ 8342</span></p>
                    <div className='company-info-card-icon'>
                        <span className='px-1'><FcLike /></span>
                        <span className='px-1'><CiLocationOn /></span>
                        <span className='px-1'><IoShareSocialSharp /></span>

                    </div>
                </div>
                <p className='comapny-info-card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.</p>
            </div>
        </div>
    )
}

export default CompanyInfoCard