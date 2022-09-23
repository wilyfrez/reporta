import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteDailog, DepartmentDailog, Header } from '../components';
import { departmentColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateDepartmentCreationForm } from '../utils/helpers';
import DepartmentsService from '../services/DepartmentsService';
import { UnAuthorize } from './';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';

const Deparmtents = () => {
  const {
    currentColor,
    isClicked,
    handleClick,
    currentUser,
    editDataId,
    setEditData,
    formData,
    error,
    setError,
    setformData,
    setIsClicked,
    initialState,
    deleteDataId,
    setDeleteDataId,
  } = useStateContext();

  const [departmentData, setDepartmentData] = useState([]);
  const [loadingData, setLoadingDatea] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const getAllDepartments = async () => {
      const response = await DepartmentsService.getAllDepartments();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingDatea(false);
        return;
      }
      setDepartmentData(response.departments);
      setLoadingDatea(false);
      setAuthorized(true);
    };

    getAllDepartments();
  }, []);

  const showStaffDialog = () => {
    handleClick('department');
  };

  const createDepartment = async () => {
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

  const updateDepartment = async () => {
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

  const handleDepartmentDialogFormSubmission = async () => {
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

  if (!currentUser.admin) {
    return <UnAuthorize />;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Departments" />
        <button
          type="button"
          onClick={showStaffDialog}
          style={{ backgroundColor: currentColor }}
          className="text-sm text-white p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Add Department
        </button>
      </div>

      {error.message && (
        <Alert
          variant="outlined"
          severity={error?.severity || 'error'}
          sx={{ my: 1 }}
        >
          {error.message}
        </Alert>
      )}

      {loadingData ? (
        <div className="flex justify-center items-center space-x-2">
          <CircularProgress />
          <span>Loading ...</span>
        </div>
      ) : authorized ? (
        <div className=" ">
          <GridComponent dataSource={departmentData}>
            <ColumnsDirective>
              {departmentColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      ) : (
        ''
      )}

      {isClicked.department && (
        <DepartmentDailog
          handleFormSubmission={handleDepartmentDialogFormSubmission}
          departmentData={departmentData}
        />
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteDepartment} />
      )}
    </div>
  );
};

export default Deparmtents;
