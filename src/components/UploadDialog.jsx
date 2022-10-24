import { IconButton } from '@mui/material';
// import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { Upload } from './';

const UploadDialog = ({ submitUpload }) => {
  const {
    currentColor,
    setIsClicked,
    currentUser,
    handleClick,
    activeResourceId,
    initialState,
  } = useStateContext();
  const [fileData, setFileData] = useState('');

  const handleFormFileChange = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleFormSubmit = async () => {};

  const handleCloseDailog = () => {
    handleClick(initialState);
    // setEditDataId(null);
    // setFormData({});
    // setError({});
  };

  return (
    <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 right-0 flex justify-center items-center ">
      <div className="   duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg uppercase">Upload</p>

          <IconButton
            onClick={handleCloseDailog}
            sx={{
              borderRadius: '50%',
              bgHoverColor: 'light-gray',
            }}
            aria-label="Close Dialog"
          >
            <MdOutlineCancel />
          </IconButton>
        </div>
        {/* <p>Title</p> */}
        <p className=" text-lg font-bold mb-4"></p>

        <Upload staffGoalId={activeResourceId} submitUpload={submitUpload} />
      </div>
    </div>
  );
};

export default UploadDialog;
