import React from 'react'
import "./Home.css";
import carsList from "../assets/carsList.png"
import car1 from "../assets/car1.png";
import addLogo from "../assets/addLogo.png";
import Enquiry from '../components/Enquiry';
import CarCollections from '../components/CarCollections';
import EnquiryBanner from '../components/EnquiryBanner';

const Home = () => {
    return (
        <div>
            <div className='pt-3'>
                <img src={carsList} className='carslist-home' alt="detials of cras" />
            </div>
            <div className='home-flex-content pt-4 mb-5'>
                <Enquiry />
                <div className='car-product-list-head'>
                    <CarCollections />
                </div>
            </div>
            <EnquiryBanner />
        </div>
    )
}

export default Home