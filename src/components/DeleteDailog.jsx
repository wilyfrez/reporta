import { IoIosCloseCircleOutline } from 'react-icons/io';

import { useStateContext } from '../contexts/ContextProvider';
// import { GoalsService, StaffService } from '../services';

const DeleteDailog = ({ handleDeleteAction }) => {
  const {
    currentColor,
    setIsClicked,
    currentUser,

    initialState,
    setDeleteDataId,
  } = useStateContext();

  const handleCancelDeleteModal = () => {
    setDeleteDataId(null);
    setIsClicked(initialState);
  };

  return (
    <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 right-0 flex justify-center items-center ">
      <div className="   duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 text-center">
        <div className="flex justify-center font-light text-[#EF4444] ">
          <IoIosCloseCircleOutline size={80} />
        </div>

        <h1 className="text-2xl my-2">Are You Sure</h1>

        <p className=" text-sm my-4">Are you sure you want to delete</p>

        <div className=" flex justify-center items-center space-x-2">
          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[40px] mt-3"
            onClick={handleCancelDeleteModal}
            style={{ backgroundColor: '#C1C1C1' }}
          >
            CANCEL
          </button>

          <button
            type="button"
            className="inline-block  w-full uppercase  hover:bg-black cursor-pointer text-white rounded-[10px] h-[40px] mt-4"
            onClick={handleDeleteAction}
            style={{ backgroundColor: '#EF4444' }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDailog;
