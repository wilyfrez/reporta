import { useEffect, useState } from 'react';
import { DeleteDailog, RequestDailog, Header } from '../components';
import { reportSpecificColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';
import ReportsService from '../services/ReportsService';
import { validateRequestCreationForm } from '../utils/helpers';
import { useParams } from 'react-router-dom';

const ReportSpecific = () => {
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

  const [reportData, setReportData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [reportTitle, setReportTitle] = useState('');

  const { reportId } = useParams();

  useEffect(() => {
    const getStaffReportsByReportId = async () => {
      const response = await ReportsService.getStaffReportsByReportId(reportId);
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingData(false);
        return;
      }
      setReportTitle(response.title);
      setReportData(response.staffReports);
      setLoadingData(false);
      setAuthorized(true);
    };

    getStaffReportsByReportId();
  }, []);

  const showStaffDialog = () => {
    handleClick('request');
  };

  const handleCreateReportRequest = async () => {
    const response = await ReportsService.createReportRequest(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }

    setReportData((preState) => [response.goal, ...preState]);
  };

  const handleUpdateReportRequest = async () => {
    const response = await ReportsService.updateReportRequest(
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

    setReportData(
      goalData.map((goal) =>
        goal._id === response.goal._id ? response.goal : goal
      )
    );
  };

  const handleDeleteStaffReport = async () => {
    if (!deleteDataId) return;
    const response = await ReportsService.deleteStaffReport(deleteDataId);

    if (response.status) {
      setReportData(goalData.filter((goal) => goal._id !== deleteDataId));
      setDeleteDataId(null);
      setIsClicked(initialState);
    } else {
      console.log(response);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        {loadingData ? '' : <Header category="Page" title={reportTitle} />}
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
          <GridComponent dataSource={reportData}>
            <ColumnsDirective>
              {reportSpecificColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      ) : (
        ''
      )}

      {isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteStaffReport} />
      )}
    </div>
  );
};

export default ReportSpecific;
