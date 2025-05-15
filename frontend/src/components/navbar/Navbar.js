import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Navbar.css';
import { assets } from '../../assets/assets';

const backendUrl = 'http://localhost:5000';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, setUserData, setIsLoggedIn } = useContext(AppContent);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);

      if (data.success) {
        toast.success(data.message);
        navigate('/verify-email');
      } else {
        toast.error(data.message || 'Failed to send OTP.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Something went wrong.');
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);

      if (data.success) {
        setIsLoggedIn(false);
        setUserData(null);
        toast.success('Logged out successfully');
        navigate('/');
      } else {
        toast.error(data.message || 'Logout failed.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Something went wrong.');
    }
  };

  return (
    <div className="navbar">
      <img
        src={assets.logo}
        alt="Logo"
        className="navbar-logo"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />

      <ul className="navbar-menu">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/practiceDSA')}>DSA Practice</li>
        <li onClick={() => navigate('/practiceCore')}>Core Subject Practice</li>
        <li onClick={() => navigate('/mockInterview')}>Interview Panel</li>
      </ul>

      {userData ? (
        <div className="user-wrapper">
          <div
            className="user-initial"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            {userData.name?.charAt(0).toUpperCase()}
          </div>
          {dropdownOpen && (
            <div className="user-dropdown">
              <ul className="dropdown-menu">
                {!userData.isAccountVerified && (
                  <li onClick={sendVerificationOtp} className="dropdown-item">
                    Verify Email
                  </li>
                )}
                <li onClick={logout} className="dropdown-item logout">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => navigate('/login')} className="login-button">
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
