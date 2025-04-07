import React, { useState } from 'react'
import "./AgentInfo.css";
import AgentInfoCard from '../components/AgentInfoCard';
import Enquiry from '../components/Enquiry';
import CarCollections from '../components/CarCollections';
import FilterCarAgent from '../components/FilterCarAgent';
import AgentsList from '../components/AgentsList';
import EnquiryBanner from '../components/EnquiryBanner';

const AgentInfo = () => {
    const [activeTab, setActiveTab] = useState("Motor Listing");

    return (
        <>
            <div className='companyInfo-head mt-4'>
                <AgentInfoCard />
                <div className='horizantal mt-0'></div>
                <div className='companyInfo-flex-content'>
                    <Enquiry />
                    <div>
                        <FilterCarAgent activeTab={activeTab} setActiveTab={setActiveTab} />
                        {activeTab === "Motor Listing" ? (
                            <CarCollections />
                        ) : activeTab === "Featured Motor Listing" ? (
                            <div>hello</div>
                        ) : (
                            <AgentsList />
                        )}
                    </div>
                </div>
            </div>
            <EnquiryBanner />
        </>
    )
}

export default AgentInfo