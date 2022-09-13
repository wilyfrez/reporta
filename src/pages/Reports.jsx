import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteDailog, DepartmentDailog, Header } from '../components';
import { departmentColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateDepartmentCreationForm } from '../utils/helpers';
import DepartmentsService from '../services/DepartmentsService';

const Reports = () => {
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

  const createDepartment = async () => {
    const response = await DepartmentsService.createDepartment(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setDepartmentData((preState) => [response.department, ...preState]);
  };

  const updateDepartment = async () => {
    console.log('update ongoing', editDataId);
    const response = await DepartmentsService.updateDepartment(
      editDataId,
      formData
    );

    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setDepartmentData(
      departmentData.map((department) =>
        department._id === response.department._id
          ? response.department
          : department
      )
    );
  };

  const handleDepartmentAction = async () => {
    const validationResult = validateDepartmentCreationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }

    if (editDataId) {
      await updateDepartment();
    } else {
      await createDepartment();
    }

    setIsClicked(initialState);
    setEditDataId(null);
  };

  const handleDeleteDepartment = async () => {
    if (!deleteDataId) return;

    const response = await DepartmentsService.deleteDepartment(deleteDataId);

    if (response.status) {
      setDepartmentData(
        departmentData.filter((department) => department._id !== deleteDataId)
      );
      setDeleteDataId(null);
      setIsClicked(initialState);
    } else {
      console.log(response);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Reports" />
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
        <DepartmentDailog
          handleDepartmentAction={handleDepartmentAction}
          departmentData={departmentData}
        />
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteDepartment} />
      )}
    </div>
  );
};

export default Reports;