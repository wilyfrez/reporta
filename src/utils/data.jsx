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
