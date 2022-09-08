import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header, StaffDailog, DeleteDailog } from '../components';
import { staffColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateStaffAccountRegistrationForm } from '../utils/helpers';
import { StaffService } from '../services';

const Staff = () => {
  const {
    currentColor,
    isClicked,
    handleClick,
    currentUser,
    setEditData,
    formData,
    setError,
    setformData,
    setIsClicked,
    initialState,
  } = useStateContext();

  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const getAllStaff = async () => {
      const staff = await StaffService.getAllStaff();
      setStaffData(staff);
    };

    getAllStaff();
  }, []);

  const showStaffDialog = () => {
    handleClick('staff');
  };

  const handleStaffAccountRegistration = async () => {
    const validationResult = validateStaffAccountRegistrationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }
    const response = await StaffService.registerStaffAccount(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setStaffData((preState) => [response.staff, ...preState]);
    setIsClicked(initialState);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Staff" />
        <button
          type="button"
          onClick={showStaffDialog}
          style={{ backgroundColor: currentColor }}
          className="text-sm text-white p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Add Staff
        </button>
      </div>

      <div className="flex h-[100%]">
        <DataGrid
          autoHeight
          columns={staffColumns}
          rows={staffData}
          getRowId={(row) => row._id}
        />
      </div>

      {isClicked.staff && (
        <StaffDailog
          handleStaffAccountRegistration={handleStaffAccountRegistration}
        />
      )}

      {isClicked.delete && <DeleteDailog />}
    </div>
  );
};

export default Staff;
