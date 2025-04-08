import React from 'react';
import "./FilterCarAgent.css";
import { useLocation } from 'react-router-dom';

const FilterCarAgent = ({ activeTab, setActiveTab }) => {
    const location = useLocation();

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="filter-container pb-3">
            <div className="switch-tabs">
                <div
                    className={location.pathname === "/companyInfo" ? "slider" : "slider2"}
                    style={location.pathname === "/companyInfo" ? {
                        left:
                            activeTab === "Featured Motor Listing"
                                ? "0%"
                                : activeTab === "Motor Listing"
                                    ? "33.33%"
                                    : "66.66%",
                    } : {
                        left:
                            activeTab === "Featured Motor Listing"
                                ? "0%"
                                : activeTab === "Motor Listing"
                                    ? "50%"
                                    : "50%",
                    }}
                />
                {location.pathname === "/companyInfo" && ["Featured Motor Listing", "Motor Listing", "Agents"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => handleClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
                {location.pathname === "/agentInfo" && ["Featured Motor Listing", "Motor Listing"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => handleClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterCarAgent;
