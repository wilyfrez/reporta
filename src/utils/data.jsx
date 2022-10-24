import React from 'react';

import { FiShoppingBag, FiUsers, FiTarget, FiEdit } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { FiCreditCard } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiTrash, BiBarChartAlt2 } from 'react-icons/bi';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { getBirthday } from './helpers';
import { Button, ButtonGroup } from '@mui/material';

export const API_URL = import.meta.env.VITE_API_URL;
export const AWS_ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

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
      // {
      //   name: 'templates',
      //   icon: <FiShoppingBag />,
      // },
      // {
      //   name: 'categories',
      //   icon: <FiShoppingBag />,
      // },
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
    headerText: 'Title',
    width: 150,
  },
  {
    field: 'type',
    headerText: 'Type',
    width: 150,
  },
  {
    field: 'due_date',
    headerText: 'Due Date',
    width: 150,
  },
  {
    headerText: 'Action',
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
    headerText: 'Staff ID',
    width: '100',
  },
  {
    headerText: 'Staff',
    width: '200',
    field: 'staff',
    template: (props) => (
      <div className="flex items-center space-x-2">
        <Avatar text={`${props?.first_name || ''} ${props?.last_name || ''}`} />

        <span>
          {props?.first_name || ''} {props?.last_name || ''}
        </span>
      </div>
    ),
  },

  {
    field: 'email',
    headerText: 'Email',
    width: '200',
  },
  {
    field: 'phone',
    headerText: 'Phone',
    width: '150',
  },
  // {
  //   field: 'department.name',
  //   headerText: 'Department',
  //   width: '150',
  // },
  {
    headerText: 'Birthday',
    width: '120',
    field: 'birthday',
    valueAccessor: (field, data, column) => {
      const date = data[field] && new Date(data[field]);
      return getBirthday(date);
    },
  },
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showStaffDialog = () => {
        setEditDataId(props._id);
        handleClick('staff');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          key="Edit"
          onClick={showStaffDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          key="Delete"
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
    headerText: 'Name',
    width: '220',
  },
  {
    field: 'hod',
    headerText: 'Head of Department',
    width: '220',
    valueAccessor: (field, data, column) => {
      return `${data[field]?.first_name || ''} ${data[field]?.last_name || ''}`;
    },
    // valueGetter: (params) => {
    //   return `${params.row?.hod?.first_name || ''} ${
    //     params.row?.hod?.last_name || ''
    //   }`;
    // },
  },
  {
    field: 'staff',
    headerText: 'Staff',
    width: '220',
    valueAccessor: (field, data, column) => {
      return data[field]?.length;
    },
  },

  {
    field: 'actions',
    headerText: 'Action',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showDepartmentDialog = () => {
        setEditDataId(props._id);
        handleClick('department');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          key="edit"
          onClick={showDepartmentDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          key="delete"
          onClick={showConfirmDeleteModal}
          icon={<BiTrash />}
          label="Delete"
        />,
      ];
    },
  },
];

//  GOALS

export const goalColumns = [
  {
    field: 'title',
    headerText: 'Title',
    width: '150',
  },
  {
    headerText: 'Catogories',
    width: '150',
    field: 'category',
  },

  {
    headerText: 'Due Date',
    width: '120',
    field: 'due_date',
    type: 'Date',
    format: 'dd/MM/yyyy',
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'status',
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showDepartmentDialog = () => {
        setEditDataId(props._id);
        handleClick('request');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          key="edit"
          onClick={showDepartmentDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          key="delete"
          onClick={showConfirmDeleteModal}
          icon={<BiTrash />}
          label="Delete"
        />,
      ];
    },
  },
];

export const goalSpecificColumns = [
  {
    headerText: 'Staff',
    width: '150',
    template: (props) => (
      <div className="flex items-center space-x-2">
        <Avatar
          text={`${props.staff?.first_name || ''} ${
            props.staff?.last_name || ''
          }`}
        />

        <span>
          {props.staff?.first_name || ''} {props.staff?.last_name || ''}
        </span>
      </div>
    ),
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'submitted_at',
    valueAccessor: (field, data, column) => {
      return data[field] ? 'Submitted' : 'Pending';
    },
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId } = useStateContext();

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <ButtonGroup
          key="groupAction"
          variant="text"
          aria-label="text button group"
        >
          {props.file_path ? (
            ''
          ) : (
            <GridActionsCellItem
              key="delete"
              onClick={showConfirmDeleteModal}
              icon={<BiTrash />}
              label="Delete"
            />
          )}
          {props.file_path && (
            <a class=" text-[#FB9678]" href={props.file_path}>
              DOWNLOAD
            </a>
          )}
        </ButtonGroup>,
      ];
    },
  },
];

export const staffGoalColumns = [
  {
    field: 'goal.title',
    headerText: 'Title',
    width: '150',
  },
  {
    headerText: 'Catogory',
    width: '150',
    field: 'goal.category',
  },

  {
    headerText: 'Due Date',
    width: '120',
    field: 'goal.due_date',
    type: 'Date',
    format: 'dd/MM/yyyy',
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'submitted_at',
    valueAccessor: (field, data, column) => {
      return data[field] ? 'Submitted' : 'Pending';
    },
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 200,
    template: (props) => {
      const { handleClick, setDeleteDataId, setActiveResourceId } =
        useStateContext();

      const handleUpload = () => {
        setActiveResourceId(props._id);
        handleClick('upload');
      };

      const handleDownload = () => {
        alert('Downloading');
      };
      const handleView = () => {
        alert('Viewing');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <ButtonGroup
          key="groupAction"
          variant="text"
          aria-label="text button group"
        >
          <Button
            sx={{ py: 0, fontSize: '11px', color: '#03C9D7' }}
            onClick={handleUpload}
          >
            {props.file_path ? 'UPDATE' : 'UPLOAD'}
          </Button>
          {props.file_path && (
            <a className=" text-[#FB9678]" href={props.file_path}>
              DOWNLOAD
            </a>
          )}

          {/* <Button
            sx={{ py: 0, fontSize: '11px', color: '#1A97F5' }}
            onClick={handleView}
          >
            View
          </Button> */}
        </ButtonGroup>,
      ];
    },
  },
];

// ./ GOALS

// REPORTS
export const reportColumns = [
  {
    field: 'title',
    headerText: 'Title',
    width: '150',
  },
  {
    headerText: 'Catogories',
    width: '150',
    field: 'category',
  },

  {
    headerText: 'Due Date',
    width: '120',
    field: 'due_date',
    type: 'Date',
    format: 'dd/MM/yyyy',
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'status',
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId, setEditDataId } = useStateContext();

      const showDepartmentDialog = () => {
        setEditDataId(props._id);
        handleClick('request');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <GridActionsCellItem
          key="edit"
          onClick={showDepartmentDialog}
          icon={<FiEdit />}
          label="Edit"
        />,
        <GridActionsCellItem
          key="delete"
          onClick={showConfirmDeleteModal}
          icon={<BiTrash />}
          label="Delete"
        />,
      ];
    },
  },
];

export const reportSpecificColumns = [
  {
    headerText: 'Staff',
    width: '150',
    template: (props) => (
      <div className="flex items-center space-x-2">
        <Avatar
          text={`${props.staff?.first_name || ''} ${
            props.staff?.last_name || ''
          }`}
        />

        <span>
          {props.staff?.first_name || ''} {props.staff?.last_name || ''}
        </span>
      </div>
    ),
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'submitted_at',
    valueAccessor: (field, data, column) => {
      return data[field] ? 'Submitted' : 'Pending';
    },
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 100,
    template: (props) => {
      const { handleClick, setDeleteDataId } = useStateContext();

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <ButtonGroup
          key="groupAction"
          variant="text"
          aria-label="text button group"
        >
          {props.file_path ? (
            ''
          ) : (
            <GridActionsCellItem
              key="delete"
              onClick={showConfirmDeleteModal}
              icon={<BiTrash />}
              label="Delete"
            />
          )}
          {props.file_path && (
            <a className=" text-[#FB9678]" href={props.file_path}>
              DOWNLOAD
            </a>
          )}
        </ButtonGroup>,
      ];
    },
  },
];

export const staffReportColumns = [
  {
    field: 'report.title',
    headerText: 'Title',
    width: '150',
  },
  {
    headerText: 'Catogory',
    width: '150',
    field: 'report.category',
  },

  {
    headerText: 'Due Date',
    width: '120',
    field: 'report.due_date',
    type: 'Date',
    format: 'dd/MM/yyyy',
  },

  {
    headerText: 'Status',
    width: '120',
    field: 'submitted_at',
    valueAccessor: (field, data, column) => {
      return data[field] ? 'Submitted' : 'Pending';
    },
  },
  {
    headerText: 'Action',
    type: 'actions',
    width: 200,
    template: (props) => {
      const { handleClick, setDeleteDataId, setActiveResourceId } =
        useStateContext();

      const handleUpload = () => {
        setActiveResourceId(props._id);
        handleClick('upload');
      };

      const handleDownload = () => {
        alert('Downloading');
      };
      const handleView = () => {
        alert('Viewing');
      };

      const showConfirmDeleteModal = () => {
        setDeleteDataId(props._id);
        handleClick('delete');
      };

      return [
        <ButtonGroup
          key="groupAction"
          variant="text"
          aria-label="text button group"
        >
          <Button
            sx={{ py: 0, fontSize: '11px', color: '#03C9D7' }}
            onClick={handleUpload}
          >
            {props.file_path ? 'UPDATE' : 'UPLOAD'}
          </Button>
          {props.file_path && (
            <a className=" text-[#FB9678]" href={props.file_path}>
              DOWNLOAD
            </a>
          )}

          {/* <Button
            sx={{ py: 0, fontSize: '11px', color: '#1A97F5' }}
            onClick={handleView}
          >
            View
          </Button> */}
        </ButtonGroup>,
      ];
    },
  },
];
// ./ REPORTS
export const userProfileData = [
  {
    icon: <BiBarChartAlt2 />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  // {
  //   icon: <BiBarChartAlt2 />,
  //   title: 'My Inbox',
  //   desc: 'Messages & Emails',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  // },
  // {
  //   icon: <BiBarChartAlt2 />,
  //   title: 'My Tasks',
  //   desc: 'To-do and Daily Tasks',
  //   iconColor: 'rgb(255, 244, 229)',
  //   iconBg: 'rgb(254, 201, 15)',
  // },
];

export let dataSource = [
  {
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ',
    ShipPostalCode: '51100',
    ShipCountry: 'France',
    Freight: 32.38,
    Verified: !0,
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ',
    ShipPostalCode: '44087',
    ShipCountry: 'Germany',
    Freight: 11.61,
    Verified: !1,
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Freight: 65.83,
    Verified: !0,
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    OrderDate: new Date(8367642e5),
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    ShipAddress: '2, rue du Commerce',
    ShipRegion: 'CJ',
    ShipPostalCode: '69004',
    ShipCountry: 'France',
    Freight: 41.34,
    Verified: !0,
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    OrderDate: new Date(8368506e5),
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    ShipAddress: 'Boulevard Tirou, 255',
    ShipRegion: 'CJ',
    ShipPostalCode: 'B-6000',
    ShipCountry: 'Belgium',
    Freight: 51.3,
    Verified: !0,
  },
  {
    OrderID: 10253,
    CustomerID: 'HANAR',
    EmployeeID: 3,
    OrderDate: new Date(836937e6),
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Freight: 58.17,
    Verified: !0,
  },
  {
    OrderID: 10254,
    CustomerID: 'CHOPS',
    EmployeeID: 5,
    OrderDate: new Date(8370234e5),
    ShipName: 'Chop-suey Chinese',
    ShipCity: 'Bern',
    ShipAddress: 'Hauptstr. 31',
    ShipRegion: 'CJ',
    ShipPostalCode: '3012',
    ShipCountry: 'Switzerland',
    Freight: 22.98,
    Verified: !1,
  },
  {
    OrderID: 10255,
    CustomerID: 'RICSU',
    EmployeeID: 9,
    OrderDate: new Date(8371098e5),
    ShipName: 'Richter Supermarkt',
    ShipCity: 'Genève',
    ShipAddress: 'Starenweg 5',
    ShipRegion: 'CJ',
    ShipPostalCode: '1204',
    ShipCountry: 'Switzerland',
    Freight: 148.33,
    Verified: !0,
  },
  {
    OrderID: 10256,
    CustomerID: 'WELLI',
    EmployeeID: 3,
    OrderDate: new Date(837369e6),
    ShipName: 'Wellington Importadora',
    ShipCity: 'Resende',
    ShipAddress: 'Rua do Mercado, 12',
    ShipRegion: 'SP',
    ShipPostalCode: '08737-363',
    ShipCountry: 'Brazil',
    Freight: 13.97,
    Verified: !1,
  },
  {
    OrderID: 10257,
    CustomerID: 'HILAA',
    EmployeeID: 4,
    OrderDate: new Date(8374554e5),
    ShipName: 'HILARION-Abastos',
    ShipCity: 'San Cristóbal',
    ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
    ShipRegion: 'Táchira',
    ShipPostalCode: '5022',
    ShipCountry: 'Venezuela',
    Freight: 81.91,
    Verified: !0,
  },
  {
    OrderID: 10258,
    CustomerID: 'ERNSH',
    EmployeeID: 1,
    OrderDate: new Date(8375418e5),
    ShipName: 'Ernst Handel',
    ShipCity: 'Graz',
    ShipAddress: 'Kirchgasse 6',
    ShipRegion: 'CJ',
    ShipPostalCode: '8010',
    ShipCountry: 'Austria',
    Freight: 140.51,
    Verified: !0,
  },
  {
    OrderID: 10259,
    CustomerID: 'CENTC',
    EmployeeID: 4,
    OrderDate: new Date(8376282e5),
    ShipName: 'Centro comercial Moctezuma',
    ShipCity: 'México D.F.',
    ShipAddress: 'Sierras de Granada 9993',
    ShipRegion: 'CJ',
    ShipPostalCode: '05022',
    ShipCountry: 'Mexico',
    Freight: 3.25,
    Verified: !1,
  },
  {
    OrderID: 10260,
    CustomerID: 'OTTIK',
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: 'Ottilies Käseladen',
    ShipCity: 'Köln',
    ShipAddress: 'Mehrheimerstr. 369',
    ShipRegion: 'CJ',
    ShipPostalCode: '50739',
    ShipCountry: 'Germany',
    Freight: 55.09,
    Verified: !0,
  },
  {
    OrderID: 10261,
    CustomerID: 'QUEDE',
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: 'Que Delícia',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua da Panificadora, 12',
    ShipRegion: 'RJ',
    ShipPostalCode: '02389-673',
    ShipCountry: 'Brazil',
    Freight: 3.05,
    Verified: !1,
  },
  {
    OrderID: 10262,
    CustomerID: 'RATTC',
    EmployeeID: 8,
    OrderDate: new Date(8379738e5),
    ShipName: 'Rattlesnake Canyon Grocery',
    ShipCity: 'Albuquerque',
    ShipAddress: '2817 Milton Dr.',
    ShipRegion: 'NM',
    ShipPostalCode: '87110',
    ShipCountry: 'USA',
    Freight: 48.29,
    Verified: !0,
  },
];
export let sdata = [
  {
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier',
    ShipCity: 'Reims',
    ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ',
    ShipPostalCode: '51100',
    ShipCountry: 'Brazil',
    Freight: 32.38,
    Verified: !0,
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten',
    ShipCity: 'Münster',
    ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ',
    ShipPostalCode: '44087',
    ShipCountry: 'Germany',
    Freight: 11.61,
    Verified: !1,
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Freight: 65.83,
    Verified: !0,
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    OrderDate: new Date(8367642e5),
    ShipName: 'Victuailles en stock',
    ShipCity: 'Lyon',
    ShipAddress: '2, rue du Commerce',
    ShipRegion: 'CJ',
    ShipPostalCode: '69004',
    ShipCountry: 'France',
    Freight: 41.34,
    Verified: !0,
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    OrderDate: new Date(8368506e5),
    ShipName: 'Suprêmes délices',
    ShipCity: 'Charleroi',
    ShipAddress: 'Boulevard Tirou, 255',
    ShipRegion: 'CJ',
    ShipPostalCode: 'B-6000',
    ShipCountry: 'Belgium',
    Freight: 51.3,
    Verified: !0,
  },
  {
    OrderID: 10253,
    CustomerID: 'HANAR',
    EmployeeID: 3,
    OrderDate: new Date(836937e6),
    ShipName: 'Hanari Carnes',
    ShipCity: 'Rio de Janeiro',
    ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Freight: 58.17,
    Verified: !0,
  },
  {
    OrderID: 10254,
    CustomerID: 'CHOPS',
    EmployeeID: 5,
    OrderDate: new Date(8370234e5),
    ShipName: 'Chop-suey Chinese',
    ShipCity: 'Bern',
    ShipAddress: 'Hauptstr. 31',
    ShipRegion: 'CJ',
    ShipPostalCode: '3012',
    ShipCountry: 'Brazil',
    Freight: 22.98,
    Verified: !1,
  },
  {
    OrderID: 10255,
    CustomerID: 'RICSU',
    EmployeeID: 9,
    OrderDate: new Date(8371098e5),
    ShipName: 'Richter Supermarkt',
    ShipCity: 'Genève',
    ShipAddress: 'Starenweg 5',
    ShipRegion: 'CJ',
    ShipPostalCode: '1204',
    ShipCountry: 'Switzerland',
    Freight: 148.33,
    Verified: !0,
  },
];
