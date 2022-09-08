import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, CircularProgress, Paper } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsShieldLock } from 'react-icons/bs';

import { AuthService } from '../services';
import { useStateContext } from '../contexts/ContextProvider';
import { validateAccountActivationForm } from '../utils/helpers';

const ActivateAccount = () => {
  const { formData, setFormData, error, setError, setCurrentUser } =
    useStateContext();

  const { token } = useParams();
  const [validToken, setvalidToken] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const response = await AuthService.verify(token);
      setVerifying(true);

      if (!response.status) {
        setError({
          status: response.status,
          message: response.message,
        });

        setvalidToken(false);
        return;
      }
      setFormData({ email: response.email });
      setvalidToken(true);
    };

    verifyToken();
  }, []);

  const handleFormSubmit = async () => {
    const validationResult = validateAccountActivationForm(formData);
    if (!validationResult.status) {
      setError(validationResult);
      return;
    }
    const response = await AuthService.activate(token, formData);
    if (!response.status) {
      setError({
        status: response.status,
        message: response.message,
      });
      return;
    }
    localStorage.setItem('user', JSON.stringify(response.user));
    setCurrentUser(AuthService.getCurrentUser());
    setFormData({});
    setError({});
    navigate('/account');
  };

  const activationForm = () => (
    <>
      {error.message && (
        <Alert variant="outlined" severity="error" sx={{ mb: 2 }}>
          {error.message || 'Oops! Something went wrong. Try again.'}
        </Alert>
      )}
      <Input
        icon={<HiOutlineMail />}
        type="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        readOnly
      />

      <Input
        icon={<BsShieldLock />}
        type="password"
        label="Password"
        placeholder="Enter password"
        name="password"
      />

      <Input
        icon={<BsShieldLock />}
        type="password"
        label="Comfirm Password"
        placeholder="Confirm your password"
        name="confirm_password"
      />

      <button
        type="button"
        className="inline-block  w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[45px] mt-4"
        onClick={handleFormSubmit}
      >
        Set Password &amp; Activate
      </button>
    </>
  );

  const alertInvalidToken = () => (
    <>
      <Alert variant="outlined" severity="error" sx={{ mb: 2 }}>
        {error.message}
      </Alert>

      <button
        type="button"
        className="inline-block  w-full bg-blue-500 font-semibold hover:bg-blue-600 cursor-pointer text-white rounded-lg h-[45px] mt-4"
        onClick={() => navigate('/login')}
      >
        Goto Login
      </button>
    </>
  );
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <Paper
        elevation={24}
        sx={{ width: '450px', px: 4, py: 6, borderRadius: 4 }}
      >
        <div className="text-center gap-3 mb-10 flex text-4xl font-extrabold tracking-tight ">
          <SiShopware /> <span>Reporta</span>
        </div>
        {!verifying ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : validToken ? (
          activationForm()
        ) : (
          alertInvalidToken()
        )}
      </Paper>
    </div>
  );
};

export default ActivateAccount;
