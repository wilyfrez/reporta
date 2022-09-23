import React from 'react';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import { dataSource } from '../utils/data';

const Home = () => {
  return (
    <div className="App">
      <GridComponent dataSource={dataSource}>
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            width={100}
          ></ColumnDirective>

          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width={100}
          ></ColumnDirective>

          <ColumnDirective
            field="EmployeeID"
            headerText="Employee ID"
            width={100}
          ></ColumnDirective>

          <ColumnDirective
            field="OrderDate"
            headerText="Order Date"
            width={100}
          ></ColumnDirective>

          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            width={150}
          ></ColumnDirective>

          <ColumnDirective
            field="ShipAddress"
            headerText="Ship Address "
            width={150}
          ></ColumnDirective>

          <ColumnDirective
            field="ShipRegion"
            headerText="Ship Region"
            width={50}
          ></ColumnDirective>

          <ColumnDirective
            field="ShipPostalCode"
            headerText="Shi pPostal Code"
            width={100}
          ></ColumnDirective>
          <ColumnDirective
            field="ShipCountry"
            headerText="Ship Country"
            width={50}
          ></ColumnDirective>
          <ColumnDirective
            field="Freight"
            headerText="Freight"
            width={50}
          ></ColumnDirective>
          <ColumnDirective
            field="Verified"
            headerText="Verified"
            width={50}
          ></ColumnDirective>
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Home;
