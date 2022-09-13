import { Paper } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';

const NotFound = () => {
  const { currentUser } = useStateContext();
  return (
    <div className=" dark:text-gray-200 text-gray-700  p-12 flex justify-center items-center flex-col h-full">
      <Paper sx={{ p: 9 }}>
        <h1 className=" text-5xl font-bold">404 - PAGE NOT FOUND</h1>

        <p className="mt-4 text-xl ">
          We are sorry, this page could not be found!
        </p>
      </Paper>
    </div>
  );
};

export default NotFound;
