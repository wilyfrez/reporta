import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import { AuthService } from '../services';
import { userProfileData } from '../utils/data';
import Avatar from './Avatar';

const UserProfile = () => {
  const {
    currentColor,
    currentUser,
    handleClick,
    initialState,
    setCurrentUser,
  } = useStateContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    AuthService.logout();
    navigate('/login');
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={() => handleClick(initialState)}
          style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <div className="w-8 h-8">
          <Avatar
            text={`${currentUser?.first_name} ${currentUser?.last_name}`}
          />
        </div>
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {`${currentUser.first_name} ${currentUser.last_name}`}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {currentUser?.organization?.name}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {currentUser.email}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {' '}
                {item.desc}{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[50px] mt-4"
          onClick={handleLogout}
          style={{ backgroundColor: currentColor }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
