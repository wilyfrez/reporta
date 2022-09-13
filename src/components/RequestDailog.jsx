import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { StaffService } from '../services';

const RequestDailog = ({ departmentData, handleDepartmentAction }) => {
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

  const handleSubmit = () => {
    // console.log(formData);
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
    { value: 'Halfly', label: 'Halfly' },
  ];

  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {editDataId ? 'Update' : 'Request'} Goal
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
          error={error.message && !formData?.name ? true : false}
          fullWidth
          variant="outlined"
          label="Goal title"
          id="title"
          margin="normal"
          helperText={error.message && 'Required'}
          value={formData?.name || ''}
          required
          onChange={(e) => handleFormInputChange(e, 'title')}
        />

        <TextField
          fullWidth
          id="category"
          variant="outlined"
          select
          label="Category"
          defaultValue=""
          margin="normal"
          onChange={(e) => handleFormInputChange(e, 'category')}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
          {cateroryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}{' '}
        </TextField>

        <TextField
          fullWidth
          id="due_date"
          label="Due Date"
          type="date"
          margin="normal"
          value={formData?.birthday || ''}
          onChange={(e) => handleFormInputChange(e, 'due_date')}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <div className="mt-2">
          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[50px] mt-4"
            onClick={handleSubmit}
            style={{ backgroundColor: currentColor }}
          >
            {editDataId ? 'Update' : 'Add Deparment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDailog;
