import React, { useState } from 'react'
import "./CompanyInfo.css";
import CompanyInfoCard from '../components/CompanyInfoCard';
import Enquiry from '../components/Enquiry';
import CarCollections from '../components/CarCollections';
import FilterCarAgent from '../components/FilterCarAgent';
import AgentsList from '../components/AgentsList';
import EnquiryBanner from '../components/EnquiryBanner';

const CompanyInfo = () => {
    const [activeTab, setActiveTab] = useState("Motor Listing"); // Default tab

    return (
        <>
            <div className='companyInfo-head mt-4'>
                <CompanyInfoCard />
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

export default CompanyInfo