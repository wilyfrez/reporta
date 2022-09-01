import React from 'react';
import { Header } from '../components';

const Staff = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-center justify-between">
        <Header category="Page" title="Staff" />
        <button
          type="button"
          onClick={() => {}}
          style={{}}
          className=" text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Add Staff
        </button>
      </div>
    </div>
  );
};

export default Staff;
