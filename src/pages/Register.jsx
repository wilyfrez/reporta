import { Alert, Paper, TextField } from '@mui/material';
import { Input } from '../components';
import { SiShopware } from 'react-icons/si';
import { HiOutlineMail, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsShieldLock, BsTelephone } from 'react-icons/bs';
import { height } from '@mui/system';

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
          icon={<HiOutlineOfficeBuilding />}
          type="text"
          label="Organization"
          name="name"
          placeholder="Enter organization name"
          handleInputChange={() => {}}
        />

        <Input
          icon={<HiOutlineMail />}
          type="email"
          label="Email"
          name="email"
          placeholder="Enter organization email"
          handleInputChange={() => {}}
        />

        <Input
          icon={<BsTelephone />}
          type="tel"
          label="Phone"
          name="phone"
          placeholder="Enter phone number"
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

        <Input
          icon={<BsShieldLock />}
          type="password"
          label="Comfirm Password"
          placeholder="Confirm your password"
          name="confirm_password"
          handleInputChange={() => {}}
        />

        <button
          type="button"
          className="inline-block  w-full bg-blue-500 font-semibold hover:bg-black cursor-pointer text-white rounded-lg h-[45px] mt-4"
          onClick={() => {}}
        >
          Get Started
        </button>
      </Paper>
    </div>
  );
};

export default Login;
Login;
