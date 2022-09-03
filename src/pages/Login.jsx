import { Alert, Paper } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsShieldLock } from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../services';
import { validateAccountLoginForm } from '../utils/helpers';

const Login = () => {
  const { formData, setFormData, error, setError, setCurrentUser } =
    useStateContext();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || '/account';

  const handleFormSubmit = async () => {
    const validationResult = validateAccountLoginForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }
    const response = await AuthService.login(formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }
    localStorage.setItem('user', JSON.stringify(response.user));
    setCurrentUser(AuthService.getCurrentUser());
    setFormData(null);
    setError(null);
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

        {error && (
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

        <button
          type="button"
          className="inline-block  w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[45px] mt-4"
          onClick={handleFormSubmit}
        >
          Log In
        </button>
      </Paper>
    </div>
  );
};

export default Login;
Login;
