import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DepartmentDailog, Header, StaffDailog } from '../components';
import { departmentColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateDepartmentCreationForm } from '../utils/helpers';
import DepartmentsService from '../services/DepartmentsService';

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

  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const getAllDepartments = async () => {
      const departments = await DepartmentsService.getAllDepartments();
      console.log(departments);
      setDepartmentData(departments);
    };

    getAllDepartments();
  }, []);

  const showStaffDialog = () => {
    handleClick('department');
  };

  const handleDepartmentCreation = async () => {
    const validationResult = validateDepartmentCreationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }
    const response = await DepartmentsService.createDepartment(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setDepartmentData((preState) => [response.department, ...preState]);
    setIsClicked(initialState);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Department" />
        <button
          type="button"
          onClick={showStaffDialog}
          style={{ backgroundColor: currentColor }}
          className="text-sm text-white p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Add Department
        </button>
      </div>

      <div className="flex h-[100%]">
        <DataGrid
          autoHeight
          columns={departmentColumns}
          rows={departmentData}
          getRowId={(row) => row._id}
        />
      </div>

      {isClicked.department && (
        <DepartmentDailog handleDepartmentCreation={handleDepartmentCreation} />
      )}
    </div>
  );
};

export default Staff;
