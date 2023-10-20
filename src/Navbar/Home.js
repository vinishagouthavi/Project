import React from 'react';
import video from '../Video/video.webm';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterButtonClick = () => {
    navigate("/Registration");
  };

  return (
    <div>
      
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
     
      
      <div className="home-content">
        <h2>Welcome to Tech Freak Online Tutorial</h2>
        <p>
          <b>Click to Register</b>
        </p>
        <button className="btn" onClick={handleRegisterButtonClick}>Register</button>
      </div>
    </div>
  );
};

export default Home;
