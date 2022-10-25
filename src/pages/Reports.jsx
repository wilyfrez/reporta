import { useEffect, useState } from 'react';
import {
  DeleteDailog,
  RequestDailog,
  Header,
  UploadDialog,
} from '../components';
import { reportColumns, staffReportColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { Alert, CircularProgress } from '@mui/material';
import { ReportsService } from '../services';
import { validateRequestCreationForm } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
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

  //  api connection state
  const [connecting, setConnecting] = useState(false);

  const navigate = useNavigate();
  const type = 'reports';
  useEffect(() => {
    const getOrganizationReports = async () => {
      const response = await ReportsService.getOrganizationReports();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingData(false);
        return;
      }
      setReportData(response.reports);
      setLoadingData(false);
      setAuthorized(true);
    };

    const getStaffReports = async () => {
      const response = await ReportsService.getStaffReports();
      if (!response.status) {
        setError({
          severity: 'error',
          message: response.message,
        });
        setLoadingData(false);
        return;
      }
      setReportData(response.reports);
      setLoadingData(false);
    };

    if (currentUser.admin) {
      getOrganizationReports();
    } else {
      getStaffReports();
    }
  }, []);

  const showRequestDialog = () => {
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

    setReportData((preState) => [response.report, ...preState]);
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
      reportData.map((report) =>
        report._id === response.report._id ? response.report : report
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
      await handleUpdateReportRequest();
    } else {
      await handleCreateReportRequest();
    }
    setConnecting(false);
    setIsClicked(initialState);
    setEditDataId(null);
    setFormData({});
  };

  const handleDeleteReport = async () => {
    if (!deleteDataId) return;
    const response = await ReportsService.deleteReport(deleteDataId);

    if (response.status) {
      setReportData(reportData.filter((report) => report._id !== deleteDataId));
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
    const response = await ReportsService.submitStaffReport(uploadId, {
      file_path,
    });

    setReportData(
      reportData.map((report) =>
        report._id === response.report._id ? response.report : report
      )
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Reports" />

        {authorized && (
          <button
            type="button"
            onClick={showRequestDialog}
            style={{ borderColor: currentColor, color: currentColor }}
            className="text-sm text-white p-2   border-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md uppercase font-semibold"
          >
            Request Report
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
            <GridComponent dataSource={reportData} recordClick={recordClick}>
              <ColumnsDirective>
                {reportColumns.map((item, index) => (
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
          <GridComponent dataSource={reportData}>
            <ColumnsDirective>
              {staffReportColumns.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
        </div>
      )}
      {authorized && isClicked.request && (
        <RequestDailog
          type="Report"
          requestData={reportData}
          handleFormSubmission={handleRequestDialogFormSubmission}
          connecting={connecting}
        />
      )}
      {authorized && isClicked.delete && (
        <DeleteDailog handleDeleteAction={handleDeleteReport} />
      )}

      {isClicked.upload && (
        <UploadDialog type={type} submitUpload={submitUpload} />
      )}
    </div>
  );
};

export default Reports;
