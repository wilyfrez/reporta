import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { Input } from './';
import {
  Alert,
  Box,
  IconButton,
  Stack,
  TextField,
  MenuItem,
} from '@mui/material';
import DepartmentsService from '../services/DepartmentsService';
import { formatDateForInput } from '../utils/helpers';

const StaffDailog = ({ staffData, handleFormSubmission }) => {
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

  const [departmentOptions, setDepartmentOptions] = useState([]);

  useEffect(() => {
    if (editDataId) {
      setFormData(staffData.filter((staff) => staff._id === editDataId)[0]);
    }
  }, []);

  useEffect(() => {
    const createOptions = async () => {
      const { departments } = await DepartmentsService.getAllDepartments();

      const optionsData = departments.map((dept) => ({
        value: dept._id,
        label: dept.name,
      }));

      setDepartmentOptions(optionsData);
    };
    createOptions();
  }, []);

  const handleSubmit = () => {
    handleFormSubmission();
  };

  const handleChange = (event) => {
    staffOptions(event.target.value);
  };

  const handleCloseDailog = () => {
    handleClick(initialState);
    setEditDataId(null);
    setFormData({});
    setError({});
  };

  const genderOptions = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
  ];

  // console.log(departmentOptions[0]?.label);
  console.log(formData);
  const formatBday = () => {
    if (formData?.birthday) {
      return new Date(formData.birthday).toISOString().split('T')[0];
    }
    return '';
  };

  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            {editDataId ? 'Update' : 'Add'} Staff
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
          fullWidth
          variant="outlined"
          label="Staff Id"
          id="staff_id"
          margin="normal"
          value={formData?.staff_id || ''}
          onChange={(e) => handleFormInputChange(e, 'staff_id')}
        />

        <div className="flex justify-between mt-4 mb-2 space-x-3">
          <TextField
            error={error.message && !formData?.first_name ? true : false}
            fullWidth
            variant="outlined"
            label="First Name"
            id="first_name"
            helperText={error.message && 'Required'}
            required
            value={formData?.first_name || ''}
            onChange={(e) => handleFormInputChange(e, 'first_name')}
          />
          <TextField
            error={error.message && !formData?.last_name ? true : false}
            fullWidth
            variant="outlined"
            label="Last Name"
            id="last_name"
            helperText={error.message && 'Required'}
            required
            value={formData?.last_name || ''}
            onChange={(e) => handleFormInputChange(e, 'last_name')}
          />
        </div>

        <TextField
          error={error.message && !formData?.email ? true : false}
          fullWidth
          variant="outlined"
          label="Email"
          margin="normal"
          id="email"
          helperText={error.message && 'Required'}
          required
          value={formData?.email || ''}
          onChange={(e) => handleFormInputChange(e, 'email')}
        />

        <TextField
          error={error.message && !formData?.phone ? true : false}
          fullWidth
          variant="outlined"
          label="Phone Number"
          margin="normal"
          id="phone"
          required
          helperText={error.message && 'Required'}
          value={formData?.phone || ''}
          onChange={(e) => handleFormInputChange(e, 'phone')}
        />

        <TextField
          fullWidth
          id="department"
          select
          label="Deparmtent"
          margin="normal"
          onChange={(e) => handleFormInputChange(e, 'department')}
          SelectProps={{
            native: true,
          }}
        >
          {editDataId && formData?.department?._id ? (
            <option
              key={formData?.department?._id}
              value={formData?.department?._id}
            >
              {formData?.department?.name}
            </option>
          ) : (
            <option value=""></option>
          )}
          {departmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <div className="flex justify-between mt-4 space-x-3">
          <TextField
            fullWidth
            id="gender"
            select
            label="Gender"
            onChange={(e) => handleFormInputChange(e, 'gender')}
            SelectProps={{
              native: true,
            }}
          >
            {editDataId && formData?.gender ? (
              <option key={formData?.gender} value={formData?.gender}>
                {formData?.gender}
              </option>
            ) : (
              <option value=""></option>
            )}
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="birthday"
            label="Birthday"
            type="date"
            value={formatBday()}
            onChange={(e) => handleFormInputChange(e, 'birthday')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <TextField
          fullWidth
          variant="outlined"
          label="Address"
          id="address"
          margin="normal"
          value={formData?.address || ''}
          onChange={(e) => handleFormInputChange(e, 'address')}
        />

        <div className="mt-5">
          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[50px] mt-4"
            onClick={handleSubmit}
            style={{ backgroundColor: currentColor }}
          >
            {editDataId ? 'Update' : 'Add Staff'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDailog;
