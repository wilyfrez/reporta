import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header, StaffDailog, DeleteDailog } from '../components';
import { staffColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { validateStaffAccountRegistrationForm } from '../utils/helpers';
import { StaffService } from '../services';
import SelectTextFields from '../components/SelectTextFields';
import { UnAuthorize } from './';
import { Alert, Box, CircularProgress } from '@mui/material';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';

const Staff = () => {
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

  const [staffData, setStaffData] = useState([]);
  const [loadingData, setLoadingDatea] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const getAllStaff = async () => {
      const response = await StaffService.getAllStaff();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingDatea(false);
        return;
      }
      setStaffData(response.staff);
      console.log(response.staff);
      setLoadingDatea(false);
      setAuthorized(true);
    };

    getAllStaff();
  }, []);

  const showStaffDialog = () => {
    handleClick('staff');
  };

  const handleStaffAccountRegistration = async () => {
    const response = await StaffService.registerStaffAccount(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setStaffData((preState) => [response.staff, ...preState]);
  };

  const handleStaffAccountUpdate = async () => {
    const response = await StaffService.updateStaffAccount(
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

    setStaffData(
      staffData.map((staff) =>
        staff._id === response.staff._id ? response.staff : staff
      )
    );
  };

  const handleStaffDialogFormSubmission = async () => {
    const validationResult = validateStaffAccountRegistrationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }

    if (editDataId) {
      await handleStaffAccountUpdate();
    } else {
      await handleStaffAccountRegistration();
    }
    setIsClicked(initialState);
    setEditDataId(null);
    setformData({});
  };

  const handleDeleteStaffAccount = async () => {
    if (!deleteDataId) return;

    console.log(deleteDataId);

    const response = await StaffService.deleteStaffAccount(deleteDataId);

    if (response.status) {
      setStaffData(staffData.filter((staff) => staff._id !== deleteDataId));
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
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl border border-gray-200">
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
          <CircularProgress /> <span>Loading ...</span>
        </div>
      ) : authorized ? (
        <div className="flex h-[100%]">
          <GridComponent dataSource={staffData}>
            <ColumnsDirective>
              {staffColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      ) : (
        ''
      )}

      {isClicked.staff && (
        <StaffDailog
          staffData={staffData}
          handleFormSubmission={handleStaffDialogFormSubmission}
        />
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteStaffAccount} />
      )}
    </div>
  );
};

export default Staff;
