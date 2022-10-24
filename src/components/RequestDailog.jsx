import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { StaffService } from '../services';
import { formatDateForInput } from '../utils/helpers';

const RequestDailog = ({
  type,
  requestData,
  handleFormSubmission,
  connecting,
}) => {
  const {
    currentUser,
    currentColor,
    formData,
    error,
    setError,
    setFormData,
    handleFormInputChange,
    setIsClicked,
    initialState,
    handleClick,
    editDataId,
    setEditDataId,
  } = useStateContext();

  useEffect(() => {
    if (editDataId) {
      setFormData(requestData.filter((data) => data._id === editDataId)[0]);
    }
  }, []);

  const handleSubmit = () => {
    handleFormSubmission();
  };

  const handleCloseDailog = () => {
    handleClick(initialState);
    setEditDataId(null);
    setFormData({});
    setError({});
  };

  const cateroryOptions = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Half Yearly', label: 'Half Yearly' },
  ];

  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {editDataId ? 'Update' : 'Request'} {type}
          </p>

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

        {error.message && (
          <Alert variant="outlined" severity="error" sx={{ my: 1 }}>
            {error.message}
          </Alert>
        )}

        <TextField
          error={error.message && !formData?.title ? true : false}
          fullWidth
          variant="outlined"
          label="Title"
          id="title"
          margin="normal"
          helperText={error.message && 'Required'}
          value={formData?.title || ''}
          required
          onChange={(e) => handleFormInputChange(e, 'title')}
        />

        <TextField
          fullWidth
          id="category"
          variant="outlined"
          select
          label="Category"
          margin="normal"
          onChange={(e) => handleFormInputChange(e, 'category')}
          SelectProps={{
            native: true,
          }}
        >
          {editDataId && formData?.category ? (
            <option key={formData?.category} value={formData?.category}>
              {formData?.category}
            </option>
          ) : (
            <option value=""></option>
          )}
          {cateroryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          fullWidth
          id="due_date"
          label="Due Date"
          type="date"
          margin="normal"
          value={formatDateForInput(formData?.due_date)}
          onChange={(e) => handleFormInputChange(e, 'due_date')}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <div className="mt-5">
          <button
            type="button"
            className="w-full font-semibold cursor-pointer text-white rounded-lg h-[50px] mt-5 disabled:opacity-50 flex items-center justify-center space-x-2 uppercase hover:drop-shadow-xl "
            onClick={handleSubmit}
            style={{ backgroundColor: currentColor }}
            disabled={connecting}
          >
            {connecting ? (
              <div className="flex items-center justify-center space-x-2">
                <CircularProgress size={32} />{' '}
                <span>{editDataId ? 'Update' : 'Send Request'}</span>
              </div>
            ) : editDataId ? (
              'Update'
            ) : (
              'Send Request'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDailog;
