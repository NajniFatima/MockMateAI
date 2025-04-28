import React, {} from "react";
import { useNavigate } from "react-router-dom";
import "./practice.css";
import graduationImage from "../../assets/logo192.png"; // Ensure the image is in the public folder or imported properly

const Practice = () => {
  const navigate = useNavigate();

  const handleDsaClick = () => {
    navigate("/practiceDsa");
  }
  const handleCoreClick = () => {
    navigate("/practiceCore");
  }

  return (
    <div className="container">
      <div className="header">
        <img src={graduationImage} alt="Graduate" className="graduate-img" />
      </div>
      <div className="options">
        <div className="option" onClick={handleDsaClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="DSA" className="icon" />
          <p>Practice DSA</p>
        </div>
        <div className="option" onClick={handleCoreClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="Core" className="icon" />
          <p>CORE SUBJECT</p>
        </div>
      </div>
    </div>
  );
};

export default Practice;