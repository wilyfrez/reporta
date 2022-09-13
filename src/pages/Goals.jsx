import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteDailog, RequestDailog, Header } from '../components';
import { goalColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateDepartmentCreationForm } from '../utils/helpers';
import DepartmentsService from '../services/DepartmentsService';

const Goals = () => {
  const {
    currentColor,
    isClicked,
    handleClick,
    currentUser,
    editDataId,
    setEditDataId,
    formData,
    setError,
    setformData,
    setIsClicked,
    initialState,
    deleteDataId,
    setDeleteDataId,
  } = useStateContext();

  const showStaffDialog = () => {
    handleClick('request');
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Goals" />
        <button
          type="button"
          onClick={showStaffDialog}
          style={{ backgroundColor: currentColor }}
          className="text-sm text-white p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Request Goal
        </button>
      </div>

      <div className="flex h-[100%]">
        {/* <DataGrid
          autoHeight
          columns={goalColumns}
          rows={departmentData}
          getRowId={(row) => row._id}
        /> */}
      </div>

      {isClicked.request && <RequestDailog />}

      {isClicked.delete && <DeleteDailog />}
    </div>
  );
};

export default Goals;
