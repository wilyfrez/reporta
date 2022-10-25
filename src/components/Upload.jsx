import React, { useState } from 'react';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';
import { API_URL } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';
import { ExternalService, GoalsService } from '../services';
import { CircularProgress } from '@mui/material';

// folder -> upload are seperated into folders [ goals, reports appraisals]
const Upload = ({ staffGoalId, folder, submitUpload }) => {
  const { currentColor, handleClick, initialState } = useStateContext();
  // State to keep the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  const [connecting, setConnecting] = useState(false);

  // State to keep the upload status
  const [status, setStatus] = useState({
    statusCode: 0,
    message: 'Ready to upload',
  });

  // Getting file details using select event in the File upload component
  const onFileSelect = async (args) => {
    setSelectedFile(null);
    const file = args.event.target.files;
    setSelectedFile(file[0]);
    setStatus({ statusCode: 0, message: 'Ready to upload' });
  };

  // Click action for Upload file button
  const onUploadClick = async () => {
    setConnecting(true);
    const response = await ExternalService.getAwsUploadSignedUrl(
      selectedFile.name,
      folder
    );

    const awsUploadSignedUrl = response.awsUploadSignedUrl;

    // console.log('Presigned URL', awsUploadSignedUrl);

    // Post the file to the presigned URL
    await fetch(awsUploadSignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: selectedFile,
    });

    // Get the uploaded file path
    const file_path = awsUploadSignedUrl.split('?')[0];

    // submit file path to db
    await submitUpload(staffGoalId, file_path);

    setStatus({ statusCode: 1, message: 'File uploaded successfully' });

    setConnecting(false);

    // handleClick(initialState);
  };

  // Convert the bytes to sizes
  const bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  // Created custom file list to showcase file information and upload status
  const createFileList = () => {
    var size = bytesToSize(selectedFile.size);
    return (
      <div className="e-upload custom-template">
        <ul className="e-upload-files">
          <li className="e-upload-file-list">
            <span className="e-file-container">
              <span className="e-file-name">{selectedFile.name}</span>
              <span className="e-file-size">{size}</span>
              <span
                className={
                  status.statusCode
                    ? 'e-file-status e-upload-success'
                    : 'e-file-status'
                }
              >
                {status.message}
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="control-wrapper">
      {/* Rendering the Syncfusion file upload component */}
      <UploaderComponent
        id="fileUpload"
        selected={onFileSelect}
        multiple={false}
        showFileList={false}
      ></UploaderComponent>

      {/* Rendering the file list after selecting the file */}
      {selectedFile !== null && createFileList()}

      <button
        type="button"
        className=" w-full font-semibold cursor-pointer text-white rounded-lg h-[50px] mt-5 disabled:opacity-50 flex items-center justify-center space-x-2 uppercase"
        disabled={!(selectedFile != null && !status.statusCode) || connecting}
        style={{ backgroundColor: currentColor }}
        onClick={onUploadClick}
      >
        {connecting ? (
          <div className="flex items-center justify-center space-x-2">
            <CircularProgress size={32} /> <span>Upload</span>
          </div>
        ) : (
          'Upload'
        )}
      </button>
    </div>
  );
};

export default Upload;
