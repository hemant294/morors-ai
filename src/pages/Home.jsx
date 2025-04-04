import React from 'react'
import "./Home.css";
import carsList from "../assets/carsList.png"
import robot from "../assets/Ellipse 1180.png"
import micro from "../assets/microphone.png"
import { IoMdNavigate } from "react-icons/io";
import car1 from "../assets/car1.png";
import addLogo from "../assets/addLogo.png";

const Home = () => {
    return (
        <div>
            <div className='pt-3'>
                <img src={carsList} className='carslist-home' alt="detials of cras" />
            </div>
            <div className='row d-flex home-flex-content pt-4 mb-5'>
                <div className='col-1 p-0'></div>
                <div className='col-4 text-center queary-ai-first'>
                    <img src={robot} alt="" />
                    <h2 className='text-light pt-4'>Hey, I'am Lina</h2>
                    <h4 className='text-light'>Your Personal AI Motor Agent</h4>
                    <div className='d-flex mt-4 justify-content-between head-input-create-home rounded-pill'>
                        <p className='input-text-home'><span style={{ color: "#F800C0", paddingBottom: "5px" }}>|</span> Ask me anything about motors...</p>
                        <div className='d-flex align-items-center'>
                            <img src={micro} className='micke-icon-home me-1' />
                            <p className='submit-icon-head-home rounded-circle'>
                                <IoMdNavigate className='submit-icon-home' />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-6 car-product-list-head'>
                    <div className='d-flex justify-content-between px-3 align-items-center'>
                        <h5 className='text-light fs-6 mb-0'>Cars for Sell 12424</h5>
                        <div className="me-3 button-group-home ">
                            <button className="btn clicked-button rounded-pill">Featured</button>
                            <button className="btn">Company</button>
                            <button className="btn">Listing</button>
                        </div>
                        <div className="dropdown rounded-pill">
                            <button className="btn btn-secondary rounded-pill dropdown-toggle dropdown-button-filter" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort & Filter
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='pt-2 col-6 text-center card-head'>
                            <img src={addLogo} alt="" className='add-logo-img' />
                            <img src={car1} alt="" className='car-image' />
                            <div className='card-detials text-start '>
                                <div className='px-3 card-text-head'>
                                    <h3 className='text-light pt-2'>Sell - AED 345,000</h3>
                                    <p className='text-light fw-light mb-2'>Cadillac Escalade Premium Luxury</p>
                                    <h4 className='text-light mb-3'>2021  |  10,721 km |  Left Hand</h4>
                                </div>
                                <button className='px-4 py-1 car-card-button rounded-pill'>Chat with us</button>
                            </div>
                        </div>
                        <div className='pt-2 col-6 text-center card-head'>
                            <img src={addLogo} alt="" className='add-logo-img' />
                            <img src={car1} alt="" className='car-image' />
                            <div className='card-detials text-start'>
                                <div className='px-3 card-text-head'>
                                    <h3 className='text-light pt-2'>Sell - AED 345,000</h3>
                                    <p className='text-light fw-light mb-2'>Cadillac Escalade Premium Luxury</p>
                                    <h4 className='text-light mb-3'>2021  |  10,721 km |  Left Hand</h4>
                                </div>
                                <button className='px-4 py-1 car-card-button rounded-pill'>Chat with us</button>
                            </div>
                        </div>

                        <div className='pt-2 col-6 text-center card-head'>
                            <img src={addLogo} alt="" className='add-logo-img' />
                            <img src={car1} alt="" className='car-image' />
                            <div className='card-detials text-start '>
                                <div className='px-3 card-text-head'>
                                    <h3 className='text-light pt-2'>Sell - AED 345,000</h3>
                                    <p className='text-light fw-light mb-2'>Cadillac Escalade Premium Luxury</p>
                                    <h4 className='text-light mb-3'>2021  |  10,721 km |  Left Hand</h4>
                                </div>
                                <button className='px-4 py-1 car-card-button rounded-pill'>Chat with us</button>
                            </div>
                        </div>
                        <div className='pt-2 col-6 text-center card-head'>
                            <img src={addLogo} alt="" className='add-logo-img' />
                            <img src={car1} alt="" className='car-image' />
                            <div className='card-detials text-start'>
                                <div className='px-3 card-text-head'>
                                    <h3 className='text-light pt-2'>Sell - AED 345,000</h3>
                                    <p className='text-light fw-light mb-2'>Cadillac Escalade Premium Luxury</p>
                                    <h4 className='text-light mb-3'>2021  |  10,721 km |  Left Hand</h4>
                                </div>
                                <button className='px-4 py-1 car-card-button rounded-pill'>Chat with us</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 text-center mt-4'>
                        <button className='load-more-btn'>Load More</button>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Home