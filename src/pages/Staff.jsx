import { DataGrid } from '@mui/x-data-grid';
import { Header, StaffDailog } from '../components';
import { staffRows, staffColumns } from '../utils/data';
import { useStateContext } from '../contexts/ContextProvider';

const Staff = () => {
  const {
    currentColor,
    isClicked,
    handleClick,
    currentUser,
    setEditData,
    setformData,
  } = useStateContext();

  const showStaffDialog = () => {
    handleClick('staff');
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Staff" />
        <button
          type="button"
          onClick={showStaffDialog}
          style={{ backgroundColor: currentColor }}
          className="text-sm text-white p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-md"
        >
          Add Staff
        </button>
      </div>

      <div className="flex h-[100%]">
        <DataGrid
          autoHeight
          columns={staffColumns}
          rows={staffRows}
          getRowId={(row) => row.staff_id}
        />
      </div>

      {isClicked.staff && <StaffDailog />}
    </div>
  );
};

export default Staff;