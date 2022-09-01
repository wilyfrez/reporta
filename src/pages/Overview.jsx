import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {
  pendingSubmissionsColumns,
  pendingSubmissionsRows,
} from '../utils/data';
import React from 'react';

const Overview = () => {
  return (
    <div className=" dark:text-gray-200 text-gray-700  p-12">
      <h3 className="uppercase font-bold mb-4">Office of The CEO</h3>

      <Card
        sx={{
          width: '100%',
          height: 150,
          background: 'linear-gradient(to right, #7f00ff, #e100ff)',
          borderRadius: 4,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-center font-bold text-3xl ">
            Welcome
          </h1>
          <h1 className="text-white text-center font-bold text-3xl ">
            Esteemed Brother Maxwell
          </h1>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-5 my-6">
        <div className="flex p-8  dark:bg-secondary-dark-bg bg-white rounded-lg h-32">
          <div className="w-1/2">Goals </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex space-x-4 items-center">
              <span className=" rounded-full w-2 h-2 bg-teal-500 inline-block"></span>
              <span className=" text-sm">Submitted</span>
            </div>
            <div className="flex space-x-4 items-center">
              <span className=" rounded-full w-2 h-2 bg-orange-500 inline-block"></span>
              <span className=" text-sm">Pending</span>
            </div>
          </div>
        </div>
        <div className="flex p-8 dark:bg-secondary-dark-bg bg-white rounded-lg">
          <div className="w-1/2">Reports </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex space-x-4 items-center">
              <span className=" rounded-full w-2 h-2 bg-teal-500 inline-block"></span>
              <span className=" text-sm">Submitted</span>
            </div>
            <div className="flex space-x-4 items-center">
              <span className=" rounded-full w-2 h-2 bg-orange-500 inline-block"></span>
              <span className=" text-sm">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* pending data table */}
      <div className=" dark:bg-secondary-dark-bg bg-white  rounded-lg p-8">
        <p className="mb-4">Pending Submissions</p>

        <div className=" dark:text-gray-200 text-gray-700  h-72">
          <DataGrid
            rows={pendingSubmissionsRows}
            columns={pendingSubmissionsColumns}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
