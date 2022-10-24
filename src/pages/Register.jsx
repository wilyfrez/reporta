import { Alert, CircularProgress, Paper } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import {
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineFlag,
} from 'react-icons/hi';
import { BsShieldLock, BsTelephone } from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';
import { AuthService } from '../services';
import { validateAccountRegistrationForm } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const { formData, error, setError } = useStateContext();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState(false);

  const handleFormSubmit = async () => {
    const validationResult = validateAccountRegistrationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }
    const response = await AuthService.register(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }
    setError({});
    navigate('/activation-instruction');
  };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <Paper
        elevation={10}
        sx={{ width: '450px', px: 4, py: 6, borderRadius: 4 }}
      >
        <div className="text-center gap-3 mb-10 flex text-4xl font-extrabold tracking-tight ">
          <SiShopware /> <span>Reporta</span>
        </div>

        {error.message && (
          <Alert variant="outlined" severity="error" sx={{ mb: 2 }}>
            {error.message}
          </Alert>
        )}
        <Input
          icon={<HiOutlineOfficeBuilding />}
          type="text"
          label="Organization"
          name="name"
          placeholder="Enter organization name"
        />

        <Input
          icon={<HiOutlineMail />}
          type="email"
          label="Email"
          name="email"
          placeholder="Enter organization email"
        />

        <Input
          icon={<BsTelephone />}
          type="tel"
          label="Phone"
          name="phone"
          placeholder="Enter phone number"
        />

        <Input
          icon={<HiOutlineFlag />}
          type="tel"
          label="Country"
          name="country"
          placeholder="Select country"
        />

        <Input
          icon={<HiOutlineLocationMarker />}
          type="address"
          label="Office Address"
          name="address"
          placeholder="Enter organization office address"
        />
        {/* 
        <button
          type="submit"
          className="inline-block  w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[45px] mt-4"
          onClick={handleFormSubmit}
        >
          Get Started
        </button> */}

        {connecting ? (
          <button
            type="button"
            className=" w-full bg-blue-500 font-semibold cursor-wait text-white rounded-lg h-[50px] mt-5 disabled:opacity-75 flex items-center justify-center space-x-2 uppercase"
            disabled
          >
            <CircularProgress size={32} /> <span>Get Started</span>
          </button>
        ) : (
          <button
            type="button"
            className=" w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[50px] mt-5  flex items-center justify-center space-x-2 uppercase"
            onClick={handleFormSubmit}
          >
            Get Started
          </button>
        )}
      </Paper>
    </div>
  );
};

export default Login;
Login;
