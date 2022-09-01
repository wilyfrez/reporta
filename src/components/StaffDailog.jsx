import { useStateContext } from '../contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { Input } from './';
import { Box, IconButton, Stack, TextField } from '@mui/material';

const StaffDailog = () => {
  const {
    currentUser,
    currentColor,
    formData,
    setformData,
    error,
    setError,
    setIsClicked,
    initialState,
    handleClick,
    editData,
  } = useStateContext();

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
            borderRadius="50%"
          /> */}

          <IconButton
            onClick={() => handleClick(initialState)}
            sx={{
              borderRadius: '50%',
              bgHoverColor: 'light-gray',
            }}
            aria-label="Close Dialog"
          >
            <MdOutlineCancel />
          </IconButton>
        </div>

        {/* {error && <Alert title={error.title} message={error.message} />} */}
        {/* 
        <Input label="Staff Id" name="staff_id" />
        <Input label="First name" name="first_name" required />
        <Input label="Last name" name="last_name" required />
        <Input label="Email" name="email" required />
        <Input label="Phone" name="phone" required />
        <Input label="Birthday" type="date" name="birthday" /> */}

        {/* <Select label="Gender" name="gender" options={genderOptions} />
        <Select
          label="Department"
          name="department"
          options={departmentOptions}
        /> */}

        <TextField
          fullWidth
          variant="outlined"
          label="Staff Id"
          id="staff_id"
          margin="normal"
        />

        <div className="flex justify-between mt-4 mb-2 space-x-3">
          <TextField fullWidth variant="outlined" label="First Name" />
          <TextField fullWidth variant="outlined" label="Last Name" />
        </div>

        <TextField fullWidth variant="outlined" label="Email" margin="normal" />

        <TextField
          fullWidth
          variant="outlined"
          label="Phone Number"
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Department"
          margin="normal"
        />

        <div className="flex justify-between mt-4 space-x-3">
          <TextField fullWidth variant="outlined" label="Gender" />
          <TextField fullWidth variant="outlined" label="Birthday" />
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[50px] mt-4"
            onClick={() => {}}
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
