import { FiShoppingBag } from 'react-icons/fi';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'overview',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Management',
    admin: true,
    links: [
      {
        name: 'staff',
        icon: <FiShoppingBag />,
      },
      {
        name: 'departments',
        icon: <FiShoppingBag />,
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
        icon: <FiShoppingBag />,
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
