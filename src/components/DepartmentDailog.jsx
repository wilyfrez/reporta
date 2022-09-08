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

const DepartmentDailog = ({ handleDepartmentCreation }) => {
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

  const [staffOptions, setStaffOptions] = useState([]);
  // const [hod, setHod] = useState('');

  useEffect(() => {
    const createOptions = async () => {
      const allStaff = await StaffService.getAllStaff();

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
    handleDepartmentCreation();
    // console.log(formData);
  };

  const handleCloseDailog = () => {
    handleClick(initialState);
    setFormData({});
    setError({});
  };

  return (
    <div className="bg-half-transparent w-full fixed h-screen nav-item top-0 right-0 ">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 md:hover:overflow-auto">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            Add Department
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
          margin="normal"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
          {staffOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        {/* <TextField
          error={error.message && !formData?.first_name ? true : false}
          fullWidth
          variant="outlined"
          label="Head of Department"
          id="hod"
          margin="normal"
          value={formData?.hod || ''}
          onChange={(e) => handleFormInputChange(e, 'hod')}
        /> */}

        <div className="mt-2">
          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[50px] mt-4"
            onClick={handleSubmit}
            style={{ backgroundColor: currentColor }}
          >
            {editData.id ? 'Update' : 'Add Deparment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDailog;
