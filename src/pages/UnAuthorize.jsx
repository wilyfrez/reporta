import { Paper } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';

const UnAuthorize = () => {
  const { currentUser } = useStateContext();
  return (
    <div className=" dark:text-gray-200 text-gray-700  p-12 flex justify-center items-center flex-col h-full">
      <Paper sx={{ p: 9 }}>
        <h1 className=" text-5xl font-bold">401 - UNAUTHORIZED</h1>

        <p className="mt-4 text-xl ">
          You are not authorized to access this page
        </p>
      </Paper>
    </div>
  );
};

export default UnAuthorize;
