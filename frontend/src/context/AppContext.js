import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// ✅ Define backendUrl here directly
const backendUrl = 'http://localhost:5100';

export const AppContent = createContext();

export const AppContextProvider = (props) => {

  axios.defaults.withCredentials = true;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/auth/is-auth');
      if (data.success) {
        setIsLoggedIn(true);
        getUserData(); // ✅ Call getUserData here
      }
    } catch (error) {
      toast.error(error.message); // ✅ Use lowercase 'message'
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/data');
      if (data.success) {
        setUserData(data.userData);
      } else {
        //toast.error(data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage); // ✅ Correct error message usage
    }
  };

  useEffect(() => {
    getAuthState();
  }, [getAuthState]);
  

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={values}>
      {props.children}
    </AppContent.Provider>
  );
};


