import { Alert, Paper } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsShieldLock } from 'react-icons/bs';

const Login = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <Paper
        component="form"
        elevation={24}
        onSubmit={() => {}}
        sx={{ width: '450px', px: 4, py: 6, borderRadius: 4 }}
      >
        <div className="text-center gap-3 mb-10 flex text-4xl font-extrabold tracking-tight ">
          <SiShopware /> <span>Reporta</span>
        </div>
        <Input
          icon={<HiOutlineMail />}
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          handleInputChange={() => {}}
        />

        <Input
          icon={<BsShieldLock />}
          type="password"
          label="Password"
          placeholder="Enter password"
          name="password"
          handleInputChange={() => {}}
        />

        <button
          type="button"
          className="inline-block  w-full bg-blue-500 font-semibold hover:bg-black cursor-pointer text-white rounded-lg h-[45px] mt-4"
          onClick={() => {}}
        >
          Log In
        </button>
      </Paper>
    </div>
  );
};

export default Login;
Login;
