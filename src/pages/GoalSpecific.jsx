import { useEffect, useState } from 'react';
import { DeleteDailog, RequestDailog, Header } from '../components';
import { goalSpecificColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';
import GoalsService from '../services/GoalsService';
import { validateRequestCreationForm } from '../utils/helpers';
import { useParams } from 'react-router-dom';

const GoalSpecific = () => {
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
  const [goalTitle, setgoalTitle] = useState('');

  const { goalId } = useParams();

  useEffect(() => {
    const getStaffGoalsByGoalId = async () => {
      const response = await GoalsService.getStaffGoalsByGoalId(goalId);
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingDatea(false);
        return;
      }
      setgoalTitle(response.title);
      setGoalData(response.staffGoals);
      setLoadingData(false);
      setAuthorized(true);
    };

    getStaffGoalsByGoalId();
  }, []);

  const showStaffDialog = () => {
    handleClick('request');
  };

  const handleCreateGoalRequest = async () => {
    const response = await GoalsService.createGoalRequest(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setGoalData((preState) => [response.goal, ...preState]);
  };

  const handleUpdateGoalRequest = async () => {
    const response = await GoalsService.updateGoalRequest(editDataId, formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setGoalData(
      goalData.map((goal) =>
        goal._id === response.goal._id ? response.goal : goal
      )
    );
  };

  const handleRequestDialogFormSubmission = async () => {
    const validationResult = validateRequestCreationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }

    if (editDataId) {
      await handleUpdateGoalRequest();
    } else {
      await handleCreateGoalRequest();
    }
    setIsClicked(initialState);
    setEditDataId(null);
    setFormData({});
  };

  const handleDeleteStaffGoal = async () => {
    if (!deleteDataId) return;
    const response = await GoalsService.deleteStaffGoal(deleteDataId);

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
        {loadingData ? '' : <Header category="Page" title={goalTitle} />}
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
              {goalSpecificColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      ) : (
        ''
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteStaffGoal} />
      )}
    </div>
  );
};

export default GoalSpecific;
