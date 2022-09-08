import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { Input } from './';
import { Alert, Box, IconButton, Stack, TextField } from '@mui/material';
import DepartmentsService from '../services/DepartmentsService';

const StaffDailog = ({ handleStaffAccountRegistration }) => {
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
    editData,
  } = useStateContext();

  const [departmentOptions, setDepartmentOptions] = useState([]);

  useEffect(() => {
    const createOptions = async () => {
      const departments = await DepartmentsService.getAllDepartments();

      const optionsData = departments.map((dept) => ({
        value: dept._id,
        label: dept.name,
      }));

      console.log('optionDAta', optionsData);

      setDepartmentOptions(optionsData);
    };
    createOptions();
  }, []);

  const handleSubmit = () => {
    handleStaffAccountRegistration();
  };

  const handleChange = (event) => {
    staffOptions(event.target.value);
  };

  const handleCloseDailog = () => {
    handleClick(initialState);
    setFormData({});
    setError({});
  };

  const genderOptions = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
  ];

  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            Add Staff
            {/* {editData.id ? 'Update' : 'Add'} Employee */}
          </p>
          {/* <Button
            icon={}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            // borderRadius="50%"
          /> */}

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
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
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
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value=""></option>
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          {/* <TextField
            fullWidth
            variant="outlined"
            label="Birthday"
            id="birthday"
            value={formData?.birthday || ''}
            onChange={(e) => handleFormInputChange(e, 'birthday')}
          /> */}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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
            {editData.id ? 'Update' : 'Add Staff'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDailog;
