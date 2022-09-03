import { FiShoppingBag, FiUsers, FiTarget, FiEdit } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiTrash } from 'react-icons/bi';
import { GridActionsCellItem } from '@mui/x-data-grid';

export const API_URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_URL_TEST
    : import.meta.env.VITE_API_URL_LIVE;

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
        icon: <FiShoppingBag />,
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
    field: 'fullname',
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
    getActions: () => [
      <GridActionsCellItem icon={<FiEdit />} label="Edit" />,
      <GridActionsCellItem icon={<BiTrash />} label="Delete" />,
    ],
  },
];

export const staffRows = [
  {
    staff_id: 1112,
    fullname: 'Obi Micheal',
    email: 'obi@gm.com',
    phone: '0909393433',
    department: 'ICT Programming',
  },
  {
    staff_id: 15512,
    fullname: 'Mavel Micheal',
    email: 'obi@gm.com',
    phone: '0909393433',
    department: 'ICT Programming',
  },
];
