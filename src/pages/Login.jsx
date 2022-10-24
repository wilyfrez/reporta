import { Alert, CircularProgress, Paper } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsShieldLock } from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../services';
import { validateAccountLoginForm } from '../utils/helpers';
import { useState } from 'react';

const Login = () => {
  const { formData, setFormData, error, setError, setCurrentUser } =
    useStateContext();
  const [connecting, setConnecting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || '/account';

  const handleFormSubmit = async () => {
    setConnecting(true);
    const validationResult = validateAccountLoginForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      setConnecting(false);

      return;
    }
    const response = await AuthService.login(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      setConnecting(false);

      return;
    }
    setConnecting(false);

    localStorage.setItem('user', JSON.stringify(response.user));
    setCurrentUser(AuthService.getCurrentUser());
    setFormData({});
    setError({});
    navigate(redirectPath, { replace: true });
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
          icon={<HiOutlineMail />}
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
        />

        <Input
          icon={<BsShieldLock />}
          type="password"
          label="Password"
          placeholder="Enter password"
          name="password"
        />

        {connecting ? (
          <button
            type="button"
            className=" w-full bg-blue-500 font-semibold cursor-wait text-white rounded-lg h-[50px] mt-5 disabled:opacity-75 flex items-center justify-center space-x-2"
            disabled
          >
            <CircularProgress size={32} /> <span>LOGIN</span>
          </button>
        ) : (
          <button
            type="button"
            className=" w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[50px] mt-5  flex items-center justify-center space-x-2"
            onClick={handleFormSubmit}
          >
            LOGIN
          </button>
        )}
      </Paper>
    </div>
  );
};

export default Login;
