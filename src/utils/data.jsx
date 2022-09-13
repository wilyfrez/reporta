import React from 'react';

import { FiShoppingBag, FiUsers, FiTarget, FiEdit } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { FiCreditCard } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiTrash, BiBarChartAlt2 } from 'react-icons/bi';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

export const API_URL = import.meta.env.VITE_API_URL;

export const PATHS = {
  organizations: 'organizations',
  staff: 'staff',
  department: 'department',
};

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'overview',
        icon: <GrOverview />,
      },
    ],
  },

  {
    title: 'Management',
    admin: true,
    links: [
      {
        name: 'staff',
        icon: <FiUsers />,
      },
      {
        name: 'departments',
        icon: <HiOutlineOfficeBuilding />,
      },
      {
        name: 'templates',
        icon: <FiShoppingBag />,
      },
      {
        name: 'categories',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Submissions',
    links: [
      {
        name: 'goals',
        icon: <FiTarget />,
      },
      {
        name: 'reports',
        icon: <BiBarChartAlt2 />,
      },
      {
        name: 'appraisals',
        icon: <FiShoppingBag />,
      },
      {
        name: 'citations',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: 'Others',
    links: [
      {
        name: 'preposals',
        icon: <FiShoppingBag />,
      },
      {
        name: 'contributions',
        icon: <FiShoppingBag />,
      },
      {
        name: 'ideas',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'scheduler',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Todo',
        icon: <FiShoppingBag />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const colors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-cyan-500',
  'bg-violet-500',
  'bg-purple-500',
  'bg-fuchsia-500',
  'bg-pink-500',
  'bg-neutral-500',
  'bg-rose-500',
  'bg-indigo-500',
  'bg-sky-500',
  'bg-teal-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-zinc-500',
  'bg-orange-500',
  'bg-red-500',
  'bg-amber-500',
  'bg-stone-500',
  'bg-gray-500',
];

export const pendingSubmissionsColumns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
  },
  {
    field: 'due_date',
    headerName: 'Due Date',
    width: 150,
  },
  {
    headerName: 'Action',
    width: 150,
  },
];

export const pendingSubmissionsRows = [
  {
    id: 1,
    title: 'August week 5',
    type: 'Goal',
    due_date: '01/04/2022',
  },
  {
    id: 1,
    title: 'August week 5',
    type: 'Goal',
    due_date: '01/04/2022',
  },
  {
    id: 1,
    title: 'August week 5',
    type: 'Goal',
    due_date: '01/04/2022',
  },
];

export const staffColumns = [
  {
    field: 'staff_id',
    headerName: 'Staff ID',
    width: '120',
  },
  {
    headerName: 'Staff',
    width: '200',
    field: 'staff',
    // valueGetter: (params) => {
    //   return `${params.row?.staff?.length}`;
    // },

    renderCell: (params) => (
      <div className="flex items-center space-x-2">
        <Avatar
          text={`${params?.row?.first_name || ''} ${
            params?.row?.last_name || ''
          }`}
        />

        <span>
          {params?.row?.first_name || ''} {params?.row?.last_name || ''}
        </span>
      </div>
    ),
  },

  {
    field: 'email',
    headerName: 'Email',
    width: '200',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: '150',
  },
  {
    headerName: 'Department',
    width: '170',
    field: 'department',
    valueGetter: (params) => {
      return `${params?.row?.department?.name || ''}`;
    },
  },
  {
    headerName: 'Birthday',
    width: '170',
    field: 'birthday',
  },
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    getActions: (params) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showStaffDialog = () => {
        setEditDataId(params.row._id);
        handleClick('staff');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(params.row._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          onClick={showStaffDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          onClick={showConfirmDeleteModal}
          icon={<BiTrash />}
          label="Delete"
        />,
      ];
    },
  },
];

export const departmentColumns = [
  {
    field: 'name',
    headerName: 'Name',
    width: '220',
  },
  {
    field: 'hod',
    headerName: 'Head of Department',
    width: '220',
    valueGetter: (params) => {
      return `${params.row?.hod?.first_name || ''} ${
        params.row?.hod?.last_name || ''
      }`;
    },
  },
  {
    field: 'staff',
    headerName: 'Staff',
    width: '220',
    valueGetter: (params) => {
      return `${params.row?.staff?.length}`;
    },
    // renderCell: (params) => (
    //   <div className="flex -space-x-2 overflow-hidden p-2">
    //     <Avatar text="Nless Ma" border={true} />

    //     <Avatar text="Nless Ma" border={true} />
    //   </div>
    // ),
  },

  {
    field: 'actions',
    headerName: 'Action',
    type: 'actions',
    width: 100,
    getActions: (params) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showDepartmentDialog = () => {
        setEditDataId(params.row._id);
        handleClick('department');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(params.row._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          onClick={showDepartmentDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          onClick={showConfirmDeleteModal}
          icon={<BiTrash />}
          label="Delete"
        />,
      ];
    },
  },
];

export const goalColumns = [
  {
    field: 'title',
    headerMame: 'Goal',
    width: '150',
  },
  {
    headerName: 'Catogories',
    width: '150',
    // template: gridGoalTemplate,
    field: 'category',
  },

  {
    headerName: 'Due Date',
    width: '120',
    // template: gridGoalDueDate,
    field: 'due_date',
    type: 'Date',
    format: 'dd/MM/yyyy',
  },

  {
    headerName: 'Template',
    width: '150',
    // template: gridGoalTemplate,
    field: 'template.name',
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'status',
  },
  {
    headerText: 'Action',
    width: '150',
    getActions: (params) => {
      return [
        <GridActionsCellItem icon={<FiEdit />} label="Edit" />,
        <GridActionsCellItem icon={<BiTrash />} label="Delete" />,
      ];
    },
  },
];

export const userProfileData = [
  {
    icon: <BiBarChartAlt2 />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BiBarChartAlt2 />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <BiBarChartAlt2 />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
