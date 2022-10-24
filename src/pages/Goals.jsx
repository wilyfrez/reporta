import { useEffect, useState } from 'react';
import {
  DeleteDailog,
  RequestDailog,
  Header,
  UploadDialog,
} from '../components';
import { goalColumns, staffGoalColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';
import { GoalsService } from '../services';
import { validateRequestCreationForm } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

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
  //  api connection state
  const [connecting, setConnecting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getOrganizationGoals = async () => {
      const response = await GoalsService.getOrganizationGoals();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingData(false);
        return;
      }
      setGoalData(response.goals);
      setLoadingData(false);
      setAuthorized(true);
    };

    const getStaffGoal = async () => {
      const response = await GoalsService.getStaffGoals();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingData(false);
        return;
      }
      setGoalData(response.goals);
      setLoadingData(false);
    };

    if (currentUser.admin) {
      getOrganizationGoals();
    } else {
      getStaffGoal();
    }
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
    setConnecting(true);
    const validationResult = validateRequestCreationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      setConnecting(false);
      return;
    }

    if (editDataId) {
      await handleUpdateGoalRequest();
    } else {
      await handleCreateGoalRequest();
    }
    setConnecting(false);
    setIsClicked(initialState);
    setEditDataId(null);
    setFormData({});
  };

  const handleDeleteGoal = async () => {
    if (!deleteDataId) return;
    const response = await GoalsService.deleteGoal(deleteDataId);

    if (response.status) {
      setGoalData(goalData.filter((goal) => goal._id !== deleteDataId));
      setDeleteDataId(null);
      setIsClicked(initialState);
    } else {
      console.log(response);
    }
  };

  const recordClick = (args) => {
    const { rowData, column } = args;
    if (column.headerText == 'Action') return;
    navigate(rowData._id);
  };

  const submitUpload = async (uploadId, file_path) => {
    const response = await GoalsService.submitStaffGoal(uploadId, {
      file_path,
    });

    setGoalData(
      goalData.map((goal) =>
        goal._id === response.goal._id ? response.goal : goal
      )
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl border border-gray-200">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Goals" />

        {authorized && (
          <button
            type="button"
            onClick={showStaffDialog}
            style={{ borderColor: currentColor, color: currentColor }}
            className="text-sm text-white p-2   border-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md uppercase font-semibold"
          >
            Request Goal
          </button>
        )}
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

      {/* if user is admin */}
      {currentUser.admin ? (
        loadingData ? (
          <div className="flex justify-center items-center space-x-2">
            <CircularProgress /> <span>Loading ...</span>
          </div>
        ) : authorized ? (
          <div className="flex h-[100%]">
            <GridComponent dataSource={goalData} recordClick={recordClick}>
              <ColumnsDirective>
                {goalColumns.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
            </GridComponent>
          </div>
        ) : (
          ''
        )
      ) : // if user is not addmin
      loadingData ? (
        <div className="flex justify-center items-center space-x-2">
          <CircularProgress /> <span>Loading ...</span>
        </div>
      ) : (
        <div className="flex h-[100%]">
          <GridComponent dataSource={goalData}>
            <ColumnsDirective>
              {staffGoalColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      )}

      {authorized && isClicked.request && (
        <RequestDailog
          type="Goal"
          requestData={goalData}
          handleFormSubmission={handleRequestDialogFormSubmission}
          connecting={connecting}
        />
      )}

      {authorized && isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteGoal} />
      )}

      {isClicked.upload && <UploadDialog submitUpload={submitUpload} />}
    </div>
  );
};

export default Goals;
