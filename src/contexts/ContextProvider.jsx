import React, { createContext, useContext, useState } from 'react';

import { AuthService } from '../services';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  staff: false,
  department: false,
  userProfile: false,
  notification: false,
  upload: false,
  template: false,
  category: false,
  delete: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [error, setError] = useState(null);
  const [formData, setformData] = useState({});
  const [uploadData, setUploadData] = useState({});
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});
  const [downloadData, setDownloadData] = useState({});
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const handleFormInputChange = (e, name) => {
    setformData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleFormFileChange = (e, name) => {
    setformData((prevState) => ({
      ...prevState,
      [name]: e.target.files[0],
    }));
  };

  const updateFormData = (value, name) => {
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        formData,
        setformData,
        updateFormData,
        handleFormInputChange,
        handleFormFileChange,
        error,
        setError,
        currentUser,
        setCurrentUser,
        uploadData,
        setUploadData,
        downloadData,
        setDownloadData,
        editData,
        setEditData,
        deleteData,
        setDeleteData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
