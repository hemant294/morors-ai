import React, {useState} from 'react'
import "./AgentsList.css";
import AgentInfo from '../pages/AgentInfo';
import { useNavigate } from 'react-router-dom';

const agentInfo = [
  {
    id: 1,
    img: require("../assets/agent1.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian  ",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
  {
    id: 2,
    img: require("../assets/agent.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
  {
    id: 3,
    img: require("../assets/agent3.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
  {
    id: 4,
    img: require("../assets/agent4.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
  {
    id: 5,
    img: require("../assets/agent5.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
  {
    id: 6,
    img: require("../assets/agent6.png"),
    agentName: "Agent Name",
    since: "Since",
    year: "2022",
    nationality: "Nationality",
    country: "Indian",
    listing: "Listing",
    listingNumber: 234,
    review: "Review",
    reviewNumber: 84,
    buttonText: "Chat with us"
  },
]

const AgentsList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/agentInfo")
  }

  return (
    <div className='agent-list-head'>
      <div className='agentList-main'>
        {
          agentInfo.map((item) => (
            <div key={item.id} className='agent-cart p-2' onClick={handleClick}>
              <img src={item.img} alt="agents picture" className='agents-picture' />
              <div className='agent-info-head'>
                <div className='agent-info'>
                  <h3>{item.agentName}</h3>
                  <div>
                    <p>{item.since}/ <span>{item.year}</span></p>
                    <p>{item.nationality}/ <span>{item.country}</span></p>
                    <p>{item.listing}/ <span>{item.listingNumber}</span></p>
                    <p>{item.review}/ <span>{item.reviewNumber}</span></p>
                  </div>
                </div>
                <button className='px-4 chat-button rounded-pill'>{item.buttonText}</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-100 text-center mt-4 mb-3'>
        <button className='load-more-btn'>Load More</button>
      </div>
    </div>
  )
}

export default AgentsList