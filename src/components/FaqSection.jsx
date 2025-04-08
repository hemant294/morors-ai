import React, { useState } from 'react';

const faqData = {
    Buy: [
        { question: "How much does it cost to sell on MyFinder?", answer: "Starting Oct 1, 2024, it is free to sell for UK-based private sellers. Sellers do not pay transaction fees when the item sells. This applies to all categories, except motors (Cars, Motorcycles & Vehicles listings). You can list up to 300 items for free each month; after that, you'll pay 35p per listing. You may incur additional fees if you add optional upgrades to your listing, or if an item sells or ships to a buyer in a different country. Learn more about fees." },
        { question: "What’s the best way to send my item?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "Can I offer collection in person as an option for buyers?t", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "How much will it cost to post my item?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "How will the buyer pay for my item?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "How should I choose my listing price?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "How does MyFinder protect sellers?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
        { question: "What can I sell on MyFinder?", answer: "Pack the item securely and use tracked delivery services to ensure safe shipping." },
    ],
    Sell: [
        { question: "How much does it cost to sell on MyFinder?", answer: "There’s a listing fee and transaction fee for every sale. Visit our pricing page for more." },
        { question: "How should I choose my listing price?", answer: "Base it on the market value and the condition of your item. Compare with similar listings." }
    ],
    Rent: [
        { question: "Can I offer collection in person as an option for buyers?", answer: "Yes, but make sure it's safe and you agree on location and timing beforehand." },
        { question: "How much will it cost to post my item?", answer: "Costs vary depending on size, weight, and courier service." }
    ]
};

const FaqSection = () => {
    const [activeTab, setActiveTab] = useState('Buy');
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", color: "#fff" }}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
            <h3 style={{ color: "#fff" }}>FAQ</h3>
            <div style={{ display: "flex", gap: "10px" }}>
                {['Buy', 'Sell', 'Rent'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setOpenIndex(null);
                        }}
                        style={{
                            background: "none",
                            color: activeTab === tab ? "#F800C0" : "#ffff",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "20px"
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            </div>
            <div>
                {faqData[activeTab].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #2a2a72",
                            borderRadius: "10px",
                            marginBottom: "10px",
                            backgroundColor: "#1a1a40",
                            padding: "15px"
                        }}
                    >
                        <div
                            onClick={() => toggleAnswer(index)}
                            style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", alignItems: "center" }}
                        >
                            <span>{item.question}</span>
                            <span className='fs-4'>{openIndex === index ? "−" : "+"}</span>
                        </div>
                        {openIndex === index && (
                            <p style={{ marginTop: "10px", color: "#aaa",fontSize: "14px" }}>{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
