import { useEffect, useState } from 'react';
import { DeleteDailog, RequestDailog, Header } from '../components';
import { goalColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';
import GoalsService from '../services/GoalsService';
import { validateRequestCreationForm } from '../utils/helpers';

const Goals = () => {
  const {
    currentColor,
    isClicked,
    handleClick,
    currentUser,
    editDataId,
    setEditDataId,
    formData,
    error,
    setError,
    setFormData,
    setIsClicked,
    initialState,
    deleteDataId,
    setDeleteDataId,
  } = useStateContext();

  const [goalData, setGoalData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const getOrganizationStaff = async () => {
      const response = await GoalsService.getOganizationGoals();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingDatea(false);
        return;
      }
      setGoalData(response.goals);
      setLoadingData(false);
      setAuthorized(true);
    };

    getOrganizationStaff();
  }, []);

  const showStaffDialog = () => {
    handleClick('request');
  };

  const makeRequest = async () => {
    const response = await GoalsService.requestGoal(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setGoalData((preState) => [response.goal, ...preState]);
  };

  const updateRequest = async () => {
    console.log('Update request');
  };

  const handleRequestDialogFormSubmission = async () => {
    const validationResult = validateRequestCreationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }

    if (editDataId) {
      await updateRequest();
    } else {
      await makeRequest();
    }
    setIsClicked(initialState);
    setEditDataId(null);
    setFormData({});
  };

  const handleDeleteGoal = async () => {
    if (!deleteDataId) return;

    console.log(deleteDataId);

    const response = await GoalsService.deleteGoal(deleteDataId);

    if (response.status) {
      setGoalData(goalData.filter((goal) => goal._id !== deleteDataId));
      setDeleteDataId(null);
      setIsClicked(initialState);
    } else {
      console.log(response);
    }
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
          <GridComponent dataSource={goalData}>
            <ColumnsDirective>
              {goalColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      ) : (
        ''
      )}

      {isClicked.request && (
        <RequestDailog
          requestData={goalData}
          handleFormSubmission={handleRequestDialogFormSubmission}
        />
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteGoal} />
      )}
    </div>
  );
};

export default Goals;
