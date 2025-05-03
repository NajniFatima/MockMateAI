import React from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/header';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
