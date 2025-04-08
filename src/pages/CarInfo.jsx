import React from 'react'
import "./CarInfo.css";
import car1 from "../assets/car1.png";
import addLogo from "../assets/addLogo.png";
import carImag from "../assets/Rectangle 14878.png"
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import face from "../assets/lady.png";
import { MdOutlineStarPurple500, MdStarBorderPurple500, MdStarBorder } from "react-icons/md";
import { MdOutlineUpload } from "react-icons/md";
import CarDetails from '../components/CarDetails';
import CarCollections from '../components/CarCollections';

const CarInfo = () => {
    return (
        <div className='car-info-head'>
            <div className='car-infomation-card rounded-4'>
                <CarDetails />
            </div>
            <div className='car-info-right-card rounded-4'>
                <CarCollections />
            </div>
        </div>
    )
}

export default CarInfo