import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { Input } from './';
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

const DepartmentDailog = ({ departmentData, handleFormSubmission }) => {
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

  const [staffOptions, setStaffOptions] = useState([]);
  // const [hod, setHod] = useState('');

  useEffect(() => {
    if (editDataId) {
      setFormData(
        departmentData.filter((department) => department._id === editDataId)[0]
      );
    }
  }, []);

  useEffect(() => {
    const createOptions = async () => {
      const { staff: allStaff } = await StaffService.getAllStaff();

      const optionsData = allStaff.map((staff) => ({
        value: staff._id,
        label: `${staff.first_name} ${staff.last_name}`,
      }));

      setStaffOptions(optionsData);
    };
    createOptions();
  }, []);

  const handleChange = (event) => {
    handleFormInputChange(event, 'hod');
  };

  const handleSubmit = () => {
    handleFormSubmission();
  };

  const handleCloseDailog = () => {
    handleClick(initialState);
    setEditDataId(null);
    setFormData({});
    setError({});
  };
  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {editDataId ? 'Update' : 'Add'} Department
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
          label="Name"
          id="name"
          margin="normal"
          helperText={error.message && 'Required'}
          value={formData?.name || ''}
          required
          onChange={(e) => handleFormInputChange(e, 'name')}
        />

        <TextField
          fullWidth
          id="hod"
          variant="outlined"
          select
          label="Head of Department"
          defaultValue=""
          margin="normal"
          onChange={(e) => handleFormInputChange(e, 'hod')}
          SelectProps={{
            native: true,
          }}
        >
          {editDataId && formData?.hod?._id ? (
            <option key={formData?.hod?._id} value={formData?.hod?._id}>
              {`${formData?.hod?.first_name} ${formData?.hod?.last_name}  `}
            </option>
          ) : (
            <option value=""></option>
          )}
          {staffOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

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

export default DepartmentDailog;
