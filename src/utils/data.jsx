import { FiShoppingBag, FiUsers, FiTarget } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

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
