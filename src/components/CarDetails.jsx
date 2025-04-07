import React from 'react'
import "./CarDetails.css"
import carImag from "../assets/Rectangle 14878.png"
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import face from "../assets/lady.png";
import { MdOutlineStarPurple500, MdStarBorderPurple500, MdStarBorder } from "react-icons/md";
import { MdOutlineUpload } from "react-icons/md";

const CarDetails = () => {
  return (
    <div className=''>
      <div>
        <CiLocationOn className='location-icon' />
        <IoShareSocialSharp className='share-icon' />
        <img src={carImag} alt="car image" className='car-info-logo' />
      </div>
      <div className='time-info-car d-flex justify-content-between'>
        <p>Daily <span>/ AED 2500</span></p>
        <p>Weekly <span>/ AED 2500</span></p>
        <p>Monthly <span>/ AED 2500</span></p>
      </div>
      <div className='horizantal'></div>
      <div className='description-car-info'>
        <h5>Description</h5>
        <p>Rent and Drive this Cadillac Escalade Platinum Sport 2023-model in Dubai, UAE  for AED 950/day & AED 22000/month. Rental cost includes basic comprehensive insurance and standard mileage limit of 250 km/day (AED 3 per additional km applicable). Security deposit of AED 2000 is required. Contact Speedy Machine Car Rental directly for bookings and inquiries...</p>
      </div>
      <div className='horizantal'></div>
      <div className='overview-car-info'>
        <h5>Overview</h5>
        <div>
          <p>Body Type <span>/ SUV</span></p>
          <p>Salik / Toll Charges <span>/ AED 5</span></p>
          <p>Daily <span>/ Escalade Platinum Sport</span></p>
          <p>Seating Capacity <span>/ 7 Passengers</span></p>
          <p>Fits No. of Bags <span>/ 3</span></p>
          <p>Exterior / Interior Color <span>/ Black & Blue</span></p>
        </div>
        <button
          type="button"
          className="btn rounded-pill overview-btn me-3 mt-4"
        >
          Enquiry Now
        </button>
        <button
          type="button"
          className="btn rounded-pill overview-btn mt-4"
        >
          Talk to Agent
        </button>
      </div>
      <div className='horizantal'></div>
      <div className='review-car-info'>
        <h5>Write a Review</h5>
        <p>Read Reviews</p>
      </div>
      <div className='ratings-car-info d-flex justify-content-between align-items-center'>
        <img src={face} alt="face icon" className='face-logo' />
        <p className='text-light m-0 font-weight-bold' >Simon Quitzon</p>
        <div className='text-light'>
          <MdOutlineStarPurple500 className='fs-4' style={{ color: "#F800C0" }} />
          <MdStarBorderPurple500 className='fs-4' style={{ color: "#F800C0" }} />
          <MdStarBorderPurple500 className='fs-4' style={{ color: "#F800C0" }} />
          <MdStarBorderPurple500 className='fs-4' style={{ color: "#F800C0" }} />
          <MdStarBorderPurple500 className='fs-4' style={{ color: "#F800C0" }} />
        </div>
        <div className='add-photo-btn-head'>
          <button className='rounded-pill'>Add some photos <span className="fs-4" style={{ color: "#7670FF" }}><MdOutlineUpload /></span></button>
        </div>
      </div>
      <div className='mb-3 enquiry-car-info d-flex align-items-center justify-content-around'>
        <input type="text" placeholder='Type your review here...' className='rounded-pill' />
        <button
          type="button"
          className="btn rounded-pill"
        >
          Submit Review
        </button>
      </div>
    </div>
  )
}

export default CarDetails